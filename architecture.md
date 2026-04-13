# VyorAI Website Architecture

## 1. High-Level Architecture

Frontend Layer (Next.js)
↓
SEO Layer
↓
API Layer
↓
AI Services
↓
Database

---

## 2. Frontend Technology

Framework: **Next.js (App Router)**

Language: **TypeScript**

Styling: **TailwindCSS**

Animation: **Framer Motion**

---

## 3. SEO Architecture

SEO is implemented at multiple levels.

### Technical SEO

Server Side Rendering (SSR)

Static Site Generation (SSG)

Next.js Metadata API

Open Graph tags

Twitter meta tags

---

### Structured Data

JSON-LD schemas implemented:

Organization
SoftwareApplication
Product
FAQ

---

### URL Structure

/
/products
/api-platform
/about
/docs

Clean URL structure improves SEO ranking.

---

## 4. Sitemap Generation

Automatic sitemap generation using Next.js.

Example:

/sitemap.xml

Contains:

homepage
product pages
documentation pages

---

## 5. Robots.txt

Robots configuration:

Allow search engines to crawl main pages.

Disallow:

admin routes
internal APIs

---

## 6. Performance SEO

Performance improvements include:

Image optimization
font optimization
lazy loading
code splitting

Target metrics:

Lighthouse score above 95
optimized Core Web Vitals

---

## 7. Internal Linking Strategy

Internal links connect:

products → API platform
API platform → documentation
homepage → product pages

This improves search engine indexing.
