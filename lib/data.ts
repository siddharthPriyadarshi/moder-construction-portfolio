export const YEARS_ACTIVE = new Date().getFullYear() - 1997;

export const COMPANY = {
  name: "Modern Construction Co.",
  legalName: "M/S Modern Construction Co.",
  tagline: "Crafting a Better Tomorrow",
  founded: 1997,
  founder: "Mr. Pramod Kumar",
  phones: ["+91 96318 98520", "+91 92343 83057"],
  email: "modernconstruction98@gmail.com",
  offices: [
    {
      label: "Head Office",
      address: "101, 81/B, Saraswati Mansion, Deshpran Lane, Ratu Road, Ranchi, Jharkhand, India – 834001",
    },
    {
      label: "Branch Office",
      address: "H8, Bhelgarha, Beside R K Pathology, Ghatotand, Ramgarh, Jharkhand, India – 825314",
    },
  ],
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const HERO_STATS = [
  { value: YEARS_ACTIVE, suffix: "+", label: "Years in Industrial Services" },
  { value: 15, suffix: "+", label: "Service Lines" },
  { value: 100, suffix: "%", label: "Single-Point Accountability" },
  { value: 0, suffix: "", label: "Harm Target" },
];

export const VALUES = [
  {
    key: "innovation",
    title: "Innovation",
    description: "We push the boundaries of method and technology to deliver solutions that keep our clients ahead.",
  },
  {
    key: "integrity",
    title: "Integrity",
    description: "We operate with honesty, transparency, and respect for every client and partner we work with.",
  },
  {
    key: "customer-focus",
    title: "Customer Focus",
    description: "Our customers sit at the centre of every decision — we work to exceed their expectations, every time.",
  },
  {
    key: "safety",
    title: "Safety",
    description: "Every site, every shift — our teams work to uncompromising safety standards, without exception.",
  },
];

export const MISSION_POINTS = [
  {
    title: "Customer-Centric Excellence",
    description:
      "Exceptional products and services tailored to our clients' evolving needs — every solution purposeful, precise, and built to the highest standard.",
  },
  {
    title: "Innovation & Cost-Effectiveness",
    description:
      "Forward-thinking approaches that drive efficiency and value, offering professional, cost-effective solutions that let businesses grow and thrive.",
  },
  {
    title: "Lasting Partnerships, Real Impact",
    description:
      "Long-term relationships built beyond project delivery — creating lasting value through integrity, reliability, and excellence in every endeavour.",
  },
];

export const VISION_POINTS = [
  {
    title: "A Vision for Progress",
    description:
      "Solutions that go beyond construction — inspiring progress, driving transformation, and setting new benchmarks across industries.",
  },
  {
    title: "Leading with Cutting-Edge Solutions",
    description:
      "Staying ahead of the curve by leveraging modern methodology and industry best practice to deliver work that is smarter and future-ready.",
  },
  {
    title: "Unmatched Service, Unstoppable Success",
    description:
      "Pairing innovation with exceptional customer service, so every client has the support and partnership they need to scale with confidence.",
  },
];

export const SEGMENTS = [
  { title: "Steel & Metals", color: "#0b1e3c" },
  { title: "Mining Industry", color: "#6b3a2e" },
  { title: "Power Generation", color: "#0e6b6b" },
  { title: "Renewable Energy", color: "#1f8a4c" },
  { title: "Infrastructure", color: "#123068" },
  { title: "Commercial Facilities", color: "#5b2e8a" },
  { title: "Manufacturing", color: "#a3372c" },
  { title: "Water & Utilities", color: "#1a5faa" },
  { title: "Government & PSU", color: "#b8862f" },
];

export type Service = {
  title: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Operations & Maintenance",
    points: [
      "Complete O&M of industrial plants",
      "Shutdown & turnaround maintenance",
      "Preventive, predictive & corrective maintenance",
      "Plant reliability and asset management",
    ],
  },
  {
    title: "Industrial Rope Access",
    points: [
      "High-rise inspection & maintenance",
      "Structural repairs at height",
      "Painting, coating & corrosion protection",
      "Confined space access",
    ],
  },
  {
    title: "TG Troubleshooting",
    points: [
      "Rapid mobilization of manpower & resources",
      "Turbine skilled & high-skilled technicians",
      "Foreman-led troubleshooting crews",
      "Support governing expert on call",
    ],
  },
  {
    title: "Boiler Erection & Maintenance",
    points: [
      "Boiler erection",
      "Steam line pipe erection & replacement",
      "Boiler tube & nozzle replacement",
      "Shielding work",
    ],
  },
  {
    title: "Condenser & Heat Exchanger",
    points: [
      "Condenser tube cleaning",
      "Tube replacement & retubing",
      "Tube plugging",
      "Performance improvement & maintenance",
    ],
  },
  {
    title: "Industrial Pump Maintenance",
    points: [
      "Overhaul of centrifugal & reciprocating pumps",
      "Mechanical seal replacement",
      "Bearing & shaft replacement",
      "Alignment, balancing & commissioning",
    ],
  },
  {
    title: "Mechanical & Structural Works",
    points: [
      "Structural fabrication & erection",
      "Chute & hopper fabrication",
      "Wear plate & liner replacement",
      "Conveyor systems & welding works",
    ],
  },
  {
    title: "Electrical Services",
    points: [
      "HT & LT electrical installations",
      "Industrial electrification",
      "Cable laying & termination",
      "MCC & control panel installation",
    ],
  },
  {
    title: "Plumbing & Utility Services",
    points: [
      "Industrial plumbing systems",
      "Water supply networks",
      "Drainage & sewage systems",
      "Utility maintenance",
    ],
  },
  {
    title: "Industrial Painting & Coating",
    points: [
      "Surface preparation & sandblasting",
      "Protective, anti-corrosion coating",
      "Epoxy & polyurethane painting",
      "High-rise painting via rope access",
    ],
  },
  {
    title: "Manpower & Staffing",
    points: [
      "Skilled manpower supply",
      "Technical workforce deployment",
      "Shutdown & project staffing",
      "Contract labour management & site supervision",
    ],
  },
  {
    title: "Transportation & Logistics",
    points: [
      "Material transportation",
      "Equipment shifting",
      "Project logistics support",
    ],
  },
  {
    title: "Housekeeping Services",
    points: [
      "Plant & mechanical housekeeping",
      "Shutdown cleaning",
      "Warehouse housekeeping",
    ],
  },
  {
    title: "Industrial Supplies",
    points: [
      "PPE & industrial safety products",
      "Mechanical & electrical materials",
      "Fasteners, hardware & welding consumables",
      "General MRO supplies",
    ],
  },
];

