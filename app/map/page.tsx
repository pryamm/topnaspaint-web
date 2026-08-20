"use client";

import { useEffect, useRef, useState } from "react";
import { locations, Location } from "@/lib/data/locations";
import { Navbar } from "@/components/ui/Navbar";
import {
  ArrowLeft,
  Search,
  MapPin,
  List,
  X,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import type * as maplibregl from "maplibre-gl";

declare global {
  interface Window {
    maplibregl: typeof maplibregl;
  }
}

// Fungsi pembantu untuk membuat lingkaran polygon GeoJSON dengan radius dalam Kilometer
function createGeoJSONCircle(
  center: [number, number],
  radiusInKm: number,
  points: number = 64,
): {
  type: "FeatureCollection";
  features: {
    type: "Feature";
    geometry: {
      type: "Polygon";
      coordinates: number[][][];
    };
    properties: Record<string, unknown>;
  }[];
} {
  const coords = { latitude: center[1], longitude: center[0] };
  const km = radiusInKm;

  const ret = [];
  const distanceX = km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
  const distanceY = km / 111.32;

  let theta, x, y;
  for (let i = 0; i < points; i++) {
    theta = (i / points) * (2 * Math.PI);
    x = distanceX * Math.cos(theta);
    y = distanceY * Math.sin(theta);
    ret.push([coords.longitude + x, coords.latitude + y]);
  }
  ret.push(ret[0]); // Menutup polygon

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [ret],
        },
        properties: {},
      },
    ],
  };
}

let hoverRadiusAnimationId: number | null = null;
let hoverRadiusStartTime: number = 0;

function animateHoverRadius(timestamp: number, mapInstance: maplibregl.Map) {
  if (!hoverRadiusStartTime) hoverRadiusStartTime = timestamp;
  const progress = timestamp - hoverRadiusStartTime;
  // Pulsing opacity between 0.1 and 0.3
  const opacity = 0.2 + Math.sin(progress / 200) * 0.1;
  
  if (mapInstance.getLayer("hover-radius-layer")) {
    mapInstance.setPaintProperty("hover-radius-layer", "fill-opacity", opacity);
  }
  
  hoverRadiusAnimationId = requestAnimationFrame((t) => animateHoverRadius(t, mapInstance));
}

