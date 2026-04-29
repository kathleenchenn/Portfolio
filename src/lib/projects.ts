// ──────────────────────────────────────────────────
// Project Data — Source of Truth
//
// HOW TO EDIT:
// 1. Each project has a `content` array of blocks.
//    Add, remove, or reorder blocks freely — the UI
//    renders them in order. No fixed template.
// 2. Swap `image` and `screenshots[].src` paths to
//    update visuals. Paths are relative to /public.
// 3. `techStack` and `skills` have their own UI
//    treatment and stay as dedicated fields.
// ──────────────────────────────────────────────────

// ── Content Block Types ──────────────────────────
// Compose these in any order to tell your story.

export interface HeadingBlock {
  type: "heading";
  text: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface BulletBlock {
  type: "bullets";
  /** Optional label above the list */
  label?: string;
  items: string[];
}

export interface CalloutBlock {
  type: "callout";
  /** "info" | "warning" | "success" | "accent" */
  variant?: "info" | "warning" | "success" | "accent";
  title: string;
  text: string;
}

export interface StatsBlock {
  type: "stats";
  items: { value: string; label: string }[];
}

export interface FeatureGridBlock {
  type: "feature-grid";
  items: { title: string; description: string }[];
}

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | BulletBlock
  | CalloutBlock
  | StatsBlock
  | FeatureGridBlock;

// ── Screenshot ───────────────────────────────────

export interface Screenshot {
  /** Path relative to /public — e.g. "/images/project/cafe/1.png" */
  src: string;
  alt: string;
  caption?: string;
}

// ── Skills ───────────────────────────────────────

export type SkillCategory = "Frontend" | "Backend" | "Tools" | "Mobile" | "Data";

export interface SkillEntry {
  name: string;
  category: SkillCategory;
  /** Path to icon in /images/skills/ */
  icon?: string;
}

// ── Project ──────────────────────────────────────

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  /** Card thumbnail — path relative to /public */
  image: string;
  size: "large" | "medium" | "small";
  /** How screenshots are framed — "web" (browser chrome) or "app" (phone mockup). Defaults to "web". */
  displayType?: "web" | "app";
  liveUrl?: string;
  githubUrl?: string;

  /** Free-form narrative — rendered in order */
  content: ContentBlock[];
  screenshots: Screenshot[];
  skills: SkillEntry[];
  techStack: { name: string; role: string }[];
}

// ──────────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────────

