const define = {
  IMG_BASE_URL: 'https://s3-ap-northeast-1.amazonaws.com/sabian-symbols/',
  FULL_SIZE_IMG_BASE_URL: 'https://s3-ap-northeast-1.amazonaws.com/sabian-symbols/1080px/',
  PLANET_ICON_DIR: '/img/planet/',
  WEEK_ORDER: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'],
  CHALDEAN_ORDER: ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'],
  PLANET_LIST: {
    Sun:{
      text: '☉',
      ratio: 1.4,
      orb: 17,
      chaldean_order: 4,
      element: 'Fire',
      name: '太陽',
    },
    Moon:{
      text: '☽',
      ratio: 1,
      orb: 12.5,
      chaldean_order: 7,
      element: 'Water',
      name: '月',
    },
    Mercury:{
      text: '☿',
      ratio: 0.7,
      speed: 0.985555,
      orb: 7,
      chaldean_order: 6,
      element: 'Earth',
      name: '水星',
    },
    Venus:{
      text: '♀',
      ratio: 0.6,
      bold: true,
      speed: 0.985555,
      orb: 8,
      chaldean_order: 5,
      element: 'Water',
      name: '金星',
    },
    Mars:{
      text: '♂',
      ratio: 0.55,
      bold: true,
      speed: 0.524166,
      orb: 7.5,
      chaldean_order: 3,
      element: 'Fire',
      name: '火星',
    },
    Jupiter:{
      text: '♃',
      ratio: 0.7,
      speed: 0.083055,
      orb: 12,
      chaldean_order: 2,
      element: 'Air',
      name: '木星',
    },
    Saturn:{
      text: '♄',
      ratio: 0.7,
      speed: 0.033611,
      orb: 10,
      chaldean_order: 1,
      element: 'Earth',
      name: '土星',
    },
    Uranus:{
      text: '♅',
      ratio: 0.7,
      speed: 0.011733,
    },
    Neptune:{
      text: '♆',
      ratio: 0.7,
      speed: 0.005973,
    },
    Pluto:{
      text: '♇',
      ratio: 0.6,
      speed: 0.003974,
    },
    AC:{
      text: 'AC',
      ratio: 0.3,
    },
    MC:{
      text: 'MC',
      ratio: 0.3,
    },
    DC:{
      text: 'DC',
      ratio: 0.3,
    },
    IC:{
      text: 'IC',
      ratio: 0.3,
    },
    TrueNode:{
      text: '☊',
      ratio: 0.7,
      bold: true,
      orb: 0,
      chaldean_order: 0,
    },
    POF:{
      text: '⊗',
      ratio: 0.5,
      bold: true,
      orb: 0,
      chaldean_order: 0,
    },
  },
  SIGN_LIST: [
    {
      key: 'Aries',
      ruler:'Mars',
      exaltation:{n:19, p:'Sun'},
      day_triplicity:'Sun',
      night_triplicity:'Jupiter',
      term:[
        {n:6, p:'Jupiter'},
        {n:14, p:'Venus'},
        {n:21, p:'Mercury'},
        {n:26, p:'Mars'},
        {n:30, p:'Saturn'},
      ],
      face: ['Mars', 'Sun', 'Venus'],
      detriment: 'Venus',
      fall: 'Saturn',
      element: 'Fire',
    },
    {
      key: 'Taurus',
      ruler:'Venus',
      exaltation:{n:3, p:'Moon'},
      day_triplicity:'Venus',
      night_triplicity:'Moon',
      term:[
        {n:8, p:'Venus'},
        {n:15, p:'Mercury'},
        {n:22, p:'Jupiter'},
        {n:26, p:'Saturn'},
        {n:30, p:'Mars'},
      ],
      face: ['Mercury', 'Moon', 'Saturn'],
      detriment: 'Mars',
      fall: null,
      element: 'Earth',
    },
    {
      key: 'Gemini',
      ruler:'Mercury',
      exaltation:{n:3, p:'NorthNode'},
      day_triplicity:'Saturn',
      night_triplicity:'Mercury',
      term:[
        {n:7, p:'Mercury'},
        {n:14, p:'Jupiter'},
        {n:21, p:'Venus'},
        {n:25, p:'Saturn'},
        {n:30, p:'Mars'},
      ],
      face: ['Jupiter', 'Mars', 'Sun'],
      detriment: 'Jupiter',
      fall: null,
      element: 'Air',
    },
    {
      key: 'Cancer',
      ruler:'Moon',
      exaltation:{n:15, p:'Jupiter'},
      day_triplicity:'Mars',
      night_triplicity:'Mars',
      term:[
        {n:6, p:'Mars'},
        {n:13, p:'Jupiter'},
        {n:20, p:'Mercury'},
        {n:27, p:'Venus'},
        {n:30, p:'Saturn'},
      ],
      face: ['Venus', 'Mercury', 'Moon'],
      detriment: 'Saturn',
      fall: 'Mars',
      element: 'Water',
    },
    {
      key: 'Leo',
      ruler:'Sun',
      exaltation: {n:null, p: null},
      day_triplicity:'Sun',
      night_triplicity:'Jupiter',
      term:[
        {n:6, p:'Saturn'},
        {n:13, p:'Mercury'},
        {n:19, p:'Venus'},
        {n:25, p:'Jupiter'},
        {n:30, p:'Mars'},
      ],
      face: ['Saturn', 'Jupiter', 'Mars'],
      detriment: 'Saturn',
      fall: null,
      element: 'Fire',
    },
    {
      key: 'Virgo',
      ruler:'Mercury',
      exaltation:{n:15, p:'Mercury'},
      day_triplicity:'Venus',
      night_triplicity:'Moon',
      term:[
        {n:7, p:'Mercury'},
        {n:13, p:'Venus'},
        {n:18, p:'Jupiter'},
        {n:24, p:'Saturn'},
        {n:30, p:'Mars'},
      ],
      face: ['Sun', 'Venus', 'Mercury'],
      detriment: 'Jupiter',
      fall: 'Venus',
      element: 'Earth',
    },
    {
      key: 'Libra',
      ruler:'Venus',
      exaltation:{n:21, p:'Saturn'},
      day_triplicity:'Saturn',
      night_triplicity:'Mercury',
      term:[
        {n:6, p:'Saturn'},
        {n:11, p:'Venus'},
        {n:19, p:'Jupiter'},
        {n:24, p:'Mercury'},
        {n:30, p:'Mars'},
      ],
      face: ['Moon', 'Saturn', 'Jupiter'],
      detriment: 'Mars',
      fall: 'Sun',
      element: 'Air',
    },
    {
      key: 'Scorpio',
      ruler:'Mars',
      exaltation: {n:null, p: null},
      day_triplicity:'Mars',
      night_triplicity:'Mars',
      term:[
        {n:6, p:'Mars'},
        {n:14, p:'Jupiter'},
        {n:21, p:'Venus'},
        {n:27, p:'Mercury'},
        {n:30, p:'Saturn'},
      ],
      face: ['Mars', 'Sun', 'Venus'],
      detriment: 'Venus',
      fall: 'Moon',
      element: 'Water',
    },
    {
      key: 'Sagittarius',
      ruler:'Jupiter',
      exaltation:{n:3, p:'SouthNode'},
      day_triplicity:'Sun',
      night_triplicity:'Jupiter',
      term:[
        {n:8, p:'Jupiter'},
        {n:14, p:'Venus'},
        {n:19, p:'Mercury'},
        {n:25, p:'Saturn'},
        {n:30, p:'Mars'},
      ],
      face: ['Mercury', 'Moon', 'Saturn'],
      detriment: 'Mercury',
      fall: null,
      element: 'Fire',
    },
    {
      key: 'Capricorn',
      ruler:'Saturn',
      exaltation:{n:28, p:'Mars'},
      day_triplicity:'Venus',
      night_triplicity:'Moon',
      term:[
        {n:6, p:'Venus'},
        {n:12, p:'Mercury'},
        {n:19, p:'Jupiter'},
        {n:25, p:'Mars'},
        {n:30, p:'Saturn'},
      ],
      face: ['Jupiter', 'Mars', 'Sun'],
      detriment: 'Moon',
      fall: 'Jupiter',
      element: 'Earth',
    },
    {
      key: 'Aquarius',
      ruler:'Saturn',
      exaltation: {n:null, p: null},
      day_triplicity:'Saturn',
      night_triplicity:'Mercury',
      term:[
        {n:6, p:'Saturn'},
        {n:12, p:'Mercury'},
        {n:20, p:'Venus'},
        {n:25, p:'Jupiter'},
        {n:30, p:'Mars'},
      ],
      face: ['Venus', 'Mercury', 'Moon'],
      detriment: 'Sun',
      fall: null,
      element: 'Air',
    },
    {
      key: 'Pisces',
      ruler:'Jupiter',
      exaltation:{n:27, p:'Venus'},
      day_triplicity:'Mars',
      night_triplicity:'Mars',
      term:[
        {n:8, p:'Venus'},
        {n:14, p:'Jupiter'},
        {n:20, p:'Mercury'},
        {n:26, p:'Mars'},
        {n:30, p:'Saturn'},
      ],
      face: ['Saturn', 'Jupiter', 'Mars'],
      detriment: 'Mercury',
      fall: 'Mercury',
      element: 'Water',
    },
  ],
  cookie:{
  },
  year_milisecond: 365.2425 * 24 * 60 * 60 * 1000,
}
module.exports = define