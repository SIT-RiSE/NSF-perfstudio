const teamMembers = [
  {
    name: 'Dr. Lu Xiao',
    role: 'Principal Investigator',
    affiliation: 'Stevens Institute of Technology',
    department: 'School of Systems and Enterprises',
    bio: 'Leading research in software engineering education with focus on integrating performance concepts across the curriculum.',
    email: 'lxiao6@stevens.edu',
    image: null,
  },
  {
    name: 'Yu Tong',
    role: 'Research Team Member',
    affiliation: 'Stevens Institute of Technology',
    department: 'Software Engineering',
    bio: 'Contributing to ROI analysis methodology and course material development.',
    email: null,
    image: null,
  },
  {
    name: 'Haowei Chen',
    role: 'Research Team Member',
    affiliation: 'Stevens Institute of Technology',
    department: 'Software Engineering',
    bio: 'Supporting the development and deployment of educational materials and tools.',
    email: null,
    image: null,
  },
]

export default function Team() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed">
              The researchers and educators behind the NSF PerfStudio project, 
              dedicated to improving software performance education.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card group hover:bg-navy-800/50">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-teal to-accent-coral flex items-center justify-center mb-6">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span className="text-3xl font-display font-bold text-navy-950">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-display font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-teal font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-navy-400 text-sm mb-4">
                    {member.affiliation}
                    <br />
                    <span className="text-navy-500">{member.department}</span>
                  </p>
                  <p className="text-navy-300 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Contact */}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-accent-teal transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent-gold/20 mb-6">
              <svg className="w-10 h-10 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Funded by the National Science Foundation
            </h2>
            <p className="text-lg text-navy-300 mb-8">
              This project is supported by the National Science Foundation (NSF), 
              enabling research and development of innovative educational materials 
              for software performance engineering.
            </p>
            <a
              href="https://nsf.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z" />
              </svg>
              <span>Learn More About NSF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-navy-950">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-navy-300 mb-8">
              Interested in collaborating or learning more about the project? 
              We'd love to hear from you.
            </p>
            <div className="card inline-block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-navy-400 text-sm">Email</p>
                  <a href="mailto:lxiao6@stevens.edu" className="text-white hover:text-accent-teal transition-colors">
                    lxiao6@stevens.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

