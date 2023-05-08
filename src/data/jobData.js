const jobs = [
  {
    benefits: [
      { tooltip: 'Certifications', iconClass: 'bi bi-file-earmark-check' },
      { tooltip: 'End year party', iconClass: 'bi bi-emoji-sunglasses' },
      { tooltip: 'Training', iconClass: 'bi bi-clipboard-check' },
    ],
    company: 'OffiMedicas S.A',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png',
    location: 'In Office (Sabana de Torres)',
    salary: '$ 1.4M COP',
    skills: ['Office Tools', 'Assertive Communiaction', 'Attiude To Service'],
    time: '4 days ago',
    title: 'Technician in Pharmaceutiical Servies Sabana de Torres',
    vacancies: 50,
  },
  {
    benefits: [
      { tooltip: 'Partially remote job', iconClass: 'bi bi-geo-alt' },
      { tooltip: 'Insurance', iconClass: 'bi bi-lock' },
      { tooltip: 'End year party', iconClass: 'bi bi-emoji-sunglasses' },
    ],
    company: 'Confidential',
    img: 'https://peaku.co/img/company.svg',
    location: 'Bogotá',
    salary: '$ 1M - 1.4M COP',
    skills: ['Client Service', 'Attiude To Service', 'Attention To Users'],
    time: '5 days ago',
    title: 'Administrative assistant - commercial',
    vacancies: 1,
  },
  {
    benefits: [],
    company: 'UBERFLUG',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/39607/Logo_Uberflug.jpeg',
    location: 'Remote in Colombia',
    salary: '$ 5.5M - 7.5M COP',
    skills: ['Php 7', 'Node Js', 'Laravel'],
    time: '4 days ago',
    title: 'Backend Developer',
    vacancies: 1,
  },
  {
    benefits: [],
    company: 'Esri Colombia',
    img: 'https://peaku.co/img/company.svg',
    location: 'Bogotá',
    salary: '$ 3M - 4M COP',
    skills: ['Office Tools', 'Assertive Communiaction', 'Attiude To Service'],
    time: '5 days ago',
    title: 'Data Analyst',
    vacancies: 1,
  },
  {
    benefits: [],
    company: 'Data Tools',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/70701/descarga.jpg',
    location: 'Bogotá',
    salary: '$ 6M COP',
    skills: ['Blue', 'Web Applications', 'Databases'],
    time: '5 days ago',
    title: 'Azure Technical Lead',
    vacancies: 1,
  },
  {
    benefits: [
      { tooltip: 'Private health insurance', iconClass: 'bi bi-heart' },
      { tooltip: 'Flexible schedule', iconClass: 'bi bi-watch' },
      { tooltip: 'Partially remote job', iconClass: 'bi bi-geo-alt' },
      {
        tooltip: 'Special day celebrations',
        iconClass: 'bi bi-emoji-sunglasses',
      },
      { tooltip: 'Friendly work environment', iconClass: 'bi bi-people' },
      { tooltip: 'Training', iconClass: 'bi bi-clipboard-check' },
    ],
    company: 'Vichara Technologies',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/4310/vichara.jpeg',
    location: 'Remote in Colombia',
    salary: '$ 3M - 5M COP',
    skills: ['Figma', 'Email Marketing'],
    time: '5 days ago',
    title: 'Marketing Analyst',
    vacancies: 1,
  },
  {
    benefits: [
      { tooltip: 'Certifications', iconClass: 'bi bi-file-earmark-check' },
      { tooltip: 'End year party', iconClass: 'bi bi-emoji-sunglasses' },
      { tooltip: 'Training', iconClass: 'bi bi-clipboard-check' },
    ],
    company: 'OffiMedicas S.A',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/80893/offiemedicas.png',
    location: 'In Office (Bucaramanga)',
    salary: '$ 1.3M COP',
    skills: ['Leadership', 'Result Oriented', 'Supervision'],
    time: '5 days ago',
    title: 'Audit Assistant / Bucaramanga',
    vacancies: 5,
  },
  {
    benefits: [
      { tooltip: 'Private health insurance', iconClass: 'bi bi-heart' },
      { tooltip: 'Flexible schedule', iconClass: 'bi bi-watch' },
      { tooltip: 'Partially remote job', iconClass: 'bi bi-geo-alt' },
      {
        tooltip: 'Special day celebrations',
        iconClass: 'bi bi-emoji-sunglasses',
      },
      { tooltip: 'Friendly work environment', iconClass: 'bi bi-people' },
      { tooltip: 'Training', iconClass: 'bi bi-clipboard-check' },
    ],
    company: 'Vichara Technologies',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/4310/vichara.jpeg',
    location: 'Hybrid - mix remote and in office...',
    salary: '$ 6M - 8M COP',
    skills: [
      'Cold Prospecting',
      'Business Closure',
      'B2b Business Relationship',
    ],
    time: '6 days ago',
    title: 'B2B Sales Executive',
    vacancies: 1,
  },

  {
    benefits: [],
    company: 'Dentaid',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/11337/Dentaid.png',
    location: 'Hybrid - mix remote and in office...',
    salary: '$ 1.8M - 4M COP',
    skills: ['Selling Ability', 'Sales', 'Technologial Tools'],
    time: '6 days ago',
    title: 'Medical Visitor',
    vacancies: 1,
  },

  {
    benefits: [
      { tooltip: 'Partially remote job', iconClass: 'bi bi-geo-alt' },
      { tooltip: 'Insurance', iconClass: 'bi bi-lock' },
      { tooltip: 'End year party', iconClass: 'bi bi-emoji-sunglasses' },
    ],
    company: 'Confidential',
    location: 'Pasto',
    salary: '$ 1.2M - 1.8M COP',
    skills: ['Selling Ability', 'Sales', 'Technologial Tools'],
    time: '6 days ago',
    title: 'Support Technician - PASTO',
    vacancies: 1,
  },

  {
    benefits: [],
    company: 'Dentaid',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/41942/metf.png',
    location: 'Hybrid - mix remote and in office',
    salary: '$ 2M - 7M COP',
    skills: ['Business Closure', 'Prospecting', 'Result Oriented'],
    time: '10 days ago',
    title: 'Commercial Insurance Specialist Consultant',
    vacancies: 1,
  },

  {
    benefits: [
      { tooltip: 'Remote job', iconClass: 'bi bi-geo-alt' },
      { tooltip: 'Vesting', iconClass: 'bi bi-cash' },
    ],
    company: 'Dentaid',
    img: 'https://s3-us-west-2.amazonaws.com/peaku-public/business/Company/logo_url/52905/19.png',
    location: 'Remote - Anywhere',
    salary: '$ 40K - 70K USD',
    skills: ['Restful Api', 'Node Js (Express)', 'NoSQL'],
    time: '10 days ago',
    title: 'SSR Node Developer',
    vacancies: 1,
  },
]

export default jobs
