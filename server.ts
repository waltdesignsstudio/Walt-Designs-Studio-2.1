import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Use custom to handle routes manually for MPA
    });
    app.use(vite.middlewares);

    // MPA Route mappings for development
    app.get("/", async (req, res, next) => {
      try {
        const template = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "index.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });

    app.get("/services", async (req, res, next) => {
      try {
        const template = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "services.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });

    app.get("/about", async (req, res, next) => {
      try {
        const template = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "about.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });

    app.get("/contact", async (req, res, next) => {
      try {
        const template = await vite.transformIndexHtml(req.url, await (await import("fs/promises")).readFile(path.resolve(__dirname, "contact.html"), "utf-8"));
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // MPA Route mappings for production
    app.get("/", (req, res) => res.sendFile(path.join(distPath, "index.html")));
    app.get("/services", (req, res) => res.sendFile(path.join(distPath, "services.html")));
    app.get("/about", (req, res) => res.sendFile(path.join(distPath, "about.html")));
    app.get("/contact", (req, res) => res.sendFile(path.join(distPath, "contact.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
