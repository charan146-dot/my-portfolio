# Charan Tej — Developer & AI/ML Research Portfolio

A modern, high-performance developer portfolio and research case study showcase built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed with clean typography, emerald and crisp white aesthetics, interactive SVG crystal lattice previews, acoustic log-mel signal visualizers, and expandable technical case studies.

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg             # Emerald brand icon
│   ├── link.jpeg               # Default portrait photo
│   └── images/
│       └── portrait-default.svg# Fallback botanical SVG portrait
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky responsive header with brand & quick navigation
│   │   ├── Footer.tsx          # Clean footer with quick links & LeetCode link
│   │   ├── ProfileModal.tsx    # Live configurator for photo upload, CGPA & LeetCode count
│   │   ├── common/
│   │   │   └── SectionHeading.tsx # Reusable section title & badge component
│   │   └── projects/
│   │       ├── CleanCrystalPreview.tsx     # Interactive SVG cubic/tetragonal lattice
│   │       └── CleanHeartSignalPreview.tsx # Interactive 8-channel acoustic envelope
│   ├── sections/
│   │   ├── Hero.tsx            # Introduction, career badges, CTAs & portrait card
│   │   ├── About.tsx           # Career goals & 4 target roles (SDE, Backend, Full-Stack, AI/ML)
│   │   ├── Skills.tsx          # 5 Categorized skill groups with confidence tags
│   │   ├── Projects.tsx        # Crystalline Material Properties & RosaNet case studies
│   │   ├── DSA.tsx             # Algorithmic practice, topics & 4-step problem solving
│   │   └── Education.tsx       # KMIT B.Tech CSE details & relevant coursework
│   ├── data/
│   │   ├── skills.ts           # Technical skills data structure
│   │   ├── projects.ts         # Case study details, pipelines, tags & acoustic classes
│   │   ├── career.ts           # Target career paths & key focus goals
│   │   ├── dsa.ts              # Algorithmic topics & interview preparation steps
│   │   └── education.ts        # Academic institution, degree & coursework
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces & definitions
│   ├── styles/
│   │   └── global.css          # Tailwind CSS directives & custom scrollbar styles
│   ├── App.tsx                 # Main modular app orchestrator
│   ├── App.monolith.backup.tsx # Original single-file backup for reference
│   └── main.tsx                # React DOM root entry point
├── index.html                  # HTML entry point with SEO & Google Fonts
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS Tailwind config
├── tailwind.config.js          # Tailwind theme & color extensions
├── tsconfig.json               # TypeScript compiler configuration
├── tsconfig.node.json          # Node config for Vite
├── vite.config.ts              # Vite bundler configuration with `@/` alias
└── README.md                   # Setup and deployment documentation
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: Version 18.x or 20.x+ (Recommended: LTS)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### 2. Navigate to the Project
```bash
cd my-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
To verify that all TypeScript types, assets, and bundle optimizations pass:
```bash
npm run build
```
The optimized production bundle will be output to the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel (Public Recruiter URL)

### Method A: Deploying via GitHub (Recommended)

1. **Initialize Git and Commit**:
   ```bash
   cd my-portfolio
   git init
   git add .
   git commit -m "feat: complete modular portfolio for Charan Tej"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `charan-portfolio`).
   - Leave it **Public** (or Private if you prefer).
   - Do **not** initialize with a README, .gitignore, or license (we already created them).

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/charan-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Connect to Vercel**:
   - Navigate to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** > **Project**.
   - Under **Import Git Repository**, find `charan-portfolio` and click **Import**.
   - Configure the Project Settings (Vercel automatically detects Vite):
     - **Framework Preset**: `Vite`
     - **Root Directory**: `./` (or leave default)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **Deploy**.

5. **Instant Live URL**:
   - Within 30–60 seconds, Vercel will complete the build and assign you a live HTTPS public URL (e.g., `https://charan-portfolio.vercel.app`).
   - Any future `git push origin main` will automatically trigger a continuous deployment on Vercel!

---

### Method B: Deploying Directly via Vercel CLI

If you prefer deploying directly from your terminal without opening GitHub:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy**:
   ```bash
   cd my-portfolio
   vercel
   ```
   Follow the prompts:
   - *Set up and deploy?* -> `Y`
   - *Which scope?* -> Select your personal account
   - *Link to existing project?* -> `N`
   - *Project name?* -> `charan-portfolio`
   - *Directory located?* -> `./`
   - *Want to modify settings?* -> `N`

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## 🎨 Customizing Your Portrait Photo

1. Place your photo file named `link.jpeg` inside the `public/` folder (`public/link.jpeg`).
2. Alternatively, click the **Photo** or **Sliders** button in the top navigation bar / hero card to upload or swap any photo instantly in real time through the live browser file picker!

---

## 📄 License
This project is personal and open-source under the MIT License.