export default function FullMapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);

  // Filter locations based on search query
  const filteredLocations = locations.filter(
    (loc) =>
      loc.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.kecamatan.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.kota.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const openPopup = (loc: Location) => {
    if (!map.current || !window.maplibregl) return;
    const m = map.current;

    if (popupRef.current) {
      popupRef.current.remove();
    }

    const popupHtml = `
      <div class="bg-white/95 backdrop-blur-xl text-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 w-64">
        <div class="flex justify-between items-center mb-2">
          <span class="bg-blue-100 text-blue-700 text-[10px] uppercase font-bold px-2 py-1 rounded-md">Toko</span>
          <span class="text-xs font-medium text-slate-500">Topnas Paint</span>
        </div>
        <h4 class="font-bold text-slate-800 mb-1 leading-tight">${loc.storeName}</h4>
        <p class="text-xs text-slate-600 mb-1">${loc.address}</p>
        <p class="text-xs text-slate-500 mb-3">${loc.kecamatan}, ${loc.kota}</p>
        <div class="flex gap-2 mt-3">
          <a href="tel:${loc.phone.replace(/[^0-9+]/g, "")}" class="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:scale-95 text-white text-sm font-medium py-2 px-3 rounded-xl flex-1 transition-all text-center cursor-pointer shadow-sm flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Kontak
          </a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates[1]},${loc.coordinates[0]}" target="_blank" rel="noopener noreferrer" class="bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 active:scale-95 text-white text-sm font-medium py-2 px-3 rounded-xl flex-1 transition-all text-center cursor-pointer shadow-sm flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Rute
          </a>
        </div>
      </div>
    `;

    popupRef.current = new window.maplibregl.Popup()
      .setLngLat(loc.coordinates)
      .setHTML(popupHtml)
      .addTo(m);
  };

  const goToLocation = (loc: Location) => {
    if (!map.current) return;
    setIsListOpen(false); // Close list on mobile when selecting

    map.current.easeTo({
      center: loc.coordinates,
      zoom: 16,
      duration: 1200,
    });

    // Open popup after animation
    setTimeout(() => openPopup(loc), 1200);
  };

  const resetMap = () => {
    if (map.current) {
      map.current.easeTo({
        center: [110.0, -7.5],
        zoom: 6,
        duration: 1000,
      });
      if (popupRef.current) popupRef.current.remove();
    }
  };

  useEffect(() => {
    function initMap() {
      if (map.current || !mapContainer.current || !window.maplibregl) return;

      map.current = new window.maplibregl.Map({
        container: mapContainer.current,
        style: "https://tiles.openfreemap.org/styles/liberty",
        center: [110.0, -7.5], // Center of Java Island
        zoom: 6,
        attributionControl: false,
      });

      const m = map.current;
      if (!m) return;

      // Force resize to ensure canvas takes full dimensions immediately
      m.resize();
      setTimeout(() => {
        if (map.current) map.current.resize();
      }, 100);

      m.on("styleimagemissing", (e: maplibregl.MapStyleImageMissingEvent) => {
        // Mencegah error console jika tema map mencari icon (sprite) yang tidak ada
        const id = e.id;
        if (m && !m.hasImage(id)) {
          const data = new Uint8Array(4); // 1x1 transparent pixel
          m.addImage(id, { width: 1, height: 1, data: data });
        }
      });

      m.on("load", () => {
        m.addSource("locations", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: locations.map((loc) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: loc.coordinates,
              },
              properties: loc,
            })),
          },
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        });

        // Add source for hover radius
        m.addSource("hover-radius", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [],
          },
        });

        // Add fill layer for hover radius, underneath the markers
        m.addLayer({
          id: "hover-radius-layer",
          type: "fill",
          source: "hover-radius",
          paint: {
            "fill-color": "#10b981", // Hijau
            "fill-opacity": 0.1, // Cukup transparan
            "fill-outline-color": "#059669",
          },
        });

        m.addLayer({
          id: "clusters",
          type: "circle",
          source: "locations",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#3b82f6",
            "circle-radius": 20,
            "circle-stroke-width": 3,
            "circle-stroke-color": "#ffffff",
          },
        });

        m.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "locations",
          filter: ["has", "point_count"],
          layout: {
            "text-field": "{point_count_abbreviated}",
            "text-font": ["Noto Sans Regular"],
            "text-size": 12,
          },
          paint: {
            "text-color": "#ffffff",
          },
        });

        m.addLayer({
          id: "unclustered-point",
          type: "circle",
          source: "locations",
          filter: ["!", ["has", "point_count"]],
          paint: {
            "circle-color": "#10b981",
            "circle-radius": 12,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });

        // Inspect a cluster on click
        m.on(
          "click",
          "clusters",
          (
            e: maplibregl.MapMouseEvent & {
              features?: maplibregl.MapGeoJSONFeature[];
            },
          ) => {
            const features = m.queryRenderedFeatures([e.point.x, e.point.y], {
              layers: ["clusters"],
            });
            if (!features.length) return;

            const clusterId = features[0].properties.cluster_id;
            const source = m.getSource("locations") as maplibregl.GeoJSONSource;
            const geometry = features[0].geometry as {
              coordinates: [number, number];
            };

            source
              .getClusterExpansionZoom(clusterId)
              .then((zoom) => {
                m.easeTo({
                  center: geometry.coordinates,
                  zoom: zoom, // Progressive calculated zoom
                  duration: 800,
                });
              })
              .catch(() => {});
          },
        );

        // When a click is made on an unclustered point
        m.on(
          "click",
          "unclustered-point",
          (
            e: maplibregl.MapMouseEvent & {
              features?: maplibregl.MapGeoJSONFeature[];
            },
          ) => {
            if (!e.features || e.features.length === 0) return;
            const props = e.features[0].properties;
            // GeoJSON stringifies arrays and objects inside properties.
            // To safely get the coordinates array, find the original Location object.
            const originalLoc = locations.find((loc) => loc.id === props.id);
            if (originalLoc) {
              openPopup(originalLoc);
            }
          },
        );

        m.on("mouseenter", "clusters", () => {
          m.getCanvas().style.cursor = "pointer";
        });
        m.on("mouseleave", "clusters", () => {
          m.getCanvas().style.cursor = "";
        });
        m.on(
          "mouseenter",
          "unclustered-point",
          (
            e: maplibregl.MapMouseEvent & {
              features?: maplibregl.MapGeoJSONFeature[];
            },
          ) => {
            m.getCanvas().style.cursor = "pointer";
            if (e.features && e.features.length > 0) {
              const props = e.features[0].properties;
              const originalLoc = locations.find((loc) => loc.id === props.id);
              if (originalLoc) {
                const circleData = createGeoJSONCircle(
                  originalLoc.coordinates,
                  10,
                );
                const source = m.getSource(
                  "hover-radius",
                ) as maplibregl.GeoJSONSource;
                if (source) {
                  source.setData(circleData);
                  
                  // Mulai animasi berbinar (pulse glow)
                  if (!hoverRadiusAnimationId) {
                    hoverRadiusStartTime = 0;
                    hoverRadiusAnimationId = requestAnimationFrame((t) => animateHoverRadius(t, m));
                  }
                }
              }
            }
          },
        );
        m.on("mouseleave", "unclustered-point", () => {
          m.getCanvas().style.cursor = "";
          const source = m.getSource(
            "hover-radius",
          ) as maplibregl.GeoJSONSource;
          if (source) {
            source.setData({
              type: "FeatureCollection",
              features: [],
            });
          }
          
          // Matikan animasi saat kursor pergi
          if (hoverRadiusAnimationId) {
            cancelAnimationFrame(hoverRadiusAnimationId);
            hoverRadiusAnimationId = null;
          }
        });
      });
    }

    const checkMapLibre = setInterval(() => {
      // Tunggu sampai container benar-benar memiliki dimensi (tinggi > 0)
      if (
        window.maplibregl &&
        !map.current &&
        mapContainer.current &&
        mapContainer.current.offsetHeight > 0
      ) {
        clearInterval(checkMapLibre);
        initMap();
      }
    }, 100);
    return () => clearInterval(checkMapLibre);
  }, []);

  return (
    <main className='h-screen w-screen relative overflow-hidden font-sans text-slate-800 bg-slate-100'>
      {/* Map Container (Background) */}
      <div
        ref={mapContainer}
        className='z-10'
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Foreground Overlays */}
      <div className='fixed inset-0 z-20 pointer-events-none flex flex-col'>
        <Navbar />

        {/* Top Header Controls (Safari Light Style) */}
        <header className='absolute top-6 md:top-8 left-0 right-0 px-4 pointer-events-none flex justify-center items-center gap-3 md:gap-4'>
          {/* Left Side: Back Button */}
          <Link
            href='/'
            className='pointer-events-auto w-12 h-12 rounded-full bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl flex items-center justify-center text-slate-700 hover:bg-white/40 transition-colors shrink-0'
          >
            <ArrowLeft size={22} />
          </Link>

          {/* Center: Search Bar */}
          <div className='pointer-events-auto flex-1 max-w-[280px] sm:max-w-md h-12 bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-full flex items-center px-4 gap-2'>
            <Search size={18} className='text-slate-400 shrink-0' />
            <input
              type='text'
              placeholder='Cari toko, kota...'
              className='w-full bg-transparent border-none outline-none text-[15px] text-slate-800 text-center font-medium placeholder-slate-400 min-w-0'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsListOpen(true)}
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className='p-1 text-slate-400 hover:text-slate-600 shrink-0 transition-colors'
              >
                <X size={18} />
              </button>
            ) : (
              <button
                onClick={resetMap}
                className='p-1 text-slate-500 hover:text-blue-600 shrink-0 transition-colors'
                title='Reset Peta'
              >
                <RotateCcw size={18} />
              </button>
            )}
          </div>

          {/* Right Side: Mobile List Toggle */}
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className='pointer-events-auto md:hidden w-12 h-12 rounded-full bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl flex items-center justify-center text-slate-700 hover:bg-white/40 transition-colors shrink-0'
          >
            <List size={22} />
          </button>
        </header>

        {/* Side Panel for Results (Mobile) */}
        <div
          className={`md:hidden absolute top-24 right-4 w-80 max-h-[60vh] bg-white/30 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-top-right pointer-events-auto ${isListOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        >
          <div className='p-4 border-b border-white/30 font-bold flex justify-between items-center bg-white/20'>
            Daftar Kemitraan ({filteredLocations.length})
            <button
              className='p-1.5 text-slate-500 hover:text-slate-800 hover:bg-white/50 rounded-full transition-colors'
              onClick={() => setIsListOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <div className='overflow-y-auto flex-1 p-2 space-y-1'>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => goToLocation(loc)}
                  className='p-3 rounded-2xl hover:bg-blue-50 active:bg-blue-100 active:scale-[0.98] cursor-pointer transition-all duration-200 group flex items-center justify-between'
                >
                  <div>
                    <h3 className='font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors'>
                      {loc.storeName}
                    </h3>
                    <div className='flex items-center text-xs text-slate-500 mt-1 gap-1'>
                      <MapPin size={12} className='shrink-0' />
                      <span className='truncate'>
                        {loc.kecamatan}, {loc.kota}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className='text-slate-300 group-hover:text-blue-500 transition-colors'
                  />
                </div>
              ))
            ) : (
              <div className='p-8 text-center text-slate-500 text-sm'>
                Tidak ada lokasi yang cocok.
              </div>
            )}
          </div>
        </div>

        {/* Bottom Horizontal List (Desktop) */}
        <div className='hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-160px)] max-w-6xl bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl flex-col overflow-hidden pointer-events-auto'>
          <div className='px-5 py-2.5 border-b border-white/30 font-bold flex justify-between items-center text-slate-800 bg-white/20 text-sm'>
            Daftar Kemitraan ({filteredLocations.length})
          </div>
          <div className='relative w-full'>
            {/* Left Fade */}
            <div className='absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white/40 to-transparent z-10 pointer-events-none rounded-bl-3xl' />

            <div className='flex overflow-x-auto px-5 py-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
              {filteredLocations.length > 0 ? (
                <>
                  {filteredLocations.map((loc) => (
                    <div
                      key={loc.id}
                      onClick={() => goToLocation(loc)}
                      className='min-w-[260px] max-w-[260px] mr-4 bg-white/40 border border-white/40 p-3.5 rounded-xl shadow-sm hover:shadow-md hover:bg-white/60 hover:border-white/60 active:scale-95 cursor-pointer transition-all duration-200 snap-start flex flex-col items-center justify-center gap-1.5 group'
                    >
                      <h3 className='font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors truncate w-full text-center'>
                        {loc.storeName}
                      </h3>
                      <div className='flex items-center justify-center text-xs text-slate-500 gap-1 w-full'>
                        <MapPin size={13} className='shrink-0' />
                        <span className='truncate'>
                          {loc.kecamatan}, {loc.kota}
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* Spacer for right padding in scroll */}
                  <div className='shrink-0 w-4' />
                </>
              ) : (
                <div className='p-4 text-center text-slate-500 w-full'>
                  Tidak ada lokasi yang cocok.
                </div>
              )}
            </div>

            {/* Right Fade */}
            <div className='absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white/40 to-transparent z-10 pointer-events-none rounded-br-3xl' />
          </div>
        </div>
      </div>
    </main>
  );
}
