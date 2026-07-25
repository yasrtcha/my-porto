# Portfolio Design Specification v2

> Version: 2.0
> Author: Danar Rais Alhakim
> Framework: Next.js App Router
> Styling: Tailwind CSS
> Animation: Framer Motion + GSAP
> Last Updated: July 2026

---

# 1. Project Vision

## Overview

Portfolio ini bukan hanya sebagai tempat menampilkan project, tetapi sebagai representasi profesional yang menunjukkan kemampuan dalam membangun produk digital dari tahap perencanaan hingga implementasi.

Website harus mampu memberikan kesan profesional dalam waktu kurang dari satu menit kepada recruiter maupun client.

Portfolio harus menonjolkan kemampuan problem solving, desain antarmuka, pengembangan frontend, dan pengalaman mengelola proyek.

---

## Goals

- Membangun personal branding yang profesional.
- Menampilkan project dalam bentuk case study.
- Mempermudah recruiter memahami pengalaman kerja.
- Mempermudah client memahami kemampuan teknis.
- Menjadi portfolio jangka panjang yang mudah dikembangkan.

---

## Primary Audience

- HR Recruiter
- Technical Recruiter
- Startup Founder
- Business Owner
- Client
- Software Engineer
- UI/UX Designer

---

## User Goals

Visitor ingin mengetahui:

- Siapa pemilik portfolio
- Apa skill yang dimiliki
- Project apa saja yang pernah dibuat
- Bagaimana cara berpikir saat membuat project
- Cara menghubungi pemilik portfolio

---

# 2. Brand Personality

Portfolio harus memberikan kesan:

Professional

Modern

Minimal

Elegant

Confident

Thoughtful

Reliable

Technical

Calm

High Quality

Portfolio tidak boleh terasa:

❌ Ramai

❌ Penuh warna

❌ Berlebihan

❌ Terlalu banyak animasi

❌ Terlihat seperti template

---

# 3. Design Philosophy

Everything has a purpose.

Setiap elemen harus memiliki alasan keberadaannya.

Whitespace lebih penting daripada dekorasi.

Typography lebih penting daripada ilustrasi.

Konten lebih penting daripada animasi.

Animation should support interaction, never distract from it.

---

# 4. Visual Direction

Inspirasi visual berasal dari:

- Vercel
- Linear
- Framer
- Apple
- Notion

Bukan meniru desain mereka.

Tetapi mengambil prinsip desain mereka.

---

# 5. Design Principles

## Minimalism

Gunakan elemen sesedikit mungkin.

Tidak ada dekorasi yang tidak memiliki fungsi.

---

## Content First

Project menjadi fokus utama.

Bukan animasi.

Bukan background.

Bukan efek visual.

---

## Consistency

Semua spacing konsisten.

Semua radius konsisten.

Semua shadow konsisten.

Semua animasi konsisten.

---

## Simplicity

Pengunjung harus langsung memahami isi halaman.

Tidak perlu berpikir bagaimana cara menggunakan website.

---

## Readability

Semua teks mudah dibaca.

Line-height nyaman.

Tidak menggunakan font terlalu tipis.

---

# 6. Color System

## Dark Theme

Background

#09090B

Surface

#111113

Card

#18181B

Card Hover

#202024

Border

#2A2A31

Primary Text

#FAFAFA

Secondary Text

#A1A1AA

Muted Text

#71717A

Divider

#27272A

Accent

#FFFFFF

Danger

#EF4444

Success

#22C55E

Warning

#F59E0B

---

## Light Theme

Background

#FFFFFF

Surface

#FAFAFA

Card

#F4F4F5

Border

#E4E4E7

Primary Text

#09090B

Secondary Text

#52525B

Muted

#71717A

Accent

#000000

---

# 7. Color Rules

Accent hanya digunakan untuk:

- Button Primary
- Active Navigation
- Active Tab
- Focus State
- Link Hover

Tidak digunakan sebagai background utama.

Tidak menggunakan gradient berwarna.

Tidak menggunakan neon.

Tidak menggunakan glow berlebihan.

---

# 8. Typography

Primary Font

Geist

Fallback

Inter

Fallback

system-ui

---

# Heading Scale

Display

64px

Hero

56px

H1

48px

H2

40px

H3

32px

H4

24px

H5

20px

Body

16px

Caption

14px

Small

12px

---

Font Weight

Regular

400

Medium

500

SemiBold

600

Bold

700

ExtraBold

800

Black

900

---

# Typography Rules

Heading menggunakan font weight 700–900.

Body menggunakan 400–500.

