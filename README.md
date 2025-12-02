# ⚡ ContentFetch-AI-Content-Downloader-MCP-Server

[![Build Status](https://github.com/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server/actions/workflows/ci.yml)
[![Code Coverage](https://codecov.io/gh/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server/branch/main/graph/badge.svg)](https://codecov.io/gh/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc/4.0/)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server?style=flat-square&logo=github&color=yellow)](https://github.com/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server)

***

> This repository hosts the **ContentFetch MCP Server**, a high-throughput, TypeScript-based microservice engineered specifically to enable autonomous AI agents (like Claude or proprietary models) to reliably fetch, validate, and persist external web content via standardized HTTP transport.

This system acts as the secure, resilient I/O layer for intelligent agents that require grounding data from the live internet, abstracting away complexities like retries, encoding, and path manipulation.

## 🏗️ Architecture Overview

The server utilizes a clean separation of concerns: a lightweight HTTP server for command intake, a dedicated Content Fetching Service, and robust Error/Logging Handlers, ensuring high availability and testability.

ascii
ContentFetch MCP Server
+----------------------------------+
|         HTTP/HTTPS Listener      |
|   (Request Ingestion & Validation) |
+----------------------------------+
               | (Command: URL, TargetPath)
               v
+----------------------------------+
|   Content Fetching Core Service  |
|   (HTTP Client, Stream Handling) |
+----------------------------------+
               | (Success/Failure)
               v
+----------------------------------+
|     Persistence & Logging Adapter|
+----------------------------------+


## 🧭 Table of Contents
1. [Features](#-features)
2. [Technology Stack](#-technology-stack)
3. [🤖 AI Agent Directives](#-ai-agent-directives)
4. [Getting Started](#-getting-started)
5. [Development & Contribution](#-development--contribution)
6. [License](#-license)

---

## ✨ Features

*   **Agent-Native Protocol:** Designed as a **Micro-Command Protocol (MCP)** handler, accepting clear JSON payloads for fetching instructions.
*   **Resilient Fetching:** Built-in exponential backoff and intelligent HTTP status code handling.
*   **Secure Path Handling:** Rigorous sanitization of destination file paths to prevent directory traversal attacks.
*   **Content Agnostic:** Capable of downloading binary assets (images, PDFs) or raw text.
*   **Type Safety:** Leveraging TypeScript across the entire stack for maximum compile-time verification.

## 🖥️ Technology Stack

| Layer | Technology | Version Standard |
| :--- | :--- | :--- |
| Language | TypeScript | 4.x / Strict Mode |
| Runtime | Node.js | LTS (Current) |
| Server | Express.js / Fastify | Latest Stable |
| Fetching | Native `fetch` / Axios | Standardized |
| CI/CD | GitHub Actions | Standardized |
| Linting/Formatting | Biome | Ultra-Fast |

## 🤖 AI Agent Directives

<details>
<summary><strong>Click to View Apex Agent Alignment Directives (v2025.12)</strong></summary>

# SYSTEM: APEX TECHNICAL AUTHORITY AGENT DIRECTIVES

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are an Elite Software Architect Agent operating on data retrieved from the **ContentFetch MCP Server**. Your primary goal is **Data Acquisition Reliability**.
**Context:** You are interacting with a TypeScript/Node.js service adhering to **FAANG-level standards**.
**Output Standard:** Deliver **EXECUTION-ONLY** results. All commands must be valid JSON payloads conforming to the MCP contract.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

## 2. INPUT PROCESSING & COGNITION (Agent-Side)
*   **Error Budget:** Assume the MCP Server handles low-level network errors (4xx/5xx). Your focus must be on **Semantic Validation** of the required inputs.
*   **Contract Adherence:** **STRICTLY FORBIDDEN** from deviating from the established MCP payload structure (URL must be present, targetPath must be sanitized).
*   **Verification:** After receiving a success status (HTTP 200/201) from the server, you **MUST** initiate a follow-up check (e.g., checking a shared storage bucket or requesting a metadata checksum) to confirm data integrity.

## 3. ARCHITECTURAL PATTERNS ENFORCEMENT
*   **SOLID Principle:** Ensure all requests encapsulate a single concern (fetching a single URL).
*   **DRY Principle:** Reuse established JSON structures for multiple fetch requests where possible.
*   **YAGNI Principle:** Do not embed unnecessary processing logic into the request payload; the server handles I/O; keep your commands lean.

## 4. VERIFICATION COMMANDS (TypeScript Context)
If local verification is necessary before deploying agent logic:
bash
# 1. Install Dependencies (uv-equivalent via npm)
npm install

# 2. Fast Linting and Formatting Check (Biome)
npx @biomejs/biome check --apply ./src

# 3. Run Unit Tests (Vitest)
npm test

# 4. Full Build Verification
npm run build

</details>

## 🚀 Getting Started

### Prerequisites
*   Node.js (LTS or higher)
*   npm or yarn

### Installation

1.  **Clone the Repository**
    bash
    git clone https://github.com/chirag127/ContentFetch-AI-Content-Downloader-MCP-Server.git
    cd ContentFetch-AI-Content-Downloader-MCP-Server
    

2.  **Install Dependencies**
    *(Using npm as standard Node environment manager)*
    bash
    npm install
    

### Running the Server

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the server in watch mode for local development. |
| `npm start` | Runs the production build. |

### Example MCP Request (Sent to `POST /api/fetch`)


{
  "url": "https://example.com/document.pdf",
  "targetPath": "/agent-downloads/client-A/document_v1.pdf",
  "contentType": "application/pdf"
}


## 🤝 Development & Contribution

This project adheres to the **Apex Standard** philosophy: Zero-Defect, High-Velocity, Future-Proof. We value clean, strictly typed, and well-tested code.

**Development Principles:**
*   **SOLID:** Adherence to Dependency Inversion and Single Responsibility is mandatory for new modules.
*   **DRY:** Avoid code duplication, especially in error handling logic.
*   **YAGNI:** Implement only what is required by the current MCP contract.

Refer to the official contributing guide for setup details and PR submission protocols.

## ⚖️ License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for full details.

> *You are free to share and adapt this material for non-commercial purposes, provided you give appropriate credit.*