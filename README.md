# Brewbeans Website Export

This archive contains the complete Brewbeans website source, assets, configuration, and workspace support packages.

## Run locally

Requirements: Node.js 20+ and pnpm 9+.

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/brewbeans run dev
```

Then open http://localhost:5173 in your browser.

The website is frontend-only and does not require a database or API server to run.
