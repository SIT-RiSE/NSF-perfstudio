import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const courseLinks = [
  { name: 'SSW 315 — SPE Basics', path: '/courses/315', unit: 'Unit 1' },
  { name: 'SSW 345 — Performance Modeling', path: '/courses/345', unit: 'Units 2-3' },
  { name: 'SSW 533 — Data Collection', path: '/courses/533', unit: 'Unit 4' },
  { name: 'SSW 567 — Performance Testing', path: '/courses/567', unit: 'Unit 5' },
]

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Advisory Board', path: '/advisory-board' },
  { name: 'Team', path: '/team' },
  { name: 'Research Papers', path: '/papers' },
  { name: 'Download', path: '/resources' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isCoursePage = location.pathname.startsWith('/courses/')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Calculate reading progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / documentHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCourseDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
      />
      
      <nav className={`sticky-nav border-b transition-all duration-300 ${
        scrolled ? 'border-[var(--color-border)] py-3' : 'border-transparent py-5'
      }`}>
        <div className="container-wide mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="4" fill="currentColor" className="text-[var(--color-ink)]"/>
                  <path d="M19 10V7L10 18h8v8l9-11h-8z" fill="#fffcf7" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-headline)] text-lg font-medium tracking-tight text-[var(--color-ink)]">
                  PerfStudio
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-muted)] -mt-1">
                  NSF Research
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {/* Home Link */}
              <Link
                to="/"
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === '/'
                    ? 'text-[var(--color-ink)]'
                    : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-accent-primary)]" />
                )}
              </Link>

              {/* Curriculum Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                  className={`relative text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                    isCoursePage
                      ? 'text-[var(--color-ink)]'
                      : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  Curriculum Modules
                  <svg 
                    className={`w-4 h-4 transition-transform ${courseDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isCoursePage && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-accent-primary)]" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {courseDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[var(--color-border)] shadow-lg z-50">
                    <div className="py-2">
                      {courseLinks.map((course) => (
                        <Link
                          key={course.path}
                          to={course.path}
                          onClick={() => setCourseDropdownOpen(false)}
                          className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === course.path
                              ? 'bg-[var(--color-paper)] text-[var(--color-ink)]'
                              : 'text-[var(--color-ink-muted)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]'
                          }`}
                        >
                          <span>{course.name}</span>
                          <span className="text-xs text-[var(--color-ink-muted)]">{course.unit}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[var(--color-border)] px-4 py-2">
                      <Link
                        to="/resources"
                        onClick={() => setCourseDropdownOpen(false)}
                        className="text-xs text-[var(--color-accent-primary)] hover:underline"
                      >
                        View All Resources →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? 'text-[var(--color-ink)]'
                      : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-accent-primary)]" />
                  )}
                </Link>
              ))}
              
              <div className="h-5 w-px bg-[var(--color-border)]" />
              
              <a
                href="https://nsf.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors"
              >
                <span>NSF Funded</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[var(--color-ink)]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pt-6 pb-4 border-t border-[var(--color-border)] mt-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-lg font-[var(--font-headline)] transition-colors ${
                  location.pathname === '/'
                    ? 'text-[var(--color-ink)]'
                    : 'text-[var(--color-ink-muted)]'
                }`}
              >
                Home
              </Link>
              
              {/* Mobile Course Links */}
              <div className="py-3 border-b border-[var(--color-border)] mb-3">
                <p className="text-xs uppercase tracking-wider text-[var(--color-ink-muted)] mb-2">Curriculum Modules</p>
                {courseLinks.map((course) => (
                  <Link
                    key={course.path}
                    to={course.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 pl-4 text-base transition-colors ${
                      location.pathname === course.path
                        ? 'text-[var(--color-ink)]'
                        : 'text-[var(--color-ink-muted)]'
                    }`}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-lg font-[var(--font-headline)] transition-colors ${
                    location.pathname === link.path
                      ? 'text-[var(--color-ink)]'
                      : 'text-[var(--color-ink-muted)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
