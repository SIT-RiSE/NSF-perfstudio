import { Link } from 'react-router-dom'

const advisoryMembers = [
  {
    name: 'Alexander Podelko',
    title: 'Staff Performance Engineer',
    affiliation: 'MongoDB & Director, Computer Measurement Group',
    bio: 'His expertise in performance testing, architecting, and optimization of the MongoDB server contributes inputs for systematic considerations for performance-related topics.',
    expertise: 'Performance Testing & Optimization',
  },
  {
    name: 'Connie Smith, Ph.D.',
    title: 'Principal Consultant',
    affiliation: 'Performance Engineering Services Division, L&S Computer Technology, Inc.',
    bio: 'Internationally recognized for her work in defining the field of software performance engineering and integrating SPE into the development of new software systems.',
    expertise: 'Software Performance Engineering',
  },
  {
    name: 'Gregg Vesonder, Ph.D.',
    title: 'Director of Software Engineering Program',
    affiliation: 'Stevens Institute of Technology',
    bio: 'Prior to this role he served as executive director of the Cloud Platforms Research Department at AT&T Labs Research. He contributes expertise related to connections between software engineering undergraduate curriculum and other interfacing curricula at Stevens.',
    expertise: 'Curriculum Integration',
  },
  {
    name: 'Igor Trubin, Ph.D.',
    title: 'IT Manager',
    affiliation: 'Capital One Bank & Director, Computer Measurement Group',
    bio: 'Expert in Robotics/AI. His expertise related to performance anomaly and changes detection strengthens program materials and approaches.',
    expertise: 'Performance Anomaly Detection',
  },
  {
    name: 'Kishor Trivedi, Ph.D.',
    title: 'Fitzgerald Hudson Chair',
    affiliation: 'Department of Electrical and Computer Engineering, Duke University',
    bio: 'Known as a leading international expert in the domain of reliability and performability evaluation of Dependable systems.',
    expertise: 'Reliability & Performability',
  },
  {
    name: 'Qi Wang',
    title: 'NPI Operations Program Manager',
    affiliation: 'Google',
    bio: 'Graduate of University of Wisconsin–Madison. Holds PMP® credential from PMI and APICS CPIM certification from ASCM. Works at the interface of product development and operational execution, driving disciplined launch readiness and smoother transitions into production by aligning cross-functional stakeholders around quality, cost, and capacity considerations.',
    expertise: 'Operations & Program Management',
  },
  {
    name: 'Ye Yang, Ph.D.',
    title: 'Software Development Manager',
    affiliation: 'Amazon',
    bio: 'Previously Associate Professor at Stevens Institute of Technology and ISCAS. Her work sits at the intersection of empirical software engineering and data-driven decision making, with research spanning software cost estimation, defect prediction, and human-centered software engineering. Received ACM Distinguished Paper Awards at ICSE 2019 and ICSE 2020.',
    expertise: 'Empirical Software Engineering',
  },
  {
    name: 'Yutong Zhao, Ph.D.',
    title: 'Assistant Professor',
    affiliation: 'Computer Engineering & Computer Science, California State University Long Beach',
    bio: 'His research sits at the intersection of software engineering and performance engineering, spanning software performance analysis, software architecture, and AI techniques applied to software artifacts. Received NSF CRII award (2025) for LLM-empowered software performance issue testing, localization, and optimization. Published in TSE, ICSE, ASE, ESEC/FSE, and ISSTA.',
    expertise: 'Performance Engineering & AI',
  },
]

export default function AdvisoryBoard() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] mb-3">
            <Link to="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-ink)]">Advisory Board</span>
          </div>
          
          <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
            Advisory Board
          </h1>
          <p className="text-[var(--color-ink-light)] max-w-2xl">
            Distinguished experts from academia and industry who provide strategic guidance 
            and ensure the PerfStudio curriculum reflects real-world software performance challenges.
          </p>
        </div>
      </section>

      {/* Advisory Members */}
      <section className="py-12">
        <div className="container-wide">
          <div className="space-y-6">
            {advisoryMembers.map((member) => (
              <div 
                key={member.name}
                className="border border-[var(--color-border)] bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[var(--color-paper)] border border-[var(--color-border)] flex items-center justify-center">
                      <span className="font-[var(--font-headline)] text-xl text-[var(--color-ink-muted)]">
                        {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-ink)]">
                        {member.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-1 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] w-fit">
                        {member.expertise}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-[var(--color-ink-light)] mb-1">
                      {member.title}
                    </p>
                    <p className="text-sm text-[var(--color-ink-muted)] mb-3">
                      {member.affiliation}
                    </p>
                    
                    <p className="text-sm text-[var(--color-ink-light)] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Description */}
      <section className="py-12 bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-4">
              Advisory Board Role
            </h2>
            <div className="space-y-3 text-sm text-[var(--color-ink-light)]">
              <p>
                The PerfStudio Advisory Board provides external guidance to ensure our curriculum 
                remains relevant to industry needs and reflects current best practices in software 
                performance engineering.
              </p>
              <p>
                Board members contribute by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reviewing curriculum materials and providing feedback</li>
                <li>Suggesting real-world case studies and examples</li>
                <li>Connecting academic content to industry practices</li>
                <li>Advising on emerging trends in performance engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
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
