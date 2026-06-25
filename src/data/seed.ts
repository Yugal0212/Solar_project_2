export const company = {
  name: 'LGPSM Solar',
  tagline: "Harnessing Gujarat's Sunshine for a Cleaner Tomorrow",
  phone: '+91 99999 00000',
  whatsapp: '919999900000',
  email: 'info@lgpsm.com',
  address: '42, Solar Park, Kalawad Road, Rajkot, Gujarat 360001',
  founded: '2022',
  installs: 500,
  customers: 1200,
  mw: 2.5,
  co2: 850,
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Why Solar', path: '/why-solar' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export const testimonials = [
  { id: 1, initials: 'RM', name: 'Rahul Mehta', city: 'Rajkot', role: 'Homeowner - 5kW System', rating: 5, quote: "I was skeptical about solar - the initial cost seemed high. Then LGPSM explained the math: my Rs 4,200 monthly bill would drop to under Rs 500. They were right. 18 months later, I'm saving Rs 3,700 every month. The team was professional, clean, and done in two days. Best investment I've ever made in my home." },
  { id: 2, initials: 'PS', name: 'Priya Shah', city: 'Ahmedabad', role: 'Business Owner - 15kW System', rating: 5, quote: "As one of LGPSM's early customers, I took a chance on a new company. Best decision ever. Our office electricity bill dropped from Rs 18,000 to Rs 4,000 per month. The installation was completed in 3 days without shutting our office for even an hour. Their app monitoring is genuinely impressive." },
  { id: 3, initials: 'VP', name: 'Vinod Patel', city: 'Surat', role: 'Factory Owner - 100kW System', rating: 5, quote: "Our textile factory's electricity bill was Rs 1.8 lakh per month. After LGPSM's 100kW installation, it's Rs 62,000 - saving us Rs 1.18 lakh every month. The accelerated depreciation benefit in the first year was an added bonus our CA hadn't even considered. ROI in under 3 years." },
  { id: 4, initials: 'AD', name: 'Anita Desai', city: 'Rajkot', role: 'Villa Owner - 8kW + Battery', rating: 5, quote: "What I love most: I am now completely energy independent. My 8kW system with lithium battery means I haven't had a power cut in 8 months - not even during load shedding. LGPSM handled every government form, DISCOM paperwork, and subsidy claim. I didn't have to do a single thing." },
  { id: 5, initials: 'KJ', name: 'Kiran Joshi', city: 'Morbi', role: 'Homeowner - 3kW System', rating: 5, quote: "I live in Morbi and was worried about finding reliable solar service near me. LGPSM sent their engineer all the way for a free survey, no questions asked. The 3kW system fits my small house perfectly. My bill went from Rs 2,100 to Rs 380. The after-sales WhatsApp support is quick." },
  { id: 6, initials: 'MK', name: 'Mahesh Kumar', city: 'Bhavnagar', role: 'Farm Owner - 25kW System', rating: 5, quote: "My agricultural pump was costing me Rs 35,000 per month during summer. LGPSM designed a 25kW agri-solar system that now powers my pumps for free. The Gujarat Government's PM-KUSUM subsidy reduced my net cost by 60%. I tell every farmer I know to call them immediately." },
]

export const whyTariff = [
  { year: '2015', value: 4.20 }, { year: '2016', value: 4.80 }, { year: '2017', value: 5.20 },
  { year: '2018', value: 5.75 }, { year: '2019', value: 6.10 }, { year: '2020', value: 6.50 },
  { year: '2021', value: 7.20 }, { year: '2022', value: 7.80 }, { year: '2023', value: 8.40 },
  { year: '2024', value: 9.10 }, { year: '2025', value: 9.80, projected: true },
]