Line length maksimal:

75 karakter.

Paragraph maksimal:

4–5 baris.

Gunakan whitespace sebagai pemisah.

---

# 9. Spacing System

Base Unit

8px

Spacing Scale

4

8

12

16

24

32

40

48

64

80

96

128

Jangan menggunakan spacing random.

---

# 10. Border Radius

Buttons

14px

Cards

20px

Images

20px

Input

16px

Modal

24px

Avatar

999px

---

# 11. Shadows

Default

None

Hover

0 12px 32px rgba(0,0,0,.18)

Floating

0 20px 50px rgba(0,0,0,.25)

Tidak menggunakan shadow keras.

Tidak menggunakan outline hitam seperti versi lama.

---

# 12. Borders

Semua border menggunakan:

1px

Warna:

Border Token

Tidak menggunakan border hitam pekat.

---

# 13. Icons

Gunakan:

Lucide React

Style

Outline

Stroke

2

Ukuran

16

20

24

28

Tidak menggunakan icon berwarna.

---

# 14. Grid System

Container

max-width: 1280px

Padding Desktop

32px

Tablet

24px

Mobile

20px

Section Gap

120px Desktop

96px Tablet

72px Mobile

---

# 15. Motion Philosophy

Motion harus:

Natural

Elegant

Fast

Responsive

Tidak boleh terasa:

Lambat

Berlebihan

Mengganggu

Motion harus meningkatkan pengalaman pengguna, bukan menjadi fokus utama.

---

# 16. Information Architecture

```
Home
│
├── Hero
├── About
├── Featured Projects
├── Certificates
├── Contact
└── Footer

Projects
│
├── All Projects
│
└── Project Detail
    ├── Hero
    ├── Overview
    ├── Problem & Solution
    ├── My Role
    ├── Tech Stack
    ├── Features
    ├── Gallery
    ├── Challenges
    └── Results
```

Website harus sederhana.

Tidak ada halaman yang tidak memiliki tujuan.

---

# 17. Navbar Specification

## Layout

Desktop

```
Logo

About
Projects
Certificates
Contact

----------------------

Language

Theme

Download CV
```

Mobile

```
Logo

☰
```

Hamburger membuka Fullscreen Navigation.

---

## Behavior

Navbar menggunakan:

- Sticky
- Backdrop Blur
- Transparent ketika di Hero
- Semi-transparent ketika scroll
- Border tipis

Height

80px Desktop

72px Mobile

---

## Background

Top Hero

```
background: transparent;
backdrop-filter: blur(0);
```

After Scroll

```
background: rgba(9,9,11,.72)

backdrop-filter:
blur(18px)
```

Transition

```
300ms
ease
```

---

## Active Navigation

Active menu menggunakan:

- Text Putih
- Underline tipis
- Smooth animation

Hover

```
opacity
.75

↓

1
```

Tidak menggunakan strike-through.

---

## Download CV Button

Primary Button.

Filled.

Radius

14px

Hover

- sedikit naik
- shadow muncul

Transition

250ms

---

## Language Toggle

ID

EN

Menggunakan segmented control.

Bukan dropdown.

---

## Theme Toggle

Icon

Moon

↓

Sun

Transition

Rotate

Scale

300ms

---

# 18. Hero Section

Height

100vh

Minimal

90vh

Layout Desktop

```
--------------------------------------------

Heading

Description

CTA

Social

                Portrait

--------------------------------------------
```

Layout Mobile

```
Portrait

Heading

Description

CTA

Social
```

---

## Hero Content

Greeting

```
Hello,
I'm Danar Rais.
```

Headline

```
Frontend Developer

UI/UX Designer

Project Manager
```

Subheadline

```
Building thoughtful digital products
through clean code,
strategic thinking,
and modern user experiences.
```

---

## CTA

Primary

View Projects

Secondary

Download CV

Buttons sejajar.

---

## Portrait

Portrait menggunakan:

Rounded

20px

Tidak menggunakan frame hitam.

Tidak menggunakan shadow keras.

Background:

Soft radial light.

---

## Background

Gunakan

Very subtle radial gradient.

```
center

↓

transparent
```

Opacity sangat rendah.

Tidak menggunakan pattern.

Tidak menggunakan grid.

---

## Hero Animation

Load

Heading

Fade Up

Description

Fade Up

Buttons

Fade Up

Portrait

Scale

0.96

↓

1

Duration

700ms

Stagger

120ms

---

# 19. About Section

Layout

```
Heading

Description

Stats

Cards
```

---

## Description

Maximum

