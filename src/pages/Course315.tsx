import { Link } from 'react-router-dom'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 130
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

export default function Course315() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] mb-3">
            <Link to="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <span>/</span>
            <span>Courses</span>
            <span>/</span>
            <span className="text-[var(--color-ink)]">SSW 315</span>
          </div>
          
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent-purple)]">
                  SSW 315 — Object-Oriented Programming
                </p>
                <span className="text-xs bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)] px-2 py-0.5 rounded">
                  SPE Unit 1
                </span>
              </div>
              <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                Software Performance for OO Design
              </h1>
              <p className="text-[var(--color-ink-light)] max-w-2xl">
                This module covers <strong>Unit 1</strong> of the PerfStudio curriculum, introducing 
                SPE fundamentals, Java I/O performance, and OO design trade-offs through a 
                problem-based learning activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-[60px] z-40">
        <div className="container-wide">
          <nav className="flex flex-wrap gap-6 text-sm">
            <button onClick={() => scrollToSection('overview')} className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">Overview</button>
            <button onClick={() => scrollToSection('materials')} className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">Materials</button>
            <button onClick={() => scrollToSection('exercise')} className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">Exercise</button>
            <button onClick={() => scrollToSection('survey')} className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">Survey</button>
          </nav>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-12">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-4">
                Overview
              </h2>
              <div className="prose prose-sm max-w-none text-[var(--color-ink-light)] leading-relaxed">
                <p className="mb-4">
                  This module implements <span className="bg-[var(--color-highlight)] px-1 text-[var(--color-ink)]">Unit 1: SPE Basics</span> of 
                  the PerfStudio SPE curriculum. Students learn the foundational concepts of Software Performance Engineering 
                  and how to apply them in <span className="text-[var(--color-accent-purple)] font-medium">object-oriented system design</span>.
                </p>
                <p className="mb-4">
                  The course emphasizes <span className="text-[var(--color-accent-coral)] font-medium">practical trade-offs</span> between 
                  design elegance and runtime efficiency. Through lectures and hands-on exercises, students explore the 
                  SPE process for OO systems, learn to assess performance risks, and understand how design decisions 
                  (inheritance vs. composition, I/O strategies) impact system performance.
                </p>
              </div>

              {/* Lecture Card */}
              <div className="mt-8 bg-[var(--color-paper)] border border-[var(--color-border)] p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-[var(--color-accent-purple)] font-semibold uppercase tracking-wider mb-1">Lecture</p>
                    <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-ink)]">
                      Software Performance for OO Design
                    </h3>
                    <p className="text-sm text-[var(--color-ink-muted)]">Dr. Eman Alomar</p>
                  </div>
                  <a 
                    href="./materials/315/SSW315-lecture.pptx"
                    download
                    className="btn-editorial text-xs py-2 px-3 flex-shrink-0"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    PPTX
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Part 1: SPE Process for OO Systems</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Assess Performance Risks</li>
                      <li>• Identify Critical Use Cases</li>
                      <li>• Select Key Performance Scenarios</li>
                      <li>• Establish Performance Objectives</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Part 2: Performance Trade-offs</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Resource Utilization (I/O, CPU, Bandwidth)</li>
                      <li>• Temporal vs Spatial Cost Trade-offs</li>
                      <li>• Object Granularity considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Part 3: Java I/O and Performance</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Byte Streams vs Character Streams</li>
                      <li>• Buffered I/O for efficiency</li>
                      <li>• Data Streams and Object Streams</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Part 4: OO Design Tips</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Encapsulation trade-offs</li>
                      <li>• Inheritance hierarchy depth</li>
                      <li>• Composition vs Inheritance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">Learning Outcomes</h3>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--color-ink-light)]">
                  {[
                    'Understand basic SPE definitions and concepts',
                    'Understand common performance strategies and limitations',
                    'Apply SPE process to assess performance risks',
                    'Compare Java I/O APIs for performance optimization',
                    'Analyze trade-offs between inheritance and composition',
                  ].map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-accent-purple)]">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Course Info Card */}
              <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-6 sticky top-[140px]">
                <dl className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">Course</dt>
                    <dd className="text-[var(--color-ink)] font-medium">SSW 315</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">SPE Unit</dt>
                    <dd className="text-[var(--color-accent-purple)] font-medium">Unit 1</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">Instructor</dt>
                    <dd className="text-[var(--color-ink)]">Dr. Eman Alomar</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">Level</dt>
                    <dd className="text-[var(--color-ink)]">Undergraduate</dd>
                  </div>
                </dl>

                <div className="border-t border-[var(--color-border)] pt-4 mb-4">
                  <p className="text-xs text-[var(--color-ink-muted)] mb-2">Topics</p>
                  <div className="flex flex-wrap gap-1">
                    {['SPE Process', 'Java I/O', 'OO Design', 'Trade-offs'].map((topic) => (
                      <span key={topic} className="text-xs bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] px-2 py-0.5">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                  <a href="./materials/315/SSW315-lecture.pptx" download className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Lecture Slides
                  </a>
                  <a href="./materials/315/SSW315-assignment.pdf" download className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    PBL Activity
                  </a>
                  <a href="./materials/315/SSW315-survey.pdf" download className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Exit Survey
                  </a>
                </div>

                <div className="border-t border-[var(--color-border)] mt-4 pt-4">
                  <p className="text-xs text-[var(--color-ink-muted)]">
                    Part of the NSF-funded <Link to="/" className="text-[var(--color-accent-primary)] hover:underline">PerfStudio</Link> curriculum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials - Compact */}
      <section id="materials" className="py-8 bg-[var(--color-paper)] border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-semibold text-[var(--color-ink)]">Downloads</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="./materials/315/SSW315-lecture.pptx" download className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors">
                <span className="w-2 h-2 bg-[var(--color-accent-coral)] rounded-full"></span>
                Lecture Slides
              </a>
              <a href="./materials/315/SSW315-assignment.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors">
                <span className="w-2 h-2 bg-[var(--color-accent-purple)] rounded-full"></span>
                PBL Activity Document
              </a>
              <a href="./materials/315/SSW315-survey.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors">
                <span className="w-2 h-2 bg-[var(--color-accent-warm)] rounded-full"></span>
                Exit Survey Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PBL Exercise */}
      <section id="exercise" className="py-12">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs text-[var(--color-accent-purple)] font-semibold uppercase tracking-wider">Problem-Based Learning</p>
          </div>
          <h2 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-2">
            DWT Pharmacy Vaccination System
          </h2>
          <p className="text-[var(--color-ink-muted)] mb-8 max-w-2xl">
            Design and analyze the performance of an online vaccination reservation system for DWT (similar to CVS) pharmacy.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)] mb-4">Task Overview</h3>
                <ol className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-purple)] text-[var(--color-accent-purple)] flex items-center justify-center text-xs font-semibold flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Describe SPE Process</p>
                      <p className="text-[var(--color-ink-muted)]">Based on system requirements (without model-based evaluation)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-purple)] text-[var(--color-accent-purple)] flex items-center justify-center text-xs font-semibold flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Compare Java I/O APIs</p>
                      <p className="text-[var(--color-ink-muted)]">Using 10M patient records (CSV), measure processing time and resource utilization</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-purple)] text-[var(--color-accent-purple)] flex items-center justify-center text-xs font-semibold flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Compare Inheritance vs Composition</p>
                      <p className="text-[var(--color-ink-muted)]">Implement both approaches, track execution time, draw observation diagrams</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">Student Role</h3>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  Act as a software performance engineer evaluating design choices and I/O strategies 
                  to optimize the vaccination reservation system's performance.
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">What You'll Learn</h3>
              <ul className="space-y-3 text-sm text-[var(--color-ink-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-purple)]">•</span>
                  How to apply SPE process to a real system design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-purple)]">•</span>
                  Measuring and comparing Java I/O API performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-purple)]">•</span>
                  Analyzing inheritance vs. composition trade-offs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-purple)]">•</span>
                  Documenting performance observations with diagrams
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                <h4 className="font-medium text-[var(--color-ink)] text-sm mb-2">After Completion</h4>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  Submit your analysis and take the exit survey to provide feedback on the learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Survey */}
      <section id="survey" className="py-12 bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-6">
              Feedback Survey
            </h2>
            <div className="border border-[var(--color-border)] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-accent-purple)]/10 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-accent-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Exit Survey</h3>
                  <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                    A brief survey to reflect on your learning experience. 
                    Your feedback helps us improve future course materials.
                  </p>
                  <a 
                    href="./materials/315/SSW315-survey.pdf"
                    download
                    className="btn-editorial text-sm"
                  >
                    Download Survey Template →
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
