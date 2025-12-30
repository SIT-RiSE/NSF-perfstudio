import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Dr. Lu Xiao',
    role: 'Principal Investigator',
    affiliation: 'Stevens Institute of Technology',
    department: 'School of Systems and Enterprises',
    bio: 'Leading research in software engineering education with focus on integrating performance concepts across the curriculum.',
    email: 'lxiao6@stevens.edu',
    initials: 'LX',
  },
  {
    name: 'Yu Tong',
    role: 'Research Team Member',
    affiliation: 'Stevens Institute of Technology',
    department: 'Software Engineering',
    bio: 'Contributing to ROI analysis methodology and course material development.',
    initials: 'YT',
  },
  {
    name: 'Haowei Chen',
    role: 'Research Team Member',
    affiliation: 'Stevens Institute of Technology',
    department: 'Software Engineering',
    bio: 'Supporting the development and deployment of educational materials and tools.',
    initials: 'HC',
  },
]

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] mb-3">
            <Link to="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-ink)]">Team</span>
          </div>
          
          <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
            Research Team
          </h1>
          <p className="text-[var(--color-ink-light)] max-w-2xl">
            Faculty and researchers at Stevens Institute of Technology working on 
            integrating software performance education across the CS curriculum.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12">
        <div className="container-wide">
          <div className="space-y-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="border border-[var(--color-border)] bg-white p-6"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-[var(--color-ink)] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-[var(--font-headline)] text-2xl text-white">
                      {member.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)]">
                      {member.name}
                    </h2>
                    <p className="text-[var(--color-accent-primary)] text-sm font-medium">
                      {member.role}
                    </p>
                    <p className="text-[var(--color-ink-muted)] text-sm mt-1">
                      {member.department}, {member.affiliation}
                    </p>
                    <p className="text-[var(--color-ink-light)] text-sm mt-3">
                      {member.bio}
                    </p>
                    
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline mt-3"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-12 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-4">
            Funding
          </h2>
          <p className="text-[var(--color-ink-light)] mb-4 max-w-2xl">
            This research is supported by the National Science Foundation (NSF). 
            The NSF funding enables development of innovative educational materials 
            for software performance engineering education.
          </p>
          <a
            href="https://nsf.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
          >
            National Science Foundation
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="container-wide">
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-4">
            Contact
          </h2>
          <p className="text-[var(--color-ink-light)] mb-4">
            For questions about this research project or potential collaboration:
          </p>
          <div className="border border-[var(--color-border)] bg-white p-4 inline-block">
            <div className="text-sm">
              <p className="text-[var(--color-ink)]"><strong>Dr. Lu Xiao</strong></p>
              <p className="text-[var(--color-ink-muted)]">Stevens Institute of Technology</p>
              <a 
                href="mailto:lxiao6@stevens.edu"
                className="text-[var(--color-accent-primary)] hover:underline"
              >
                lxiao6@stevens.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 border-t border-[var(--color-border)]">
        <div className="container-wide">
          <Link to="/" className="text-sm text-[var(--color-accent-primary)] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
