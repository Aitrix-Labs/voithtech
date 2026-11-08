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
    solid: false,
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

export type PageTopic = {
  title: string
  body: string
  to?: string
}

export type PageContent = {
  path: string
  overline: string
  title: string
  lead: string
  body: string[]
  image: string
  highlights: { title: string; body: string }[]
  topicsOverline: string
  topicsTitle: string
  topics: PageTopic[]
  feature: {
    overline: string
    title: string
    accent?: string
    body: string
    cta: string
    to: string
    image: string
  }
  stats?: { value: string; label: string }[]
  related: { label: string; to: string }[]
  showContactForm?: boolean
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
    image: asset('images/hero/propeller.jpg'),
    highlights: [
      { title: 'Marine & propulsion', body: 'Proven propeller and drive solutions engineered beyond propulsion.' },
      { title: 'Industrial drives', body: 'Reliable torque and speed solutions for demanding environments.' },
      { title: 'Digital services', body: 'Condition monitoring and predictive maintenance for uptime.' },
    ],
    topicsOverline: 'Markets & applications',
    topicsTitle: 'Drive solutions across industries',
    topics: [
      { title: 'Marine Technology', body: 'Propulsion and onboard systems built for precision and reliability.', to: '/services' },
      { title: 'Rail Vehicles', body: 'Couplers, drives, and digital systems for freight and passenger fleets.', to: '/services' },
      { title: 'Mining & materials', body: 'Heavy-duty drives for continuous operation in harsh environments.', to: '/services' },
      { title: 'Mechanical engineering', body: 'Torque, speed, and power transmission for industrial machinery.', to: '/services' },
      { title: 'Recycling', body: 'Efficient drivetrains that keep circular processes running.', to: '/services' },
      { title: 'Test engineering', body: 'Measurement and validation systems for driveline performance.', to: '/innovation' },
    ],
    feature: {
      overline: 'Digital drive technology',
      title: 'Predictive maintenance',
      accent: '>that keeps you moving',
      body: 'AI-powered monitoring and diagnostics help you prevent downtime before it starts — across shafts, drives, and marine systems.',
      cta: 'Explore innovation',
      to: '/innovation',
      image: asset('images/fields/drive.webp'),
    },
    stats: [
      { value: '100+', label: 'years of propulsion expertise' },
      { value: '50+', label: 'countries with drive support' },
      { value: '24/7', label: 'service availability' },
    ],
    related: [
      { label: 'Services for drive systems', to: '/services' },
      { label: 'Careers in engineering', to: '/career' },
      { label: 'Contact our team', to: '/contact' },
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
    topicsOverline: 'Products & services',
    topicsTitle: 'Complete hydropower portfolio',
    topics: [
      { title: 'Large Hydro', body: 'Turbines, generators, and plant engineering for utility-scale projects.', to: '/services' },
      { title: 'Pumped Storage', body: 'Flexible energy storage that balances renewable grids.', to: '/services' },
      { title: 'Small Hydro', body: 'Compact solutions for decentralized renewable generation.', to: '/services' },
      { title: 'Modernization', body: 'Life-extension upgrades that raise output and reliability.', to: '/services' },
      { title: 'Automation', body: 'Intelligent controls for safer, smarter plant operations.', to: '/innovation' },
      { title: 'HydroSchool', body: 'Training programs that build operator and engineer capability.', to: '/career' },
    ],
    feature: {
      overline: 'Grid stability',
      title: 'Pumped storage',
      accent: '>for the energy transition',
      body: 'Large-scale storage keeps grids stable as renewables grow. VoithTech delivers turbines, pumps, and automation for projects that last decades.',
      cta: 'Talk to hydropower experts',
      to: '/contact',
      image: asset('images/fields/hydro.webp'),
    },
    stats: [
      { value: '160+', label: 'years of hydro heritage' },
      { value: '40+', label: 'GW installed capacity supported' },
      { value: 'Global', label: 'HyService network' },
    ],
    related: [
      { label: 'Service for hydropower', to: '/services' },
      { label: 'Company overview', to: '/company' },
      { label: 'Contact', to: '/contact' },
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
    topicsOverline: 'Mill-wide solutions',
    topicsTitle: 'From stock to finished paper',
    topics: [
      { title: 'Paper machines', body: 'Xcelline lines engineered for speed, quality, and uptime.', to: '/services' },
      { title: 'Stock preparation', body: 'Systems that stabilize furnish quality and reduce waste.', to: '/services' },
      { title: 'Rebuilds', body: 'Modernization packages that extend mill competitiveness.', to: '/services' },
      { title: 'Digital portfolio', body: 'Sensors, software, and autonomy for connected mills.', to: '/innovation' },
      { title: 'Aftermarket', body: 'Parts, fabrics, and service that protect production.', to: '/services' },
      { title: 'Nonwovens', body: 'Process solutions beyond classic paper grades.', to: '/services' },
    ],
    feature: {
      overline: 'Papermaking vision',
      title: 'Built for performance.',
      accent: 'Designed for the future.',
      body: 'Xcelline and digital mill concepts help you raise quality, cut energy, and move toward more autonomous production.',
      cta: 'Discover our services',
      to: '/services',
      image: asset('images/fields/paper.webp'),
    },
    stats: [
      { value: 'Full-line', label: 'supplier capability' },
      { value: 'Digital', label: 'mill concepts ready' },
      { value: 'Global', label: 'service & parts network' },
    ],
    related: [
      { label: 'Papermaking service', to: '/services' },
      { label: 'Innovation', to: '/innovation' },
      { label: 'Contact', to: '/contact' },
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
    topicsOverline: 'Service portfolio',
    topicsTitle: 'Support for every business field',
    topics: [
      { title: 'For hydropower', body: 'HyService, spare parts, modernization, and plant support.', to: '/hydropower' },
      { title: 'For papermaking', body: 'Mill service, fabrics, rebuilds, and remote assistance.', to: '/papermaking' },
      { title: 'For drive systems', body: 'Maintenance, monitoring, and lifecycle optimization.', to: '/drive-technology' },
      { title: 'Remote Service Center', body: 'Experts connected to your assets worldwide.', to: '/contact' },
      { title: 'Webshop', body: 'Genuine parts and consumables when you need them.', to: '/contact' },
      { title: 'Training', body: 'Practical programs for operators and engineers.', to: '/career' },
    ],
    feature: {
      overline: 'Our promise',
      title: 'By your side',
      accent: '>all the way',
      body: 'Always available, absolutely reliable. We go the extra mile to keep your operations running at peak performance.',
      cta: 'Contact service',
      to: '/contact',
      image: asset('images/sections/promise.jpg'),
    },
    stats: [
      { value: '24/7', label: 'global contact' },
      { value: '3', label: 'core industries covered' },
      { value: 'One', label: 'trusted service partner' },
    ],
    related: [
      { label: 'Drive Technology', to: '/drive-technology' },
      { label: 'Hydropower', to: '/hydropower' },
      { label: 'Papermaking', to: '/papermaking' },
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
    topicsOverline: 'Innovation themes',
    topicsTitle: 'Where engineering meets the future',
    topics: [
      { title: 'Artificial intelligence', body: 'From predictive maintenance to autonomous mill concepts.', to: '/papermaking' },
      { title: 'Digitalization', body: 'Data, sensors, and software embedded in products and plants.', to: '/services' },
      { title: 'Decarbonization', body: 'Efficiency and clean energy technologies that cut emissions.', to: '/hydropower' },
      { title: 'Crowd innovation', body: 'Open collaboration that accelerates new ideas.', to: '/company' },
      { title: 'Quality begins with people', body: 'Expertise and craftsmanship behind every breakthrough.', to: '/career' },
      { title: 'R&D network', body: 'Labs and technology centers worldwide.', to: '/company' },
    ],
    feature: {
      overline: 'Always ahead',
      title: 'Technology',
      accent: '>that sets the world in motion',
      body: 'We combine deep domain expertise with digital tools so customers can move faster, safer, and more sustainably.',
      cta: 'Join our team',
      to: '/career',
      image: asset('images/sections/news.webp'),
    },
    stats: [
      { value: 'AI', label: 'in products & service' },
      { value: 'Digital', label: 'platforms across industries' },
      { value: 'Green', label: 'efficiency by design' },
    ],
    related: [
      { label: 'Company', to: '/company' },
      { label: 'Newsroom', to: '/news' },
      { label: 'Career', to: '/career' },
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
    topicsOverline: 'About VoithTech',
    topicsTitle: 'How we create lasting impact',
    topics: [
      { title: 'Company overview', body: 'Family-owned technology group shaping essential industries.', to: '/contact' },
      { title: 'Management', body: 'Corporate and supervisory leadership with a long view.', to: '/news' },
      { title: 'Sustainability', body: 'Progress measured with responsibility and efficiency.', to: '/innovation' },
      { title: 'Social responsibility', body: 'Communities, people, and ethical business practice.', to: '/career' },
      { title: 'Supplier ecosystem', body: 'Partners who help us deliver excellence worldwide.', to: '/contact' },
      { title: 'Newsroom', body: 'Stories and announcements from across the group.', to: '/news' },
    ],
    feature: {
      overline: 'What we stand for',
      title: 'Always moving,',
      accent: 'always ahead',
      body: 'As a technology leader and family-owned company, we ensure progress and sustainability go hand in hand.',
      cta: 'Explore careers',
      to: '/career',
      image: asset('images/sections/career.webp'),
    },
    stats: [
      { value: '21,000', label: 'employees worldwide' },
      { value: '3', label: 'core industries' },
      { value: 'Global', label: 'locations & customers' },
    ],
    related: [
      { label: 'Innovation', to: '/innovation' },
      { label: 'News', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    path: '/news',
    overline: 'Newsroom',
    title: 'We keep things running — and stories coming',
    lead: 'Latest announcements from across VoithTech industries and innovation.',
    body: [
      'Follow product launches, brand milestones, and technology stories that keep essential industries moving.',
      'From hydropower storage to next-generation paper machines and drive systems, our newsroom tracks what comes next.',
    ],
    image: asset('images/sections/news.webp'),
    highlights: news.items.map((item) => ({ title: item.title, body: item.date })),
    topicsOverline: 'Latest stories',
    topicsTitle: 'Announcements & insights',
    topics: news.items.map((item) => ({
      title: item.title,
      body: `Published ${item.date}. Read more about how VoithTech keeps industries moving.`,
      to: item.to,
    })),
    feature: {
      overline: 'Stay informed',
      title: 'Stories that keep',
      accent: '>things running',
      body: 'Get the latest on products, projects, and people shaping VoithTech around the world.',
      cta: 'Contact media team',
      to: '/contact',
      image: asset('images/hero/technology.jpg'),
    },
    related: [
      { label: 'Company', to: '/company' },
      { label: 'Innovation', to: '/innovation' },
      { label: 'Career', to: '/career' },
    ],
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
    topicsOverline: 'Your path',
    topicsTitle: 'Start your career at VoithTech',
    topics: [
      { title: 'Pupils', body: 'First steps into technology with apprenticeships and insight days.', to: '/contact' },
      { title: 'Students', body: 'Internships and thesis projects with real industrial impact.', to: '/contact' },
      { title: 'Entry level', body: 'Graduate programs that accelerate your engineering career.', to: '/contact' },
      { title: 'Professionals', body: 'Experienced roles across engineering, service, and digital.', to: '/contact' },
      { title: 'Benefits', body: 'Growth, flexibility, and a culture built on trust.', to: '/company' },
      { title: 'Locations', body: 'Opportunities across regions and business fields.', to: '/company' },
    ],
    feature: {
      overline: 'Your career at VoithTech',
      title: 'Let’s create lasting',
      accent: '>impact',
      body: 'Work on exciting technological challenges with almost 21,000 colleagues united by one goal: a future worth living.',
      cta: 'Contact careers',
      to: '/contact',
      image: asset('images/sections/promise.jpg'),
    },
    stats: [
      { value: '21,000', label: 'colleagues worldwide' },
      { value: 'Open', label: 'roles across industries' },
      { value: 'Global', label: 'career destinations' },
    ],
    related: [
      { label: 'About VoithTech', to: '/company' },
      { label: 'Innovation', to: '/innovation' },
      { label: 'Contact', to: '/contact' },
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
      { title: 'Email', body: 'hello@voithtech.com' },
      { title: 'Service', body: '24/7 support for installed equipment.' },
      { title: 'Careers', body: 'careers@voithtech.com' },
    ],
    topicsOverline: 'How can we help?',
    topicsTitle: 'Choose your topic',
    topics: [
      { title: 'Drive Technology', body: 'Products, applications, and service for drive systems.', to: '/drive-technology' },
      { title: 'Hydropower', body: 'Plants, modernization, and pumped storage projects.', to: '/hydropower' },
      { title: 'Papermaking', body: 'Machines, rebuilds, and mill-wide solutions.', to: '/papermaking' },
      { title: 'Services', body: '24/7 support, parts, and remote assistance.', to: '/services' },
      { title: 'Careers', body: 'Open roles and application questions.', to: '/career' },
      { title: 'Media & company', body: 'Press, brand, and corporate inquiries.', to: '/news' },
    ],
    feature: {
      overline: 'We are here',
      title: 'By your side',
      accent: '>all the way',
      body: 'Share your project or service need and our experts will get back to you quickly.',
      cta: 'View services',
      to: '/services',
      image: asset('images/sections/promise.jpg'),
    },
    related: [
      { label: 'Services', to: '/services' },
      { label: 'Company', to: '/company' },
      { label: 'Career', to: '/career' },
    ],
    showContactForm: true,
  },
]