export const products = {
  panels: [
    { id: 'panel-1', name: 'LGPSM Pro 400W', category: 'Solar Panel', image: '/images/products/panel-1.jpg', description: 'Our entry-level high-efficiency panel. Ideal for residential systems with smaller roofs. Best-in-class performance for the price.', price: 18000, popular: false, specs: { 'Power Output': '400 Watts', 'Efficiency': '21.5%', 'Cell Type': 'Monocrystalline PERC', Dimensions: '1755 x 1038 x 35 mm', Weight: '20.5 kg', Warranty: '25 Years Performance', Certifications: 'IEC 61215, BIS, MNRE' } },
    { id: 'panel-2', name: 'LGPSM Elite 500W', category: 'Solar Panel', image: '/images/products/panel-2.jpg', description: 'Our most popular residential panel. Half-cut cell technology for superior shade tolerance and 10% more output than standard panels.', price: 23500, popular: true, tag: 'Most Popular', specs: { 'Power Output': '500 Watts', 'Efficiency': '22.1%', 'Cell Type': 'Half-cut Monocrystalline', Dimensions: '2094 x 1040 x 35 mm', Weight: '24.9 kg', Warranty: '25 Years Performance', Certifications: 'IEC 61215, MCS, BIS, MNRE' } },
    { id: 'panel-3', name: 'LGPSM Ultra 600W Bifacial', category: 'Solar Panel', image: '/images/products/panel-3.jpg', description: 'Top-of-the-range bifacial panel capturing light from both sides. Perfect for commercial installations and metal roof with high albedo surfaces.', price: 30000, popular: false, tag: 'Premium', specs: { 'Power Output': '600 Watts (front) + up to 30W (rear)', 'Efficiency': '22.8% (front)', 'Cell Type': 'Bifacial N-type TOPCon', Glass: 'Dual-glass (front + rear)', Warranty: '30 Years Performance', Certifications: 'IEC 61215, IEC 61730, BIS, MNRE' } },
  ],
  inverters: [
    { id: 'inv-1', name: 'LGPSM Hybrid 3kW', category: 'Inverter', image: '/images/products/inv-1.jpg', description: 'Perfect for 1-2 BHK homes. Works with grid, battery, or both simultaneously. Built-in Wi-Fi for real-time app monitoring.', price: 45000, popular: false, specs: { 'Output Power': '3,000 W', 'Input Voltage': '120-450V DC', 'Battery Type': 'Lithium / Lead-Acid', Monitoring: 'Wi-Fi + Bluetooth app', Display: '3.5" colour LCD', Protection: 'IP65 weather-proof', Warranty: '5 Years' } },
    { id: 'inv-2', name: 'LGPSM Hybrid 5kW', category: 'Inverter', image: '/images/products/inv-2.jpg', description: 'Most versatile model for 3-4 BHK homes. Handles AC, refrigerator, and heavy loads simultaneously. Best seller for residential solar.', price: 72000, popular: true, tag: 'Best Seller', specs: { 'Output Power': '5,000 W', 'Max PV Input': '6,500 W', Battery: '48V / 100-200Ah recommended', Monitoring: 'Wi-Fi + app + web portal', Parallel: 'Up to 9 units for larger systems', Warranty: '5 Years' } },
    { id: 'inv-3', name: 'LGPSM Commercial 10kW', category: 'Inverter', image: '/images/products/inv-3.jpg', description: 'Designed for small commercial setups, offices, and showrooms. Three-phase output available. Remote monitoring dashboard included.', price: 145000, popular: false, specs: { 'Output Power': '10,000 W', Phase: 'Single / Three phase', 'Max PV Arrays': '4 strings', Efficiency: '97.6%', Monitoring: 'SCADA-compatible', Warranty: '7 Years' } },
  ],
  batteries: [
    { id: 'bat-1', name: 'LithPower 5kWh', category: 'Battery Storage', image: '/images/products/bat-1.jpg', description: 'Entry-level backup for homes with occasional grid cuts. Powers lights, fans, TV, and small appliances for 6-8 hours.', price: 120000, popular: false, specs: { Capacity: '5 kWh usable', Chemistry: 'LFP (Lithium Iron Phosphate)', 'Cycle Life': '6,000+ cycles', DoD: '95%', Temperature: '-10C to 50C', BMS: 'Built-in smart BMS', Warranty: '10 Years' } },
    { id: 'bat-2', name: 'LithPower 10kWh', category: 'Battery Storage', image: '/images/products/bat-2.jpg', description: 'Complete home energy independence. Run your entire home through the night on solar stored during the day. Grid truly optional.', price: 220000, popular: true, tag: 'Full Independence', specs: { Capacity: '10 kWh usable', 'Peak Power': '5,000 W continuous', Expandable: 'Stack up to 4 units (40kWh)', 'Cycle Life': '6,000+ cycles', App: 'Real-time SoC monitoring', Warranty: '10 Years' } },
  ],
  accessories: [
    { id: 'acc-1', name: 'LGPSM Mounting Rail Kit', category: 'Accessory', image: '/images/products/acc-1.jpg', description: 'Anodised aluminium rail and clamp kit rated for Gujarat wind loads. Sized per kW, sold with every installation.', price: 8000, popular: false, specs: { Material: 'Anodised Aluminium 6005-T5', 'Wind Rating': 'Up to 150 km/h', Coating: 'Corrosion-resistant anodised finish', Compatibility: 'Works with all LGPSM panel models', Warranty: '15 Years' } },
    { id: 'acc-2', name: 'LGPSM Smart Monitoring Kit', category: 'Accessory', image: '/images/products/acc-2.jpg', description: 'Add-on Wi-Fi/4G data logger for inverters without built-in monitoring. View generation and faults from the LGPSM app.', price: 6500, popular: false, specs: { Connectivity: 'Wi-Fi + 4G fallback', Compatibility: 'Most third-party hybrid inverters', App: 'Real-time generation + fault alerts', Power: 'USB powered', Warranty: '3 Years' } },
  ],
}