export const PRODUCT_CATEGORIES = [
  {
    title: "Stainless Steel & Hardox Liners",
    image: "/images/products/stainless-hardox.jpg",
    items: ["Stainless steel components", "Hardox wear liner plates", "Floor grating"],
  },
  {
    title: "Chutes, Hoppers & Ducts",
    image: "/images/products/chutes-hoppers-ducts.jpg",
    items: ["Equipment fabrication", "Chutes & hoppers", "Ducting solutions"],
  },
  {
    title: "Heavy Fabrication",
    image: "/images/products/heavy-fabrication.jpg",
    items: ["Chimney stacks", "Heavy structural fabrication", "Site erection & transport"],
  },
];

export const PRODUCT_TAGS = [
  "Piping Solutions",
  "Wire Mesh",
  "Filter Cage",
  "Packing Hooks",
  "Heat Resistant Products",
  "Sheet Metal Press Components",
];

export const USP_POINTS = [
  {
    title: `${YEARS_ACTIVE}+ Years of Proven Excellence`,
    description:
      "Since 1997, consistently high-quality results across MEP, construction, mining, manpower, and facility management — trusted by industry giants like Tata Steel and Hindalco.",
  },
  {
    title: "One-Stop Industrial Solution Provider",
    description:
      "From fabrication and civil works to pest control, transportation, and resource management — end-to-end services under one roof.",
  },
  {
    title: "Safety-First, Quality-Always",
    description:
      "ISO 45001:2018 certified, bringing international-grade safety standards and engineering excellence to every project.",
  },
  {
    title: "Flexible & Scalable",
    description:
      "Whether a short-term assignment or a long-term operational contract, solutions tailored to fit exact client needs.",
  },
];

export const WHY_CHOOSE_STATS = [
  { value: "12+", label: "Core Benefits", description: "Comprehensive advantages across every project phase" },
  { value: "100%", label: "Single-Point Accountability", description: "One trusted partner for complete project ownership" },
  { value: "0", label: "Harm Target", description: "Unwavering commitment to a zero-harm safety culture" },
];

export const WHY_CHOOSE_BENEFITS = [
  { title: "Single-Point Accountability", description: "One trusted partner for complete project ownership and seamless coordination across all disciplines." },
  { title: "End-to-End Lifecycle Support", description: "Comprehensive services from engineering and procurement through execution, commissioning, and maintenance." },
  { title: "Safety-Focused Execution", description: "Unwavering commitment to HSE standards, regulatory compliance, and a zero-harm culture on every site." },
  { title: "High-Quality Workmanship", description: "Delivering precision, reliability, and excellence that consistently exceeds client expectations." },
  { title: "Experienced Engineering Professionals", description: "A highly skilled workforce with extensive expertise across industrial sectors and complex project environments." },
  { title: "Cost-Effective Execution", description: "Optimized planning and resource management that delivers maximum value without compromising quality." },
  { title: "Timely Project Delivery", description: "Strong execution capabilities ensuring projects are completed safely and on schedule, every time." },
  { title: "Flexible Project Management", description: "Tailored execution strategies and commercial models designed to meet diverse client requirements." },
  { title: "Reduced Project Risks", description: "Proven project management practices that minimize technical, operational, and commercial risk." },
  { title: "Strong Customer Support", description: "Responsive communication and dedicated technical assistance throughout the entire project lifecycle." },
  { title: "Long-Term O&M Support", description: "Reliable post-project services to maximize asset performance and operational efficiency over the long term." },
  { title: "Proven Client Trust & Repeat Business", description: "A long-standing relationship with Tata Steel Limited, reflected in multiple repeat work orders." },
];

export const CLIENTS = [
  { name: "Tata Steel", file: "/images/clients/tata-steel.png", width: 500, height: 78 },
  { name: "Tata Steel Foundation", file: "/images/clients/tata-steel-foundation.png", width: 500, height: 40 },
  { name: "Hindalco Industries", file: "/images/clients/hindalco.png", width: 500, height: 465 },
  { name: "BFCL", file: "/images/clients/bfcl.png", width: 500, height: 352 },
  { name: "Agrity", file: "/images/clients/agrity.png", width: 500, height: 366 },
];

export const GALLERY_IMAGES = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Site mobilization and structural work in the field" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Safety briefings and recognition on site" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Heavy fabrication transport and emergency response training" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Scaffold access, electrical and housekeeping crews at work" },
];
