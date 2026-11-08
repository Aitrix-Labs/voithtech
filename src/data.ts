import { asset } from './asset'

export const brand = {
  name: 'VoithTech',
  domain: 'voithtech',
  tagline: 'Technology that sets the world in motion',
}

export const mainNav = [
  { label: 'Drive Technology', to: '/drive-technology' },
  { label: 'Hydropower', to: '/hydropower' },
  { label: 'Papermaking', to: '/papermaking' },
]

export const serviceNav = [
  { label: 'Innovation', to: '/innovation' },
  { label: 'Company', to: '/company' },
  { label: 'News', to: '/news' },
  { label: 'Career', to: '/career' },
]

export const heroSlides = [
  {
    id: 'technology',
    overline: '',
    title: 'Technology that sets the world',
    accent: 'in motion',
    cta: 'Discover our company',
    to: '/company',
    image: asset('images/hero/technology.jpg'),
    solid: true,
  },
  {
    id: 'propeller',
    overline: 'VoithTech Schneider Propeller',
    title: 'Engineered beyond',
    accent: '>propulsion',
    cta: '100 years of proven performance',
    to: '/drive-technology',
    image: asset('images/hero/propeller.jpg'),
    solid: false,
  },
  {
    id: 'hydro',
    overline: 'Hydropower',
    title: 'Pumped Storage',
    accent: 'Large-Scale Energy Storage for Grid Stability',
    cta: 'Discover our pumped storage solutions',
    to: '/hydropower',
    image: asset('images/hero/hydropower.jpg'),
    solid: false,
  },
  {
    id: 'paper',
    overline: 'Papermaking',
    title: 'Built for performance.',
    accent: 'Designed for the future.',
    cta: 'Discover Xcelline paper machines',
    to: '/papermaking',
    image: asset('images/hero/papermaking.jpg'),
    solid: false,
  },
  {
    id: 'service',
    overline: 'Service',
    title: 'VoithTech Service',
    accent: 'One step ahead',
    cta: 'Discover our service portfolio',
    to: '/services',
    image: asset('images/hero/service.jpg'),
    solid: false,
  },
]

export const standFor = {
  overline: 'What we stand for',
  title: 'Always moving, always ahead',
  body: 'As a technology leader, we power progress in industries across the globe. As a family-owned company, we take responsibility for ensuring that progress and sustainability go hand in hand.',
  cta: 'Learn more about VoithTech',
  to: '/company',
  pillars: [
    {
      id: 'technology',
      title: 'Technology',
      body: 'Cutting-edge technology meets true innovators: In an ever-evolving industrial landscape, our experts continuously push the limits of engineering.',
    },
    {
      id: 'digitalization',
      title: 'Digitalization',
      body: 'By harnessing the power of digitalization, we enhance the efficiency of our products and solutions, while setting new standards in our industries.',
    },
    {
      id: 'decarbonization',
      title: 'Decarbonization',
      body: 'As a family-owned company, we are committed to paving the way towards a more sustainable future and significantly increase our customers’ energy efficiency.',
    },
  ],
}

export const businessFields = {
  overline: 'Our Business Fields',
  title: 'One global powerhouse, three core industries',
  items: [
    {
      title: 'Drive technology',
      body: 'With our core competence in drive systems and technologies, we pursue the same goal worldwide: maximum efficiency.',
      image: asset('images/fields/drive.webp'),
      to: '/drive-technology',
    },
    {
      title: 'Hydropower',
      body: 'From entire plants, components and automation systems to spare parts, maintenance and training services, we are your reliable partner.',
      image: asset('images/fields/hydro.webp'),
      to: '/hydropower',
    },
    {
      title: 'Papermaking',
      body: 'As the leading full-line supplier, we provide customer-centric solutions for an efficient and sustainable papermaking process.',
      image: asset('images/fields/paper.webp'),
      to: '/papermaking',
    },
  ],
}

export const promise = {
  overline: 'Our promise',
  title: 'By your side',
  accent: '>all the way',
  body: 'Our trusted experts support you every step of the way. Always available, absolutely reliable. We go the extramile to keep your business running.',
  cta: 'More about our services',
  to: '/services',
  image: asset('images/sections/promise.jpg'),
}

export const portfolio = {
  overline: 'Products and Services',
  title: 'Our portfolio highlights',
  items: [
    {
      title: 'Crafting the next chapter of papermaking',
      to: '/papermaking',
      tone: 'blue' as const,
    },
    {
      title: 'Making hydropower projects happen',
      to: '/hydropower',
      tone: 'blue' as const,
    },
    {
      title: 'Driving change in mobility and industries',
      to: '/drive-technology',
      tone: 'blue' as const,
    },
    {
      title: 'Find products and services',
      to: '/services',
      tone: 'light' as const,
    },
  ],
}