// Metadata for the product filter bar and category call-outs on the Products
// page. `icon` is a string (mapped to a lucide-react component in the page,
// since data files should stay framework-agnostic) and `image` is a slot for
// a representative photo - see productPageAssets note below.
export const categoryMeta = {
  panels: { label: 'Solar Panels', icon: 'Sun', blurb: 'Tier-1 monocrystalline and bifacial panels, BIS and MNRE certified.' },
  inverters: { label: 'Inverters', icon: 'Zap', blurb: 'Hybrid and commercial inverters with Wi-Fi monitoring built in.' },
  batteries: { label: 'Battery Storage', icon: 'Battery', blurb: 'LFP lithium storage for real backup and full energy independence.' },
  accessories: { label: 'Accessories', icon: 'Plug', blurb: 'Mounting, monitoring, and protection hardware for every system.' },
}

// Page-level image slots for the Products page hero and catalog banner.
// These are local paths - drop matching files into /public/images/... - not
// hot-linked third-party URLs, so nothing breaks or raises licensing issues
// once real product photography is ready.
export const productPageAssets = {
  heroImage: '/images/products/hero-rooftop-array.jpg',
  heroImageAlt: 'LGPSM solar panel array installed on a residential rooftop in Gujarat',
  catalogCoverImage: '/images/catalog-cover.jpg',
  catalogCoverAlt: 'Cover page of the LGPSM Solar product catalog PDF',
}

export const cities = [
  { name: 'Rajkot', emoji: '', description: 'Our home base. 300+ installations. Team of 20+ here.' },
  { name: 'Ahmedabad', emoji: '', description: 'Our fastest-growing market. Commercial & residential.' },
  { name: 'Surat', emoji: '', description: 'Strong industrial solar presence. 50kW+ projects.' },
  { name: 'Morbi', emoji: '', description: 'Serving the tile & ceramic manufacturing hub.' },
  { name: 'Bhavnagar', emoji: '', description: 'Coastal installations with specialized salt-resistant mounting.' },
  { name: 'Vadodara', emoji: '', description: 'New expansion. Residential & educational institutions.' },
]

export const team = [
  { initials: 'AP', name: 'Arjun Patel', role: 'Founder & CEO', bio: '10 years in renewable energy. Previously led solar deployments across Europe. Returned to Gujarat to bring world-class solar to his home state.', gradient: 'emerald' },
  { initials: 'NS', name: 'Nisha Shah', role: 'Co-Founder & Technical Head', bio: 'IIT Bombay alumnus, energy systems engineer. Designs every custom solar solution from first principles. 8 years of photovoltaic systems experience.', gradient: 'amber' },
  { initials: 'RK', name: 'Ravi Kumar', role: 'Head of Installations', bio: '15 years in electrical contracting and renewable systems. Has personally supervised 300+ rooftop installations. Guarantees every system is flawless.', gradient: 'emerald' },
  { initials: 'MJ', name: 'Meera Joshi', role: 'Customer Success Manager', bio: 'Ensures every LGPSM client has a seamless experience from inquiry to activation. Handles all government subsidy paperwork so you don\'t have to.', gradient: 'amber' },
]

export const certifications = [
  { title: 'MNRE Approved', description: 'Ministry of New & Renewable Energy - registered solar installer' },
  { title: 'ISO 9001:2015', description: 'Quality Management System certified organization' },
  { title: 'BIS Certified Products', description: 'Bureau of Indian Standards approved equipment only' },
  { title: 'DISCOM Net Metering', description: 'Approved by DGVCL, UGVCL, MGVCL, PGVCL' },
  { title: 'NABCEP Aligned', description: 'Technicians trained to North American solar standards' },
  { title: 'GST Registered', description: 'Fully compliant. GST invoices for all transactions' },
]

export const partners = [
  'MNRE', 'ISO 9001', 'BIS Certified', 'DISCOM Approved', 'NABCEP', 'Gujarat Energy', 'Luminous Partner', 'Exide Authorised'
]

// Real, chronological company milestones - used to drive the "Our Journey" timeline
// on the About page. Numbers here are kept consistent with the `company` stats above.
export const milestones = [
  { year: '2022', title: 'Founded in Rajkot', description: 'LGPSM Solar was registered at Solar Park, Kalawad Road, and completed its first 5kW residential rooftop installation.' },
  { year: '2023', title: 'Crossed 100 Installations', description: 'Moved into commercial solar with 15kW+ systems for offices and showrooms, and opened a second service base in Ahmedabad.' },
  { year: '2024', title: 'Entered Industrial Scale', description: 'Delivered our first 100kW+ rooftop systems for textile units in Surat, alongside PM-KUSUM agri-solar projects in Bhavnagar.' },
  { year: '2025', title: '500 Installations, 1,200+ Customers', description: 'Reached 500 cumulative installations and 1,200+ customers, with new service hubs opened in Morbi and Vadodara.' },
  { year: '2026', title: '2.5 MW On Gujarat\u2019s Rooftops', description: 'Cumulative installed capacity reached 2.5 MW, offsetting an estimated 850 tonnes of CO2 every year.' },
]