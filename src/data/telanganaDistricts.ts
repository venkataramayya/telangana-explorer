export interface District {
  id: string;
  name: string;
  population: string;
  area: string;
  landmarks: string[];
  colorIndex: number;
  path: string;
}

export const telanganaDistricts: District[] = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    population: "3.9 Million",
    area: "217 km²",
    landmarks: ["Charminar", "Golconda Fort", "Hussain Sagar Lake"],
    colorIndex: 1,
    path: "M700,950 L780,940 L820,970 L810,1020 L760,1040 L700,1010 Z"
  },
  {
    id: "medchal-malkajgiri",
    name: "Medchal-Malkajgiri",
    population: "4.1 Million",
    area: "3,974 km²",
    landmarks: ["Keesaragutta Temple", "Shamirpet Lake"],
    colorIndex: 2,
    path: "M750,800 L850,780 L900,820 L890,900 L830,920 L750,880 Z"
  },
  {
    id: "rangareddy",
    name: "Rangareddy",
    population: "5.3 Million",
    area: "7,493 km²",
    landmarks: ["Mrugavani National Park", "Osman Sagar"],
    colorIndex: 3,
    path: "M600,950 L690,940 L750,980 L740,1080 L660,1100 L600,1050 Z"
  },
  {
    id: "warangal-urban",
    name: "Warangal Urban",
    population: "1.5 Million",
    area: "2,175 km²",
    landmarks: ["Warangal Fort", "Thousand Pillar Temple"],
    colorIndex: 4,
    path: "M1050,650 L1150,630 L1200,680 L1180,750 L1100,770 L1050,720 Z"
  },
  {
    id: "warangal-rural",
    name: "Warangal Rural",
    population: "0.9 Million",
    area: "2,896 km²",
    landmarks: ["Laknavaram Lake", "Ramappa Temple"],
    colorIndex: 5,
    path: "M950,600 L1040,580 L1090,630 L1070,700 L990,720 L950,670 Z"
  },
  {
    id: "karimnagar",
    name: "Karimnagar",
    population: "1.5 Million",
    area: "2,128 km²",
    landmarks: ["Lower Manair Dam", "Elgandal Fort"],
    colorIndex: 6,
    path: "M900,450 L1000,430 L1050,480 L1030,560 L950,580 L900,530 Z"
  },
  {
    id: "nizamabad",
    name: "Nizamabad",
    population: "2.5 Million",
    area: "7,956 km²",
    landmarks: ["Nizam Sagar", "Dichpally Ramalayam"],
    colorIndex: 7,
    path: "M600,400 L720,380 L780,430 L760,520 L660,540 L600,490 Z"
  },
  {
    id: "adilabad",
    name: "Adilabad",
    population: "0.7 Million",
    area: "4,153 km²",
    landmarks: ["Kuntala Waterfall", "Basar Saraswati Temple"],
    colorIndex: 8,
    path: "M750,220 L880,200 L940,260 L920,350 L810,370 L750,310 Z"
  },
  {
    id: "khammam",
    name: "Khammam",
    population: "2.8 Million",
    area: "16,029 km²",
    landmarks: ["Kinnerasani Wildlife Sanctuary", "Khammam Fort"],
    colorIndex: 9,
    path: "M1200,850 L1350,830 L1420,900 L1390,1020 L1250,1040 L1180,970 Z"
  },
  {
    id: "nalgonda",
    name: "Nalgonda",
    population: "3.5 Million",
    area: "14,240 km²",
    landmarks: ["Nagarjuna Sagar", "Yadagirigutta Temple"],
    colorIndex: 10,
    path: "M950,950 L1100,930 L1180,990 L1150,1120 L1020,1140 L950,1070 Z"
  },
  {
    id: "mahabubnagar",
    name: "Mahabubnagar",
    population: "4.0 Million",
    area: "18,432 km²",
    landmarks: ["Alampur Temples", "Pillalamarri Banyan Tree"],
    colorIndex: 11,
    path: "M550,1100 L700,1080 L770,1150 L740,1300 L600,1320 L530,1240 Z"
  },
  {
    id: "suryapet",
    name: "Suryapet",
    population: "1.5 Million",
    area: "5,505 km²",
    landmarks: ["Chaya Someswara Temple", "Pillala Marri"],
    colorIndex: 1,
    path: "M1000,1000 L1100,980 L1160,1040 L1140,1130 L1050,1150 L990,1090 Z"
  },
  {
    id: "yadadri-bhuvanagiri",
    name: "Yadadri Bhuvanagiri",
    population: "0.7 Million",
    area: "3,384 km²",
    landmarks: ["Yadagirigutta Temple", "Bhongir Fort"],
    colorIndex: 2,
    path: "M850,900 L950,880 L1010,930 L990,1010 L900,1030 L850,980 Z"
  },
  {
    id: "siddipet",
    name: "Siddipet",
    population: "1.4 Million",
    area: "4,192 km²",
    landmarks: ["Komati Cheruvu", "Nagaram Fort"],
    colorIndex: 3,
    path: "M780,700 L880,680 L930,730 L910,810 L830,830 L780,780 Z"
  },
  {
    id: "medak",
    name: "Medak",
    population: "3.0 Million",
    area: "9,699 km²",
    landmarks: ["Medak Cathedral", "Edupayala Durga Bhavani Temple"],
    colorIndex: 4,
    path: "M650,600 L770,580 L830,630 L810,720 L710,740 L650,690 Z"
  },
  {
    id: "sangareddy",
    name: "Sangareddy",
    population: "1.5 Million",
    area: "4,582 km²",
    landmarks: ["Ananthagiri Hills", "Sanghi Temple"],
    colorIndex: 5,
    path: "M600,750 L720,730 L780,780 L760,870 L660,890 L600,840 Z"
  },
  {
    id: "kamareddy",
    name: "Kamareddy",
    population: "1.0 Million",
    area: "3,570 km²",
    landmarks: ["Domakonda Fort", "Sri Raja Rajeshwara Swamy Temple"],
    colorIndex: 6,
    path: "M650,500 L750,480 L810,530 L790,610 L700,630 L650,580 Z"
  },
  {
    id: "rajanna-sircilla",
    name: "Rajanna Sircilla",
    population: "0.8 Million",
    area: "2,192 km²",
    landmarks: ["Sircilla Temple", "Vemulawada Temple"],
    colorIndex: 7,
    path: "M830,530 L920,510 L980,560 L960,640 L880,660 L830,610 Z"
  },
  {
    id: "peddapalli",
    name: "Peddapalli",
    population: "1.0 Million",
    area: "2,861 km²",
    landmarks: ["Ramagiri Fort", "Manthani Temple"],
    colorIndex: 8,
    path: "M980,530 L1070,510 L1130,560 L1110,640 L1030,660 L980,610 Z"
  },
  {
    id: "jayashankar-bhupalpally",
    name: "Jayashankar Bhupalpally",
    population: "0.8 Million",
    area: "5,644 km²",
    landmarks: ["Bogatha Waterfall", "Laknavaram Lake"],
    colorIndex: 9,
    path: "M880,600 L970,580 L1030,630 L1010,710 L930,730 L880,680 Z"
  },
  {
    id: "mancherial",
    name: "Mancherial",
    population: "0.7 Million",
    area: "4,009 km²",
    landmarks: ["Bellala Konda", "Singareni Collieries"],
    colorIndex: 10,
    path: "M900,350 L1000,330 L1060,380 L1040,460 L950,480 L900,430 Z"
  },
  {
    id: "nirmal",
    name: "Nirmal",
    population: "0.7 Million",
    area: "3,666 km²",
    landmarks: ["Nirmal Toys", "Basar Saraswati Temple"],
    colorIndex: 11,
    path: "M750,310 L850,290 L910,340 L890,420 L800,440 L750,390 Z"
  },
  {
    id: "jagitial",
    name: "Jagitial",
    population: "1.0 Million",
    area: "2,451 km²",
    landmarks: ["Kondagattu Anjaneya Swamy Temple", "Jagitial Fort"],
    colorIndex: 1,
    path: "M1000,450 L1090,430 L1150,480 L1130,560 L1050,580 L1000,530 Z"
  },
  {
    id: "vikarabad",
    name: "Vikarabad",
    population: "0.9 Million",
    area: "3,386 km²",
    landmarks: ["Ananthagiri Hills", "Kotepally Reservoir"],
    colorIndex: 2,
    path: "M500,850 L620,830 L680,880 L660,970 L550,990 L500,940 Z"
  },
  {
    id: "nagarkurnool",
    name: "Nagarkurnool",
    population: "0.9 Million",
    area: "6,545 km²",
    landmarks: ["Jurala Project", "Kollapur Temple"],
    colorIndex: 3,
    path: "M450,1200 L600,1180 L670,1240 L650,1360 L510,1380 L440,1320 Z"
  },
  {
    id: "wanaparthy",
    name: "Wanaparthy",
    population: "0.6 Million",
    area: "2,831 km²",
    landmarks: ["Wanaparthy Palace", "Pangidi Fort"],
    colorIndex: 4,
    path: "M600,1200 L720,1180 L780,1230 L760,1330 L650,1350 L590,1300 Z"
  },
  {
    id: "jogulamba-gadwal",
    name: "Jogulamba Gadwal",
    population: "0.5 Million",
    area: "3,054 km²",
    landmarks: ["Jogulamba Temple", "Gadwal Fort"],
    colorIndex: 5,
    path: "M700,1230 L820,1210 L880,1260 L860,1360 L750,1380 L690,1330 Z"
  },
  {
    id: "narayanpet",
    name: "Narayanpet",
    population: "0.6 Million",
    area: "2,675 km²",
    landmarks: ["Narayanpet Handlooms", "Mahanandi Temple"],
    colorIndex: 6,
    path: "M530,1050 L650,1030 L710,1080 L690,1180 L580,1200 L520,1150 Z"
  },
  {
    id: "jangaon",
    name: "Jangaon",
    population: "0.6 Million",
    area: "1,490 km²",
    landmarks: ["Kolanupaka Jain Temple", "Bommalaramaram Temple"],
    colorIndex: 7,
    path: "M950,800 L1050,780 L1110,830 L1090,910 L1000,930 L950,880 Z"
  },
  {
    id: "mahabubabad",
    name: "Mahabubabad",
    population: "0.8 Million",
    area: "2,944 km²",
    landmarks: ["Bayyaram Mines", "Ramappa Temple"],
    colorIndex: 8,
    path: "M1050,750 L1150,730 L1210,780 L1190,860 L1100,880 L1050,830 Z"
  },
  {
    id: "bhadradri-kothagudem",
    name: "Bhadradri Kothagudem",
    population: "1.0 Million",
    area: "7,483 km²",
    landmarks: ["Bhadrachalam Temple", "Kinnerasani Dam"],
    colorIndex: 9,
    path: "M1150,920 L1300,900 L1380,970 L1350,1100 L1210,1120 L1130,1050 Z"
  },
  {
    id: "mulugu",
    name: "Mulugu",
    population: "0.3 Million",
    area: "2,506 km²",
    landmarks: ["Bogatha Waterfall", "Tadvai Waterfalls"],
    colorIndex: 10,
    path: "M1010,730 L1110,710 L1170,760 L1150,840 L1060,860 L1010,810 Z"
  },
  {
    id: "komaram-bheem",
    name: "Komaram Bheem",
    population: "0.5 Million",
    area: "4,378 km²",
    landmarks: ["Kadam Reservoir", "Jainath Temple"],
    colorIndex: 11,
    path: "M820,220 L950,200 L1020,260 L1000,350 L890,370 L820,310 Z"
  }
];