export const career = {
  overline: 'Your career at VoithTech',
  title: 'Let’s create lasting',
  accent: '>impact',
  body: 'With almost 21,000 employees and locations all over the world, we are united by one goal: to create a future worth living.',
  support: 'Join our team and work on exciting technological challenges that can help change the world.',
  cta: 'About careers at VoithTech',
  to: '/career',
  image: asset('images/sections/career.webp'),
  positions: 248,
}

export const news = {
  overline: 'Latest announcements',
  title: 'We keep things running',
  accent: '>and stories coming<',
  cta: 'View all news',
  to: '/news',
  image: asset('images/sections/news.webp'),
  items: [
    {
      date: '29 Oct 2026',
      title: 'New brand identity makes VoithTech’s strategic evolution visible',
      to: '/news',
    },
    {
      date: '12 Sep 2026',
      title: 'Pumped storage: large-scale energy storage for grid stability',
      to: '/hydropower',
    },
    {
      date: '03 Aug 2026',
      title: 'Xcelline paper machines — built for performance, designed for the future',
      to: '/papermaking',
    },
  ],
}

export const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'Drive technology', to: '/drive-technology' },
      { label: 'Hydropower', to: '/hydropower' },
      { label: 'Papermaking', to: '/papermaking' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'For hydropower', to: '/services' },
      { label: 'For papermaking', to: '/services' },
      { label: 'For drive systems', to: '/services' },
    ],
  },
  {
    title: 'Inside Innovation',
    links: [
      { label: 'Artificial intelligence', to: '/innovation' },
      { label: 'Digitalization', to: '/innovation' },
      { label: 'Sustainability', to: '/company' },
    ],
  },
  {
    title: 'About VoithTech',
    links: [
      { label: 'Management', to: '/company' },
      { label: 'Newsroom', to: '/news' },
      { label: 'Social responsibility', to: '/company' },
      { label: 'Supplier ecosystem', to: '/company' },
    ],
  },
  {
    title: 'Career',
    links: [
      { label: 'Application', to: '/career' },
      { label: 'Working at VoithTech', to: '/career' },
      { label: 'Start your career', to: '/career' },
      { label: 'Job search', to: '/career' },
    ],
  },
]

