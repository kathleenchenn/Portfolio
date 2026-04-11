import { chromium } from "playwright";
import { spawn } from "child_process";
import { existsSync } from "fs";
import path from "path";

const OUTPUT_DIR = path.resolve("public/assets/projects");

const projects = [
  {
    name: "coffee-shop",
    // Static HTML — serve with npx serve
    dir: "C:/Users/user/Desktop/projects/Coffee_shop-main",
    cmd: "npx",
    args: ["serve", "-l", "4001", "-s", "."],
    url: "http://localhost:4001",
    wait: 3000,
  },
  {
    name: "vieshow-web",
    dir: "C:/Users/user/Desktop/projects/Vieshow-Web",
    cmd: "npx",
    args: ["next", "dev", "-p", "4002"],
    url: "http://localhost:4002",
    wait: 8000,
  },
  {
    name: "web-scraper",
    dir: "C:/Users/user/Desktop/projects/WebScraper-main",
    cmd: "npx",
    args: ["next", "dev", "-p", "4003"],
    url: "http://localhost:4003",
    wait: 8000,
  },
  {
    name: "profit-navigator",
    dir: "C:/Users/user/Desktop/projects/profit-navigator-main",
    cmd: "npx",
    args: ["vite", "--port", "4004"],
    url: "http://localhost:4004",
    wait: 5000,
  },
  {
    name: "momoscm",
    dir: "C:/Users/user/Desktop/projects/momoscm-main",
    cmd: "npx",
    args: ["vite", "--port", "4005"],
    url: "http://localhost:4005",
    wait: 5000,
  },
];

async function captureProject(project) {
  console.log(`\n📸 Capturing: ${project.name}`);
  let serverProcess = null;

  try {
    // Check if dir exists
    if (!existsSync(project.dir)) {
      console.log(`  ❌ Directory not found: ${project.dir}`);
      return;
    }

    // Start dev server
    console.log(`  Starting server at ${project.url}...`);
    serverProcess = spawn(project.cmd, project.args, {
      cwd: project.dir,
      stdio: "pipe",
      shell: true,
    });

    // Wait for server to start
    await new Promise((r) => setTimeout(r, project.wait));

    // Launch browser and take screenshot
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    try {
      await page.goto(project.url, { timeout: 15000, waitUntil: "networkidle" });
      await page.waitForTimeout(2000); // Let animations settle

      const outputPath = path.join(OUTPUT_DIR, `${project.name}.webp`);
      await page.screenshot({
        path: outputPath,
        type: "png", // We'll convert separately if needed
        clip: { x: 0, y: 0, width: 1440, height: 900 },
      });
      console.log(`  ✅ Saved: ${outputPath}`);
    } catch (navError) {
      console.log(`  ⚠️ Navigation failed: ${navError.message}`);
    }

    await browser.close();
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
  } finally {
    if (serverProcess) {
      serverProcess.kill("SIGTERM");
      // Also kill the process tree on Windows
      try {
        spawn("taskkill", ["/pid", String(serverProcess.pid), "/T", "/F"], {
          stdio: "pipe",
          shell: true,
        });
      } catch {}
    }
  }
}

async function main() {
  console.log("🎬 Starting project screenshot capture...\n");

  for (const project of projects) {
    await captureProject(project);
  }

  console.log("\n✅ Screenshot capture complete!");
}

main().catch(console.error);
