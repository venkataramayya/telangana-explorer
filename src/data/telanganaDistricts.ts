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
    path: "M450,280 L470,275 L485,285 L480,300 L465,305 L445,295 Z"
  },
  {
    id: "medchal-malkajgiri",
    name: "Medchal-Malkajgiri",
    population: "4.1 Million",
    area: "3,974 km²",
    landmarks: ["Keesaragutta Temple", "Shamirpet Lake"],
    colorIndex: 2,
    path: "M450,250 L480,245 L500,255 L495,270 L480,275 L450,265 Z"
  },
  {
    id: "rangareddy",
    name: "Rangareddy",
    population: "5.3 Million",
    area: "7,493 km²",
    landmarks: ["Mrugavani National Park", "Osman Sagar"],
    colorIndex: 3,
    path: "M420,280 L445,275 L465,285 L460,310 L435,315 L415,305 Z"
  },
  {
    id: "warangal-urban",
    name: "Warangal Urban",
    population: "1.5 Million",
    area: "2,175 km²",
    landmarks: ["Warangal Fort", "Thousand Pillar Temple"],
    colorIndex: 4,
    path: "M550,220 L580,215 L595,230 L585,250 L560,255 L545,240 Z"
  },
  {
    id: "warangal-rural",
    name: "Warangal Rural",
    population: "0.9 Million",
    area: "2,896 km²",
    landmarks: ["Laknavaram Lake", "Ramappa Temple"],
    colorIndex: 5,
    path: "M520,210 L550,205 L570,220 L560,240 L535,245 L515,230 Z"
  },
  {
    id: "karimnagar",
    name: "Karimnagar",
    population: "1.5 Million",
    area: "2,128 km²",
    landmarks: ["Lower Manair Dam", "Elgandal Fort"],
    colorIndex: 6,
    path: "M520,160 L555,155 L575,170 L565,195 L535,200 L515,185 Z"
  },
  {
    id: "nizamabad",
    name: "Nizamabad",
    population: "2.5 Million",
    area: "7,956 km²",
    landmarks: ["Nizam Sagar", "Dichpally Ramalayam"],
    colorIndex: 7,
    path: "M380,140 L420,135 L445,150 L435,180 L400,185 L375,170 Z"
  },
  {
    id: "adilabad",
    name: "Adilabad",
    population: "0.7 Million",
    area: "4,153 km²",
    landmarks: ["Kuntala Waterfall", "Basar Saraswati Temple"],
    colorIndex: 8,
    path: "M450,100 L495,95 L520,115 L510,145 L470,150 L445,130 Z"
  },
  {
    id: "khammam",
    name: "Khammam",
    population: "2.8 Million",
    area: "16,029 km²",
    landmarks: ["Kinnerasani Wildlife Sanctuary", "Khammam Fort"],
    colorIndex: 9,
    path: "M600,280 L645,275 L665,295 L650,325 L610,330 L590,310 Z"
  },
  {
    id: "nalgonda",
    name: "Nalgonda",
    population: "3.5 Million",
    area: "14,240 km²",
    landmarks: ["Nagarjuna Sagar", "Yadagirigutta Temple"],
    colorIndex: 10,
    path: "M510,300 L555,295 L580,315 L565,345 L525,350 L500,330 Z"
  },
  {
    id: "mahabubnagar",
    name: "Mahabubnagar",
    population: "4.0 Million",
    area: "18,432 km²",
    landmarks: ["Alampur Temples", "Pillalamarri Banyan Tree"],
    colorIndex: 11,
    path: "M380,320 L430,315 L455,335 L440,370 L395,375 L370,355 Z"
  },
  {
    id: "suryapet",
    name: "Suryapet",
    population: "1.5 Million",
    area: "5,505 km²",
    landmarks: ["Chaya Someswara Temple", "Pillala Marri"],
    colorIndex: 1,
    path: "M520,320 L560,315 L580,335 L565,360 L530,365 L510,345 Z"
  },
  {
    id: "yadadri-bhuvanagiri",
    name: "Yadadri Bhuvanagiri",
    population: "0.7 Million",
    area: "3,384 km²",
    landmarks: ["Yadagirigutta Temple", "Bhongir Fort"],
    colorIndex: 2,
    path: "M485,285 L515,280 L535,295 L525,315 L500,320 L480,305 Z"
  },
  {
    id: "siddipet",
    name: "Siddipet",
    population: "1.4 Million",
    area: "4,192 km²",
    landmarks: ["Komati Cheruvu", "Nagaram Fort"],
    colorIndex: 3,
    path: "M460,240 L495,235 L515,250 L505,275 L475,280 L455,265 Z"
  },
  {
    id: "medak",
    name: "Medak",
    population: "3.0 Million",
    area: "9,699 km²",
    landmarks: ["Medak Cathedral", "Edupayala Durga Bhavani Temple"],
    colorIndex: 4,
    path: "M410,210 L450,205 L475,220 L465,250 L430,255 L405,240 Z"
  },
  {
    id: "sangareddy",
    name: "Sangareddy",
    population: "1.5 Million",
    area: "4,582 km²",
    landmarks: ["Ananthagiri Hills", "Sanghi Temple"],
    colorIndex: 5,
    path: "M400,245 L435,240 L455,255 L445,280 L415,285 L395,270 Z"
  },
  {
    id: "kamareddy",
    name: "Kamareddy",
    population: "1.0 Million",
    area: "3,570 km²",
    landmarks: ["Domakonda Fort", "Sri Raja Rajeshwara Swamy Temple"],
    colorIndex: 6,
    path: "M410,175 L445,170 L465,185 L455,210 L425,215 L405,200 Z"
  },
  {
    id: "rajanna-sircilla",
    name: "Rajanna Sircilla",
    population: "0.8 Million",
    area: "2,192 km²",
    landmarks: ["Sircilla Temple", "Vemulawada Temple"],
    colorIndex: 7,
    path: "M485,185 L515,180 L535,195 L525,220 L500,225 L480,210 Z"
  },
  {
    id: "peddapalli",
    name: "Peddapalli",
    population: "1.0 Million",
    area: "2,861 km²",
    landmarks: ["Ramagiri Fort", "Manthani Temple"],
    colorIndex: 8,
    path: "M540,185 L570,180 L590,195 L580,220 L555,225 L535,210 Z"
  },
  {
    id: "jayashankar-bhupalpally",
    name: "Jayashankar Bhupalpally",
    population: "0.8 Million",
    area: "5,644 km²",
    landmarks: ["Bogatha Waterfall", "Laknavaram Lake"],
    colorIndex: 9,
    path: "M490,210 L525,205 L545,220 L535,245 L505,250 L485,235 Z"
  },
  {
    id: "mancherial",
    name: "Mancherial",
    population: "0.7 Million",
    area: "4,009 km²",
    landmarks: ["Bellala Konda", "Singareni Collieries"],
    colorIndex: 10,
    path: "M520,130 L560,125 L580,140 L570,165 L540,170 L515,155 Z"
  },
  {
    id: "nirmal",
    name: "Nirmal",
    population: "0.7 Million",
    area: "3,666 km²",
    landmarks: ["Nirmal Toys", "Basar Saraswati Temple"],
    colorIndex: 11,
    path: "M455,120 L490,115 L510,130 L500,155 L470,160 L450,145 Z"
  },
  {
    id: "jagitial",
    name: "Jagitial",
    population: "1.0 Million",
    area: "2,451 km²",
    landmarks: ["Kondagattu Anjaneya Swamy Temple", "Jagitial Fort"],
    colorIndex: 1,
    path: "M555,160 L585,155 L605,170 L595,195 L570,200 L550,185 Z"
  },
  {
    id: "vikarabad",
    name: "Vikarabad",
    population: "0.9 Million",
    area: "3,386 km²",
    landmarks: ["Ananthagiri Hills", "Kotepally Reservoir"],
    colorIndex: 2,
    path: "M370,260 L405,255 L425,270 L415,295 L385,300 L365,285 Z"
  },
  {
    id: "nagarkurnool",
    name: "Nagarkurnool",
    population: "0.9 Million",
    area: "6,545 km²",
    landmarks: ["Jurala Project", "Kollapur Temple"],
    colorIndex: 3,
    path: "M350,340 L390,335 L410,350 L400,380 L365,385 L345,370 Z"
  },
  {
    id: "wanaparthy",
    name: "Wanaparthy",
    population: "0.6 Million",
    area: "2,831 km²",
    landmarks: ["Wanaparthy Palace", "Pangidi Fort"],
    colorIndex: 4,
    path: "M390,350 L425,345 L445,360 L435,385 L405,390 L385,375 Z"
  },
  {
    id: "jogulamba-gadwal",
    name: "Jogulamba Gadwal",
    population: "0.5 Million",
    area: "3,054 km²",
    landmarks: ["Jogulamba Temple", "Gadwal Fort"],
    colorIndex: 5,
    path: "M425,360 L460,355 L480,370 L470,395 L440,400 L420,385 Z"
  },
  {
    id: "narayanpet",
    name: "Narayanpet",
    population: "0.6 Million",
    area: "2,675 km²",
    landmarks: ["Narayanpet Handlooms", "Mahanandi Temple"],
    colorIndex: 6,
    path: "M370,305 L405,300 L425,315 L415,340 L385,345 L365,330 Z"
  },
  {
    id: "jangaon",
    name: "Jangaon",
    population: "0.6 Million",
    area: "1,490 km²",
    landmarks: ["Kolanupaka Jain Temple", "Bommalaramaram Temple"],
    colorIndex: 7,
    path: "M520,270 L550,265 L570,280 L560,300 L535,305 L515,290 Z"
  },
  {
    id: "mahabubabad",
    name: "Mahabubabad",
    population: "0.8 Million",
    area: "2,944 km²",
    landmarks: ["Bayyaram Mines", "Ramappa Temple"],
    colorIndex: 8,
    path: "M560,250 L595,245 L615,260 L605,285 L575,290 L555,275 Z"
  },
  {
    id: "bhadradri-kothagudem",
    name: "Bhadradri Kothagudem",
    population: "1.0 Million",
    area: "7,483 km²",
    landmarks: ["Bhadrachalam Temple", "Kinnerasani Dam"],
    colorIndex: 9,
    path: "M590,310 L635,305 L660,325 L645,355 L605,360 L580,340 Z"
  },
  {
    id: "mulugu",
    name: "Mulugu",
    population: "0.3 Million",
    area: "2,506 km²",
    landmarks: ["Bogatha Waterfall", "Tadvai Waterfalls"],
    colorIndex: 10,
    path: "M545,245 L580,240 L600,255 L590,280 L560,285 L540,270 Z"
  },
  {
    id: "komaram-bheem",
    name: "Komaram Bheem",
    population: "0.5 Million",
    area: "4,378 km²",
    landmarks: ["Kadam Reservoir", "Jainath Temple"],
    colorIndex: 11,
    path: "M480,100 L520,95 L545,110 L535,135 L500,140 L475,125 Z"
  }
];
