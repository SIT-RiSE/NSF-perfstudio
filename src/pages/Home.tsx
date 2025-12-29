import { Link } from 'react-router-dom'

const courses = [
  {
    id: '533',
    name: 'SSW 533',
    title: 'ROI Analysis for Software Performance',
    description: 'Learn to analyze real-world performance issues using ROI frameworks. Explore issue tickets from open-source projects like Apache Avro.',
    color: 'from-accent-teal to-cyan-400',
    status: 'active',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: '325',
    name: 'SSW 325',
    title: 'Object-Oriented Software Engineering',
    description: 'Integrating performance awareness into software design patterns and architectural decisions.',
    color: 'from-accent-coral to-orange-400',
    status: 'coming',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: '345',
    name: 'SSW 345',
    title: 'Software Testing & Quality Assurance',
    description: 'Performance testing methodologies and quality metrics for modern software systems.',
    color: 'from-accent-purple to-pink-400',
    status: 'coming',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '560',
    name: 'SSW 560',
    title: 'Advanced Software Engineering',
    description: 'Advanced topics in performance optimization and scalability patterns.',
    color: 'from-accent-gold to-yellow-400',
    status: 'coming',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const objectives = [
  {
    title: 'Real-World Analysis',
    description: 'Students analyze actual issue tickets from open-source projects to understand performance problems in production software.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Cost-Benefit Thinking',
    description: 'Learn to evaluate performance improvements against developer effort using ROI analysis frameworks.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Cross-Course Integration',
    description: 'Performance concepts woven throughout the curriculum, from introductory to advanced courses.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Practical Skills',
    description: 'Develop proficiency in profiling, benchmarking, and communicating performance findings.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 border border-accent-teal/20 rounded-full mb-6 opacity-0 animate-slide-up">
              <span className="w-2 h-2 bg-accent-teal rounded-full animate-pulse" />
              <span className="text-accent-teal text-sm font-medium">NSF-Funded Research Initiative</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 opacity-0 animate-slide-up animate-delay-100">
              Teaching Software{' '}
              <span className="gradient-text">Performance</span>
              {' '}Through Practice
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-300 leading-relaxed mb-8 max-w-2xl opacity-0 animate-slide-up animate-delay-200">
              An educational initiative integrating real-world performance analysis across 
              computer science curricula. Students learn to identify, measure, and optimize 
              software performance using industry-standard techniques.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up animate-delay-300">
              <Link to="/courses/533" className="btn-primary">
                <span>Explore SSW 533</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/team" className="btn-secondary">
                <span>Meet the Team</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-500">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Project Mission */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Project Mission
            </h2>
            <p className="text-lg text-navy-300 leading-relaxed">
              Software performance is critical to user experience, operational costs, and system reliability. 
              Yet, performance engineering concepts are often underrepresented in traditional computer science 
              education. Our project bridges this gap by creating hands-on learning experiences that expose 
              students to real-world performance challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={objective.title}
                className="card group hover:bg-navy-800/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-teal/20 to-accent-teal/5 flex items-center justify-center text-accent-teal mb-4 group-hover:scale-110 transition-transform">
                  {objective.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {objective.title}
                </h3>
                <p className="text-navy-400 text-sm leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Course Offerings
            </h2>
            <p className="text-lg text-navy-300">
              Performance concepts integrated across the curriculum, from foundational 
              courses to advanced graduate seminars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`card group relative overflow-hidden ${
                  course.status === 'coming' ? 'opacity-60' : ''
                }`}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color}`} />
                
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-navy-950 shrink-0`}>
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-bold rounded bg-gradient-to-r ${course.color} text-navy-950`}>
                        {course.name}
                      </span>
                      {course.status === 'coming' && (
                        <span className="px-2 py-1 text-xs font-medium text-navy-400 border border-navy-600 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-navy-400 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>
                    {course.status === 'active' && (
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-flex items-center gap-2 text-accent-teal hover:gap-3 transition-all"
                      >
                        <span>View Course Materials</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Our Research Approach
              </h2>
              <p className="text-lg text-navy-300 leading-relaxed mb-6">
                We use real issue tickets from popular open-source projects like Apache Avro 
                to teach students how software engineers identify and fix performance issues 
                in production systems.
              </p>
              <ul className="space-y-4">
                {[
                  'Analyze actual performance bug reports from industry projects',
                  'Learn to interpret profiling data and benchmark results',
                  'Estimate developer effort and performance improvements',
                  'Balance trade-offs between performance, maintainability, and readability',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-teal/20 to-accent-coral/20 rounded-3xl blur-2xl" />
              <div className="relative card bg-navy-900/80 p-8">
                <div className="font-mono text-sm">
                  <div className="text-navy-500 mb-4">// Sample ROI Analysis Template</div>
                  <div className="space-y-2">
                    <div><span className="text-accent-purple">Issue:</span> <span className="text-accent-gold">AVRO-3050</span></div>
                    <div><span className="text-accent-purple">Type:</span> <span className="text-accent-coral">Performance</span></div>
                    <div><span className="text-accent-purple">Metric:</span> <span className="text-navy-300">Execution Time</span></div>
                    <div><span className="text-accent-purple">Improvement:</span> <span className="text-accent-teal">2.5x faster</span></div>
                    <div><span className="text-accent-purple">Effort:</span> <span className="text-navy-300">3 developers, 15 comments</span></div>
                    <div><span className="text-accent-purple">Trade-offs:</span> <span className="text-navy-300">Minor complexity increase</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-950">
        <div className="container-custom mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-teal/10 via-accent-purple/10 to-accent-coral/10 border border-navy-700/50 p-8 md:p-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Explore?
              </h2>
              <p className="text-lg text-navy-300 mb-8">
                Start with SSW 533 to learn about ROI analysis for software performance, 
                or meet the research team behind this initiative.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses/533" className="btn-primary">
                  <span>SSW 533 Materials</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/team" className="btn-secondary">
                  <span>Meet the Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

