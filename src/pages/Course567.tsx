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

export default function Course567() {
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
            <span className="text-[var(--color-ink)]">SSW 567</span>
          </div>
          
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent-warm)]">
                  SSW 567 — Software Testing, Quality, and Maintenance
                </p>
                <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-0.5 rounded">
                  SPE Unit 5
                </span>
              </div>
              <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                Performance Testing
              </h1>
              <p className="text-[var(--color-ink-light)] max-w-2xl">
                This module covers <strong>Unit 5</strong> of the PerfStudio curriculum, teaching 
                students to design comprehensive test strategies and analyze system behavior under various conditions.
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
                  This module implements <span className="bg-[var(--color-highlight)] px-1 text-[var(--color-ink)]">Unit 5: Performance Testing</span> of 
                  the PerfStudio SPE curriculum. Students learn to design and execute performance tests, analyze reliability 
                  characteristics, and create comprehensive test plans for <span className="text-[var(--color-accent-coral)] font-medium">real-world systems</span>.
                </p>
                <p className="mb-4">
                  The course covers both <span className="text-[var(--color-accent-warm)] font-medium">performance testing methodologies</span> (load testing, 
                  stress testing, endurance testing) and <span className="text-[var(--color-accent-purple)] font-medium">reliability testing concepts</span> including 
                  operational profiles, usage-based testing, and software failure characteristics.
                </p>
              </div>

              {/* Lecture Card */}
              <div className="mt-8 bg-[var(--color-paper)] border border-[var(--color-border)] p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-[var(--color-accent-warm)] font-semibold uppercase tracking-wider mb-1">Lecture</p>
                    <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-ink)]">
                      Performance Testing
                    </h3>
                    <p className="text-sm text-[var(--color-ink-muted)]">Dr. Yu Tao</p>
                  </div>
                  <a 
                    href="./materials/567/SSW567-lecture.pdf"
                    download
                    className="btn-editorial text-xs py-2 px-3 flex-shrink-0"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    PDF
                  </a>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Performance Testing</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Types of performance tests</li>
                      <li>• Why it is important</li>
                      <li>• What do we need for performance testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Reliability Testing</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Software failure characteristics</li>
                      <li>• Not all defects are the same</li>
                      <li>• Usage-based or statistical testing</li>
                      <li>• Operational Profiles</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">Learning Outcomes</h3>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--color-ink-light)]">
                  {[
                    'Understand performance test cases with workload specifications',
                    'Apply tools to measure performance',
                    'Design comprehensive test plans',
                    'Implement unit tests with coverage analysis',
                    'Perform mutation testing with MutPy',
                  ].map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-accent-warm)]">✓</span>
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
                    <dd className="text-[var(--color-ink)] font-medium">SSW 567</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">SPE Unit</dt>
                    <dd className="text-[var(--color-accent-warm)] font-medium">Unit 5</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">Level</dt>
                    <dd className="text-[var(--color-ink)]">Graduate</dd>
                  </div>
                </dl>

                <div className="border-t border-[var(--color-border)] pt-4 mb-4">
                  <p className="text-xs text-[var(--color-ink-muted)] mb-2">Topics</p>
                  <div className="flex flex-wrap gap-1">
                    {['Performance Testing', 'Reliability', 'Unit Testing', 'Mutation Testing'].map((topic) => (
                      <span key={topic} className="text-xs bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] px-2 py-0.5">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                  <a href="./materials/567/SSW567-lecture.pdf" download className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Lecture Slides
                  </a>
                  <a href="./materials/567/SSW567-project.docx" download className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    PBL Activity
                  </a>
                  <a href="https://stevens.qualtrics.com/jfe/form/SV_0Umyn32iIvhH0zA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
              <a href="./materials/567/SSW567-lecture.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors">
                <span className="w-2 h-2 bg-[var(--color-accent-coral)] rounded-full"></span>
                Lecture Slides
              </a>
              <a href="./materials/567/SSW567-project.docx" download className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors">
                <span className="w-2 h-2 bg-[var(--color-accent-warm)] rounded-full"></span>
                PBL Activity Document
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PBL Exercise */}
      <section id="exercise" className="py-12">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs text-[var(--color-accent-warm)] font-semibold uppercase tracking-wider">Problem-Based Learning</p>
          </div>
          <h2 className="font-[var(--font-headline)] text-2xl text-[var(--color-ink)] mb-2">
            MRTD System Testing Project
          </h2>
          <p className="text-[var(--color-ink-muted)] mb-8 max-w-2xl">
            Comprehensive testing of a Machine-Readable Travel Document (MRTD) System covering requirements, 
            unit testing, performance testing, and test planning.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)] mb-4">Project Parts</h3>
                <ol className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] flex items-center justify-center text-xs font-semibold flex-shrink-0">0</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Kickoff & Planning</p>
                      <p className="text-[var(--color-ink-muted)]">Project plan + Gantt Chart</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] flex items-center justify-center text-xs font-semibold flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Requirement Testing</p>
                      <p className="text-[var(--color-ink-muted)]">Identify ambiguities, rewrite specifications</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] flex items-center justify-center text-xs font-semibold flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Unit Testing</p>
                      <p className="text-[var(--color-ink-muted)]">Implement MRTD functions + test cases (&gt;80% coverage) + MutPy</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] flex items-center justify-center text-xs font-semibold flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Performance Testing</p>
                      <p className="text-[var(--color-ink-muted)]">Process 10,000 records, generate execution time charts</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] flex items-center justify-center text-xs font-semibold flex-shrink-0">4</span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">Test Planning</p>
                      <p className="text-[var(--color-ink-muted)]">Complete test plan document (strategy, scope, approach, tools, schedule)</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-white border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">Student Role</h3>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  Act as a QA engineer responsible for the complete testing lifecycle of a travel document processing system.
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">What You'll Learn</h3>
              <ul className="space-y-3 text-sm text-[var(--color-ink-muted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-warm)]">•</span>
                  Requirements analysis and specification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-warm)]">•</span>
                  Unit testing with mocking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-warm)]">•</span>
                  Coverage and mutation testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-warm)]">•</span>
                  Performance benchmarking and profiling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent-warm)]">•</span>
                  Test planning documentation
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                <h4 className="font-medium text-[var(--color-ink)] text-sm mb-2">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-1 rounded">MutPy</span>
                  <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-1 rounded">Coverage.py</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                <h4 className="font-medium text-[var(--color-ink)] text-sm mb-2">After Completion</h4>
                <p className="text-sm text-[var(--color-ink-muted)] mb-2">
                  Take the exit survey to share your feedback.
                </p>
                <a 
                  href="https://stevens.qualtrics.com/jfe/form/SV_0Umyn32iIvhH0zA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-accent-warm)] hover:underline"
                >
                  Take Exit Survey →
                </a>
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
                <div className="w-12 h-12 bg-[var(--color-accent-warm)]/10 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    href="https://stevens.qualtrics.com/jfe/form/SV_0Umyn32iIvhH0zA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial text-sm"
                  >
                    Take Survey →
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
