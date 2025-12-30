import { Link } from 'react-router-dom'

const courses = [
  {
    id: '533',
    code: 'SSW 533',
    title: 'Software Metrics',
    focus: 'ROI Analysis for Performance Issues',
    description: 'Students analyze real Apache Avro issue tickets to understand performance problems, profiling data interpretation, and cost-benefit analysis of fixes.',
    materials: ['Guest Lecture Slides', '10 ROI Analysis Batches (50 tickets)', 'Activity Templates', 'Exit Survey'],
    status: 'active',
  },
  {
    id: '325',
    code: 'SSW 325',
    title: 'Object-Oriented Software Engineering',
    focus: 'Performance in Design Patterns',
    description: 'Integrating performance awareness into software design decisions and architectural patterns.',
    materials: [],
    status: 'coming',
  },
  {
    id: '345',
    code: 'SSW 345',
    title: 'Software Testing & Quality Assurance',
    focus: 'Performance Testing Methods',
    description: 'Performance testing methodologies, benchmarking, and quality metrics for software systems.',
    materials: [],
    status: 'coming',
  },
  {
    id: '560',
    code: 'SSW 560',
    title: 'Advanced Software Engineering',
    focus: 'Scalability & Optimization',
    description: 'Advanced performance optimization techniques and scalability patterns for enterprise systems.',
    materials: [],
    status: 'coming',
  },
]

