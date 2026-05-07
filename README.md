# Photo Studio

This repository contains the source code for Photo Studio, a personal photography portfolio application built with Next.js. It's designed to showcase a curated collection of photos, complete with detailed technical metadata and location data, presented in a clean, responsive interface with a Neumorphic design aesthetic.

----

## Features

*   **Masonry Photo Gallery:** Displays photos in a responsive, multi-column masonry grid.
*   **Tag-Based Filtering:** Allows users to easily filter the gallery by predefined categories.
*   **Detailed Photo View:** Each photo has its own page displaying:
    *   High-resolution image showcase.
    *   Title, description, and capture date.
    *   Technical EXIF metadata, including camera body, lens, aperture, shutter speed, ISO, and focal length.
    *   Location name derived from coordinates via reverse geocoding.
    *   An interactive map (using Leaflet) pinpointing the capture location.
*   **Local Upload Workflow:** A dedicated `/upload` page (for development environments) allows new photos to be added. This feature includes:
    *   Automatic EXIF data extraction from uploaded image files.
    *   Client-side image compression to the WebP format for optimized delivery.
    *   A form to manually add or override photo details.
    *   A local API endpoint that saves the image file and updates the central `photo_details.json` data source.
*   **Static Site Generation:** Built for performance and easy hosting, the project uses Next.js's static export functionality.

----

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Core Library:** [React](https://react.dev/)
*   **Mapping:** [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
*   **EXIF Parsing:** `exifr`
*   **Image Processing:** `browser-image-compression`

----

## Getting Started

To run this project on your local machine, follow these steps.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/shubham8456/photo-studio.git
    cd photo-studio
    ```

2. **Use node 24: `node lts/krypton`.**

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the development server:**
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
    ```bash
    npm run dev
    ```

----

## Deployment

This project is configured for continuous deployment to GitHub Pages. A GitHub Actions workflow, defined in `.github/workflows/deploy.yml`, automatically builds the application and deploys the static output from the `out/` directory on every push to the `main` branch.

----

Note on Uploading Photos:
The `/upload` route is available for local development only. Because the site is hosted on GitHub Pages as a static export, image management must be handled locally.

Workflow to add new photos:
1. Launch the application server on your local machine.
2. Navigate to localhost:PORT/upload in your browser.
3. Upload and manage your photos.
4. Git Push will rebuild and deploy the project to update the live site.

----

### Author: [Shubham Rawat](https://github.com/shubham8456)
Live link: https://studio.solidstack.fyi/
