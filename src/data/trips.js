import popular1 from '../images/popular-1.png';
import popular2 from '../images/popular-2.png';
import popular3 from '../images/popular-3.png';
import popular4 from '../images/popular-4.png';
import popular5 from '../images/popular-5.png';
import popular6 from '../images/popular-6.png';
import popular7 from '../images/popular-7.png';
import popular8 from '../images/popular-8.png';
import popular9 from '../images/popular-9.jpg';
import popular10 from '../images/popular-10.jpg';
import popular11 from '../images/popular-11.jpg';

import package2 from '../images/packege-2.png';
import package3 from '../images/packege-3.png';
import package4 from '../images/packege-4.png';
import package5 from '../images/packege-5.png';
import package6 from '../images/packege-6.jpg';

export const whatsappLink = 'https://api.whatsapp.com/send?phone=7471173334';

export const whatsappPlanLink = (name) =>
  `${whatsappLink}&text=${encodeURIComponent(
    `Hi Trailmark! I'd like to book the ${name} trip. Please share details.`
  )}`;

export const destinations = [
  {
    name: 'Leh Ladakh',
    image: popular1,
    price: '₹29,999',
    duration: '7D/6N',
    bestTime: 'June – September',
    pace: 'Moderate',
    highlights: ['Khardung La', 'Pangong Tso', 'Nubra Dunes', 'Monasteries'],
    itinerary: [
      { title: 'Arrive in Leh', desc: 'Acclimatise to the altitude, stroll Leh Market and catch sunset at Shanti Stupa.' },
      { title: 'Sham Valley Tour', desc: 'Magnetic Hill, Gurudwara Pathar Sahib and the Indus–Zanskar Sangam.' },
      { title: 'Leh → Nubra Valley', desc: 'Cross Khardung La (18,380 ft), evening camel safari on the Hunder sand dunes.' },
      { title: 'Nubra → Pangong Lake', desc: 'Drive along the Shyok river, sunset by the blue waters, overnight lakeside camp.' },
      { title: 'Pangong → Leh', desc: 'Sunrise at the lake, return to Leh via Chang La pass.' },
      { title: 'Monastery Circuit', desc: 'Hemis and Thiksey monasteries, plus café-hopping and souvenir shopping in Leh.' },
      { title: 'Departure', desc: 'Fly out with a camera roll full of Himalayan memories.' },
    ],
  },
  {
    name: 'Spiti Valley',
    image: popular2,
    price: '₹17,999',
    duration: '7D/6N',
    bestTime: 'May – October',
    pace: 'Adventurous',
    highlights: ['Key Monastery', 'Chandratal', 'Chicham Bridge', 'Nako Lake'],
    itinerary: [
      { title: 'Delhi → Narkanda', desc: 'Overnight drive to the apple orchards of Narkanda via Shimla.' },
      { title: 'Narkanda → Kalpa', desc: 'Follow the Sutlej into Kinnaur, sunset views of the Kinner Kailash range.' },
      { title: 'Kalpa → Tabo', desc: 'Cross into Spiti via Nako Lake and the 500-year-old Gue mummy.' },
      { title: 'Tabo → Kaza', desc: 'Visit Dhankar Monastery perched on a cliff and the Pin Valley.' },
      { title: 'Kaza Exploration', desc: 'Key Monastery, Kibber village, Chicham Bridge and the world’s highest post office at Hikkim.' },
      { title: 'Kaza → Chandratal', desc: 'Camp under a billion stars beside the crescent-shaped moon lake.' },
      { title: 'Return via Atal Tunnel', desc: 'Drive to Manali through Batal and the Atal Tunnel. Trip ends.' },
    ],
  },
  {
    name: 'Manali',
    image: popular3,
    price: '₹7,999',
    duration: '4D/3N',
    bestTime: 'All Year Round',
    pace: 'Easy',
    highlights: ['Solang Valley', 'Old Manali', 'Atal Tunnel', 'Jogini Falls'],
    itinerary: [
      { title: 'Arrival & Local Walk', desc: 'Hadimba Temple, Mall Road and the boho cafés of Old Manali.' },
      { title: 'Solang Valley', desc: 'Paragliding, zorbing, ropeway rides and mountain views all day.' },
      { title: 'Atal Tunnel → Sissu', desc: 'Drive into Lahaul for snow points, waterfalls and riverside photo stops.' },
      { title: 'Jogini Falls Trek', desc: 'A gentle morning trek through pine forest before departure.' },
    ],
  },
  {
    name: 'Tirthan',
    image: popular4,
    price: '₹7,999',
    duration: '3D/2N',
    bestTime: 'All Year Round',
    pace: 'Easy',
    highlights: ['Jalori Pass', 'Serolsar Lake', 'Riverside Camps', 'GHNP'],
    itinerary: [
      { title: 'Delhi → Tirthan Valley', desc: 'Arrive at your riverside stay, evening bonfire by the Tirthan river.' },
      { title: 'Jalori Pass & Serolsar Lake', desc: 'Drive to Jalori Pass and take the gentle forest trek to Serolsar Lake.' },
      { title: 'Waterfall Hike & Departure', desc: 'Village walk, trout-fishing by the river and a short waterfall hike before heading home.' },
    ],
  },
  {
    name: 'Shimla',
    image: popular5,
    price: '₹12,999',
    duration: '4D/3N',
    bestTime: 'October – June',
    pace: 'Easy',
    highlights: ['Mall Road', 'Kufri', 'Naldehra', 'Jakhu Temple'],
    itinerary: [
      { title: 'Delhi → Shimla', desc: 'Check in and stroll Mall Road, The Ridge and Christ Church by evening.' },
      { title: 'Kufri Adventure Day', desc: 'Kufri snow point and adventure park with Green Valley viewpoints.' },
      { title: 'Naldehra & Tattapani', desc: 'Cedar meadows of Naldehra and a dip in the Tattapani hot springs.' },
      { title: 'Jakhu Sunrise & Departure', desc: 'Early visit to Jakhu Temple for valley views, then homeward bound.' },
    ],
  },
  {
    name: 'Kashmir',
    image: popular6,
    price: '₹21,999',
    duration: '6D/5N',
    bestTime: 'March – October',
    pace: 'Easy',
    highlights: ['Dal Lake', 'Gulmarg Gondola', 'Betaab Valley', 'Sonmarg'],
    itinerary: [
      { title: 'Srinagar Arrival', desc: 'Shikara ride on Dal Lake and a night in a traditional houseboat.' },
      { title: 'Gulmarg', desc: 'Ride the gondola to Apharwat, meadows in summer and snow in winter.' },
      { title: 'Pahalgam', desc: 'Betaab Valley, Aru Valley and pony trails along the Lidder river.' },
      { title: 'Sonmarg', desc: 'Day trip to the "Meadow of Gold" and Thajiwas Glacier.' },
      { title: 'Mughal Gardens', desc: 'Nishat, Shalimar and saffron fields, plus a walk through the old city.' },
      { title: 'Departure', desc: 'Fly out from Srinagar with kahwa in hand.' },
    ],
  },
  {
    name: 'Rajasthan',
    image: popular7,
    price: '₹12,999',
    duration: '6D/5N',
    bestTime: 'October – March',
    pace: 'Easy',
    highlights: ['Amber Fort', 'Blue City', 'Sam Dunes', 'Desert Camp'],
    itinerary: [
      { title: 'Jaipur — The Pink City', desc: 'Amber Fort, Hawa Mahal and a rooftop dinner in the old city.' },
      { title: 'City Palace & Bazaars', desc: 'City Palace, Jantar Mantar and shopping in Johari Bazaar.' },
      { title: 'Jaipur → Jodhpur', desc: 'Mehrangarh Fort and a walk through the indigo lanes of the Blue City.' },
      { title: 'Jodhpur → Jaisalmer', desc: 'Drive into the Thar, evening at Gadisar Lake.' },
      { title: 'Golden Fort & Sam Dunes', desc: 'Jaisalmer Fort, Patwon ki Haveli, camel safari and folk night at a desert camp.' },
      { title: 'Departure', desc: 'Sunrise over the dunes, then homeward bound.' },
    ],
  },
  {
    name: 'Pachmarhi',
    image: popular8,
    price: '₹6,999',
    duration: '3D/2N',
    bestTime: 'October – June',
    pace: 'Easy',
    highlights: ['Dhupgarh Sunset', 'Bee Falls', 'Pandav Caves', 'Satpura Hills'],
    itinerary: [
      { title: 'Bhopal → Pachmarhi', desc: 'Arrive in the Satpura hill station, Jata Shankar caves and Handi Khoh viewpoint.' },
      { title: 'Falls & Caves Circuit', desc: 'Bee Falls, Pandav Caves and a golden sunset from Dhupgarh — the highest peak of the Satpuras.' },
      { title: 'Reechhgarh & Departure', desc: 'Morning at the natural rock amphitheatre of Reechhgarh before the drive back.' },
    ],
  },
  {
    name: 'Sar Pass Trek',
    image: popular9,
    price: '₹6,999',
    duration: '5D/4N',
    bestTime: 'April – June',
    pace: 'Trek',
    highlights: ['13,800 ft Pass', 'Snow Slides', 'Meadow Camps', 'Parvati Valley'],
    itinerary: [
      { title: 'Kasol → Grahan', desc: 'Trek through pine forests along the Grahan nallah to the village camp.' },
      { title: 'Grahan → Min Thach', desc: 'Climb to the meadow of Min Thach with views of the Chanderkhani range.' },
      { title: 'Min Thach → Nagaru', desc: 'Steep ascent to the high camp at Nagaru, sunset above the clouds.' },
      { title: 'Summit Day — Sar Pass', desc: 'Cross Sar Pass at 13,800 ft, celebrate with snow slides down to Biskeri Thach.' },
      { title: 'Biskeri → Kasol', desc: 'Descend through Barshaini and return to Kasol. Trip ends.' },
    ],
  },
  {
    name: 'Manali Kasol Couple Package',
    image: popular10,
    price: '₹14,999',
    duration: '5D/4N',
    bestTime: 'All Year Round',
    pace: 'Easy',
    highlights: ['Couple Friendly', 'Solang Valley', 'Kasol Cafés', 'Manikaran'],
    itinerary: [
      { title: 'Manali Arrival', desc: 'Check in to a cosy stay, riverside walk and dinner in Old Manali.' },
      { title: 'Solang Valley', desc: 'Adventure day for two — paragliding, ropeway and mountain views.' },
      { title: 'Manali → Kasol', desc: 'Drive along the Parvati river, café-hopping in Kasol by evening.' },
      { title: 'Manikaran & Chalal', desc: 'Hot springs at Manikaran Sahib and a gentle riverside walk to Chalal village.' },
      { title: 'Leisure & Departure', desc: 'Slow brunch with valley views before the journey home.' },
    ],
  },
  {
    name: 'Chopta Chandrashila',
    image: popular11,
    price: '₹7,500',
    duration: '4D/3N',
    bestTime: 'September – June',
    pace: 'Trek',
    highlights: ['Tungnath Temple', 'Summit Sunrise', 'Deoria Tal', 'Alpine Meadows'],
    itinerary: [
      { title: 'Rishikesh → Chopta', desc: 'Scenic drive along the Ganga through Devprayag to the "Mini Switzerland of India".' },
      { title: 'Summit Day', desc: 'Trek to Tungnath, the world’s highest Shiva temple, and on to the Chandrashila summit.' },
      { title: 'Deoria Tal', desc: 'Hike to the emerald lake with Chaukhamba reflections, camp overnight.' },
      { title: 'Return to Rishikesh', desc: 'Drive back with an optional Ganga aarti before departure.' },
    ],
  },
];

export const intlPackages = [
  {
    name: 'Singapore',
    title: 'Explore The Lion City',
    description: 'Experience modern culture and cuisine in Singapore.',
    image: package5,
    price: '₹34,999',
    duration: '5D/6N',
    capacity: '10 pax',
    reviews: 40,
    bestTime: 'All Year Round',
    pace: 'Easy',
    highlights: ['Sentosa', 'Universal Studios', 'Gardens by the Bay', 'Marina Bay'],
    itinerary: [
      { title: 'Arrival — Marina Bay', desc: 'Land in Singapore, evening at Merlion Park and the Marina Bay light show.' },
      { title: 'Sentosa Island', desc: 'Cable car ride, S.E.A. Aquarium, beaches and the Wings of Time show.' },
      { title: 'Universal Studios', desc: 'Full day of rides and shows across the movie-themed park.' },
      { title: 'Gardens by the Bay', desc: 'Cloud Forest, Flower Dome, Supertree Grove and Marina Bay Sands SkyPark.' },
      { title: 'City & Shopping', desc: 'Chinatown, Little India and an Orchard Road shopping spree.' },
      { title: 'Jewel Changi & Departure', desc: 'Marvel at the Rain Vortex at Jewel before your flight home.' },
    ],
  },
  {
    name: 'Maldives',
    title: 'Summer Holiday In Maldives',
    description: 'Crystal-clear waters and luxury beaches.',
    image: package2,
    price: '₹74,999',
    duration: '7D/6N',
    capacity: '10 pax',
    reviews: 20,
    bestTime: 'November – April',
    pace: 'Relaxed',
    highlights: ['Water Villa', 'House Reef', 'Dolphin Cruise', 'Sandbank Picnic'],
    itinerary: [
      { title: 'Malé Arrival', desc: 'Speedboat transfer to your island resort, sunset from the deck.' },
      { title: 'Water Villa Day', desc: 'Snorkel the house reef right off your villa and laze on the beach.' },
      { title: 'Island Hopping', desc: 'Visit local islands for culture, crafts and coconut-shaded beaches.' },
      { title: 'Water Sports', desc: 'Jet ski, banana boat and kayaking over the turquoise lagoon.' },
      { title: 'Dolphin Cruise', desc: 'Evening cruise to spot spinner dolphins, followed by a sandbank picnic.' },
      { title: 'Spa & Beach Dinner', desc: 'Couples spa session and a candle-lit dinner on the sand.' },
      { title: 'Departure', desc: 'One last swim before the seaplane ride back to Malé.' },
    ],
  },
  {
    name: 'Thailand',
    title: 'Explore Thailand',
    description: 'Culture, beaches, and vibrant nightlife.',
    image: package3,
    price: '₹18,000',
    duration: '4D/3N',
    capacity: '15 pax',
    reviews: 40,
    bestTime: 'November – March',
    pace: 'Easy',
    highlights: ['Coral Island', 'Bangkok Temples', 'Floating Market', 'Street Food'],
    itinerary: [
      { title: 'Bangkok Arrival', desc: 'Golden temples, tuk-tuk rides and a Chao Phraya river dinner cruise.' },
      { title: 'Coral Island', desc: 'Speedboat to Koh Larn for snorkelling, parasailing and beach time.' },
      { title: 'Markets & Culture', desc: 'Damnoen Saduak floating market and the Grand Palace circuit.' },
      { title: 'Shopping & Departure', desc: 'Last-minute haul at Chatuchak or MBK before the flight home.' },
    ],
  },
  {
    name: 'Vietnam',
    title: 'Discover Vietnam',
    description: 'Rich culture and scenic landscapes.',
    image: package4,
    price: '₹62,999',
    duration: '4D/3N',
    capacity: '5 pax',
    reviews: 20,
    bestTime: 'October – April',
    pace: 'Easy',
    highlights: ['Ha Long Bay', 'Old Quarter', 'Trang An', 'Mua Caves'],
    itinerary: [
      { title: 'Hanoi Arrival', desc: 'Wander the Old Quarter, egg coffee by Hoan Kiem Lake and a water puppet show.' },
      { title: 'Ha Long Bay Cruise', desc: 'Sail past limestone karsts, kayak into hidden lagoons and feast on seafood.' },
      { title: 'Ninh Binh Day Trip', desc: 'Trang An sampan boat ride and the 500-step climb to Mua Caves viewpoint.' },
      { title: 'Departure', desc: 'Morning pho and souvenir shopping before the flight home.' },
    ],
  },
  {
    name: 'Dubai',
    title: 'Dubai Experience',
    description: 'Luxury and innovation in one city.',
    image: package6,
    price: '₹29,999',
    duration: '7D/6N',
    capacity: '10 pax',
    reviews: 25,
    bestTime: 'November – March',
    pace: 'Easy',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Abu Dhabi', 'Dubai Mall'],
    itinerary: [
      { title: 'Arrival — Dubai Marina', desc: 'Check in and take an evening stroll along the Marina and JBR walk.' },
      { title: 'City Tour & Burj Khalifa', desc: 'Old Dubai, abra ride across the creek and "At the Top" of Burj Khalifa.' },
      { title: 'Desert Safari', desc: 'Dune bashing, camel rides, sandboarding and a BBQ dinner with live shows.' },
      { title: 'Abu Dhabi Day Trip', desc: 'Sheikh Zayed Grand Mosque and a stop at Ferrari World.' },
      { title: 'Dubai Mall & Fountain', desc: 'Aquarium, Dubai Frame and the evening fountain show.' },
      { title: 'Beach & Leisure', desc: 'Kite Beach morning, Miracle Garden or Global Village by evening.' },
      { title: 'Departure', desc: 'Duty-free run at DXB before heading home.' },
    ],
  },
];

/* Destinations featured in the Smart Trip Planner section */
const plannerNames = [
  'Leh Ladakh',
  'Spiti Valley',
  'Manali',
  'Kashmir',
  'Rajasthan',
  'Chopta Chandrashila',
];

export const plannerTrips = plannerNames.map((n) =>
  destinations.find((d) => d.name === n)
);
