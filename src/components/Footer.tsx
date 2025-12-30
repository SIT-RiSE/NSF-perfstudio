import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="container-wide mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 flex items-center justify-center bg-[var(--color-cream)] rounded">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="var(--color-ink)">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="font-[var(--font-headline)] text-xl font-medium">
                PerfStudio
              </span>
            </Link>
            <p className="text-[var(--color-cream)]/70 text-sm leading-relaxed max-w-md">
              An NSF-funded educational research initiative integrating software 
              performance concepts across undergraduate and graduate computer science curricula.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[var(--color-cream)]/50">
              Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses/533" className="text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-cream)] transition-colors">
                  SSW 533 — ROI Analysis
                </Link>
              </li>
              <li>
                <span className="text-sm text-[var(--color-cream)]/40">
                  SSW 325 — Coming Soon
                </span>
              </li>
              <li>
                <span className="text-sm text-[var(--color-cream)]/40">
                  SSW 345 — Coming Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-6 text-[var(--color-cream)]/50">
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/team" className="text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-cream)] transition-colors">
                  Research Team
                </Link>
              </li>
              <li>
                <a
                  href="https://nsf.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-cream)] transition-colors inline-flex items-center gap-1"
                >
                  NSF Website
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.stevens.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-cream)] transition-colors inline-flex items-center gap-1"
                >
                  Stevens Institute
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-cream)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-cream)]/50 text-xs">
            © {new Date().getFullYear()} NSF PerfStudio. All rights reserved.
          </p>
          <p className="text-[var(--color-cream)]/50 text-xs flex items-center gap-2">
            <span>Funded by the</span>
            <a 
              href="https://nsf.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-accent-warm)] hover:underline"
            >
              National Science Foundation
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
