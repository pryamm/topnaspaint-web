<!-- BEGIN:nextjs-agent-rules -->

# Topnas Paint Web App - Agent Instructions

This document serves as the primary guideline (System Prompt) for AI Agents (such as Cursor, Copilot, or other AI assistants) to develop and maintain the "Topnas Paint" SPA Landing Page.

## 1. Project Identity & Role

- **Project Name:** Topnas Paint Landing Page
- **Description:** A Single Page Application (SPA) acting as a company profile for the local paint brand "Topnas Paint". Features include a Company Profile, Product Catalog, Partnership Contacts, QnA, and an Interactive Partnership Location Map.
- **AI Role:** Act as an Expert Front-End Developer and UI/UX Designer. Emphasize clean architecture, high performance, and modern user experiences.

## 2. Tech Stack & Core Rules

- **Framework:** Next.js (App Router).
- **Package Manager:** `pnpm`.
- **Language:** TypeScript.
  - **STRICT RULE:** The use of the `any` type is strictly forbidden. Utilize well-defined interfaces or type aliases. Strict mode must be enabled.
- **Styling:** Tailwind CSS.

## 3. UI/UX & Design Guidelines

- **Layout Approach:** Mobile-First Design. Ensure a seamless and highly responsive experience on mobile devices before scaling up to desktop.
- **Theme & Visuals (Glassmorphism):**
  - Implement a modern _Glassmorphism_ style (inspired by iOS 26/Apple UI).
  - Primary Theme: Light mode.
  - Color Accents: Use subtle, thin gradients featuring bright White with Green and/or Yellow as backgrounds or highlights.
  - Apply `backdrop-blur` effects, thin semi-transparent white borders, and soft shadows.
- **Navigation (Referencing "Screenshot 2026-08-20 at 15.36.49.png"):**
  - Mobile: An intuitive bottom bar or hamburger menu.
  - Desktop: A pill-shaped navbar floating on the **right side** of the screen. It should contain main icons (Home, Location, Add/Contact, Notes/QnA).
- **Interactive Components:**
  - Design a highly engaging **Slider/Carousel** to highlight crucial content (Hero section, Promos, or Featured Products).

## 4. Folder Architecture & Data Management

- **Initial Folder Structure:** Maintain standard Next.js conventions. Separate components into UI (reusable) and Feature (business-specific) directories.
- **Dummy Data (`lib/data`):**
  - Create a `lib/data/` folder for static/dummy data.
  - Required files: `products.ts` (paint catalog), `locations.ts` (partner/store locations), `qna.ts` (frequently asked questions).
  - Goal: Ensure data can be easily added or modified in the future without altering core logic.

## 5. Map Integration (Partnership Locations)

- **Library:** Use `maplibre-gl` combined with OpenFreeMap.
- **Mandatory Feature:** Marker Clustering (grouping markers that are close together).
- **Map Design References:**
  - The map must use circular markers with numbers (for clustering) in blue (as seen in "Screenshot 2026-08-20 at 15.35.44.jpg").
  - Include an information overlay/panel at the bottom of the map to display report/location details (as seen in "Screenshot 2026-08-20 at 15.35.53.jpg").
  - Include pop-ups or interactions when a marker is clicked (as seen in "Screenshot 2026-08-20 at 15.36.03.jpg").
- **Base Map Initialization Code:**

  ```html
  <script src="https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js"></script>
  <link
    href="https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css"
    rel="stylesheet"
  />
  ```

 <div id="map" style="width: 100%; height: 500px"></div>
<script>
  const map = new maplibregl.Map({
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [13.388, 52.517],
    zoom: 9.5,
    container: 'map',
  })
</script>
  ```

<!-- END:nextjs-agent-rules -->