3 paragraph.

Jangan terlalu panjang.

---

## Stats

Contoh

```
Projects

15+

Years Learning

4+

Technologies

20+

Certificates

12+
```

Stat menggunakan angka besar.

---

## Cards

Gunakan 3 card.

Education

Experience

Interests

---

Card Layout

Icon

Title

Description

Radius

20px

Hover

Lift

4px

Border menjadi lebih terang.

---

# 20. Featured Projects

Ini adalah section paling penting.

---

## Heading

```
Featured Projects

Selected works and case studies.
```

---

## Grid

Desktop

2 Column

Tablet

2 Column

Mobile

1 Column

Gap

32px

---

## Card Layout

```
Thumbnail

Category

Project Title

Description

Role

Technology

Arrow
```

---

## Thumbnail

Aspect Ratio

16:10

Radius

18px

Object Fit

Cover

---

## Card Style

Background

Card Token

Border

1px

Padding

24px

Radius

24px

---

Hover

Translate

-8px

Border lebih terang.

Shadow

Soft

Thumbnail

Scale

1.03

Arrow

Slide

Ke kanan atas.

---

## Card Footer

```
Frontend

Laravel

Next.js

2026
```

Menggunakan badge kecil.

---

## Click Behavior

Card membuka

```
/projects/project-slug
```

Bukan modal.

---

## Transition

Drop Slide

Current Page

↓

Fade Out

↓

Naik

20px

Project Page

↓

Muncul dari bawah

↓

Fade In

↓

Slide Up

Duration

600ms

Ease

easeInOut

---

# 21. Buttons

## Primary

Filled

Radius

14px

Padding

16 × 28

Hover

TranslateY

-2px

Shadow muncul.

---

## Secondary

Outline

Hover

Background berubah.

---

## Ghost

Tanpa background.

Hover

Surface muncul.

---

## Icon Button

Circle

40px

Hover

Scale

1.05

---

# 22. Links

Semua link menggunakan:

Transition

200ms

Hover

Opacity

.8

Tidak menggunakan underline permanen.

Underline hanya muncul ketika hover atau active.

---

# 23. Badges

Radius

999px

Padding

8 × 14

Ukuran

12px

Background

Surface

Border

1px

Hover

Background lebih terang.

---

# 24. Section Title

Layout

```
Eyebrow

↓

Heading

↓

Description
```

Eyebrow

12px

Uppercase

Letter spacing

0.2em

Heading

48px

Description

18px

Maximum Width

640px

---

# 25. White Space Rules

Setiap section memiliki:

Desktop

120px

Top Bottom

Tablet

96px

Mobile

72px

Jangan menempel antar section.

Biarkan desain "bernapas".

---

# 26. Component Principles

Semua komponen harus:

Reusable

Composable

Accessible

Responsive

Animated

Theme-aware

Tidak boleh membuat komponen yang hanya bisa dipakai satu kali apabila dapat digeneralisasi.

---

# 27. Project Detail Page

Project Detail merupakan halaman paling penting dalam portfolio.

Halaman ini harus terasa seperti membaca studi kasus produk, bukan sekadar melihat screenshot.

Setiap project memiliki URL sendiri.

Contoh:

```
/projects/sponsorea

/projects/merakids

/projects/portfolio-v2
```

---

# 28. Project Hero

Layout Desktop

```
------------------------------------------------

Category

Project Title

Short Description

Role

Duration

Platform

Buttons

                    Hero Image

------------------------------------------------
```

Layout Mobile

```
Hero Image

Category

Project Title

Description

Role

Buttons
```

---

## Hero Image

Gunakan screenshot terbaik.

Aspect Ratio

16:9

Radius

24px

Border

1px

Hover

Tidak ada.

Image bersifat statis.

---

## Buttons

Live Demo

Github Repository

Keduanya berada sejajar.

Jika project private

Tampilkan badge

```
Private Repository
```

---

# 29. Overview

Overview maksimal

2 paragraph.

Menjelaskan:

- tujuan project
- siapa target user
- apa yang dibangun

Jangan menceritakan proses.

---

# 30. Problem & Solution

Layout Desktop

```
----------------------------

Problem

Solution

----------------------------
```

Mobile

```
Problem

Solution
```

---

Problem

Menjelaskan masalah utama.

Solution

Menjelaskan solusi yang dibangun.

Kedua card memiliki tinggi yang sama.

---

# 31. My Role

Gunakan card.

Contoh

```
Project Manager

Sprint Planning

Requirement Gathering

Communication
```

