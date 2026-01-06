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
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="section-label mb-2">Problem-Based Learning (PBL)</p>
              <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)]">
                MRTD System Testing Project
              </h2>
            </div>
            <div className="flex items-center gap-6 text-sm text-[var(--color-ink-muted)]">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ~4-6 hours
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                5 parts
              </span>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left: Task Overview */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Project Parts</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <span className="w-6 h-6 border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">0</span>
                  <div>
                    <p className="font-medium text-[var(--color-ink)] text-sm">Kickoff & Planning</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">Project plan + Gantt Chart</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="font-medium text-[var(--color-ink)] text-sm">Requirement Testing</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">Identify ambiguities, rewrite specifications</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="font-medium text-[var(--color-ink)] text-sm">Unit Testing</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">Implement MRTD functions + test cases (&gt;80% coverage) + MutPy</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="font-medium text-[var(--color-ink)] text-sm">Performance Testing</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">Process 10,000 records, generate execution time charts</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 border-2 border-[var(--color-accent-warm)] text-[var(--color-accent-warm)] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                  <div>
                    <p className="font-medium text-[var(--color-ink)] text-sm">Test Planning</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">Complete test plan document (strategy, scope, approach, tools, schedule)</p>
                  </div>
                </li>
              </ol>

              {/* What You'll Learn */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[var(--color-ink-muted)] uppercase tracking-wide mb-3">What You'll Learn</h4>
                <ul className="space-y-2 text-xs text-[var(--color-ink-light)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-warm)]">✓</span>
                    <span>Requirements analysis and specification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-warm)]">✓</span>
                    <span>Unit testing with mocking techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-warm)]">✓</span>
                    <span>Coverage and mutation testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-warm)]">✓</span>
                    <span>Performance benchmarking and profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-warm)]">✓</span>
                    <span>Test planning documentation</span>
                  </li>
                </ul>
              </div>

              {/* Student Role */}
              <div className="bg-[var(--color-highlight)] border border-[var(--color-accent-warm)]/30 p-4">
                <p className="text-xs font-semibold text-[var(--color-accent-warm)] uppercase tracking-wide mb-2">Student Role</p>
                <p className="text-sm text-[var(--color-ink)]">
                  Act as a <strong>QA engineer</strong> responsible for the complete testing lifecycle of a travel document processing system.
                </p>
              </div>
            </div>

            {/* Right: Tools & Deliverables */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Tools & Deliverables</h3>
              <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-4 flex-1">
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[var(--color-ink-muted)] uppercase tracking-wide mb-2">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-1 rounded">MutPy</span>
                    <span className="text-xs bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-2 py-1 rounded">Coverage.py</span>
                  </div>
                </div>
                
                <p className="text-xs text-[var(--color-ink-muted)] mb-3">
                  Final deliverables include:
                </p>
                <ol className="space-y-2.5 text-xs">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent-warm)] font-mono font-bold">1.</span>
                    <span className="text-[var(--color-ink)]">Project plan with Gantt chart <span className="text-[var(--color-ink-muted)]">(timeline, milestones)</span></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent-warm)] font-mono font-bold">2.</span>
                    <span className="text-[var(--color-ink)]">Requirements analysis document <span className="text-[var(--color-ink-muted)]">(ambiguities, rewrites)</span></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent-warm)] font-mono font-bold">3.</span>
                    <span className="text-[var(--color-ink)]">Unit test suite <span className="text-[var(--color-ink-muted)]">(&gt;80% coverage + mutation score)</span></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent-warm)] font-mono font-bold">4.</span>
                    <span className="text-[var(--color-ink)]">Performance test results <span className="text-[var(--color-ink-muted)]">(charts, analysis)</span></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-accent-warm)] font-mono font-bold">5.</span>
                    <span className="text-[var(--color-ink)]">Test plan document <span className="text-[var(--color-ink-muted)]">(strategy, scope, schedule)</span></span>
                  </li>
                </ol>
                <div className="mt-4 pt-3 border-t border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-ink-subtle)]">
                    💡 This is a comprehensive project—allocate time for each part and maintain clear documentation.
                  </p>
                </div>
              </div>

              {/* After Completion */}
              <div className="mt-4 p-3 bg-white border border-[var(--color-border)]">
                <p className="text-xs font-semibold text-[var(--color-ink)] mb-1">After Completion</p>
                <p className="text-xs text-[var(--color-ink-muted)]">
                  Take the exit survey to share your feedback and help improve future course materials.
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
