# Oman Construction Contract AI Assistant

An AI-powered assistant that answers questions specifically about the Sultanate of Oman Standard Contract for Building and Civil Engineering Works (May 2019).

## Features
- **Context-Aware**: Only answers based on the provided legal document.
- **Bilingual**: Supports both English and Arabic.
- **Modern UI**: Professional chat interface built with React and Tailwind CSS.
- **GitHub Ready**: Includes a standalone version for easy deployment.

## Project Structure
- `/src`: React application source code.
- `/standalone`: Standalone HTML/CSS/JS version for GitHub Pages.
- `metadata.json`: Applet configuration.

## Standalone Deployment (GitHub Pages)
The `/standalone` directory contains everything you need to host this as a static site:
1.  **Get a Gemini API Key** from [Google AI Studio](https://aistudio.google.com/).
2.  **Add your API Key** to `/standalone/script.js`.
3.  **Upload** the contents of `/standalone` to a GitHub repository.
4.  **Enable GitHub Pages** in your repository settings.

## Security Warning
The standalone version requires hardcoding your API key in `script.js`. This is for demonstration purposes. For production, use a backend proxy to keep your key secure.
