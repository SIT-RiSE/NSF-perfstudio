# NSF PerfStudio

[![Deploy to GitHub Pages](https://github.com/SIT-RiSE/NSF-perfstudio/actions/workflows/deploy.yml/badge.svg)](https://github.com/SIT-RiSE/NSF-perfstudio/actions/workflows/deploy.yml)

**NSF PerfStudio** is an educational initiative integrating Software Performance Engineering (SPE) concepts across multiple undergraduate and graduate courses at Stevens Institute of Technology. This website provides access to course materials, lecture slides, problem-based learning activities, and research resources.

🌐 **Live Site**: [https://sit-rise.github.io/NSF-perfstudio/](https://sit-rise.github.io/NSF-perfstudio/)

## 📚 Project Overview

This NSF-funded project integrates real-world performance analysis into computer science education through a cohesive five-unit SPE curriculum. Students learn to:

- Apply Software Performance Engineering processes to system design
- Analyze actual performance issues from open-source projects
- Conduct stress testing and performance benchmarking
- Apply ROI (Return on Investment) analysis frameworks
- Interpret profiling and benchmark data
- Make informed trade-off decisions in software design

## 🎓 SPE Curriculum Units & Courses

| Unit | Topic | Course | Level |
|------|-------|--------|-------|
| **Unit 1** | SPE Basics | SSW 315 | Junior Fall |
| **Unit 2** | Performance Modeling | SSW 345 | Junior Spring |
| **Unit 3** | Bottleneck Analysis | SSW 345 | Junior Spring |
| **Unit 4** | Data Collection & Analysis | SSW 533 | Senior Fall |
| **Unit 5** | Performance Testing | SSW 567 | Senior Spring |

### Course Details

#### SSW 315 - Software Performance for Object-Oriented Design
- SPE process for OO systems
- Java I/O performance comparison
- Inheritance vs. composition trade-offs
- **PBL Activity**: DWT Pharmacy Vaccination System

#### SSW 345 - Modeling and Simulation
- Eight types of performance issues
- Interactive learning with eFish'n'Sea game
- Stress testing with Loadster
- **PBL Activity**: Stress Testing Simulation

#### SSW 533 - Software Metrics and Estimation
- Performance metrics and profiling tools
- ROI analysis framework for performance optimization
- **PBL Activity**: ROI Analysis with Apache issue tickets

#### SSW 567 - Software Testing, Quality, and Maintenance
- Performance and reliability testing
- Unit testing with coverage and mutation testing
- **PBL Activity**: MRTD System Testing Project

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router (Hash-based for GitHub Pages)
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
NSF-perfstudio/
├── src/
│   ├── components/        # Layout, Navigation, Footer
│   ├── pages/             # Home, Course pages, Team, Resources
│   ├── App.tsx            # Main app with routing
│   └── index.css          # Tailwind CSS theme
├── public/
│   └── materials/         # Course materials (PDFs, PPTX, etc.)
│       ├── 315/           # SSW 315 materials
│       ├── 345/           # SSW 345 materials
│       ├── 533/           # SSW 533 materials (including batches)
│       └── 567/           # SSW 567 materials
├── reference/             # Source materials (not deployed)
├── .github/workflows/     # GitHub Actions deployment
├── PLAN.md               # Detailed development plan
└── README.md
```

## 🚀 Deployment

The website uses the `gh-pages` branch for deployment:

```bash
npm run deploy
```

This command:
1. Builds the production bundle with Vite
2. Pushes the `dist` folder to the `gh-pages` branch
3. GitHub Pages serves the site automatically

## 👥 Team

### Principal Investigators
- **Dr. Lu Xiao** - Stevens Institute of Technology (SSW 345 & 533)
- **Dr. Eman Alomar** - Stevens Institute of Technology (SSW 315)
- **Dr. Ye Yang** - Amazon

### Senior Personnel
- **Dr. André B. Bondi** - Software Performance Consultant
- **Dr. Yu Tao** - Stevens Institute of Technology (SSW 567)

### Research Assistants
- **Dr. Chenhao Wei** - Stevens Institute of Technology
- **Dr. Gengwu Zhao** - Stevens Institute of Technology

### Advisory Board
- Dr. Connie Smith (L&S Computer Technology)
- Dr. Kishor Trivedi (Duke University)
- Alexander Podelko (MongoDB)
- Dr. Igor Trubin (Capital One)
- Dr. Gregg Vesonder (Stevens Institute of Technology)
- Dr. Yutong Zhao (California State University Long Beach)
- Qi Wang (Google)

## 🙏 Acknowledgments

This project is funded by the **National Science Foundation (NSF)** IUSE: EHR Program. We thank all contributors, instructors, and students who have participated in developing and testing these educational materials.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