```
UI/UX Designer

Research

Wireframe

Prototype

UI Design
```

```
Frontend Developer

Next.js

Responsive

Integration API
```

Jumlah card menyesuaikan role.

---

# 32. Tech Stack

Dikelompokkan berdasarkan kategori.

```
Frontend

Backend

Database

Tools

Deployment
```

Contoh

Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

Backend

- Laravel
- Express

Database

- PostgreSQL
- MySQL

Tools

- Git
- Figma
- Postman
- Vercel

Gunakan icon monochrome.

Hover:

Background berubah sedikit.

---

# 33. Features

Gunakan grid.

Desktop

2 Column

Mobile

1 Column

Card berisi

Icon

Title

Description

Contoh

```
Authentication

Secure Login

Dashboard

Analytics

Notification

Role Management
```

Hover

Lift

4px

Border lebih terang.

---

# 34. Gallery

Gallery menggunakan:

Hero Image

+

Thumbnail List

Layout

```
Main Preview

Thumbnail Thumbnail Thumbnail Thumbnail
```

Klik thumbnail

↓

Main image berubah.

Animation

Fade

250ms

Boleh ditambahkan fullscreen viewer.

---

# 35. Challenges

Section ini menjelaskan tantangan selama development.

Format

```
Challenge

↓

Solution
```

Gunakan maksimal

3 challenge.

Tidak perlu terlalu panjang.

---

# 36. Results

Gunakan checklist.

Contoh

✓ Responsive Design

✓ Dark Mode

✓ Authentication

✓ API Integration

✓ Multi Language

✓ Dashboard

✓ Mobile Friendly

Jika memiliki pencapaian nyata (misalnya digunakan oleh organisasi atau dipakai dalam magang), tampilkan juga di sini.

---

# 37. Certificates

Layout

Grid

Desktop

3 Column

Tablet

2 Column

Mobile

1 Column

---

Card terdiri dari

Preview

Title

Issuer

Year

View Certificate Button

---

Hover

TranslateY

-6px

Border lebih terang.

Preview

Scale

1.02

---

Klik card

↓

Preview fullscreen.

---

# 38. Contact Section

Layout

```
Heading

Description

-----------------------

Contact Form

Social Links
```

---

Heading

```
Let's Build Something Great.
```

Description

Singkat.

Maksimal

2 kalimat.

---

# 39. Contact Form

Fields

Name

Email

Subject

(optional)

Message

Button

Send Message

Validasi:

Required

Email format

Loading State

Success State

Error State

---

# 40. Social Links

Gunakan icon.

Github

LinkedIn

Instagram

Email

WhatsApp

Hover

Scale

1.08

Background berubah.

---

# 41. Footer

Layout

```
Logo

Navigation

Social

Copyright
```

Footer dibuat sederhana.

Tidak terlalu tinggi.

Background menggunakan Surface.

Border tipis di atas.

---

# 42. Motion System

Semua animasi mengikuti prinsip berikut.

Natural

Fast

Elegant

Consistent

Tidak menggunakan animasi yang berlebihan.

---

# 43. Motion Timing

Fast

150ms

Normal

250ms

Medium

400ms

Page

600ms

Hero

700ms

---

# 44. Easing

Gunakan easing yang konsisten.

```
easeOut

easeInOut

cubic-bezier(.22,1,.36,1)
```

Hindari bounce animation.

---

# 45. Reveal Animation

Semua section muncul menggunakan:

Fade Up

```
Opacity

0

↓

1

Y

24

↓

0
```

Duration

600ms

Once

True

---

# 46. Hover Animation

Cards

↓

TranslateY(-6px)

Border menjadi lebih terang.

Shadow muncul.

Buttons

↓

Scale

1.02

Icons

↓

Rotate sedikit jika relevan.

Tidak menggunakan efek yang berlebihan.

---

# 47. Page Transition

Semua halaman menggunakan

Drop Slide Transition.

Current Page

↓

Opacity

1

↓

0

Y

0

↓

-24

Next Page

↓

Opacity

0

↓

1

Y

32

↓

0

Duration

600ms

Ease

easeInOut

Tidak ada loading yang mengganggu.

Transisi harus terasa halus dan cepat.

---

# 48. Responsive Design

The website must be fully responsive.

There should never be:

- Horizontal scrolling
- Overflowing cards
- Broken layouts
- Text clipping

---

## Breakpoints

Mobile

```
0px – 767px
```

Tablet

```
768px – 1023px
```

Desktop

```
1024px+
```

Large Desktop

```
1440px+
```

---

## Responsive Rules

