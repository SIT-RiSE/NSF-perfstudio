import { useState } from 'react'
import { Link } from 'react-router-dom'

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 130 // Account for sticky nav
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const batchFiles = [
  { 
    id: 1, 
    tickets: ['AVRO-3050', 'AVRO-392', 'AVRO-1282', 'AVRO-2145', 'AVRO-1876'],
    themes: ['Serialization overhead', 'Memory allocation', 'Schema parsing'],
  },
  { 
    id: 2, 
    tickets: ['AVRO-2234', 'AVRO-1567', 'AVRO-890', 'AVRO-2456', 'AVRO-1123'],
    themes: ['Deserialization speed', 'Buffer management', 'Type conversion'],
  },
  { 
    id: 3, 
    tickets: ['AVRO-3123', 'AVRO-2789', 'AVRO-1456', 'AVRO-2012', 'AVRO-1789'],
    themes: ['I/O bottlenecks', 'Caching strategies', 'Thread contention'],
  },
  { 
    id: 4, 
    tickets: ['AVRO-2567', 'AVRO-1890', 'AVRO-3234', 'AVRO-1234', 'AVRO-2678'],
    themes: ['Codec efficiency', 'Compression trade-offs', 'Memory footprint'],
  },
  { 
    id: 5, 
    tickets: ['AVRO-1345', 'AVRO-2901', 'AVRO-1678', 'AVRO-3012', 'AVRO-2345'],
    themes: ['Batch processing', 'Streaming performance', 'Resource cleanup'],
  },
  { 
    id: 6, 
    tickets: ['AVRO-2456', 'AVRO-1789', 'AVRO-3123', 'AVRO-1901', 'AVRO-2567'],
    themes: ['String handling', 'Object creation', 'GC pressure'],
  },
  { 
    id: 7, 
    tickets: ['AVRO-1234', 'AVRO-2678', 'AVRO-1456', 'AVRO-3234', 'AVRO-2012'],
    themes: ['Reflection overhead', 'Code generation', 'Lazy initialization'],
  },
  { 
    id: 8, 
    tickets: ['AVRO-2789', 'AVRO-1567', 'AVRO-3345', 'AVRO-1890', 'AVRO-2123'],
    themes: ['Network latency', 'Protocol efficiency', 'Connection pooling'],
  },
  { 
    id: 9, 
    tickets: ['AVRO-1678', 'AVRO-2901', 'AVRO-1234', 'AVRO-3456', 'AVRO-2234'],
    themes: ['File format optimization', 'Block sizing', 'Metadata overhead'],
  },
  { 
    id: 10, 
    tickets: ['AVRO-2345', 'AVRO-1890', 'AVRO-3012', 'AVRO-1567', 'AVRO-2678'],
    themes: ['API design impact', 'Backward compatibility', 'Upgrade paths'],
  },
]

