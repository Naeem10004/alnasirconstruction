export const company = {
  name: "Al Nasir Construction Company",
  shortName: "Al Nasir",
  founded: 1999,
  tagline: "Building Pakistan, Brick by Brick",
  phone: "+92 42 3587 1234",
  mobile: "+92 300 4561234",
  email: "info@alnasirconstruction.com",
  address: "45-C, Gulberg III, Lahore, Punjab, Pakistan",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
};

export const stats = [
  { value: "25+", label: "Years in the field", code: "EST.1999" },
  { value: "160+", label: "Projects delivered", code: "COMPLETED" },
  { value: "42", label: "Engineers & supervisors on staff", code: "TEAM" },
  { value: "0", label: "Missed structural inspections", code: "SAFETY" },
];

export const services = [
  {
    id: "residential",
    title: "Residential Construction",
    summary:
      "Houses and apartment blocks built to last, from foundation drawings to the final coat of paint.",
    detail:
      "We take on everything from single-family homes in DHA and Bahria Town to multi-unit residential blocks — grey structure, finishing, electrical and plumbing coordinated under one contract.",
    spec: "GFA up to 80,000 sq.ft",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    summary:
      "Offices, plazas and retail spaces engineered for the loads and timelines commercial clients need.",
    detail:
      "Our commercial arm handles shell-and-core through to tenant fit-out, working closely with architects and structural consultants to keep occupancy dates fixed.",
    spec: "Up to G+12 structures",
  },
  {
    id: "structural",
    title: "Structural Engineering",
    summary:
      "In-house structural design, reinforcement detailing and third-party proofing before a single brick is laid.",
    detail:
      "Every project runs through our structural desk first: soil investigation, load calculations, and reinforcement drawings, reviewed against Pakistan Building Code and UBC seismic provisions.",
    spec: "PEC-registered engineers",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    summary:
      "Extensions, retrofits and full interior overhauls without disrupting the rest of the property.",
    detail:
      "From opening up load-bearing walls safely to full kitchen and bathroom remodels, we phase renovation work to keep the rest of the building livable or operational.",
    spec: "Phased site handover",
  },
  {
    id: "project-management",
    title: "Project Management & Supervision",
    summary:
      "One site office, one schedule, one point of accountability for every subcontractor on site.",
    detail:
      "We run procurement, subcontractor scheduling and quality checks against a fixed baseline programme, with weekly progress reports shared directly with the client.",
    spec: "Weekly progress reporting",
  },
  {
    id: "interior",
    title: "Interior Fit-Out",
    summary:
      "Flooring, false ceilings, joinery and paint — finished to a snag-free handover.",
    detail:
      "Our finishing crews handle tiling, false ceiling grids, built-in joinery, and paint, with a formal snagging walkthrough before any site is signed off.",
    spec: "Snag-free handover policy",
  },
];

export const projects = [
  {
    id: "al-nasir-heights",
    name: "Al Nasir Heights",
    type: "Residential Tower",
    location: "Gulberg, Lahore",
    year: "2023",
    scale: "G+9, 48 units",
    accent: "steel",
  },
  {
    id: "gulberg-business-plaza",
    name: "Gulberg Business Plaza",
    type: "Commercial",
    location: "Gulberg III, Lahore",
    year: "2022",
    scale: "62,000 sq.ft",
    accent: "amber",
  },
  {
    id: "model-town-villas",
    name: "Model Town Villas",
    type: "Residential",
    location: "Model Town, Lahore",
    year: "2021",
    scale: "14 villas",
    accent: "rust",
  },
  {
    id: "dha-corporate-center",
    name: "DHA Corporate Center",
    type: "Commercial",
    location: "DHA Phase 6, Lahore",
    year: "2023",
    scale: "G+8, shell & core",
    accent: "steel",
  },
  {
    id: "askari-family-homes",
    name: "Askari Family Homes",
    type: "Residential",
    location: "Askari 11, Lahore",
    year: "2020",
    scale: "22 units",
    accent: "amber",
  },
  {
    id: "bahria-town-complex",
    name: "Bahria Town Complex",
    type: "Mixed-Use",
    location: "Bahria Town, Lahore",
    year: "2024",
    scale: "G+11, retail + residential",
    accent: "rust",
  },
];

export const testimonials = [
  {
    quote:
      "They handed the villas over two weeks ahead of schedule, and the structural inspection had zero objections.",
    name: "Imran Sheikh",
    role: "Private Client, Model Town Villas",
  },
  {
    quote:
      "Weekly site reports meant we never had to chase anyone for a status update. That alone was worth the contract.",
    name: "Sana Bukhari",
    role: "Development Manager, Gulberg Business Plaza",
  },
  {
    quote:
      "Reinforcement detailing was reviewed by their own structural desk before our consultant even asked for it.",
    name: "Faisal Rana",
    role: "Architect, DHA Corporate Center",
  },
];

export const timeline = [
  { year: "1999", label: "Al Nasir Construction founded in Lahore as a residential contractor." },
  { year: "2006", label: "First commercial contract; in-house structural desk established." },
  { year: "2013", label: "Crossed 50 completed projects across Punjab." },
  { year: "2019", label: "Expanded into mixed-use and multi-storey commercial work." },
  { year: "2024", label: "160+ projects delivered; team grown to 42 engineers and supervisors." },
];