export const legalLinks = [
  { label: 'Imprint', to: '/company' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/company' },
  { label: 'Terms and Conditions', to: '/company' },
]

export type PageContent = {
  path: string
  overline: string
  title: string
  lead: string
  body: string[]
  image: string
  highlights: { title: string; body: string }[]
}

export const pages: PageContent[] = [
  {
    path: '/drive-technology',
    overline: 'Drive Technology',
    title: 'Maximum efficiency worldwide',
    lead: 'With our core competence in drive systems and technologies, we pursue the same goal worldwide: maximum efficiency.',
    body: [
      'From marine propulsion and rail to mining, recycling, and industrial mobility, VoithTech drive systems keep essential industries moving.',
      'Digital monitoring, predictive maintenance, and service excellence ensure your assets stay productive over their full lifecycle.',
    ],
    image: asset('images/fields/drive.webp'),
    highlights: [
      { title: 'Marine & propulsion', body: 'Proven propeller and drive solutions engineered beyond propulsion.' },
      { title: 'Industrial drives', body: 'Reliable torque and speed solutions for demanding environments.' },
      { title: 'Digital services', body: 'Condition monitoring and predictive maintenance for uptime.' },
    ],
  },
  {
    path: '/hydropower',
    overline: 'Hydropower',
    title: 'Making hydropower projects happen',
    lead: 'From entire plants to spare parts, automation, and training — we are your reliable hydropower partner.',
    body: [
      'Pumped storage provides large-scale energy storage for grid stability. Our turbines, generators, and automation systems power clean energy worldwide.',
      'Whether large hydro, small hydro, or modernization, VoithTech delivers components, systems, and HyService support end to end.',
    ],
    image: asset('images/hero/hydropower.jpg'),
    highlights: [
      { title: 'Pumped storage', body: 'Grid-scale storage that stabilizes renewable energy systems.' },
      { title: 'Modernization', body: 'Upgrade existing plants for efficiency and longevity.' },
      { title: 'HyService', body: 'Spare parts, maintenance, and training when you need them.' },
    ],
  },
  {
    path: '/papermaking',
    overline: 'Papermaking',
    title: 'Crafting the next chapter of papermaking',
    lead: 'As a full-line supplier, we deliver customer-centric solutions for efficient and sustainable papermaking.',
    body: [
      'Xcelline paper machines are built for performance and designed for the future — combining mechanical excellence with digitalization.',
      'From stock preparation to autonomous mill concepts, VoithTech helps papermakers raise quality while cutting energy use.',
    ],
    image: asset('images/hero/papermaking.jpg'),
    highlights: [
      { title: 'Xcelline machines', body: 'High-performance lines ready for tomorrow’s markets.' },
      { title: 'Digital mills', body: 'Autonomous and connected papermaking workflows.' },
      { title: 'Sustainability', body: 'Barrier papers and efficiency that lower footprint.' },
    ],
  },
  {
    path: '/services',
    overline: 'Services',
    title: 'VoithTech Service — one step ahead',
    lead: 'Trusted experts support you every step of the way. Always available, absolutely reliable.',
    body: [
      'We go the extra mile to keep your business running — with 24/7 contact, remote service, training, and genuine parts.',
      'Our service portfolio spans hydropower, papermaking, and drive systems with a single promise: by your side all the way.',
    ],
    image: asset('images/hero/service.jpg'),
    highlights: [
      { title: '24/7 support', body: 'Reach experts whenever production depends on it.' },
      { title: 'Remote service', body: 'Fast diagnostics and guidance without delay.' },
      { title: 'Training', body: 'Build operator confidence with HydroSchool and field programs.' },
    ],
  },
  {
    path: '/innovation',
    overline: 'Inside Innovation',
    title: 'Shaping what’s next',
    lead: 'Technology, digitalization, and decarbonization — the forces that move VoithTech forward.',
    body: [
      'Our experts push engineering limits while AI and digital platforms raise efficiency across industries.',
      'As a family-owned company, we invest in solutions that make progress and sustainability inseparable.',
    ],
    image: asset('images/hero/technology.jpg'),
    highlights: [
      { title: 'Artificial intelligence', body: 'Smarter maintenance and autonomous operations.' },
      { title: 'Digitalization', body: 'Connected products that set new industry standards.' },
      { title: 'Sustainability', body: 'Design choices that cut energy and emissions.' },
    ],
  },
  {
    path: '/company',
    overline: 'Company',
    title: 'Always moving, always ahead',
    lead: 'As a technology leader, we power progress across the globe — with responsibility built in.',
    body: [
      'VoithTech unites drive technology, hydropower, and papermaking under one brand focused on movement and the future.',
      'Locations worldwide and nearly 21,000 colleagues share one goal: create a future worth living.',
    ],
    image: asset('images/sections/promise.jpg'),
    highlights: [
      { title: 'Management', body: 'A leadership team guiding long-term industrial progress.' },
      { title: 'Responsibility', body: 'Social impact, compliance, and supplier partnerships.' },
      { title: 'Locations', body: 'A global footprint close to customers and markets.' },
    ],
  },
  {
    path: '/news',
    overline: 'Newsroom',
    title: 'We keep things running — and stories coming',
    lead: 'Latest announcements from across VoithTech industries and innovation.',
    body: [
      'Follow product launches, brand milestones, and technology stories that keep essential industries moving.',
    ],
    image: asset('images/sections/news.webp'),
    highlights: news.items.map((item) => ({ title: item.title, body: item.date })),
  },
  {
    path: '/career',
    overline: 'Career',
    title: 'Let’s create lasting impact',
    lead: 'Join a global team working on technological challenges that can help change the world.',
    body: [
      'From pupils and students to professionals, VoithTech offers paths to grow with meaningful engineering work.',
      'Explore open positions worldwide and discover what defines working at VoithTech.',
    ],
    image: asset('images/sections/career.webp'),
    highlights: [
      { title: 'Working here', body: 'Benefits, culture, and colleagues who move industries.' },
      { title: 'Entry paths', body: 'Programs for students, graduates, and experienced hires.' },
      { title: 'Job search', body: 'Find roles across hydropower, paper, and drive technology.' },
    ],
  },
  {
    path: '/contact',
    overline: 'Contact',
    title: 'Talk to VoithTech',
    lead: 'Reach our teams for products, services, and career questions.',
    body: [
      'Whether you need a project consultation or service support, we are ready to help.',
      'Email hello@voithtech.com or use the form on this page — we respond promptly.',
    ],
    image: asset('images/hero/service.jpg'),
    highlights: [
      { label: 'Email', body: 'hello@voithtech.com' } as { title?: string; label?: string; body: string },
      { title: 'Service', body: '24/7 support for installed equipment.' },
      { title: 'Careers', body: 'careers@voithtech.com' },
    ].map((h) => ({ title: h.title ?? h.label ?? 'Contact', body: h.body })),
  },
]