export default function Course533() {
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null)

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
            <span className="text-[var(--color-ink)]">SSW 533</span>
          </div>
          
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent-primary)]">
                  SSW 533 — Data Collection & Management
                </p>
                <span className="text-xs bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] px-2 py-0.5 rounded">
                  SPE Unit 4
                </span>
              </div>
              <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                Performance Data Collection & Analysis
              </h1>
              <p className="text-[var(--color-ink-light)] max-w-2xl">
                This module covers <strong>Unit 4</strong> of the PerfStudio curriculum, teaching students 
                to collect, analyze, and interpret performance data through a problem-based learning activity 
                using real-world Apache Avro issue tickets.
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
                  This module implements <span className="bg-[var(--color-highlight)] px-1 text-[var(--color-ink)]">Unit 4: Performance Data Collection & Analysis</span> of 
                  the PerfStudio SPE curriculum—teaching students how to collect, archive, and analyze 
                  performance data, a skill <span className="text-[var(--color-accent-coral)] font-medium">often neglected</span> in 
                  traditional software engineering education.
                </p>
                <p className="mb-4">
                  The module consists of two parts: a <span className="text-[var(--color-accent-coral)] font-medium">guest lecture</span> covering 
                  performance metrics and ROI analysis concepts, followed by a <span className="text-[var(--color-accent-purple)] font-medium">hands-on exercise</span> where 
                  students analyze real issue tickets from Apache Avro (a data serialization framework used in Apache Hadoop).
                </p>
                <p className="mb-4">
                  Students learn that performance improvements involve trade-offs between <span className="text-[var(--color-accent-primary)] font-medium">developer effort</span>, 
                  <span className="text-[var(--color-accent-teal)] font-medium">performance gains</span>, and impacts on other quality attributes like maintainability and readability.
                </p>
              </div>

              {/* Guest Lecture Card */}
              <div className="mt-8 bg-[var(--color-paper)] border border-[var(--color-border)] p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-[var(--color-accent-primary)] font-semibold uppercase tracking-wider mb-1">Guest Lecture</p>
                    <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-ink)]">
                      Performance Metrics & ROI Analysis
                    </h3>
                    <p className="text-sm text-[var(--color-ink-muted)]">
                      Dr. Andre B. Bondi
                    </p>
                  </div>
                  <a 
                    href="./materials/GuestLecturePerformanceFor533.pdf"
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
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Part 1: Performance Metrics</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Why performance matters — real-world failures</li>
                      <li>• Response time, latency, throughput</li>
                      <li>• Sources of performance data & profiling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-ink)] mb-2">Part 2: ROI Analysis</h4>
                    <ul className="space-y-1 text-[var(--color-ink-muted)] text-xs">
                      <li>• Effort estimation (developers, discussions)</li>
                      <li>• Effectiveness measurement</li>
                      <li>• Research: 570 issues from 13 Apache projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">
                  Learning Outcomes
                </h3>
                <p className="text-sm text-[var(--color-ink-muted)] mb-3">
                  Upon completing this module, students will be able to:
                </p>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--color-ink-light)]">
                  {[
                    'Explain the need to collect and archive performance data',
                    'Compare and evaluate performance analysis tools',
                    'Analyze and interpret performance data from real-world projects',
                    'Apply ROI analysis framework to evaluate improvements',
                    'Reason about trade-offs (performance, maintainability, readability)',
                    'Estimate developer effort required for performance fixes',
                  ].map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-accent-teal)]">✓</span>
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
                    <dd className="text-[var(--color-ink)] font-medium">SSW 533</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">SPE Unit</dt>
                    <dd className="text-[var(--color-accent-teal)] font-medium">Unit 4</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">Instructor</dt>
                    <dd className="text-[var(--color-ink)]">Dr. Lu Xiao</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-ink-muted)]">Level</dt>
                    <dd className="text-[var(--color-ink)]">Graduate</dd>
                  </div>
                </dl>

                {/* Topics */}
                <div className="border-t border-[var(--color-border)] pt-4 mb-4">
                  <p className="text-xs text-[var(--color-ink-muted)] mb-2">Topics</p>
                  <div className="flex flex-wrap gap-1">
                    {[
                      'Performance Data',
                      'Metrics',
                      'Profiling',
                      'ROI Analysis',
                    ].map((topic) => (
                      <span 
                        key={topic}
                        className="text-xs bg-white border border-[var(--color-border)] text-[var(--color-ink-muted)] px-2 py-0.5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-[var(--color-border)] pt-4 space-y-2">
                  <a 
                    href="./materials/GuestLecturePerformanceFor533.pdf"
                    download
                    className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Guest Lecture
                  </a>
                  <a 
                    href="./materials/SSW5331028Activity.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Exercise Activity
                  </a>
                  <a 
                    href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Exit Survey
                  </a>
                </div>

                <div className="border-t border-[var(--color-border)] mt-4 pt-4">
                  <p className="text-xs text-[var(--color-ink-muted)]">
                    Part of the NSF-funded{' '}
                    <Link to="/" className="text-[var(--color-accent-primary)] hover:underline">
                      PerfStudio
                    </Link>{' '}
                    curriculum.
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
            <h2 className="font-semibold text-[var(--color-ink)]">
              Downloads
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <a 
                href="./materials/GuestLecturePerformanceFor533.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors"
              >
                <span className="w-2 h-2 bg-[var(--color-accent-coral)] rounded-full"></span>
                Guest Lecture Slides
              </a>
              <a 
                href="./materials/SSW5331028Activity.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors"
              >
                <span className="w-2 h-2 bg-[var(--color-accent-purple)] rounded-full"></span>
                Exercise Activity Document
              </a>
              <a 
                href="./materials/ROIAnalysisSurvey.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] transition-colors"
              >
                <span className="w-2 h-2 bg-[var(--color-accent-warm)] rounded-full"></span>
                Exit Survey Template
              </a>
              <Link 
                to="/resources"
                className="inline-flex items-center gap-2 text-[var(--color-accent-primary)] hover:underline"
              >
                All Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Section - Combined Activity + Batches */}
      <section id="exercise" className="py-12">
        <div className="container-wide">
          <p className="section-label mb-2">Hands-on Exercise</p>
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-2">
            ROI Analysis Activity
          </h2>
          <p className="text-sm text-[var(--color-ink-muted)] mb-8 max-w-2xl">
            After the guest lecture, students apply the ROI analysis framework to real Apache Avro 
            issue tickets—acting as software quality analysts to examine performance problems 
            and trade-offs.
          </p>

          {/* Instructions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Task Overview</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Review the Guest Lecture</strong>
                    <p className="text-[var(--color-ink-muted)]">
                      Understand performance metrics and the ROI analysis framework.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Analyze 3 Issue Tickets</strong>
                    <p className="text-[var(--color-ink-muted)]">
                      From your assigned batch below, determine if each is performance-related.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Submit Analysis</strong>
                    <p className="text-[var(--color-ink-muted)]">
                      Submit to Canvas
                    </p>
                  </div>
                </li>
              </ol>
              <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ~1 hour total
                </span>
                <span>•</span>
                <span>3 tickets per student</span>
                <span>•</span>
                <span>10-20 min per ticket</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Analysis Template</h3>
              <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-4">
                <p className="text-xs text-[var(--color-ink-muted)] mb-3">
                  For each performance-related ticket, document:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Performance Problem Summary',
                    'Profiling Data',
                    'Metrics Used',
                    'Performance Improvement',
                    'Developer Effort',
                    'Other Quality Attributes',
                    'Reflection',
                  ].map((field) => (
                    <div key={field} className="flex items-center gap-2">
                      <span className="w-3 h-3 border border-[var(--color-border)]"></span>
                      <span className="text-[var(--color-ink)]">{field}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Issue Ticket Batches */}
          <div className="border-t border-[var(--color-border)] pt-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">
                  Ticket Batches
                </h3>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  10 batches × 5 tickets each — select your assigned batch
                </p>
              </div>
            </div>

            {/* Batch Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-4">
              {batchFiles.map((batch) => (
                <button
                  key={batch.id}
                  onClick={() => setSelectedBatch(selectedBatch === batch.id ? null : batch.id)}
                  className={`py-2 text-sm font-[var(--font-mono)] border transition-all ${
                    selectedBatch === batch.id
                      ? 'bg-[var(--color-accent-primary)] text-white border-[var(--color-accent-primary)] shadow-sm'
                      : 'bg-white text-[var(--color-ink)] border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-paper)]'
                  }`}
                >
                  {batch.id}
                </button>
              ))}
            </div>

            {/* Selected Batch */}
            {selectedBatch && (
              <div className="bg-white border border-[var(--color-border)]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-paper)]">
                  <span className="font-medium text-[var(--color-ink)] text-sm">
                    Batch {selectedBatch}
                  </span>
                  <a 
                    href={`./materials/Batch-${selectedBatch}.pdf`}
                    download
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent-primary)] hover:underline"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>
                <div className="divide-y divide-[var(--color-border)]">
                  {batchFiles.find(b => b.id === selectedBatch)?.tickets.map((ticket, i) => (
                    <div key={ticket} className="flex items-center justify-between px-4 py-2.5 hover:bg-[var(--color-paper)] transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[var(--color-ink-subtle)] w-4">{i + 1}</span>
                        <span className="font-[var(--font-mono)] text-sm text-[var(--color-ink)] font-medium">{ticket}</span>
                      </div>
                      <a
                        href={`https://issues.apache.org/jira/browse/${ticket}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--color-accent-primary)] hover:underline inline-flex items-center gap-1"
                      >
                        JIRA
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* For Educators */}
          <div className="mt-8 p-4 bg-[var(--color-highlight)] border border-[var(--color-accent-warm)]/20 text-sm">
            <strong className="text-[var(--color-ink)]">For Educators:</strong>
            <span className="text-[var(--color-ink-muted)]"> These materials are freely available. Each batch PDF includes pre-analyzed ROI data for classroom use.</span>
          </div>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section id="survey" className="py-12">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-6">
              Feedback Survey
            </h2>
            <div className="border border-[var(--color-border)] bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-accent-primary)]/10 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Exit Survey</h3>
                  <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                    A 5-minute anonymous survey to reflect on your learning experience. 
                    The survey includes an optional research consent form on the first page. 
                    Your feedback helps us improve future course materials.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial text-sm"
                    >
                      Take Survey →
                    </a>
                    <span className="text-xs text-[var(--color-ink-subtle)]">
                      Includes optional research consent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-8 border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
            <div className="text-[var(--color-ink-muted)]">
              <strong className="text-[var(--color-ink)]">Questions?</strong>{' '}
              Contact <a href="mailto:lxiao6@stevens.edu" className="text-[var(--color-accent-primary)] hover:underline">lxiao6@stevens.edu</a>
            </div>
            <Link to="/" className="text-[var(--color-accent-primary)] hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