export const projects: ProjectData[] = [
  // ── 1. Coffee Shop ──────────────────────────────
  {
    id: "coffee-shop",
    title: "Link's Coffee Shop",
    subtitle: "Vanilla Coffee Shop Website",
    description:
      "A fast, framework-free ordering site built with pure HTML/JS that works offline via a PWA. It features a persistent shopping cart and a fully responsive menu for mobile users.",
    category: "AI / WEBSITE",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/project/cafe/1.png",
    size: "large",
    githubUrl: "https://github.com/kathleenchenn/Coffee_shop",

    content: [
      {
        type: "heading",
        text: "The Inspiration",
      },
      {
        type: "paragraph",
        text: "Born from my summer routine as a CSIE student, I spent my vacation working out of local cafes. This project was a for fun creative outlet to transition from classroom theory to a polished, real-world digital menu that reflects my passion for coffee culture.",
      },
      {
        type: "heading",
        text: "The Nutrition Engine",
      },
      {
        type: "paragraph",
        text: "To support health-conscious choices, I engineered a Live Nutrition Module. It dynamically calculates Calories, Sugar, and Caffeine levels as users toggle between sizes (Medium, Tall, Grande), ensuring data transparency is at the forefront of the user experience.",
      },
      {
        type: "heading",
        text: "The Goal",
      },
      {
        type: "paragraph",
        text: "The objective was to aggregate Taiwan’s Top 4 Coffee Brands into a single, high-end interface. By organizing diverse menus into one cohesive design, I bridged the information gap between franchises, creating a professional-grade tool I would actually use in my daily life.",
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Core Engine",
            description:
              "The foundation of the project. I used TypeScript (36.4%) to ensure type-safe, scalable code and JavaScript (34.3%) to power the dynamic nutrition calculation logic.",
          },
          {
            title: "Framework",
            description:
              "Utilized Next.js to build a modular, component-based architecture. This allowed for an organized and high-performance interface that handles multiple coffee brands and product categories seamlessly.",
          },
          {
            title: "Styling",
            description:
              "Achieved a premium dark-mode aesthetic using Tailwind CSS. I focused on creating a fully responsive, mobile-first layout to ensure the menu looks perfect on any device.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "The Challenge",
        text: "As this was my first independent web project, I initially managed data locally within the source code. This manual approach required careful organization to maintain consistency without a dedicated database.",
      },
      {
        type: "callout",
        variant: "success",
        title: "What I Gained",
        text: "The initial debugging process was challenging, but overcoming those errors taught me how to trace bugs to their root cause. I’ve come away with a 'troubleshooting toolkit' that allows me to tackle similar development obstacles with much more confidence and speed.",
      },
    ],

    screenshots: [
      {
        src: "/images/project/cafe/1.png",
        alt: "Coffee shop landing page with hero banner and popular products grid",
        caption: "Landing page",
      },
      {
        src: "/images/project/cafe/2.png",
        alt: "Full menu page with category filters and product cards",
        caption: "Menu page ",
      },
      {
        src: "/images/project/cafe/3.png",
        alt: "Shopping cart sidebar with itemized list and total calculation",
        caption: "Menu Page",
      },
      {
        src: "/images/project/cafe/4.png",
        alt: "Mobile responsive view of the coffee shop website",
        caption: "Popular Products",
      },
    ],

    skills: [
      { name: "HTML", category: "Frontend", icon: "/images/skills/html.png" },
      { name: "CSS", category: "Frontend", icon: "/images/skills/css.png" },
      { name: "JS", category: "Frontend", icon: "/images/skills/js.png" },
      { name: "VS Code", category: "Tools", icon: "/images/skills/vscode.png" },
    ],

    techStack: [
      { name: "HTML5", role: "Core Engine" },
      { name: "CSS3", role: "Styling" },
      { name: "JavaScript", role: "Interactivity" },
      { name: "PWA", role: "Offline Support" },
    ],
  },

  // ── 2. Vieshow Ticketing ────────────────────────
  {
    id: "vieshow-web",
    title: "Vieshow Ticketing System",
    subtitle: "Web Ticketing System (Mock)",
    description:
      "A full-stack web platform for real-time movie bookings, seat selection, and member management.",
    category: "IOT / UX",
    tags: ["MySQL", "Next.js", "TypeScript"],
    image: "/images/project/vieshow/1.png",
    size: "large",
    githubUrl: "https://github.com/kathleenchenn/WebTicketingSystem",

    content: [
      {
        type: "heading",
        text: "Project Overview",
      },
      {
        type: "paragraph",
        text: "This was a collaborative group project for my Software Engineering course, marking my first experience building a complete, functional website from scratch. I worked with my team to simulate a professional cinema platform, focusing on creating a seamless user journey from movie browsing to final ticket booking.",
      },
      {
        type: "heading",
        text: "My Technical Contributions",
      },
      {
        type: "paragraph",
        text: "As my first full-stack project, I focused on bridging the gap between visual design and functional code. I successfully implemented complex business rules—like automated refund windows—to ensure the system behaved like a real-world enterprise application",
      },
      {
        type: "heading",
        text: "Core Functionality",
      },
      {
        type: "bullets",
        items: [
          "Identity Validation: Built frontend logic to verify IDs and emails, ensuring clean data entry before database storage.",
          "Booking & Pickup: Engineered the logic to track order history and generate unique digital pickup codes for users.",
          "Stored-Value System: Created a simulated digital wallet to handle member credits and enable one-click checkouts.",
          "Profile Control: Designed a responsive dashboard for profile updates, password recovery, and automated refund requests.",
        ],
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Frontend (The UI Layer)",
            description:
              "A responsive interface built with React and Next.js, using Tailwind CSS to create a polished, mobile-friendly cinema experience.",
          },
          {
            title: "Backend (The Logic Layer)",
            description:
              "A server-side engine powered by Node.js and Express that handles API routing, ticket validation rules, and the 2-hour refund logic.",
          },
          {
            title: "Database (The Data Layer)",
            description:
              "A structured MySQL environment that manages relational data between movie sessions, member accounts, and real-time seat availability.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "The Challenge",
        text: "Despite a compressed timeline and the requirement of two comprehensive reports, we successfully delivered the project within the deadline through effective time management and collaboration.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Instructor Evaluation",
        text: "The project received high marks for its technical depth and completeness. Despite the short project window, the system successfully implemented all core enterprise features, including secure authentication and automated refund logic.",
      },
    ],

    screenshots: [
      {
        src: "/images/project/vieshow/1.png",
        alt: "Vieshow homepage showing now-playing movies with poster grid",
        caption: "Homepage — Now playing with showtimes",
      },
      {
        src: "/images/project/vieshow/2.png",
        alt: " ",
        caption: "Set menu",
      },
      {
        src: "/images/project/vieshow/3.png",
        alt: " ",
        caption: "Movie Info",
      },
      {
        src: "/images/project/vieshow/4.png",
        alt: " ",
        caption: "Booking confirmation",
      },
    ],

    skills: [
      { name: "ReactJS", category: "Frontend", icon: "/images/skills/react.png" },
      { name: "JS", category: "Frontend", icon: "/images/skills/js.png" },
      { name: "CSS", category: "Frontend", icon: "/images/skills/css.png" },
      { name: "NodeJS", category: "Backend", icon: "/images/skills/nodejs.png" },
      { name: "MySQL", category: "Backend", icon: "/images/skills/mysql.png" },
      { name: "GitHub", category: "Tools", icon: "/images/skills/github.png" },
      { name: "VS Code", category: "Tools", icon: "/images/skills/vscode.png" },
    ],

    techStack: [
      { name: "Next.js 16", role: "Framework" },
      { name: "TypeScript", role: "Type Safety" },
      { name: "MySQL", role: "Database" },
      { name: "shadcn/ui", role: "Components" },
      { name: "Tailwind CSS", role: "Styling" },
    ],
  },

  // ── 3. Profit Navigator ─────────────────────────
  {
    id: "profit-navigator",
    title: "Profit Navigator",
    subtitle: "Shopee Profit Navigator",
    description:
      "A specialized financial automation tool developed to solve the complexity of Shopee Taiwan's multi-layered fee structures. Turns raw sales data into easy-to-read charts for better business decision-making.",
    category: "FINTECH",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    image: "/images/project/shoppe-navigator/1.png",
    size: "medium",

    content: [
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "Shopee sellers operating multiple storefronts can't see their real profit. The platform deducts 15+ different fee types (commission, payment processing, shipping subsidies, promotional discounts) buried across separate Excel exports. Sellers were making pricing decisions based on gross revenue, not actual margin.",
      },
      {
        type: "heading",
        text: "My Role",
      },
      {
        type: "paragraph",
        text: "Sole developer. I reverse-engineered Shopee's fee structure from raw export files, designed the reconciliation algorithm, built the React dashboard, and iterated with 3 active Shopee sellers during development.",
      },
      {
        type: "bullets",
        label: "Key Solutions",
        items: [
          "Custom Excel parsing engine that normalizes data across Shopee's inconsistent export formats",
          "Fee decomposition algorithm that maps all 15+ hidden deduction types to human-readable categories",
          "Cross-file order matching that reconciles delivery records, refunds, and adjustments automatically",
          "Interactive profit dashboard with per-item, per-store, and per-period breakdowns",
        ],
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Smart Data Matching",
            description:
              "Detects and matches delivery orders across multiple Excel files. Resolves mismatches without manual effort.",
          },
          {
            title: "Accurate Profit Tracking",
            description:
              "Decompiles Shopee's fee structure—subtracting hidden fees from sales to produce bulk-accurate actual profit.",
          },
          {
            title: "Error-Proof Logic",
            description:
              "Handles cancelled orders, partial refunds, and returns. Filters only 100% clean transactions.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Challenge: Inconsistent Export Formats",
        text: "Shopee changes their Excel column names without notice. 'Order ID' appeared as 'order_id', 'Order No.', and '訂單編號' across export periods. Hardcoded mappings broke every few weeks.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Resolution",
        text: "Built a fuzzy column matcher using Levenshtein distance and keyword scoring. The system attempts exact matches, falls back to regex pattern matching, then semantic similarity. Added a manual drag-and-drop mapping UI as a last resort.",
      },
      {
        type: "stats",
        items: [
          { value: "1000+", label: "Orders automated" },
          { value: "4h → 10m", label: "Reconciliation time" },
          { value: "99.8%", label: "Fee accuracy" },
        ],
      },
    ],

    screenshots: [
      {
        src: "/images/project/shoppe-navigator/1.png",
        alt: "Profit Navigator dashboard showing revenue vs actual profit chart",
        caption: "Dashboard — Revenue vs. actual profit after all deductions",
      },
      {
        src: "/images/project/shoppe-navigator/2.png",
        alt: "Detailed fee breakdown table showing all Shopee deduction categories",
        caption: "Fee breakdown — All 15+ deduction types decomposed",
      },
      {
        src: "/images/project/shoppe-navigator/3.png",
        alt: "File upload interface for importing Shopee Excel exports",
        caption: "Data import — Drag-and-drop Excel upload with validation",
      },
    ],

    skills: [
      { name: "ReactJS", category: "Frontend", icon: "/images/skills/react.png" },
      { name: "JS", category: "Frontend", icon: "/images/skills/js.png" },
      { name: "CSS", category: "Frontend", icon: "/images/skills/css.png" },
      { name: "VS Code", category: "Tools", icon: "/images/skills/vscode.png" },
    ],

    techStack: [
      { name: "TypeScript", role: "Core Engine" },
      { name: "React", role: "Interactive dashboard" },
      { name: "Vite", role: "Build tool" },
      { name: "shadcn/ui", role: "UI Components" },
      { name: "pdfjs-dist", role: "PDF Viewer" },
      { name: "Framer Motion", role: "Animations" },
    ],
  },

  // ── 4. Web Scraper ──────────────────────────────
  {
    id: "web-scraper",
    title: "Web Scraper",
    subtitle: "Universal E-Commerce Scraper",
    description:
      "A lightweight utility script that extracts structured data and SEO tags from any website into JSON format. It's designed for quick web previews and efficient data gathering.",
    category: "EDTECH",
    tags: ["TypeScript", "Python", "Playwright"],
    image: "/images/project/web-scraper/1.png",
    size: "medium",
    githubUrl: "https://github.com/kathleenchenn/WebScraper",

    content: [
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "Researchers and e-commerce analysts need structured data from arbitrary websites—product titles, pricing, meta tags, images—but every site has different markup. Writing custom scrapers per domain doesn't scale.",
      },
      {
        type: "heading",
        text: "My Role",
      },
      {
        type: "paragraph",
        text: "Sole developer. I architected the dual-engine approach, built the Next.js control interface, implemented the Playwright automation layer, and designed the structured output schema.",
      },
      {
        type: "bullets",
        label: "Key Solutions",
        items: [
          "Dual-engine architecture: Cheerio for fast static HTML parsing, Playwright for JavaScript-rendered SPAs",
          "Automatic engine selection based on page complexity detection",
          "Structured JSON output covering title, OG tags, images, pricing, and custom CSS selectors",
          "Anti-bot bypass using realistic browser fingerprints, randomized delays, and session rotation",
        ],
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Dual Scraping Engine",
            description:
              "Cheerio for fast static HTML; Playwright for JavaScript-heavy SPAs. Auto-detects which engine to use.",
          },
          {
            title: "Structured Output",
            description:
              "Clean JSON: title, description, OG tags, images, prices, and custom CSS selectors.",
          },
          {
            title: "Anti-Bot Bypass",
            description:
              "Realistic browser fingerprints, random delays, and session management to bypass protections.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Challenge: When to Use the Heavy Engine",
        text: "Cheerio is 50x faster than Playwright but can't execute JavaScript. Many e-commerce sites serve partial HTML with empty product containers that JS fills later.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Resolution",
        text: "Built a two-pass detection system. First pass checks for SPA markers (empty root divs, framework attributes, large inline scripts). If markers are found or content selectors return empty, the system escalates to Playwright. Added a confidence score so borderline cases get both engines, with the richer result winning.",
      },
      {
        type: "callout",
        variant: "accent",
        title: "AI Integration",
        text: "The scraper uses intelligent content detection algorithms to identify product data, pricing patterns, and semantic structure—making it AI-ready for downstream data pipelines.",
      },
    ],

    screenshots: [
      {
        src: "/images/project/web-scraper/1.png",
        alt: "Web scraper interface with URL input field and real-time extraction preview",
        caption: "Control panel — URL input with live extraction preview",
      },
      {
        src: "/images/project/web-scraper/2.png",
        alt: "Structured JSON output showing extracted product data and meta tags",
        caption: "Results view — Structured JSON with syntax highlighting",
      },
    ],

    skills: [
      { name: "JS", category: "Frontend", icon: "/images/skills/js.png" },
      { name: "ReactJS", category: "Frontend", icon: "/images/skills/react.png" },
      { name: "Python", category: "Backend", icon: "/images/skills/python.png" },
      { name: "NodeJS", category: "Backend", icon: "/images/skills/nodejs.png" },
      { name: "GitHub", category: "Tools", icon: "/images/skills/github.png" },
    ],

    techStack: [
      { name: "Next.js 16", role: "Web Interface" },
      { name: "Playwright", role: "Browser Automation" },
      { name: "Cheerio", role: "HTML Parser" },
      { name: "TypeScript", role: "Type Safety" },
    ],
  },

  // ── 5. Momo Price Tracker ───────────────────────
  {
    id: "web-momo",
    title: "Momo Price Tracker",
    subtitle: "輝葉 HUEI YEH — Daily Price Dashboard",
    description:
      "A Flask + Playwright web app that scrapes daily prices for HUEI YEH massage products on momoshop.com.tw, stores them in SQLite, and visualizes price history with live sparklines and inline SVG charts.",
    category: "AUTOMATION / DASHBOARD",
    tags: ["Flask", "Playwright", "SQLite"],
    image: "/images/project/web-momo/1.jpg",
    size: "small",
    githubUrl: "https://github.com/kathleenchenn/Web-Scraper-Momo",

    content: [
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "HUEI YEH lists roughly 120 massage products on momoshop across four search-result pages. Prices swing daily during flash sales and promotional events — tracking them by hand is impossible, and existing price-tracking tools either miss this category or break whenever momo redeploys.",
      },
      {
        type: "heading",
        text: "My Role",
      },
      {
        type: "paragraph",
        text: "Sole developer. I designed the scrape strategy around momo's Next.js payload, built the Flask dashboard, and shipped the whole pipeline as a one-command local app: pip install, playwright install, python app.py.",
      },
      {
        type: "bullets",
        label: "Key Solutions",
        items: [
          "Headless Playwright scraper that survives layout changes by extracting the embedded __next_f.push([...]) JSON payload instead of CSS selectors",
          "Auto-paginated crawl using the maxPage field from the same payload — no hardcoded page counts",
          "SQLite layer with daily snapshots, 30-day delta calculation, and idempotent same-day re-run protection (with a Force re-scrape override)",
          "Pure-SVG chart rendering on the frontend — both dashboard sparklines and the detail-view chart, no Chart.js dependency",
          "Background scrape job with live status polling, scheduled trigger time (Taipei TZ), and a configurable history window (1-365 days)",
        ],
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Smart Scraper",
            description:
              "Parses momo's Next.js hydration payload directly. When momo restyles the page, the scraper keeps working.",
          },
          {
            title: "Live Dashboard",
            description:
              "Cards for every product: current price, percent change vs 30 days ago, and a 7-day inline SVG sparkline.",
          },
          {
            title: "Detail View",
            description:
              "Click any product for the full chart with 7/14/30/90-day range selector and a day-by-day price table.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Challenge: momo Migrated to Next.js",
        text: "momo's search results are now React-rendered. Selector-based scraping returned empty containers — the DOM is built client-side, after a hydration step that doesn't run in a plain HTTP fetch.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Resolution",
        text: "Instead of waiting for hydration, I parse the __next_f.push([...]) chunks Next.js streams to the client. The full product list lives there as JSON, including the maxPage field — so pagination is auto-detected and the scraper never breaks on a redesign.",
      },
      {
        type: "stats",
        items: [
          { value: "~120", label: "Products tracked daily" },
          { value: "~30s", label: "Full scrape across 4 pages" },
          { value: "365d", label: "Configurable price history" },
        ],
      },
      {
        type: "callout",
        variant: "accent",
        title: "Built for the Long Haul",
        text: "Schedule python scraper.py via cron or Task Scheduler and the web app reads from the same SQLite file. CJK fonts (PingFang / JhengHei / Noto CJK) are detected for clean Chinese product-name rendering.",
      },
    ],

    screenshots: [
      {
        src: "/images/project/web-momo/1.jpg",
        alt: "Dashboard showing massage product cards with current price, percent change, and 7-day sparklines",
        caption: "Dashboard — Every tracked product with sparkline and 30-day delta",
      },
      {
        src: "/images/project/web-momo/2.jpg",
        alt: "Scraper configuration panel with daily scrape time and history window settings, plus a manual trigger",
        caption: "Settings — Schedule the daily scrape and configure history window",
      },
      {
        src: "/images/project/web-momo/3.jpg",
        alt: "Product detail page with SVG price chart, range selector, and day-by-day price history table",
        caption: "Detail — Inline SVG chart with 7/14/30/90 range and daily history",
      },
    ],

    skills: [
      { name: "Python", category: "Backend", icon: "/images/skills/python.png" },
      { name: "JS", category: "Frontend", icon: "/images/skills/js.png" },
      { name: "HTML", category: "Frontend", icon: "/images/skills/html.png" },
      { name: "CSS", category: "Frontend", icon: "/images/skills/css.png" },
      { name: "GitHub", category: "Tools", icon: "/images/skills/github.png" },
    ],

    techStack: [
      { name: "Flask", role: "Web Server / API" },
      { name: "Playwright", role: "Headless Scraper" },
      { name: "SQLite", role: "Daily Snapshots" },
      { name: "Inline SVG", role: "Charts & Sparklines" },
      { name: "Jinja2", role: "Templates" },
    ],
  },

  // ── 6. AI Grocery Assistant ─────────────────────
  {
    id: "shopping-assistant",
    title: "AI Grocery Assistant",
    subtitle: "Smart Shopping App",
    description:
      "A multi-functional application designed to optimize the shopping experience. It integrates budget tracking and health management with an AI-powered assistant to provide personalized recommendations, history logging, and efficient list management.",
    category: "MOBILE / AI",
    tags: ["Kotlin", "Firebase", "Jetpack Compose"],
    image: "/images/project/grocery/1.png",
    size: "small",
    displayType: "app",

    content: [
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "While the current build features budget and health management, the core focus of our ongoing development is an advanced in-store navigation component. As project lead, I am overseeing the implementation of this system to finalize the application’s primary feature set.",
      },
      {
        type: "heading",
        text: "My Role",
      },
      {
        type: "paragraph",
        text: "Acting as Project Lead for my final degree project, I am directing the ongoing design and implementation of a five-module grocery assistant. Key features include OpenAI-powered assistance and real-time budget tracking. I am currently leading the team through iterative updates and feature expansions.",
      },
      {
        type: "bullets",
        label: "Key Solutions",
        items: [
          "Camera-based receipt scanning using on-device OCR to auto-populate the inventory list",
          "ML expiration prediction model trained on 5,000+ product entries with storage-condition awareness",
          "Recipe recommendation engine that prioritizes ingredients closest to expiration, minimizing waste",
          "Push notification system for items approaching expiration with suggested recipes",
        ],
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Receipt Scanning",
            description:
              "Uses device camera to scan grocery receipts and automatically populate the inventory list.",
          },
          {
            title: "Expiration Prediction",
            description:
              "ML model predicts expiration dates based on product type, storage conditions, and purchase date.",
          },
          {
            title: "Health Management Module",
            description:
              "An intelligent health tracking system that analyzes user caloric intake to provide personalized exercise recommendations. By fetching and processing daily nutritional data, the module dynamically suggests activities designed to help users maintain their fitness goals",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "The Challenge: OCR & Data Normalization",
        text: "Because receipt formats vary significantly across retailers, a major technical hurdle was ensuring the OCR (Optical Character Recognition) system could accurately identify and extract relevant data. We focused on refining the parsing logic to consistently capture line items and totals regardless of the layout.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Tech Stack & Tools",
        text: "Added a user-feedback loop: after the initial prediction, the app asks 'Where will you store this?' (fridge, freezer, or pantry). This one input improved accuracy to 87%. Over time, the model learns per-user habits and stops asking.",
      },
      {
        type: "callout",
        variant: "accent",
        title: "AI Integration",
        text: "Integrates a trained ML model for expiration prediction and uses NLP to parse recipe content, matching ingredients to inventory with fuzzy matching algorithms.",
      },
    ],

    screenshots: [
      {
        src: "/images/project/grocery/1.png",
        alt: "Login screen with email and password fields",
        caption: "Welcome back — clean login screen with email and password authentication",
      },
      {
        src: "/images/project/grocery/2.png",
        alt: "Shopping list with grocery items and quantity controls",
        caption: "Shopping Homepage",
      },
      {
        src: "/images/project/grocery/3.png",
        alt: "Add food record screen with nutrition and calorie tracking",
        caption: "Nearest Grocery Store location detection",
      },
      {
        src: "/images/project/grocery/4.png",
        alt: "Budget overview with spending breakdown by category",
        caption: "Monthly budget tracker with category-level spending breakdown and overspend alerts",
      },
      {
        src: "/images/project/grocery/5.png",
        alt: "AI shopping assistant chat powered by Groq",
        caption: "AI-powered shopping assistant for analyzing grocery lists and answering questions",
      },
    ],

    skills: [
      { name: "Kotlin", category: "Mobile", icon: "/images/skills/kotlin.png" },
      { name: "Firebase", category: "Backend", icon: "/images/skills/firebase.png" },
      { name: "Android Studio", category: "Tools", icon: "/images/skills/android-studio.png" },
      { name: "Python", category: "Data", icon: "/images/skills/python.png" },
      { name: "Claude", category: "Tools", icon: "/images/skills/claude.png" },
    ],

    techStack: [
      { name: "Kotlin", role: "Core App" },
      { name: "Jetpack Compose", role: "UI Framework" },
      { name: "Firebase", role: "Backend/Auth" },
      { name: "Coil", role: "Image Loading" },
    ],
  },

  // ── 7. Ads Generator ────────────────────────────
  {
    id: "ads-generator",
    title: "Timed Context Engine",
    subtitle: "AI Video → 30-Second Ad Script Generator",
    description:
      "Paste a YouTube URL or upload an MP4 — Gemini watches the video, identifies the product, breaks down the hook and pain points, and assembles a complete 30-second ad script with timing, voiceover, and on-screen captions.",
    category: "AI / CONTENT",
    tags: ["Express", "Gemini AI", "yt-dlp"],
    image: "/images/project/ad-generator/1.jpg",
    size: "small",
    githubUrl: "https://github.com/kathleenchenn/Ads-Generator",

    content: [
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "paragraph",
        text: "Crafting a 30-second product ad script means watching reference videos, isolating the hook, mapping the pain point, sketching shot lists, and writing voiceover with cap-tight timing. The work is creative — but the analytical pre-work is mostly mechanical, and a senior creative will burn hours on it before the first line of script gets written.",
      },
      {
        type: "heading",
        text: "My Role",
      },
      {
        type: "paragraph",
        text: "Sole developer. I designed the prompt architecture around Gemini's File API for true multimodal video analysis (not just transcripts), built the Express backend, the single-page UI, and configured the serverless Vercel deployment with extended limits to handle real video uploads.",
      },
      {
        type: "bullets",
        label: "Key Solutions",
        items: [
          "yt-dlp pipeline that ingests any YouTube URL or accepts a direct MP4 upload — auto-downloads the binary on Linux/Vercel",
          "Multimodal analysis using the Google Gemini File API: the actual video is uploaded, not just an extracted transcript, so the model reasons about visuals + audio together",
          "Structured creative breakdown: hook detection, pain-point identification, and a marketing-strategy summary derived directly from the source footage",
          "10/10/10 brainstorm: 10 alternative hooks, 10 pains, and 10 product-display angles — pick one of each and the engine assembles the final 30s script",
          "Production-ready output: a timestamped script table with visual direction, voiceover lines, and on-screen caption design",
        ],
      },
      {
        type: "feature-grid",
        items: [
          {
            title: "Zero-Input Generation",
            description:
              "One paste of a video URL produces a fully analyzed creative brief and an editable ad script — no manual prompting required.",
          },
          {
            title: "10 / 10 / 10 Menu",
            description:
              "Mix-and-match interactive selector. Toggle a hook, a pain, and a display style — the assembler stitches them into a coherent script.",
          },
          {
            title: "Director-Ready Script",
            description:
              "Structured beat sheet with second-by-second timing, shot description, voiceover copy, and caption design across the full 30 seconds.",
          },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Challenge: Serverless + Heavy Video Files",
        text: "Vercel functions historically cap at short timeouts and small payloads — but real reference videos can be hundreds of MB and Gemini needs the full file uploaded before it can analyze.",
      },
      {
        type: "callout",
        variant: "success",
        title: "Resolution",
        text: "Configured vercel.json with 300-second timeouts and 1 GB memory on the analysis function, then streamed uploads directly through the Gemini File API instead of buffering in memory. The pipeline is resilient enough to handle full YouTube downloads on the platform without falling back to a separate worker.",
      },
      {
        type: "stats",
        items: [
          { value: "1", label: "Paste-and-go input" },
          { value: "30s", label: "Final ad script" },
          { value: "300s", label: "Vercel timeout headroom" },
        ],
      },
      {
        type: "callout",
        variant: "accent",
        title: "Why the File API Matters",
        text: "Most AI video tools work on transcripts alone — they miss the cut, the on-screen text, the product close-up. By uploading the actual video to Gemini 2.5 Flash, the engine reasons about visual storytelling the way a creative director does.",
      },
    ],

    screenshots: [
      {
        src: "/images/project/ad-generator/1.jpg",
        alt: "Zero-input ad generator with URL/MP4 toggle, paste field, and live processing pipeline status",
        caption: "Input — Paste a YouTube URL or drop an MP4 and watch the pipeline run",
      },
      {
        src: "/images/project/ad-generator/2.jpg",
        alt: "Creative breakdown showing identified video hook and marketing strategy summary",
        caption: "Analysis — Hook detection and marketing-strategy breakdown",
      },
      {
        src: "/images/project/ad-generator/3.jpg",
        alt: "10/10/10 selector menu listing alternative hooks, pains, and display options for the user to choose",
        caption: "10 / 10 / 10 — Pick a hook, a pain point, a display angle",
      },
      {
        src: "/images/project/ad-generator/4.jpg",
        alt: "Final 30-second script in a timed table with visual, voiceover, and caption columns",
        caption: "Script — Director-ready 30-second beat sheet",
      },
    ],

    skills: [
      { name: "JS", category: "Frontend", icon: "/images/skills/js.png" },
      { name: "HTML", category: "Frontend", icon: "/images/skills/html.png" },
      { name: "CSS", category: "Frontend", icon: "/images/skills/css.png" },
      { name: "NodeJS", category: "Backend", icon: "/images/skills/nodejs.png" },
      { name: "Vercel", category: "Tools", icon: "/images/skills/vercel.png" },
      { name: "GitHub", category: "Tools", icon: "/images/skills/github.png" },
    ],

    techStack: [
      { name: "Express 5", role: "Backend / API" },
      { name: "Gemini 2.5 Flash", role: "Multimodal AI" },
      { name: "yt-dlp", role: "Video Ingest" },
      { name: "Vanilla HTML / JS", role: "Single-page UI" },
      { name: "Vercel", role: "Serverless Deploy" },
    ],
  },
];
