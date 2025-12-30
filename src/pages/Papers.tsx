import { Link } from 'react-router-dom'

export default function Papers() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-3">
          Under Construction
        </h1>
        <p className="text-[var(--color-ink-muted)] mb-6">
          The Research Papers page is currently being developed. Please check back soon.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

