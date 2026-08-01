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
    isPrivate: false,
    githubUrl: 'https://github.com/yasrtcha/sponsorea',
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/v1785598347/mockupp_sponsorea_pyrb3s.png',
    overview: {
      ID: [
        'Sponsorea adalah platform marketplace yang dikembangkan sebagai proyek Tugas Akhir (TA) untuk mempertemukan penyelenggara event dengan perusahaan penyedia sponsorship.',
        'Sistem ini dirancang untuk menangani proposal secara sistematis, memberikan fitur tracking status, dan serta dilengkapi dengan fitur cetak laporan untuk mempermudah rekapitulasi data kerja sama.'
      ],
      EN: [
        'Sponsorea is a marketplace platform developed as a final project to connects event organizers with companies providing sponsorship. The main goal of this platform is to simplify the fundraising and distribution sponsorship funds.',
        'The system is designed to handle proposals systematically, provide status tracking features, and include a report-printing feature to facilitate the compilation of partnership data.'
      ]
    },
    problem: {
      ID: 'Penyelenggara event sering kesulitan menemukan sponsor yang relevan, sementara perusahaan kesulitan menyortir ratusan proposal yang masuk melalui email, atau media sosial secara tidak terstruktur.',
      EN: 'Event organizers often struggle to find relevant sponsors, while companies have difficulty sorting through hundreds of unstructured proposals received via email or social media.'
    },
    solution: {
      ID: 'Membangun platform terpusat dengan sistem pengelolaan proposal, filter kategori yang relevan, dan dashboard tracking status proposal secara real-time.',
      EN: 'Building a centralized platform with a proposal management system, relevant category filters, and a real-time proposal status tracking dashboard.'
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
          ID: ['Wireframing', 'Prototyping'],
          EN: ['Wireframing', 'Prototyping']
        }
      }
    ],
    techStack: [
      { category: 'Frontend', items: [{ name: 'Tailwind CSS', icon: 'tailwindcss' }] },
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
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785556192/login.jpg_yzim8z.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785556274/register_kfccom.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785556444/isi_profile_p4wu3u.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558314/verif_ufs1o4.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558312/dashboard_admin_keehsp.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558313/verifikasi_akun_eimoy2.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558312/manajemen_kategori_b2zb4p.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558231/dashboard_xjaxko.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558232/explore_ic7hcq.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558231/data_event_db9tks.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558231/status_pengajuan_iwqjsj.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558232/tawaran_masuk_oceg0x.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785558231/rekap_pf271b.png'
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
    slug: 'wellspace',
    title: 'Wellspace',
    shortDescription: {
      ID: 'Aplikasi mobile dan website berbasis kesehatan yang menyediakan fitur-fitur untuk membantu pengguna mengelola kesehatan mental dan fisik mereka.',
      EN: 'A health-based mobile and website application that provides features to help users manage their mental and physical health.'
    },
    category: 'WEB & MOBILE DEVELOPMENT',
    role: 'Web Developer',
    duration: { ID: '2 Bulan', EN: '2 Months' },
    platform: 'Website & Mobile Application',
    isPrivate: true,
    heroImage: 'https://res.cloudinary.com/oyuxswwy/image/upload/v1785598801/hero_r9irpr.png',
    overview: {
      ID: [
        'WellSpace adalah aplikasi mobile dan website berbasis kesehatan mental yang membantu pengguna memantau kondisi emosional serta menjaga kesejahteraan mental melalui fitur Mood Tracker, Q&A, dan Kutipan Harian.',
        'Platform ini dirancang untuk memberikan dukungan awal agar pengguna lebih sadar terhadap kondisi mentalnya dan membangun kebiasaan positif.'
      ],
      EN: [
        'WellSpace is a mobile and web-based mental health application designed to help users monitor their emotional well-being through features such as Mood Tracker, Q&A, and Daily Quotes.',
        'The platform provides accessible tools to encourage self-awareness and support positive mental health habits.'
      ]
    },
    problem: {
      ID: 'Banyak orang masih kesulitan mengenali kondisi kesehatan mental mereka sejak dini serta belum memiliki media yang mudah diakses untuk memantau suasana hati dan memperoleh informasi maupun motivasi terkait kesehatan mental.',
      EN: 'Many people find it difficult to recognize their mental health condition at an early stage and lack an accessible platform to track their emotions while obtaining reliable information and daily motivation.'
    },
    solution: {
      ID: 'Menyediakan platform untuk mencatat suasana hati, mengakses fitur Q&A, dan memperoleh kutipan harian guna membantu pengguna menjaga kesehatan mental.',
      EN: 'Provides a platform to track daily moods, access a Q&A feature, and receive daily quotes to support users mental well-being.'
    },
    rolesDetails: [
      {
        title: { ID: 'Web Developer', EN: 'Web Developer' },
        tasks: {
          ID: ['Pengembangan Admin Panel', 'Perancangan Basis Data', 'Integrasi Sistem'],
          EN: ['Admin Panel Development', 'Database Design', 'System Integration']
        }
      }
    ],
    techStack: [
      { category: 'Tools', items: [{ name: 'Flutter', icon: 'flutter' }, { name: 'Laravel', icon: 'laravel' }, { name: 'Dart', icon: 'dart' }, { name: 'MySql', icon: 'mysql' }] }
    ],
    features: [
      {
        title: { ID: 'Desain Pilar Konten', EN: 'Content Pillar Design' },
        description: { ID: 'Kategorisasi konten untuk menjaga variasi feed.', EN: 'Content categorization to maintain feed variety.' }
      }
    ],
    gallery: [
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588019/web_yil6bh.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588018/qna_web_yaxizh.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588018/kutipan_web_wyttk3.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588018/ajukan_pertanyaan_zjus00.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588018/admin_oehlyv.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588018/kelola_user_lljyte.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588019/kelola_qna_cl0ogq.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785588019/kelola_kutipan_rbzdtc.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785574380/login_mobile_yuxwvh.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785589690/dashboard_pengguna_mobile_y2moxf.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785589691/qna_mobile_nyn6ef.png',
      'https://res.cloudinary.com/oyuxswwy/image/upload/v1785589691/kutipan_harian_mobile_ar9xam.png'

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
    tags: ['MySql', 'Content Design']
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
