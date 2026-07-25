export type TranslatableString = { EN: string; ID: string };
export type TranslatableArray = { EN: string[]; ID: string[] };

export type TechStack = {
  category: string;
  items: { name: string; icon: string }[];
};

export type RoleDetail = {
  title: TranslatableString;
  tasks: TranslatableArray;
};

export type Feature = {
  title: TranslatableString;
  description: TranslatableString;
};

export type Challenge = {
  challenge: TranslatableString;
  solution: TranslatableString;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: TranslatableString;
  category: string;
  role: string;
  duration: TranslatableString;
  platform: string;
  isPrivate: boolean;
  demoUrl?: string;
  githubUrl?: string;
  heroImage: string;
  overview: TranslatableArray;
  problem: TranslatableString;
  solution: TranslatableString;
  rolesDetails: RoleDetail[];
  techStack: TechStack[];
  features: Feature[];
  gallery: string[];
  challenges: Challenge[];
  results: TranslatableArray;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'sponsorea',
    title: 'Sponsorea',
    shortDescription: {
      ID: 'Sistem informasi marketplace sponsorship untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara event.',
      EN: 'A sponsorship marketplace information system to facilitate collaboration between companies and event organizers.'
    },
    category: 'Fullstack Development',
    role: 'Fullstack Developer',
    duration: { ID: '4 Bulan', EN: '4 Months' },
    platform: 'Web Application',
    isPrivate: true,
    heroImage: '/projects/sponsorea/hero.jpg',
    overview: {
      ID: [
        'Sponsorea adalah platform marketplace yang mempertemukan penyelenggara event dengan perusahaan penyedia sponsorship. Tujuan utama platform ini adalah menyederhanakan proses pencarian dana dan penyaluran CSR.',
        'Sistem ini dirancang untuk menangani ribuan proposal secara sistematis, memberikan tracking status, dan memfasilitasi komunikasi langsung antara kedua belah pihak.'
      ],
      EN: [
        'Sponsorea is a marketplace platform that connects event organizers with companies providing sponsorship. The main goal of this platform is to simplify the fundraising and CSR distribution process.',
        'The system is designed to handle thousands of proposals systematically, providing status tracking, and facilitating direct communication between both parties.'
      ]
    },
    problem: {
      ID: 'Penyelenggara event sering kesulitan menemukan sponsor yang relevan, sementara perusahaan kesulitan menyortir ratusan proposal yang masuk melalui email secara tidak terstruktur.',
      EN: 'Event organizers often struggle to find relevant sponsors, while companies have difficulty sorting through hundreds of unstructured proposals received via email.'
    },
    solution: {
      ID: 'Membangun platform terpusat dengan sistem agregasi proposal, filter kategori yang relevan, dan dashboard tracking status proposal secara real-time.',
      EN: 'Building a centralized platform with a proposal aggregation system, relevant category filters, and a real-time proposal status tracking dashboard.'
    },
    rolesDetails: [
      {
        title: { ID: 'Fullstack Developer', EN: 'Fullstack Developer' },
        tasks: {
          ID: ['Arsitektur Database', 'Pengembangan API', 'Integrasi Frontend', 'Analitik Dashboard'],
          EN: ['Database Architecture', 'API Development', 'Frontend Integration', 'Dashboard Analytics']
        }
      },
      {
        title: { ID: 'UI/UX Designer', EN: 'UI/UX Designer' },
        tasks: {
          ID: ['Wireframing', 'Prototyping', 'Sistem Desain'],
          EN: ['Wireframing', 'Prototyping', 'Design System']
        }
      }
    ],
    techStack: [
      { category: 'Frontend', items: [{ name: 'Next.js', icon: 'nextdotjs' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }] },
      { category: 'Backend', items: [{ name: 'Laravel', icon: 'laravel' }, { name: 'MySQL', icon: 'mysql' }] }
    ],
    features: [
      {
        title: { ID: 'Pencocokan Cerdas', EN: 'Smart Matching' },
        description: { ID: 'Algoritma pencocokan proposal dengan preferensi perusahaan.', EN: 'Algorithm for matching proposals with company preferences.' }
      },
      {
        title: { ID: 'Analitik Dashboard', EN: 'Dashboard Analytics' },
        description: { ID: 'Statistik persebaran proposal dan metrik keberhasilan.', EN: 'Proposal distribution statistics and success metrics.' }
      }
    ],
    gallery: [
      '/projects/sponsorea/1.jpg',
      '/projects/sponsorea/2.jpg'
    ],
    challenges: [
      {
        challenge: { ID: 'Performa pencarian proposal lambat saat data membesar.', EN: 'Proposal search performance was slow as data grew.' },
        solution: { ID: 'Mengimplementasikan index database dan caching query utama.', EN: 'Implemented database indexing and caching for main queries.' }
      }
    ],
    results: {
      ID: ['Desain Responsif', 'Mode Gelap', 'Autentikasi', 'Dashboard Terintegrasi'],
      EN: ['Responsive Design', 'Dark Mode', 'Authentication', 'Integrated Dashboard']
    },
    tags: ['Laravel', 'MySQL', 'Tailwind CSS']
  },
  {
    slug: 'merakids',
    title: 'Merakids Agency Wuffy Space',
    shortDescription: {
      ID: 'Strategi pemasaran media sosial dan manajemen konten pilar komprehensif untuk kafe & perpustakaan anak.',
      EN: 'Comprehensive social media marketing strategy and pillar content management for a kids cafe & library.'
    },
    category: 'Digital Branding',
    role: 'Social Media Strategist',
    duration: { ID: '3 Bulan', EN: '3 Months' },
    platform: 'Instagram & TikTok',
    isPrivate: false,
    demoUrl: 'https://instagram.com/wuffyspace',
    heroImage: '/projects/merakids/hero.jpg',
    overview: {
      ID: [
        'Wuffy Space membutuhkan strategi konten yang konsisten untuk membangun awareness tentang kafe ramah anak dan perpustakaan edukatif.',
        'Fokus utama adalah meningkatkan engagement dan reach melalui konten pilar edukatif serta interaktif.'
      ],
      EN: [
        'Wuffy Space needed a consistent content strategy to build awareness about its kid-friendly cafe and educational library.',
        'The main focus was to increase engagement and reach through educational and interactive pillar content.'
      ]
    },
    problem: {
      ID: 'Engagement rate yang stagnan dan kurangnya identitas visual yang kuat di media sosial.',
      EN: 'Stagnant engagement rates and lack of a strong visual identity on social media.'
    },
    solution: {
      ID: 'Merancang ulang identitas visual media sosial dan menerapkan kalender konten berbasis pilar edukasi.',
      EN: 'Redesigned the social media visual identity and implemented an education-pillar-based content calendar.'
    },
    rolesDetails: [
      {
        title: { ID: 'Social Media Strategist', EN: 'Social Media Strategist' },
        tasks: {
          ID: ['Perencanaan Konten', 'Riset Audiens', 'Pemantauan Analitik'],
          EN: ['Content Planning', 'Audience Research', 'Analytics Monitoring']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'Figma', icon: 'figma' }, { name: 'Notion', icon: 'notion' }, { name: 'Meta Business Suite', icon: 'meta' }] }
    ],
    features: [
      {
        title: { ID: 'Desain Pilar Konten', EN: 'Content Pillar Design' },
        description: { ID: 'Kategorisasi konten untuk menjaga variasi feed.', EN: 'Content categorization to maintain feed variety.' }
      }
    ],
    gallery: [
      '/projects/merakids/1.jpg'
    ],
    challenges: [
      {
        challenge: { ID: 'Menjaga konsistensi posting di berbagai platform.', EN: 'Maintaining posting consistency across multiple platforms.' },
        solution: { ID: 'Menggunakan tools scheduling otomatis terpusat.', EN: 'Utilized centralized automated scheduling tools.' }
      }
    ],
    results: {
      ID: ['Peningkatan engagement sebesar 40%', 'Konsistensi identitas brand', 'Jadwal konten yang terstruktur'],
      EN: ['40% increase in engagement', 'Consistent brand identity', 'Structured content schedule']
    },
    tags: ['Social Media Strategy', 'Content Design']
  },
  {
    slug: 'e-commerce-admin',
    title: 'E-Commerce Admin Dashboard',
    shortDescription: {
      ID: 'Dashboard dummy untuk monitoring penjualan, stok produk, dan performa campaign harian.',
      EN: 'Dummy dashboard for monitoring sales, product stock, and daily campaign performance.'
    },
    category: 'Frontend Development',
    role: 'Frontend Developer',
    duration: { ID: '1 Bulan', EN: '1 Month' },
    platform: 'Web Dashboard',
    isPrivate: false,
    githubUrl: 'https://github.com/yasrtcha',
    heroImage: '/projects/ecommerce/hero.jpg',
    overview: {
      ID: [
        'Sebuah eksplorasi desain dan implementasi admin dashboard untuk platform e-commerce.',
        'Fokus pada visualisasi data yang responsif dan UX yang intuitif untuk pengelola toko.'
      ],
      EN: [
        'A design exploration and implementation of an admin dashboard for an e-commerce platform.',
        'Focuses on responsive data visualization and an intuitive UX for store managers.'
      ]
    },
    problem: {
      ID: 'Banyak admin dashboard yang kompleks dan membingungkan pengguna baru.',
      EN: 'Many admin dashboards are complex and confusing for new users.'
    },
    solution: {
      ID: 'Mendesain ulang tata letak dengan memprioritaskan metrik utama dan navigasi yang bersih.',
      EN: 'Redesigned the layout by prioritizing key metrics and clean navigation.'
    },
    rolesDetails: [
      {
        title: { ID: 'Frontend Developer', EN: 'Frontend Developer' },
        tasks: {
          ID: ['Pengembangan Komponen', 'Manajemen State', 'Visualisasi Data'],
          EN: ['Component Development', 'State Management', 'Data Visualization']
        }
      }
    ],
    techStack: [
      { category: 'Frontend', items: [{ name: 'Next.js', icon: 'nextdotjs' }, { name: 'TypeScript', icon: 'typescript' }, { name: 'Tailwind CSS', icon: 'tailwindcss' }, { name: 'Recharts', icon: 'react' }] }
    ],
    features: [
      {
        title: { ID: 'Visualisasi Real-time', EN: 'Real-time Charting' },
        description: { ID: 'Visualisasi data penjualan.', EN: 'Sales data visualization.' }
      }
    ],
    gallery: [],
    challenges: [],
    results: {
      ID: ['Desain Responsif', 'Mode Gelap'],
      EN: ['Responsive Design', 'Dark Mode']
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: 'company-profile-revamp',
    title: 'Company Profile Revamp',
    shortDescription: {
      ID: 'Redesign website profil perusahaan dengan fokus struktur informasi yang lebih jelas dan modern.',
      EN: 'Company profile website redesign focusing on clearer and more modern information structure.'
    },
    category: 'UI/UX Design',
    role: 'UI/UX Designer',
    duration: { ID: '2 Minggu', EN: '2 Weeks' },
    platform: 'Web',
    isPrivate: false,
    heroImage: '/projects/comprof/hero.jpg',
    overview: {
      ID: ['Redesign website perusahaan untuk meningkatkan kredibilitas dan kemudahan navigasi.'],
      EN: ['Company website redesign to improve credibility and navigation ease.']
    },
    problem: {
      ID: 'Website lama terlihat outdated dan sulit dinavigasi di mobile.',
      EN: 'The old website looked outdated and was difficult to navigate on mobile.'
    },
    solution: {
      ID: 'Penyegaran desain dengan pendekatan mobile-first dan tipografi modern.',
      EN: 'Design refresh with a mobile-first approach and modern typography.'
    },
    rolesDetails: [
      {
        title: { ID: 'UI/UX Designer', EN: 'UI/UX Designer' },
        tasks: {
          ID: ['Wireframing', 'Desain High Fidelity', 'Prototyping'],
          EN: ['Wireframing', 'High Fidelity Design', 'Prototyping']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'Figma', icon: 'figma' }] }
    ],
    features: [],
    gallery: [],
    challenges: [],
    results: {
      ID: ['Modernisasi desain', 'Desain responsif mobile'],
      EN: ['Modernized design', 'Mobile responsive design']
    },
    tags: ['UI Audit', 'Information Architecture']
  },
  {
    slug: 'simple-booking-platform',
    title: 'Simple Booking Platform',
    shortDescription: {
      ID: 'Prototype sistem pemesanan layanan dengan alur booking cepat untuk validasi kebutuhan pengguna.',
      EN: 'Service booking system prototype with a fast booking flow to validate user needs.'
    },
    category: 'Product Discovery',
    role: 'Product Designer',
    duration: { ID: '3 Minggu', EN: '3 Weeks' },
    platform: 'Web / Mobile',
    isPrivate: true,
    heroImage: '/projects/booking/hero.jpg',
    overview: {
      ID: ['Eksplorasi alur pemesanan layanan yang efisien dengan meminimalkan jumlah langkah.'],
      EN: ['Exploration of an efficient service booking flow by minimizing the number of steps.']
    },
    problem: {
      ID: 'Banyak sistem booking memerlukan proses registrasi yang panjang.',
      EN: 'Many booking systems require a lengthy registration process.'
    },
    solution: {
      ID: 'Sistem guest booking dengan verifikasi satu langkah.',
      EN: 'Guest booking system with one-step verification.'
    },
    rolesDetails: [
      {
        title: { ID: 'Product Designer', EN: 'Product Designer' },
        tasks: {
          ID: ['Riset Pengguna', 'Pemetaan User Journey', 'Prototyping'],
          EN: ['User Research', 'User Journey Mapping', 'Prototyping']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'Figma', icon: 'figma' }, { name: 'Miro', icon: 'miro' }] }
    ],
    features: [],
    gallery: [],
    challenges: [],
    results: {
      ID: ['Konversi pemesanan lebih cepat'],
      EN: ['Faster booking conversion']
    },
    tags: ['Product Discovery', 'Wireframing']
  }
];