Desktop

Container

1280px

Tablet

100%

Padding

24px

Mobile

100%

Padding

20px

---

Cards should automatically stack.

Never force two columns on mobile.

---

# 49. Mobile Experience

Mobile is not a simplified desktop.

It is a redesigned experience.

Rules:

• Bigger touch targets

• Larger spacing

• Shorter paragraphs

• Easier navigation

• Sticky navigation

Minimum touch target

```
44 × 44
```

---

# 50. Accessibility

Follow WCAG AA whenever possible.

---

## Contrast

Primary Text

Minimum

4.5:1

Buttons

Readable

Always.

---

## Keyboard Navigation

Every interactive element must support:

Tab

Shift + Tab

Enter

Escape

Focus Ring must always be visible.

---

## Images

Every image must have:

Meaningful alt text.

Decorative images should use:

```
alt=""
```

---

## Forms

Every input must have

Label

Placeholder

Validation Message

Error State

Success State

---

# 51. Performance

Target Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

---

## Optimization

Use

next/image

Lazy Load images

Dynamic Import when necessary

Minimize client components

Avoid unnecessary re-renders

Optimize fonts using

next/font

---

# 52. SEO

Every page must include:

Title

Description

Open Graph

Twitter Card

Canonical URL

Structured Data

Robots

Sitemap

---

## Home

Example

Title

```
Danar Rais Alhakim | Frontend Developer & UI/UX Designer
```

Description

```
Portfolio of Danar Rais Alhakim showcasing web development, UI/UX design, and modern digital products.
```

---

## Project

Every project has unique metadata.

Example

```
Sponsorea | Portfolio Case Study
```

---

# 53. Dark Mode

Dark Mode is the default experience.

Light Mode is optional.

Use semantic tokens.

Never hardcode colors inside components.

Wrong

```tsx
bg-black
text-white
```

Correct

```tsx
bg-background
text-foreground
```

Theme should switch using tokens only.

---

# 54. Internationalization

Support

Bahasa Indonesia

English

Do not hardcode text directly inside components.

Preferred structure

```
messages/

id.json

en.json
```

Example

```json
{
  "hero.title": "Frontend Developer",
  "hero.button": "View Projects"
}
```

---

# 55. Folder Structure

```
app/
│
├── (main)
│   ├── page.tsx
│   ├── layout.tsx
│
├── projects
│   ├── page.tsx
│   └── [slug]
│       └── page.tsx
│
├── certificates
│
└── api

components/
│
├── layout
├── sections
├── ui
├── project
└── shared

content/
│
├── projects
├── certificates

hooks/

lib/

types/

utils/

public/
```

---

# 56. Content Structure

Each project should have its own file.

Example

```
content/projects/

sponsorea.ts

merakids.ts

portfolio.ts
```

Example

```ts
export const project = {

slug:

title:

description:

overview:

problem:

solution:

role:

techStack:

gallery:

features:

results:

github:

demo:

}
```

Never hardcode project data inside page.tsx.

---

# 57. Coding Principles

Every component should be:

Reusable

Composable

Small

Readable

Maintainable

Avoid duplicated code.

Split large components.

Use Server Components whenever possible.

Client Components only when needed.

---

# 58. UI Consistency Rules

Every section follows the same rhythm.

Example

Eyebrow

↓

Heading

↓

Description

↓

Content

↓

CTA (optional)

Spacing between sections should remain consistent.

---

# 59. Design Do's

✔ Use whitespace generously

✔ Prioritize typography

✔ Use subtle motion

✔ Keep components reusable

✔ Build scalable layouts

✔ Focus on readability

✔ Keep the interface calm

✔ Make projects the main highlight

✔ Use consistent spacing

✔ Maintain visual hierarchy

---

# 60. Design Don'ts

✘ No rainbow gradients

✘ No neon effects

✘ No unnecessary glassmorphism

✘ No oversized shadows

✘ No distracting animations

✘ No inconsistent spacing

✘ No thick black borders

✘ No visual clutter

✘ No autoplay media

✘ No meaningless decorative elements

---

# 61. Final Experience Goal

When someone opens this portfolio, the first impression should be:

"This developer has excellent attention to detail."

Within the first minute, visitors should understand:

- Who Danar is
- What Danar specializes in
- What projects have been built
- How Danar approaches solving problems
- How to get in touch

The interface should feel calm, premium, modern, and intentional.

Every interaction should reinforce professionalism.

The portfolio is not built to impress with flashy effects.

It is built to communicate quality, clarity, and trust.

---

# End of Design Specification