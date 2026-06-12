# Design System & Blueprint: Danar Rais Professional Portfolio

## 1. Konsep Utama
Website ini adalah *Personal Portfolio Website* berkonsep "Monochromatic Minimalist & Bento Grid Layout". Desain menggunakan pendekatan *High-Contrast* (murni Hitam dan Putih tanpa abu-abu atau warna lain). Antarmuka mengandalkan tipografi yang tegas, garis struktural yang bersih, serta interaksi animasi yang *smooth* dan premium untuk menceritakan perpaduan latar belakang Administrasi Bisnis, *Web Development*, dan *Digital Branding*.

## 2. Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (Wajib ditambahkan untuk efek transisi dan *scroll*)
- **Icons:** Lucide React / Heroicons (Warna Hitam/Putih saja)
- **Deployment:** Vercel

## 3. Tema & Warna (Color Palette)
Super ketat dan minimalis. Tidak ada *gradient*, tidak ada warna abu-abu (kecuali terpaksa untuk efek *opacity* transparan).
- **Background Utama:** `#FFFFFF` (Putih Bersih) atau sebaliknya `#000000` (Hitam Pekat) untuk *Dark Mode*.
- **Teks Utama & Elemen:** `#000000` (Hitam) di atas latar putih.
- **Borders & Garis Pembatas:** `#000000` (Hitam) - Tegas, tajam (1px solid black).
- **Hover/Accent State:** Inversi warna (Misal: Tombol putih bergaris hitam, saat di-*hover* berubah menjadi latar hitam pekat dengan teks putih).

## 4. Tipografi (Typography)
- **Heading:** `Inter` atau `Space Grotesk`, Font Weight: ExtraBold (800) atau Black (900). Huruf dibuat berukuran besar dan mendominasi.
- **Body:** `Inter`, Font Weight: Regular (400).

## 5. Animasi & Interaksi (UI/UX)
- **Scroll Reveal (Fade Up):** Setiap *Card* atau teks akan muncul perlahan dari bawah ke atas saat di-*scroll* (menggunakan Framer Motion).
- **Magnetic Buttons:** Tombol sedikit mengikuti arah pergerakan *kursor/mouse* saat didekati.
- **Hover Invert:** Saat *mouse* diarahkan ke *Project Card*, seluruh kotak berubah warna menjadi hitam dan teksnya menjadi putih (inversi instan dan tajam).
- **Marquee Text (Opsional):** Teks berjalan secara horizontal untuk tag keahlian di latar belakang.
- **Smooth Cursor:** *Kursor custom* berbentuk titik hitam/putih yang mengikuti pergerakan *mouse* dengan jeda *smooth*.

## 6. Struktur Layout Antarmuka (UI Structure)

### A. Navigation Bar (Sticky Top)
- **Desain:** Kotak dengan *border* bawah hitam tajam. Latar putih transparan (*blur*).
- **Kiri:** Logo inisial "DR" atau teks "Danar Rais." (tebal).
- **Kanan:** Tautan navigasi (`About`, `Projects`, `Experience`) dan tombol "Download CV" (Garis luar hitam, di-*hover* jadi hitam padat).

### B. Hero Section (Header Utama)
Desain *split-screen* (kiri teks, kanan visual) di layar besar, vertikal di HP.
- **Kiri (Teks):**
  - *Badge/Tag:* "Based in Malang, Indonesia 🇮🇩" (Kotak bergaris hitam).
  - *Headline:* "Bridging Business Strategy with Web Technology."
  - *Sub-headline:* Mahasiswa Administrasi Bisnis yang berfokus pada pengembangan sistem web, analitik data, dan *digital branding*.
  - *Call to Action (CTA):* Tombol utama "View My Work" dan tombol sekunder "Contact Me".
- **Kanan (Visual):**
  - Foto profesional menggunakan jas. Filter foto dibuat **Black & White (Grayscale)** agar senada dengan tema.

### C. Featured Projects (Bagian Inti)
Menggunakan *Grid Layout* bergaris hitam tegas ala koran/editorial (*Borders everywhere*).

**Project Card 1: Web Development**
- **Judul:** Web-Based Sponsorship Marketplace System
- **Deskripsi:** Sistem informasi untuk memfasilitasi kolaborasi antara perusahaan dan penyelenggara *event*.
- **Tech Stack Tags:** `Laravel`, `MySQL`, `Tailwind CSS`, `UML` (Tag berbentuk kotak hitam/putih tajam).
- **Tautan:** "View Case Study" / "GitHub Repo".

**Project Card 2: Digital Branding & Campaign**
- **Judul:** Merakids Agency - Wuffy Space Campaign
- **Deskripsi:** Strategi pemasaran media sosial dan manajemen konten pilar untuk kafe & perpustakaan anak.
- **Skill Tags:** `Social Media Strategy`, `Content Design`, `Copywriting`

### D. Experience & Leadership (Bento Grid Style)
Kotak-kotak bersudut tajam (*rounded-none*) atau membulat tegas (*rounded-2xl* tapi *border* tebal hitam):
- **Card A:** Pengalaman *Public Speaking* (MC & Moderator Showreel).
- **Card B:** Kepemimpinan (Ketua Pelaksana Studi Banding FORMAPI).
- **Card C:** Operasional Bisnis (Pengembangan model bisnis "Pisang Kukus").

### E. Footer
- Garis batas hitam tebal memisahkan bagian atas dengan *footer*.
- Teks penutup: "Let's build something great together."
- *Contact Links:* Email, LinkedIn, GitHub.
- *Copyright:* "© 2026 Danar Rais. Crafted with Next.js & Framer Motion."