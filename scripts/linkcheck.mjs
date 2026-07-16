#!/usr/bin/env node
/**
 * Mirror dist under WEB-Notas-de-Hacking/ and link-check via local HTTP
 * so absolute /WEB-Notas-de-Hacking/* hrefs resolve like GitHub Pages.
 */
import { spawn } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import handler from "serve-handler";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const siteRoot = join(root, ".ci-site");
const mirrored = join(siteRoot, "WEB-Notas-de-Hacking");
const port = 8765;
const skip =
  "https://|http://(?!127\\.0\\.0\\.1)";

rmSync(siteRoot, { recursive: true, force: true });
mkdirSync(mirrored, { recursive: true });
cpSync(dist, mirrored, { recursive: true });

const server = createServer((req, res) =>
  handler(req, res, { public: siteRoot, cleanUrls: false })
);

await new Promise((resolve, reject) => {
  server.listen(port, "127.0.0.1", (err) => (err ? reject(err) : resolve()));
});

const url = `http://127.0.0.1:${port}/WEB-Notas-de-Hacking/`;
const child = spawn(
  "pnpm",
  ["exec", "linkinator", url, "--recurse", "--verbosity", "error", "--skip", skip],
  { cwd: root, stdio: "inherit", shell: false }
);

const code = await new Promise((resolve) => child.on("close", resolve));
server.close();
rmSync(siteRoot, { recursive: true, force: true });
process.exit(code ?? 1);
