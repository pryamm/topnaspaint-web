'use client';

import { useEffect, useRef } from 'react';
import { locations } from '@/lib/data/locations';
import { GlassCard } from '../ui/GlassCard';

import type * as maplibregl from 'maplibre-gl';

declare global {
  interface Window {
    maplibregl: typeof maplibregl;
  }
}
export function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const initMap = () => {
    if (map.current || !mapContainer.current || !window.maplibregl) return;

    map.current = new window.maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/liberty', // Reverted to liberty based on your snippet
      center: [110.0, -7.5], // Center of Java Island
      zoom: 6,
      interactive: false, // Disable pan/zoom on landing page
      attributionControl: false,
    });

    const m = map.current;
    if (!m) return;

    m.on('styleimagemissing', (e: maplibregl.MapStyleImageMissingEvent) => {
      const id = e.id;
      if (!m.hasImage(id)) {
        const data = new Uint8Array(4);
        m.addImage(id, { width: 1, height: 1, data: data });
      }
    });

    m.on('load', () => {
      // Add data source with clustering enabled
      m.addSource('locations', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: locations.map((loc) => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: loc.coordinates,
            },
            properties: loc,
          })),
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      // Cluster circle layer (blue as requested)
      m.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'locations',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#3b82f6', // blue-500
          'circle-radius': 20,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#ffffff',
        },
      });

      // Cluster count text
      m.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'locations',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['Noto Sans Regular'], // Using standard sans
          'text-size': 12,
        },
        paint: {
          'text-color': '#ffffff',
        },
      });

      // Unclustered point layer
      m.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'locations',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': [
            'case',
            ['boolean', ['get', 'isOfficialPartner'], false],
            '#10b981', // green for official
            '#f59e0b', // yellow for others
          ],
          'circle-radius': 12,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      });

      // No interactive clicks on the landing page map
    });
  };

  useEffect(() => {
    // Wait for window.maplibregl to be available
    const checkMapLibre = setInterval(() => {
      if (window.maplibregl && !map.current && mapContainer.current) {
        clearInterval(checkMapLibre);
        initMap();
      }
    }, 100);

    return () => clearInterval(checkMapLibre);
  }, []);

  return (
    <section id="map" className="py-16 relative">
      <div className="absolute top-20 left-4 md:left-12 z-10 pointer-events-none">
        <GlassCard className="!p-4 bg-white/90">
          <h2 className="text-xl font-bold text-slate-800">Lokasi Mitra</h2>
          <p className="text-sm text-slate-500">Temukan Topnas Paint di dekat Anda</p>
        </GlassCard>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div ref={mapContainer} className="w-full h-[400px] md:h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-inner opacity-80" />
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[2px] rounded-3xl transition-all hover:bg-transparent hover:backdrop-blur-none group">
          <a href="/map" className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-full shadow-xl shadow-slate-900/20 transform transition-transform group-hover:scale-105 flex items-center gap-2">
            Lihat Peta Interaktif Lengkap
          </a>
        </div>
      </div>
    </section>
  );
}
