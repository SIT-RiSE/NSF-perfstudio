# NSF PerfStudio

[![Deploy to GitHub Pages](https://github.com/SIT-RiSE/NSF-perfstudio/actions/workflows/deploy.yml/badge.svg)](https://github.com/SIT-RiSE/NSF-perfstudio/actions/workflows/deploy.yml)

**NSF PerfStudio** is an educational initiative showcasing software performance engineering concepts across multiple university courses. This website provides access to course materials, lecture slides, activities, and research resources.

🌐 **Live Site**: [https://sit-rise.github.io/NSF-perfstudio/](https://sit-rise.github.io/NSF-perfstudio/)

## 📚 Project Overview

This NSF-funded project integrates real-world performance analysis into computer science education. Students learn to:

- Analyze actual performance issues from open-source projects
- Apply ROI (Return on Investment) analysis frameworks
- Interpret profiling and benchmark data
- Make informed trade-off decisions

## 🎓 Course Offerings

### SSW 533 - ROI Analysis for Software Performance
Learn to analyze real-world performance issues using ROI frameworks. Features:
- Guest lecture slides on performance metrics
- Hands-on activities with Apache Avro issue tickets
- ROI analysis templates and worksheets
- Exit surveys for learning assessment

### Additional Courses (Coming Soon)
- SSW 325 - Object-Oriented Software Engineering
- SSW 345 - Software Testing & Quality Assurance
- SSW 560 - Advanced Software Engineering

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
```

### Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
NSF-perfstudio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/
│   └── materials/      # PDF downloads & documents
├── reference/          # Source materials (not deployed)
├── .github/workflows/  # CI/CD configuration
└── PLAN.md            # Development plan
```

## 🚀 Deployment

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the production bundle
2. Uploads artifacts to GitHub Pages
3. Deploys to the live site

Manual deployment can also be triggered from the Actions tab.

## 👥 Team

- **Dr. Lu Xiao** - Principal Investigator, Stevens Institute of Technology
- **Yu Tong** - Research Team Member
- **Haowei Chen** - Research Team Member

## 🙏 Acknowledgments

This project is funded by the **National Science Foundation (NSF)**. We thank all contributors and students who have participated in developing and testing these educational materials.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