const researchObjectives = [
  {
    title: 'Integration of Performance Concepts',
    description: 'Weave performance engineering knowledge throughout the undergraduate and graduate CS curriculum, from introductory to advanced courses.',
  },
  {
    title: 'Real-World Case Studies',
    description: 'Use actual issue tickets from open-source projects (Apache Avro) to teach students how engineers identify and fix performance problems in production.',
  },
  {
    title: 'ROI Analysis Framework',
    description: 'Develop structured methods for students to evaluate performance improvements against developer effort, learning to make informed trade-off decisions.',
  },
  {
    title: 'Assessment & Iteration',
    description: 'Measure learning outcomes through surveys and assignments, continuously refining educational materials based on student feedback.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header - Simple, Academic Style */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-primary)] mb-3">
            NSF-Funded Research Project
          </p>
          <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
            Integrating Software Performance Education Across the CS Curriculum
          </h1>
          <p className="text-lg text-[var(--color-ink-light)] max-w-3xl">
            A research initiative developing educational materials that teach students 
            to analyze, measure, and optimize software performance using real-world 
            case studies from open-source projects.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-[60px] z-40">
        <div className="container-wide">
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#courses" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              Course Materials
            </a>
            <a href="#objectives" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              Research Objectives
            </a>
            <a href="#methodology" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              Methodology
            </a>
            <Link to="/team" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              Research Team
            </Link>
          </nav>
        </div>
      </section>

      {/* Course Materials - Main Content */}
      <section id="courses" className="py-16">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-2">
              Course Materials
            </h2>
            <p className="text-[var(--color-ink-muted)]">
              Educational resources developed for each course in the curriculum integration.
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`border border-[var(--color-border)] bg-white ${
                  course.status === 'coming' ? 'opacity-60' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-[var(--font-mono)] text-sm font-semibold text-[var(--color-accent-primary)]">
                          {course.code}
                        </span>
                        {course.status === 'coming' && (
                          <span className="text-xs text-[var(--color-ink-subtle)] border border-[var(--color-border)] px-2 py-0.5">
                            In Development
                          </span>
                        )}
                      </div>
                      <h3 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)]">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[var(--color-accent-primary)] mt-1">
                        Focus: {course.focus}
                      </p>
                    </div>
                    
                    {course.status === 'active' && (
                      <Link
                        to={`/courses/${course.id}`}
                        className="btn-editorial text-sm"
                      >
                        View Materials →
                      </Link>
                    )}
                  </div>

                  <p className="text-[var(--color-ink-light)] text-sm mb-4">
                    {course.description}
                  </p>

                  {course.materials.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {course.materials.map((material) => (
                        <span 
                          key={material}
                          className="text-xs bg-[var(--color-paper)] text-[var(--color-ink-muted)] px-2 py-1 border border-[var(--color-border)]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section id="objectives" className="py-16 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-2">
              Research Objectives
            </h2>
            <p className="text-[var(--color-ink-muted)]">
              Core goals of this NSF-funded educational research initiative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchObjectives.map((objective, index) => (
              <div key={objective.title} className="bg-white border border-[var(--color-border)] p-6">
                <div className="flex items-start gap-4">
                  <span className="font-[var(--font-mono)] text-lg text-[var(--color-border-dark)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-2">
                Methodology
              </h2>
              <p className="text-[var(--color-ink-muted)] text-sm">
                How we structure performance education using real-world case studies.
              </p>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">
                  Case Study: Apache Avro
                </h3>
                <p className="text-[var(--color-ink-light)] text-sm leading-relaxed mb-4">
                  Apache Avro is a data serialization framework used in Apache Hadoop. 
                  We selected 50 issue tickets from the Avro JIRA that represent diverse 
                  performance challenges—from serialization bottlenecks to memory optimization.
                </p>
                <p className="text-[var(--color-ink-light)] text-sm leading-relaxed">
                  Students examine these real issues to understand how engineers document 
                  performance problems, interpret profiling data, and justify the effort 
                  required for fixes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">
                  ROI Analysis Framework
                </h3>
                <p className="text-[var(--color-ink-light)] text-sm leading-relaxed mb-4">
                  For each issue ticket, students complete a structured analysis:
                </p>
                <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-4 font-[var(--font-mono)] text-sm">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                    <div><span className="text-[var(--color-ink-muted)]">1.</span> Performance Problem Summary</div>
                    <div><span className="text-[var(--color-ink-muted)]">5.</span> Developer Effort</div>
                    <div><span className="text-[var(--color-ink-muted)]">2.</span> Profiling Data</div>
                    <div><span className="text-[var(--color-ink-muted)]">6.</span> Quality Trade-offs</div>
                    <div><span className="text-[var(--color-ink-muted)]">3.</span> Metrics Used</div>
                    <div><span className="text-[var(--color-ink-muted)]">7.</span> Personal Reflection</div>
                    <div><span className="text-[var(--color-ink-muted)]">4.</span> Performance Improvement</div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">
                  Learning Assessment
                </h3>
                <p className="text-[var(--color-ink-light)] text-sm leading-relaxed">
                  We use before/after surveys to measure changes in student understanding 
                  of performance concepts, their ability to interpret profiling data, and 
                  confidence in cost-benefit analysis. This data helps us refine materials 
                  for future iterations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-2">
              Student Learning Outcomes
            </h2>
            <p className="text-[var(--color-ink-muted)]">
              What students should be able to do after completing these modules.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Understand the importance of software performance in production systems',
              'Identify what constitutes a performance issue in real projects',
              'Learn performance metrics commonly used in industry',
              'Interpret profiling and benchmark data from issue reports',
              'Estimate developer effort required to fix performance issues',
              'Evaluate performance improvements based on profiling data',
              'Reason about trade-offs among performance, maintainability, and readability',
              'Communicate performance findings in cost-benefit terms',
              'Integrate performance considerations into software cost estimation',
            ].map((outcome, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-white border border-[var(--color-border)] p-4"
              >
                <span className="w-5 h-5 rounded-full bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-sm text-[var(--color-ink-light)]">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-[var(--color-border)] bg-white p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">SSW 533 Materials</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Access lecture slides, activity templates, and ROI analysis sheets.
              </p>
              <Link to="/courses/533" className="interactive-link text-sm font-medium">
                Go to SSW 533 →
              </Link>
            </div>
            
            <div className="border border-[var(--color-border)] bg-white p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Research Team</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Meet the faculty and researchers behind this project.
              </p>
              <Link to="/team" className="interactive-link text-sm font-medium">
                View Team →
              </Link>
            </div>
            
            <div className="border border-[var(--color-border)] bg-white p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Exit Survey</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Completed the activity? Share your feedback to help us improve.
              </p>
              <a 
                href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-link text-sm font-medium"
              >
                Take Survey →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-[var(--color-ink-muted)]">
              <strong className="text-[var(--color-ink)]">Acknowledgment:</strong>{' '}
              This project is funded by the National Science Foundation (NSF).
            </div>
            <a
              href="https://nsf.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-accent-primary)] hover:underline inline-flex items-center gap-1"
            >
              nsf.gov
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
