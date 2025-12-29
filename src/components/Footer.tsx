import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/50">
      <div className="container-custom mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-teal to-accent-coral flex items-center justify-center">
                <svg className="w-6 h-6 text-navy-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">PerfStudio</span>
            </Link>
            <p className="text-navy-400 max-w-md">
              An NSF-funded educational initiative integrating software performance concepts 
              across undergraduate and graduate computer science curricula.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/533" className="text-navy-400 hover:text-accent-teal transition-colors">
                  SSW 533 - ROI Analysis
                </Link>
              </li>
              <li>
                <span className="text-navy-600">SSW 325 - Coming Soon</span>
              </li>
              <li>
                <span className="text-navy-600">SSW 345 - Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-navy-400 hover:text-accent-teal transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <a
                  href="https://nsf.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-400 hover:text-accent-teal transition-colors"
                >
                  NSF Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-sm">
            © {new Date().getFullYear()} NSF PerfStudio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-navy-500 text-sm">
            <span>Funded by</span>
            <a 
              href="https://nsf.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-gold hover:text-accent-gold/80 transition-colors font-medium"
            >
              National Science Foundation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

