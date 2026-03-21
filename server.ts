import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "mpa",
    });
    app.use(vite.middlewares);

    // MPA Route mappings for development (clean URLs)
    const serveHtml = async (req: express.Request, res: express.Response, next: express.NextFunction, htmlFile: string) => {
      try {
        const url = req.originalUrl;
        const template = await fs.readFile(path.resolve(__dirname, htmlFile), "utf-8");
        const transformed = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(transformed);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    };

    app.get("/", (req, res, next) => serveHtml(req, res, next, "index.html"));
    app.get("/services", (req, res, next) => serveHtml(req, res, next, "services.html"));
    app.get("/about", (req, res, next) => serveHtml(req, res, next, "about.html"));
    app.get("/contact", (req, res, next) => serveHtml(req, res, next, "contact.html"));
    
    // Fallback for clean URLs
    app.get("*", async (req, res, next) => {
      const url = req.path;
      if (url.endsWith(".html")) return next();
      const possibleHtml = path.resolve(__dirname, `${url.slice(1)}.html`);
      try {
        await fs.access(possibleHtml);
        return serveHtml(req, res, next, `${url.slice(1)}.html`);
      } catch {
        next();
      }
    });

  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    // MPA Route mappings for production (clean URLs)
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
