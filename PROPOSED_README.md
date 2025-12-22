# Web Content Ingestion Agent (Frontend-Only)

[![Vite](https://img.shields.io/badge/Vite-7.x-blue.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-cyan.svg)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://react.dev/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

A modern, frontend-only web application that allows users to fetch and download web content directly in their browser. This tool is built with a focus on client-side processing, ensuring that no server or backend infrastructure is required.

## Features

-   **Frontend-Only Architecture**: Runs entirely in the browser. No server dependencies, no databases.
-   **Direct Content Fetching**: Ingests and downloads content from any URL.
-   **Client-Side Logic**: All operations, from fetching to saving, are handled by the browser.
-   **Modern Tech Stack**: Built with Vite, React, TypeScript, and Tailwind CSS.
-   **Deploy Anywhere**: Can be deployed to any static hosting provider (GitHub Pages, Vercel, Netlify, etc.).

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn/pnpm

### Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/AgentData-WebContent-Ingestion-AI-Agent-NodeJS-Service.git
    cd AgentData-WebContent-Ingestion-AI-Agent-NodeJS-Service
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will generate a `dist` directory with the optimized, static assets of the application.

## How It Works

This application uses the browser's native `fetch` API to retrieve content from the specified URL. To handle potential Cross-Origin Resource Sharing (CORS) issues, it leverages a public CORS proxy.

When you click "Fetch & Download", the following happens:

1.  The request is sent to the target URL via the CORS proxy.
2.  The response is received and converted into a `Blob`.
3.  A temporary object URL is created for the `Blob`.
4.  A hidden anchor (`<a>`) tag is created, pointing to the object URL.
5.  The anchor tag is programmatically clicked, triggering a file download.
6.  The temporary object URL is revoked to free up memory.

This entire process occurs on the client-side, making the application lightweight and serverless.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](.github/CONTRIBUTING.md) for guidelines on how to get started.
