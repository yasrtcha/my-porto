# Portfolio Design System & Project Layout Rules

## 1. Global Concept & Vibe
- **Style:** Neo-brutalism / Swiss Design
- **Vibe:** Bold, raw, high contrast, structured, and modern.

## 2. Color Palette
- **Primary Accent:** Lime Neon (`#DFFF00` atau `bg-[#DFFF00]`) - Gunakan untuk highlight, efek hover, atau background aksen.
- **Base Colors:** White (`bg-white`) untuk background utama, Black (`text-black` / `bg-black`) untuk teks, outline, dan shadow.

## 3. UI Components & Tailwind Classes
- **Borders:** Semua elemen penting (card, button, image placeholder) WAJIB menggunakan border hitam tebal: `border-4 border-black`.
- **Shadows:** Dilarang menggunakan shadow blur (soft shadow). WAJIB menggunakan sharp/solid shadow: `shadow-[8px_8px_0_rgba(0,0,0,1)]` atau ukuran lain yang proporsional namun tetap kaku.
- **Typography:** Gunakan font sans-serif. Heading (H1, H2) harus tebal (`font-black`), uppercase, dan padat (`tracking-tighter`). Heading section bisa menggunakan highlight kotak lime di belakang teksnya.
- **Interaction (Hover):** Hover pada card/button mengubah background menjadi `#DFFF00` atau sedikit menggeser posisi (translate) untuk efek "ditekan".

## 4. Project Detail Page Structure (Case Study Layout)
Jika diminta membuat halaman detail project (`/project/[slug]`), WAJIB gunakan struktur layout vertikal berikut ini:

1.  **Top Bar:** Tombol "Back to Projects" di kiri atas bergaya brutalism.
2.  **Hero Section:** 
    - `Title` (H1, Besar, Uppercase)
    - `Tagline` (Deskripsi singkat)
    - `Cover Image` (Kotak div besar sebagai placeholder gambar dengan shadow brutalism)
3.  **Meta Info Grid:** Grid kotak-kotak bergaris tegas yang menampilkan:
    - `Role` (contoh: Project Manager)
    - `Timeline` (contoh: Feb - Apr 2026)
    - `Team` (contoh: Solo / 4 Members)
    - `Tech Stack` / Tools (berupa tags/badges)
4.  **Content Sections (The Case Study):**
    - **The Problem:** Penjelasan tantangan/masalah bisnis.
    - **The Solution:** Bagaimana teknologi/strategi memecahkan masalah tersebut.
    - **Key Features:** Daftar 3-4 fitur utama (gunakan format Card bergaya brutalism).
    - **Result & Impact:** Hasil metrik atau output akhir proyek.
5.  **Actionable Links (Bottom):** Tombol besar untuk `Visit Live Site` atau `View GitHub/Code`.