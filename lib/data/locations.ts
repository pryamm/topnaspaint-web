export interface Location {
  id: string;
  storeName: string;
  address: string;
  kecamatan: string;
  kota: string;
  coordinates: [number, number]; // [longitude, latitude] for maplibre-gl
  phone: string;
  isOfficialPartner: boolean;
}

export const locations: Location[] = [
  {
    "id": "loc1",
    "storeName": "Depot Cat Sukses Malang",
    "address": "Jl. Raya Malang No. 84",
    "kecamatan": "Kec. Barat",
    "kota": "Malang",
    "coordinates": [
      112.57695941261903,
      -8.023709473235929
    ],
    "phone": "08147501385",
    "isOfficialPartner": true
  },
  {
    "id": "loc2",
    "storeName": "Depot Cat Warna Surabaya",
    "address": "Jl. Raya Surabaya No. 16",
    "kecamatan": "Kec. Pusat",
    "kota": "Surabaya",
    "coordinates": [
      112.68442750805917,
      -7.2655542742090935
    ],
    "phone": "08164383654",
    "isOfficialPartner": true
  },
  {
    "id": "loc3",
    "storeName": "Toko Besi Maju Jakarta",
    "address": "Jl. Raya Jakarta No. 1",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.91123200411201,
      -6.169869666770347
    ],
    "phone": "08116089852",
    "isOfficialPartner": true
  },
  {
    "id": "loc4",
    "storeName": "Mitra Lestari Surabaya",
    "address": "Jl. Raya Surabaya No. 32",
    "kecamatan": "Kec. Selatan",
    "kota": "Surabaya",
    "coordinates": [
      112.65346290627024,
      -7.197547590547213
    ],
    "phone": "08168147685",
    "isOfficialPartner": true
  },
  {
    "id": "loc5",
    "storeName": "Toko Besi Makmur Bandung",
    "address": "Jl. Raya Bandung No. 85",
    "kecamatan": "Kec. Utara",
    "kota": "Bandung",
    "coordinates": [
      107.67060700607364,
      -6.9008173395141785
    ],
    "phone": "08187258085",
    "isOfficialPartner": true
  },
  {
    "id": "loc6",
    "storeName": "TB Jaya Semarang",
    "address": "Jl. Raya Semarang No. 79",
    "kecamatan": "Kec. Timur",
    "kota": "Semarang",
    "coordinates": [
      110.42582265158397,
      -6.870261004686764
    ],
    "phone": "08187664482",
    "isOfficialPartner": true
  },
  {
    "id": "loc7",
    "storeName": "Toko Besi Sukses Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 96",
    "kecamatan": "Kec. Utara",
    "kota": "Yogyakarta",
    "coordinates": [
      110.3346930470952,
      -7.821417481360274
    ],
    "phone": "08180172556",
    "isOfficialPartner": true
  },
  {
    "id": "loc8",
    "storeName": "Depot Cat Abadi Semarang",
    "address": "Jl. Raya Semarang No. 34",
    "kecamatan": "Kec. Selatan",
    "kota": "Semarang",
    "coordinates": [
      110.4853875582276,
      -6.975322642211771
    ],
    "phone": "08189078561",
    "isOfficialPartner": true
  },
  {
    "id": "loc9",
    "storeName": "Depot Cat Jaya Jakarta",
    "address": "Jl. Raya Jakarta No. 54",
    "kecamatan": "Kec. Timur",
    "kota": "Jakarta",
    "coordinates": [
      106.92010857011321,
      -6.185848822711592
    ],
    "phone": "08164622081",
    "isOfficialPartner": false
  },
  {
    "id": "loc10",
    "storeName": "Depot Cat Berkah Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 45",
    "kecamatan": "Kec. Utara",
    "kota": "Yogyakarta",
    "coordinates": [
      110.29191307417341,
      -7.743375472214762
    ],
    "phone": "08139739279",
    "isOfficialPartner": true
  },
  {
    "id": "loc11",
    "storeName": "Toko Besi Lestari Bandung",
    "address": "Jl. Raya Bandung No. 10",
    "kecamatan": "Kec. Pusat",
    "kota": "Bandung",
    "coordinates": [
      107.63066776473099,
      -6.909629703984275
    ],
    "phone": "08157831581",
    "isOfficialPartner": true
  },
  {
    "id": "loc12",
    "storeName": "Depot Cat Warna Malang",
    "address": "Jl. Raya Malang No. 72",
    "kecamatan": "Kec. Timur",
    "kota": "Malang",
    "coordinates": [
      112.63391438668701,
      -8.054361117298056
    ],
    "phone": "08171250169",
    "isOfficialPartner": true
  },
  {
    "id": "loc13",
    "storeName": "Mitra Makmur Surabaya",
    "address": "Jl. Raya Surabaya No. 82",
    "kecamatan": "Kec. Selatan",
    "kota": "Surabaya",
    "coordinates": [
      112.71114050930339,
      -7.236861568678535
    ],
    "phone": "08120673528",
    "isOfficialPartner": true
  },
  {
    "id": "loc14",
    "storeName": "Depot Cat Sejahtera Jakarta",
    "address": "Jl. Raya Jakarta No. 22",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.82200694626498,
      -6.201073187862054
    ],
    "phone": "08151710168",
    "isOfficialPartner": false
  },
  {
    "id": "loc15",
    "storeName": "TB Sukses Bandung",
    "address": "Jl. Raya Bandung No. 53",
    "kecamatan": "Kec. Pusat",
    "kota": "Bandung",
    "coordinates": [
      107.70757311953568,
      -7.007246353218729
    ],
    "phone": "08151484906",
    "isOfficialPartner": false
  },
  {
    "id": "loc16",
    "storeName": "Depot Cat Maju Semarang",
    "address": "Jl. Raya Semarang No. 37",
    "kecamatan": "Kec. Selatan",
    "kota": "Semarang",
    "coordinates": [
      110.39556069844664,
      -6.910282136150075
    ],
    "phone": "08149673250",
    "isOfficialPartner": true
  },
  {
    "id": "loc17",
    "storeName": "Depot Cat Makmur Bandung",
    "address": "Jl. Raya Bandung No. 77",
    "kecamatan": "Kec. Barat",
    "kota": "Bandung",
    "coordinates": [
      107.71693273093378,
      -6.908737366590558
    ],
    "phone": "08110503018",
    "isOfficialPartner": false
  },
  {
    "id": "loc18",
    "storeName": "Mitra Abadi Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 37",
    "kecamatan": "Kec. Pusat",
    "kota": "Yogyakarta",
    "coordinates": [
      110.43205753180813,
      -7.833088034665818
    ],
    "phone": "08159876189",
    "isOfficialPartner": true
  },
  {
    "id": "loc19",
    "storeName": "TB Indah Bandung",
    "address": "Jl. Raya Bandung No. 14",
    "kecamatan": "Kec. Selatan",
    "kota": "Bandung",
    "coordinates": [
      107.58302125595742,
      -6.859675796229457
    ],
    "phone": "08130818105",
    "isOfficialPartner": true
  },
  {
    "id": "loc20",
    "storeName": "Mitra Makmur Surabaya",
    "address": "Jl. Raya Surabaya No. 10",
    "kecamatan": "Kec. Selatan",
    "kota": "Surabaya",
    "coordinates": [
      112.69226372880868,
      -7.33634705790637
    ],
    "phone": "08156429633",
    "isOfficialPartner": true
  },
  {
    "id": "loc21",
    "storeName": "Toko Besi Makmur Bandung",
    "address": "Jl. Raya Bandung No. 70",
    "kecamatan": "Kec. Timur",
    "kota": "Bandung",
    "coordinates": [
      107.71716925918366,
      -7.000411996065865
    ],
    "phone": "08195350413",
    "isOfficialPartner": true
  },
  {
    "id": "loc22",
    "storeName": "Toko Besi Berkah Malang",
    "address": "Jl. Raya Malang No. 69",
    "kecamatan": "Kec. Pusat",
    "kota": "Malang",
    "coordinates": [
      112.72516307482874,
      -7.93056806745694
    ],
    "phone": "08148894515",
    "isOfficialPartner": false
  },
  {
    "id": "loc23",
    "storeName": "Depot Cat Lestari Bandung",
    "address": "Jl. Raya Bandung No. 47",
    "kecamatan": "Kec. Selatan",
    "kota": "Bandung",
    "coordinates": [
      107.60786520134796,
      -6.9712410241147165
    ],
    "phone": "08137369144",
    "isOfficialPartner": true
  },
  {
    "id": "loc24",
    "storeName": "Mitra Lestari Jakarta",
    "address": "Jl. Raya Jakarta No. 12",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.81848935133503,
      -6.08594019415166
    ],
    "phone": "08151277338",
    "isOfficialPartner": true
  },
  {
    "id": "loc25",
    "storeName": "Depot Cat Sukses Surabaya",
    "address": "Jl. Raya Surabaya No. 56",
    "kecamatan": "Kec. Barat",
    "kota": "Surabaya",
    "coordinates": [
      112.67555405668155,
      -7.178510722038147
    ],
    "phone": "08120677028",
    "isOfficialPartner": true
  },
  {
    "id": "loc26",
    "storeName": "TB Abadi Bandung",
    "address": "Jl. Raya Bandung No. 59",
    "kecamatan": "Kec. Timur",
    "kota": "Bandung",
    "coordinates": [
      107.57506471546809,
      -6.971135873746538
    ],
    "phone": "08155241464",
    "isOfficialPartner": false
  },
  {
    "id": "loc27",
    "storeName": "TB Indah Malang",
    "address": "Jl. Raya Malang No. 27",
    "kecamatan": "Kec. Barat",
    "kota": "Malang",
    "coordinates": [
      112.55252161217467,
      -8.06098440094629
    ],
    "phone": "08111303406",
    "isOfficialPartner": true
  },
  {
    "id": "loc28",
    "storeName": "Depot Cat Warna Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 79",
    "kecamatan": "Kec. Selatan",
    "kota": "Yogyakarta",
    "coordinates": [
      110.32927455493012,
      -7.833499838107777
    ],
    "phone": "08152325928",
    "isOfficialPartner": true
  },
  {
    "id": "loc29",
    "storeName": "Mitra Sejahtera Jakarta",
    "address": "Jl. Raya Jakarta No. 50",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.88578385631538,
      -6.191863618293074
    ],
    "phone": "08123201503",
    "isOfficialPartner": true
  },
  {
    "id": "loc30",
    "storeName": "Mitra Berkah Bandung",
    "address": "Jl. Raya Bandung No. 68",
    "kecamatan": "Kec. Barat",
    "kota": "Bandung",
    "coordinates": [
      107.67774189824299,
      -6.915063519331853
    ],
    "phone": "08128009124",
    "isOfficialPartner": true
  },
  {
    "id": "loc31",
    "storeName": "Toko Besi Sejahtera Jakarta",
    "address": "Jl. Raya Jakarta No. 80",
    "kecamatan": "Kec. Barat",
    "kota": "Jakarta",
    "coordinates": [
      106.85357492722636,
      -6.085472174875428
    ],
    "phone": "08177832855",
    "isOfficialPartner": false
  },
  {
    "id": "loc32",
    "storeName": "Depot Cat Makmur Malang",
    "address": "Jl. Raya Malang No. 88",
    "kecamatan": "Kec. Selatan",
    "kota": "Malang",
    "coordinates": [
      112.59603912639774,
      -7.985986770323287
    ],
    "phone": "08111561238",
    "isOfficialPartner": false
  },
  {
    "id": "loc33",
    "storeName": "Mitra Abadi Jakarta",
    "address": "Jl. Raya Jakarta No. 34",
    "kecamatan": "Kec. Barat",
    "kota": "Jakarta",
    "coordinates": [
      106.8371834064449,
      -6.147361699087517
    ],
    "phone": "08160989406",
    "isOfficialPartner": false
  },
  {
    "id": "loc34",
    "storeName": "TB Sukses Surabaya",
    "address": "Jl. Raya Surabaya No. 63",
    "kecamatan": "Kec. Timur",
    "kota": "Surabaya",
    "coordinates": [
      112.84906659157657,
      -7.166332176396059
    ],
    "phone": "08124045830",
    "isOfficialPartner": false
  },
  {
    "id": "loc35",
    "storeName": "TB Makmur Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 9",
    "kecamatan": "Kec. Selatan",
    "kota": "Yogyakarta",
    "coordinates": [
      110.430890399097,
      -7.764325050870337
    ],
    "phone": "08171850149",
    "isOfficialPartner": false
  },
  {
    "id": "loc36",
    "storeName": "Mitra Sejahtera Surabaya",
    "address": "Jl. Raya Surabaya No. 30",
    "kecamatan": "Kec. Utara",
    "kota": "Surabaya",
    "coordinates": [
      112.7856664073026,
      -7.28795560938729
    ],
    "phone": "08199587746",
    "isOfficialPartner": false
  },
  {
    "id": "loc37",
    "storeName": "Depot Cat Makmur Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 15",
    "kecamatan": "Kec. Selatan",
    "kota": "Yogyakarta",
    "coordinates": [
      110.35637863864169,
      -7.738623656185744
    ],
    "phone": "08124643125",
    "isOfficialPartner": false
  },
  {
    "id": "loc38",
    "storeName": "Mitra Sejahtera Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 84",
    "kecamatan": "Kec. Barat",
    "kota": "Yogyakarta",
    "coordinates": [
      110.44740650566698,
      -7.743006092797895
    ],
    "phone": "08122583712",
    "isOfficialPartner": false
  },
  {
    "id": "loc39",
    "storeName": "Depot Cat Maju Surabaya",
    "address": "Jl. Raya Surabaya No. 29",
    "kecamatan": "Kec. Pusat",
    "kota": "Surabaya",
    "coordinates": [
      112.80068192032398,
      -7.264948280127809
    ],
    "phone": "08178835834",
    "isOfficialPartner": true
  },
  {
    "id": "loc40",
    "storeName": "Toko Besi Sukses Semarang",
    "address": "Jl. Raya Semarang No. 98",
    "kecamatan": "Kec. Barat",
    "kota": "Semarang",
    "coordinates": [
      110.39445449502584,
      -6.987801552355534
    ],
    "phone": "08116934530",
    "isOfficialPartner": false
  },
  {
    "id": "loc41",
    "storeName": "Mitra Lestari Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 12",
    "kecamatan": "Kec. Barat",
    "kota": "Yogyakarta",
    "coordinates": [
      110.32094174663773,
      -7.714547304972192
    ],
    "phone": "08154606254",
    "isOfficialPartner": true
  },
  {
    "id": "loc42",
    "storeName": "TB Lestari Malang",
    "address": "Jl. Raya Malang No. 44",
    "kecamatan": "Kec. Utara",
    "kota": "Malang",
    "coordinates": [
      112.69842609747025,
      -7.968190005229013
    ],
    "phone": "08156242347",
    "isOfficialPartner": true
  },
  {
    "id": "loc43",
    "storeName": "TB Warna Surabaya",
    "address": "Jl. Raya Surabaya No. 49",
    "kecamatan": "Kec. Utara",
    "kota": "Surabaya",
    "coordinates": [
      112.76417792319819,
      -7.1644742097038625
    ],
    "phone": "08166315594",
    "isOfficialPartner": true
  },
  {
    "id": "loc44",
    "storeName": "Depot Cat Indah Bandung",
    "address": "Jl. Raya Bandung No. 9",
    "kecamatan": "Kec. Timur",
    "kota": "Bandung",
    "coordinates": [
      107.68815191637363,
      -6.885325617217465
    ],
    "phone": "08113264831",
    "isOfficialPartner": true
  },
  {
    "id": "loc45",
    "storeName": "Mitra Abadi Semarang",
    "address": "Jl. Raya Semarang No. 46",
    "kecamatan": "Kec. Timur",
    "kota": "Semarang",
    "coordinates": [
      110.4656023329078,
      -7.030388694959925
    ],
    "phone": "08120091982",
    "isOfficialPartner": true
  },
  {
    "id": "loc46",
    "storeName": "Mitra Warna Jakarta",
    "address": "Jl. Raya Jakarta No. 53",
    "kecamatan": "Kec. Barat",
    "kota": "Jakarta",
    "coordinates": [
      106.82586456300487,
      -6.098933286858304
    ],
    "phone": "08158662941",
    "isOfficialPartner": true
  },
  {
    "id": "loc47",
    "storeName": "Depot Cat Indah Surabaya",
    "address": "Jl. Raya Surabaya No. 6",
    "kecamatan": "Kec. Timur",
    "kota": "Surabaya",
    "coordinates": [
      112.70277011030412,
      -7.1546202800290954
    ],
    "phone": "08189772520",
    "isOfficialPartner": true
  },
  {
    "id": "loc48",
    "storeName": "TB Sukses Jakarta",
    "address": "Jl. Raya Jakarta No. 90",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.80907482104497,
      -6.108990317634752
    ],
    "phone": "08158514553",
    "isOfficialPartner": true
  },
  {
    "id": "loc49",
    "storeName": "Toko Besi Sejahtera Surabaya",
    "address": "Jl. Raya Surabaya No. 62",
    "kecamatan": "Kec. Utara",
    "kota": "Surabaya",
    "coordinates": [
      112.79366472883237,
      -7.341647458661068
    ],
    "phone": "08188573807",
    "isOfficialPartner": true
  },
  {
    "id": "loc50",
    "storeName": "TB Maju Semarang",
    "address": "Jl. Raya Semarang No. 94",
    "kecamatan": "Kec. Pusat",
    "kota": "Semarang",
    "coordinates": [
      110.34603790746905,
      -7.058002263754763
    ],
    "phone": "08156258886",
    "isOfficialPartner": true
  },
  {
    "id": "loc51",
    "storeName": "Toko Besi Lestari Bandung",
    "address": "Jl. Raya Bandung No. 93",
    "kecamatan": "Kec. Timur",
    "kota": "Bandung",
    "coordinates": [
      107.62165962042796,
      -6.824314813379644
    ],
    "phone": "08123044443",
    "isOfficialPartner": true
  },
  {
    "id": "loc52",
    "storeName": "TB Maju Semarang",
    "address": "Jl. Raya Semarang No. 30",
    "kecamatan": "Kec. Utara",
    "kota": "Semarang",
    "coordinates": [
      110.47538638902783,
      -7.003994822481503
    ],
    "phone": "08179707356",
    "isOfficialPartner": true
  },
  {
    "id": "loc53",
    "storeName": "Toko Besi Sejahtera Surabaya",
    "address": "Jl. Raya Surabaya No. 98",
    "kecamatan": "Kec. Selatan",
    "kota": "Surabaya",
    "coordinates": [
      112.82939335926476,
      -7.297478574927298
    ],
    "phone": "08180352704",
    "isOfficialPartner": true
  },
  {
    "id": "loc54",
    "storeName": "TB Indah Bandung",
    "address": "Jl. Raya Bandung No. 89",
    "kecamatan": "Kec. Timur",
    "kota": "Bandung",
    "coordinates": [
      107.6776326716247,
      -6.878751004021212
    ],
    "phone": "08156521787",
    "isOfficialPartner": true
  },
  {
    "id": "loc55",
    "storeName": "TB Sejahtera Bandung",
    "address": "Jl. Raya Bandung No. 54",
    "kecamatan": "Kec. Pusat",
    "kota": "Bandung",
    "coordinates": [
      107.69635242234762,
      -6.865746412894781
    ],
    "phone": "08111506483",
    "isOfficialPartner": false
  },
  {
    "id": "loc56",
    "storeName": "Toko Besi Maju Bandung",
    "address": "Jl. Raya Bandung No. 3",
    "kecamatan": "Kec. Barat",
    "kota": "Bandung",
    "coordinates": [
      107.53785792453596,
      -6.950035904396828
    ],
    "phone": "08158371670",
    "isOfficialPartner": true
  },
  {
    "id": "loc57",
    "storeName": "Mitra Lestari Malang",
    "address": "Jl. Raya Malang No. 13",
    "kecamatan": "Kec. Pusat",
    "kota": "Malang",
    "coordinates": [
      112.55234346601615,
      -8.064866313129095
    ],
    "phone": "08138998216",
    "isOfficialPartner": true
  },
  {
    "id": "loc58",
    "storeName": "Mitra Warna Jakarta",
    "address": "Jl. Raya Jakarta No. 40",
    "kecamatan": "Kec. Timur",
    "kota": "Jakarta",
    "coordinates": [
      106.89797478468732,
      -6.1269261223012075
    ],
    "phone": "08174420357",
    "isOfficialPartner": true
  },
  {
    "id": "loc59",
    "storeName": "Depot Cat Warna Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 82",
    "kecamatan": "Kec. Pusat",
    "kota": "Yogyakarta",
    "coordinates": [
      110.41603818628727,
      -7.8494127937793055
    ],
    "phone": "08112445881",
    "isOfficialPartner": true
  },
  {
    "id": "loc60",
    "storeName": "Depot Cat Maju Surabaya",
    "address": "Jl. Raya Surabaya No. 34",
    "kecamatan": "Kec. Utara",
    "kota": "Surabaya",
    "coordinates": [
      112.76850537207945,
      -7.2612728312589905
    ],
    "phone": "08150318367",
    "isOfficialPartner": false
  },
  {
    "id": "loc61",
    "storeName": "Mitra Makmur Jakarta",
    "address": "Jl. Raya Jakarta No. 88",
    "kecamatan": "Kec. Selatan",
    "kota": "Jakarta",
    "coordinates": [
      106.84043703556779,
      -6.1338422697698345
    ],
    "phone": "08194013148",
    "isOfficialPartner": true
  },
  {
    "id": "loc62",
    "storeName": "TB Maju Semarang",
    "address": "Jl. Raya Semarang No. 43",
    "kecamatan": "Kec. Pusat",
    "kota": "Semarang",
    "coordinates": [
      110.50457940147454,
      -7.067490267867932
    ],
    "phone": "08199141091",
    "isOfficialPartner": false
  },
  {
    "id": "loc63",
    "storeName": "Toko Besi Berkah Surabaya",
    "address": "Jl. Raya Surabaya No. 29",
    "kecamatan": "Kec. Barat",
    "kota": "Surabaya",
    "coordinates": [
      112.71231824031729,
      -7.155669497339783
    ],
    "phone": "08157330040",
    "isOfficialPartner": true
  },
  {
    "id": "loc64",
    "storeName": "TB Makmur Jakarta",
    "address": "Jl. Raya Jakarta No. 44",
    "kecamatan": "Kec. Pusat",
    "kota": "Jakarta",
    "coordinates": [
      106.74519405759611,
      -6.240134277164285
    ],
    "phone": "08113337188",
    "isOfficialPartner": true
  },
  {
    "id": "loc65",
    "storeName": "Toko Besi Jaya Surabaya",
    "address": "Jl. Raya Surabaya No. 70",
    "kecamatan": "Kec. Pusat",
    "kota": "Surabaya",
    "coordinates": [
      112.6658125509202,
      -7.200323290736127
    ],
    "phone": "08184682298",
    "isOfficialPartner": true
  },
  {
    "id": "loc66",
    "storeName": "Depot Cat Warna Surabaya",
    "address": "Jl. Raya Surabaya No. 50",
    "kecamatan": "Kec. Pusat",
    "kota": "Surabaya",
    "coordinates": [
      112.75686107487657,
      -7.210951893044752
    ],
    "phone": "08171586965",
    "isOfficialPartner": true
  },
  {
    "id": "loc67",
    "storeName": "Mitra Indah Semarang",
    "address": "Jl. Raya Semarang No. 94",
    "kecamatan": "Kec. Barat",
    "kota": "Semarang",
    "coordinates": [
      110.48944549796225,
      -7.050491784982393
    ],
    "phone": "08113527743",
    "isOfficialPartner": true
  },
  {
    "id": "loc68",
    "storeName": "TB Sejahtera Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 12",
    "kecamatan": "Kec. Utara",
    "kota": "Yogyakarta",
    "coordinates": [
      110.37065174521877,
      -7.7622922909702465
    ],
    "phone": "08174669773",
    "isOfficialPartner": true
  },
  {
    "id": "loc69",
    "storeName": "TB Maju Bandung",
    "address": "Jl. Raya Bandung No. 71",
    "kecamatan": "Kec. Selatan",
    "kota": "Bandung",
    "coordinates": [
      107.58208554865404,
      -6.994501791402754
    ],
    "phone": "08126797488",
    "isOfficialPartner": true
  },
  {
    "id": "loc70",
    "storeName": "Mitra Indah Malang",
    "address": "Jl. Raya Malang No. 72",
    "kecamatan": "Kec. Timur",
    "kota": "Malang",
    "coordinates": [
      112.61210602887424,
      -8.067959926236204
    ],
    "phone": "08136355473",
    "isOfficialPartner": true
  },
  {
    "id": "loc71",
    "storeName": "Toko Besi Abadi Semarang",
    "address": "Jl. Raya Semarang No. 49",
    "kecamatan": "Kec. Barat",
    "kota": "Semarang",
    "coordinates": [
      110.33571057398925,
      -6.885926638542663
    ],
    "phone": "08128261162",
    "isOfficialPartner": false
  },
  {
    "id": "loc72",
    "storeName": "TB Warna Malang",
    "address": "Jl. Raya Malang No. 48",
    "kecamatan": "Kec. Selatan",
    "kota": "Malang",
    "coordinates": [
      112.6785250628631,
      -7.9384209385998545
    ],
    "phone": "08152385324",
    "isOfficialPartner": true
  },
  {
    "id": "loc73",
    "storeName": "Toko Besi Berkah Malang",
    "address": "Jl. Raya Malang No. 73",
    "kecamatan": "Kec. Pusat",
    "kota": "Malang",
    "coordinates": [
      112.64567108357753,
      -7.973591813457833
    ],
    "phone": "08160514165",
    "isOfficialPartner": false
  },
  {
    "id": "loc74",
    "storeName": "Mitra Maju Malang",
    "address": "Jl. Raya Malang No. 54",
    "kecamatan": "Kec. Utara",
    "kota": "Malang",
    "coordinates": [
      112.53503580153117,
      -8.06333303733597
    ],
    "phone": "08131249021",
    "isOfficialPartner": false
  },
  {
    "id": "loc75",
    "storeName": "TB Warna Jakarta",
    "address": "Jl. Raya Jakarta No. 89",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.7987600483558,
      -6.105336154109995
    ],
    "phone": "08161727187",
    "isOfficialPartner": false
  },
  {
    "id": "loc76",
    "storeName": "Toko Besi Jaya Semarang",
    "address": "Jl. Raya Semarang No. 79",
    "kecamatan": "Kec. Pusat",
    "kota": "Semarang",
    "coordinates": [
      110.44941878919705,
      -7.0620602014107385
    ],
    "phone": "08166321676",
    "isOfficialPartner": true
  },
  {
    "id": "loc77",
    "storeName": "Depot Cat Berkah Jakarta",
    "address": "Jl. Raya Jakarta No. 26",
    "kecamatan": "Kec. Pusat",
    "kota": "Jakarta",
    "coordinates": [
      106.7497072946072,
      -6.242354479120006
    ],
    "phone": "08162719680",
    "isOfficialPartner": true
  },
  {
    "id": "loc78",
    "storeName": "TB Sejahtera Malang",
    "address": "Jl. Raya Malang No. 36",
    "kecamatan": "Kec. Selatan",
    "kota": "Malang",
    "coordinates": [
      112.5395735994049,
      -8.072073695039665
    ],
    "phone": "08146718933",
    "isOfficialPartner": true
  },
  {
    "id": "loc79",
    "storeName": "Toko Besi Sukses Surabaya",
    "address": "Jl. Raya Surabaya No. 12",
    "kecamatan": "Kec. Timur",
    "kota": "Surabaya",
    "coordinates": [
      112.84203985004396,
      -7.268655941793633
    ],
    "phone": "08167727637",
    "isOfficialPartner": false
  },
  {
    "id": "loc80",
    "storeName": "Toko Besi Warna Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 68",
    "kecamatan": "Kec. Timur",
    "kota": "Yogyakarta",
    "coordinates": [
      110.32031523284891,
      -7.790982378414247
    ],
    "phone": "08168825248",
    "isOfficialPartner": false
  },
  {
    "id": "loc81",
    "storeName": "Depot Cat Sejahtera Semarang",
    "address": "Jl. Raya Semarang No. 6",
    "kecamatan": "Kec. Pusat",
    "kota": "Semarang",
    "coordinates": [
      110.43568286653137,
      -6.966652226768186
    ],
    "phone": "08170227402",
    "isOfficialPartner": true
  },
  {
    "id": "loc82",
    "storeName": "TB Abadi Jakarta",
    "address": "Jl. Raya Jakarta No. 94",
    "kecamatan": "Kec. Pusat",
    "kota": "Jakarta",
    "coordinates": [
      106.85585662922728,
      -6.176596907156671
    ],
    "phone": "08135638303",
    "isOfficialPartner": false
  },
  {
    "id": "loc83",
    "storeName": "Toko Besi Abadi Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 94",
    "kecamatan": "Kec. Timur",
    "kota": "Yogyakarta",
    "coordinates": [
      110.46752206592483,
      -7.887497995039571
    ],
    "phone": "08113870414",
    "isOfficialPartner": false
  },
  {
    "id": "loc84",
    "storeName": "Mitra Berkah Semarang",
    "address": "Jl. Raya Semarang No. 95",
    "kecamatan": "Kec. Utara",
    "kota": "Semarang",
    "coordinates": [
      110.32884032559271,
      -6.904018050730678
    ],
    "phone": "08127214877",
    "isOfficialPartner": true
  },
  {
    "id": "loc85",
    "storeName": "TB Indah Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 89",
    "kecamatan": "Kec. Selatan",
    "kota": "Yogyakarta",
    "coordinates": [
      110.34760845212998,
      -7.879063743034429
    ],
    "phone": "08118031051",
    "isOfficialPartner": true
  },
  {
    "id": "loc86",
    "storeName": "Depot Cat Abadi Surabaya",
    "address": "Jl. Raya Surabaya No. 13",
    "kecamatan": "Kec. Selatan",
    "kota": "Surabaya",
    "coordinates": [
      112.80158388119455,
      -7.336305869163313
    ],
    "phone": "08117439956",
    "isOfficialPartner": true
  },
  {
    "id": "loc87",
    "storeName": "Depot Cat Jaya Jakarta",
    "address": "Jl. Raya Jakarta No. 55",
    "kecamatan": "Kec. Selatan",
    "kota": "Jakarta",
    "coordinates": [
      106.81364641348466,
      -6.201780424822724
    ],
    "phone": "08145797962",
    "isOfficialPartner": false
  },
  {
    "id": "loc88",
    "storeName": "Depot Cat Sejahtera Jakarta",
    "address": "Jl. Raya Jakarta No. 34",
    "kecamatan": "Kec. Barat",
    "kota": "Jakarta",
    "coordinates": [
      106.91113375882036,
      -6.215433381529667
    ],
    "phone": "08126594073",
    "isOfficialPartner": false
  },
  {
    "id": "loc89",
    "storeName": "TB Makmur Surabaya",
    "address": "Jl. Raya Surabaya No. 17",
    "kecamatan": "Kec. Timur",
    "kota": "Surabaya",
    "coordinates": [
      112.76703099883639,
      -7.315092072125717
    ],
    "phone": "08156529774",
    "isOfficialPartner": false
  },
  {
    "id": "loc90",
    "storeName": "Depot Cat Makmur Malang",
    "address": "Jl. Raya Malang No. 37",
    "kecamatan": "Kec. Timur",
    "kota": "Malang",
    "coordinates": [
      112.60546473853225,
      -8.066748960217852
    ],
    "phone": "08181872445",
    "isOfficialPartner": true
  },
  {
    "id": "loc91",
    "storeName": "Mitra Abadi Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 71",
    "kecamatan": "Kec. Utara",
    "kota": "Yogyakarta",
    "coordinates": [
      110.46534457221999,
      -7.717819869658525
    ],
    "phone": "08169134272",
    "isOfficialPartner": true
  },
  {
    "id": "loc92",
    "storeName": "TB Warna Malang",
    "address": "Jl. Raya Malang No. 47",
    "kecamatan": "Kec. Timur",
    "kota": "Malang",
    "coordinates": [
      112.56807865407399,
      -8.016840316667249
    ],
    "phone": "08175651513",
    "isOfficialPartner": true
  },
  {
    "id": "loc93",
    "storeName": "Mitra Sejahtera Jakarta",
    "address": "Jl. Raya Jakarta No. 50",
    "kecamatan": "Kec. Pusat",
    "kota": "Jakarta",
    "coordinates": [
      106.89156763894803,
      -6.099418184942701
    ],
    "phone": "08186972799",
    "isOfficialPartner": false
  },
  {
    "id": "loc94",
    "storeName": "Depot Cat Sejahtera Semarang",
    "address": "Jl. Raya Semarang No. 36",
    "kecamatan": "Kec. Barat",
    "kota": "Semarang",
    "coordinates": [
      110.33817444183993,
      -6.877577764728265
    ],
    "phone": "08137186451",
    "isOfficialPartner": true
  },
  {
    "id": "loc95",
    "storeName": "TB Jaya Semarang",
    "address": "Jl. Raya Semarang No. 39",
    "kecamatan": "Kec. Selatan",
    "kota": "Semarang",
    "coordinates": [
      110.4327102717423,
      -7.025874684162758
    ],
    "phone": "08192331078",
    "isOfficialPartner": true
  },
  {
    "id": "loc96",
    "storeName": "Mitra Indah Semarang",
    "address": "Jl. Raya Semarang No. 62",
    "kecamatan": "Kec. Barat",
    "kota": "Semarang",
    "coordinates": [
      110.35617199142531,
      -6.874990821391203
    ],
    "phone": "08195810096",
    "isOfficialPartner": true
  },
  {
    "id": "loc97",
    "storeName": "Toko Besi Makmur Jakarta",
    "address": "Jl. Raya Jakarta No. 67",
    "kecamatan": "Kec. Timur",
    "kota": "Jakarta",
    "coordinates": [
      106.79466028497097,
      -6.19408908702811
    ],
    "phone": "08133063988",
    "isOfficialPartner": true
  },
  {
    "id": "loc98",
    "storeName": "TB Sejahtera Jakarta",
    "address": "Jl. Raya Jakarta No. 7",
    "kecamatan": "Kec. Utara",
    "kota": "Jakarta",
    "coordinates": [
      106.88094760242947,
      -6.2024115963509
    ],
    "phone": "08115904218",
    "isOfficialPartner": true
  },
  {
    "id": "loc99",
    "storeName": "Depot Cat Lestari Bandung",
    "address": "Jl. Raya Bandung No. 86",
    "kecamatan": "Kec. Barat",
    "kota": "Bandung",
    "coordinates": [
      107.66898096152777,
      -6.844565126735656
    ],
    "phone": "08150775718",
    "isOfficialPartner": true
  },
  {
    "id": "loc100",
    "storeName": "Toko Besi Abadi Yogyakarta",
    "address": "Jl. Raya Yogyakarta No. 36",
    "kecamatan": "Kec. Pusat",
    "kota": "Yogyakarta",
    "coordinates": [
      110.33804915635638,
      -7.741768948927043
    ],
    "phone": "08132452128",
    "isOfficialPartner": true
  }
];
