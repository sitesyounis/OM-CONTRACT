# Oman Construction Contract AI Assistant

An AI-powered assistant that answers questions specifically about the Sultanate of Oman Standard Contract for Building and Civil Engineering Works (May 2019).

## 🚀 Quick Deployment (GitHub Pages)
This repository is pre-configured to work immediately with GitHub Pages.

1.  **Get a Gemini API Key** from [Google AI Studio](https://aistudio.google.com/).
2.  **Add your API Key**:
    *   Open `script.js` in your repository.
    *   Find the line: `const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';`
    *   Replace `'YOUR_API_KEY_HERE'` with your actual API key.
3.  **Upload to GitHub**:
    *   Upload `index.html`, `style.css`, and `script.js` to the **root** of your GitHub repository.
4.  **Enable Pages**:
    *   In GitHub, go to **Settings** > **Pages**.
    *   Select the `main` branch and `/ (root)` folder.
    *   Click **Save**.

## 📂 Project Structure
- `index.html`: The main chat interface (GitHub Pages ready).
- `style.css`: Professional styling for the assistant.
- `script.js`: Logic for calling the Gemini API and document context.
- `react.html`: Entry point for the advanced React version (requires a build step).

## ⚠️ Security Warning
This standalone version requires your API key to be in `script.js`. This is for demonstration purposes. For a public production site, you should use a backend proxy to keep your key hidden.
