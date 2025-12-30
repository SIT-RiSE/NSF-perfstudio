import { useState } from 'react'
import { Link } from 'react-router-dom'

const batchFiles = [
  { id: 1, tickets: ['AVRO-3050', 'AVRO-392', 'AVRO-1282', 'AVRO-2145', 'AVRO-1876'] },
  { id: 2, tickets: ['AVRO-2234', 'AVRO-1567', 'AVRO-890', 'AVRO-2456', 'AVRO-1123'] },
  { id: 3, tickets: ['AVRO-3123', 'AVRO-2789', 'AVRO-1456', 'AVRO-2012', 'AVRO-1789'] },
  { id: 4, tickets: ['AVRO-2567', 'AVRO-1890', 'AVRO-3234', 'AVRO-1234', 'AVRO-2678'] },
  { id: 5, tickets: ['AVRO-1345', 'AVRO-2901', 'AVRO-1678', 'AVRO-3012', 'AVRO-2345'] },
  { id: 6, tickets: ['AVRO-2456', 'AVRO-1789', 'AVRO-3123', 'AVRO-1901', 'AVRO-2567'] },
  { id: 7, tickets: ['AVRO-1234', 'AVRO-2678', 'AVRO-1456', 'AVRO-3234', 'AVRO-2012'] },
  { id: 8, tickets: ['AVRO-2789', 'AVRO-1567', 'AVRO-3345', 'AVRO-1890', 'AVRO-2123'] },
  { id: 9, tickets: ['AVRO-1678', 'AVRO-2901', 'AVRO-1234', 'AVRO-3456', 'AVRO-2234'] },
  { id: 10, tickets: ['AVRO-2345', 'AVRO-1890', 'AVRO-3012', 'AVRO-1567', 'AVRO-2678'] },
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
              <p className="font-[var(--font-mono)] text-sm text-[var(--color-accent-primary)] mb-2">
                SSW 533 — Software Metrics
              </p>
              <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
                ROI Analysis for Software Performance
              </h1>
              <p className="text-[var(--color-ink-light)] max-w-2xl">
                This module teaches students to analyze real-world performance issues from 
                the Apache Avro project using a structured ROI analysis framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-[60px] z-40">
        <div className="container-wide">
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#overview" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]">Overview</a>
            <a href="#materials" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]">Materials</a>
            <a href="#activity" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]">Activity Instructions</a>
            <a href="#batches" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]">ROI Batches</a>
            <a href="#survey" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]">Survey</a>
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
              <div className="prose prose-sm max-w-none text-[var(--color-ink-light)]">
                <p className="mb-4">
                  This activity helps students explore how real software engineers identify 
                  and fix performance issues in large open-source projects. Using issue tickets 
                  from Apache Avro—a data serialization framework used in Apache Hadoop—students 
                  learn to interpret performance data and evaluate the costs and benefits of fixes.
                </p>
                <p className="mb-4">
                  Students work as software quality analysts, examining performance problems and 
                  documenting their analysis using a structured template. The activity develops 
                  practical skills in profiling data interpretation, effort estimation, and 
                  trade-off reasoning.
                </p>
              </div>

              <h3 className="font-semibold text-[var(--color-ink)] mt-8 mb-3">
                Learning Outcomes
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
                {[
                  'Understand performance metrics used in industry',
                  'Identify performance issues in real software projects',
                  'Interpret profiling and benchmark data from issue reports',
                  'Estimate developer effort required for fixes',
                  'Evaluate performance improvements based on data',
                  'Reason about trade-offs among performance, maintainability, and readability',
                ].map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent-primary)]">•</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-ink)] mb-4">
                  Quick Info
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-[var(--color-ink-muted)]">Duration</dt>
                    <dd className="text-[var(--color-ink)]">~1 hour total</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-ink-muted)]">Tickets per student</dt>
                    <dd className="text-[var(--color-ink)]">3 tickets</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-ink-muted)]">Total tickets available</dt>
                    <dd className="text-[var(--color-ink)]">50 (10 batches × 5)</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-ink-muted)]">Project</dt>
                    <dd className="text-[var(--color-ink)]">Apache Avro</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-ink-muted)]">Submission</dt>
                    <dd className="text-[var(--color-ink)]">Canvas or email</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-12 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-6">
            Course Materials
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Guest Lecture */}
            <div className="bg-white border border-[var(--color-border)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--color-accent-coral)]/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-accent-coral)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">Guest Lecture Slides</h3>
                  <p className="text-xs text-[var(--color-ink-muted)]">PDF • Performance Metrics & ROI</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Presentation covering software performance fundamentals, profiling techniques, 
                and the ROI analysis methodology.
              </p>
              <a 
                href="./materials/GuestLecturePerformanceFor533.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>

            {/* Activity Document */}
            <div className="bg-white border border-[var(--color-border)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--color-accent-purple)]/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-accent-purple)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">Activity Document</h3>
                  <p className="text-xs text-[var(--color-ink-muted)]">HTML • Instructions & Template</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Complete instructions for the ROI analysis activity, including the 
                analysis template for each ticket.
              </p>
              <a 
                href="./materials/SSW5331028Activity.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Activity
              </a>
            </div>

            {/* Survey Template */}
            <div className="bg-white border border-[var(--color-border)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[var(--color-accent-warm)]/10 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-accent-warm)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">Survey Template</h3>
                  <p className="text-xs text-[var(--color-ink-muted)]">HTML • Reference</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                View the survey questions used to assess learning outcomes 
                (for reference—actual survey is online).
              </p>
              <a 
                href="./materials/ROIAnalysisSurvey.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Instructions */}
      <section id="activity" className="py-12">
        <div className="container-wide">
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-6">
            Activity Instructions
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Task Overview</h3>
              <ol className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Review the Guest Lecture</strong>
                    <p className="text-[var(--color-ink-muted)] mt-1">
                      Study the slides to understand performance metrics, profiling techniques, 
                      and the ROI analysis framework.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Analyze 3 Issue Tickets</strong>
                    <p className="text-[var(--color-ink-muted)] mt-1">
                      From your assigned batch, analyze 3 tickets. First determine if each 
                      is performance-related, then complete the analysis template.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-accent-primary)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Submit Your Analysis</strong>
                    <p className="text-[var(--color-ink-muted)] mt-1">
                      Submit to Canvas by the deadline, or email directly to{' '}
                      <a href="mailto:lxiao6@stevens.edu" className="text-[var(--color-accent-primary)]">lxiao6@stevens.edu</a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[var(--color-ink-muted)] text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-[var(--color-ink)]">Complete Survey (Optional)</strong>
                    <p className="text-[var(--color-ink-muted)] mt-1">
                      Take the 5-minute exit survey to help us improve the course.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-4">Analysis Template Fields</h3>
              <div className="bg-[var(--color-paper)] border border-[var(--color-border)] p-4">
                <p className="text-sm text-[var(--color-ink-muted)] mb-3">
                  For each performance-related ticket, document:
                </p>
                <ul className="space-y-2 text-sm font-[var(--font-mono)]">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Performance Problem Summary</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Profiling Data (quote from issue)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Metrics Used</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Performance Improvement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Developer Effort</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Other Quality Attributes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--color-border)]"></span>
                    <span className="text-[var(--color-ink)]">Reflection</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-[var(--color-highlight)] border border-[var(--color-accent-warm)]/20">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-accent-warm)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm">
                    <strong className="text-[var(--color-ink)]">Time estimate:</strong>
                    <span className="text-[var(--color-ink-muted)]"> ~1 hour total (10-20 min per ticket)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Batches */}
      <section id="batches" className="py-12 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-6">
            <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-2">
              ROI Analysis Batches
            </h2>
            <p className="text-sm text-[var(--color-ink-muted)]">
              10 batches of 5 Apache Avro issue tickets each. Select a batch to view its tickets.
            </p>
          </div>

          {/* Batch Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {batchFiles.map((batch) => (
              <button
                key={batch.id}
                onClick={() => setSelectedBatch(selectedBatch === batch.id ? null : batch.id)}
                className={`px-4 py-2 text-sm font-[var(--font-mono)] border transition-colors ${
                  selectedBatch === batch.id
                    ? 'bg-[var(--color-accent-primary)] text-white border-[var(--color-accent-primary)]'
                    : 'bg-white text-[var(--color-ink)] border-[var(--color-border)] hover:border-[var(--color-accent-primary)]'
                }`}
              >
                Batch {batch.id}
              </button>
            ))}
          </div>

          {/* Selected Batch */}
          {selectedBatch && (
            <div className="bg-white border border-[var(--color-border)] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[var(--color-ink)]">
                  Batch {selectedBatch} — Issue Tickets
                </h3>
                <a 
                  href={`./materials/Batch-${selectedBatch}.pdf`}
                  download
                  className="btn-editorial text-sm py-2 px-4"
                >
                  Download PDF
                </a>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="text-left py-2 text-[var(--color-ink-muted)] font-normal">#</th>
                      <th className="text-left py-2 text-[var(--color-ink-muted)] font-normal">Ticket ID</th>
                      <th className="text-left py-2 text-[var(--color-ink-muted)] font-normal">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batchFiles.find(b => b.id === selectedBatch)?.tickets.map((ticket, i) => (
                      <tr key={ticket} className="border-b border-[var(--color-border)]">
                        <td className="py-3 text-[var(--color-ink-muted)]">{i + 1}</td>
                        <td className="py-3 font-[var(--font-mono)] text-[var(--color-ink)]">{ticket}</td>
                        <td className="py-3">
                          <a
                            href={`https://issues.apache.org/jira/browse/${ticket}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-accent-primary)] hover:underline inline-flex items-center gap-1"
                          >
                            View on JIRA
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {!selectedBatch && (
            <div className="text-center py-8 text-sm text-[var(--color-ink-muted)]">
              Select a batch above to view its issue tickets
            </div>
          )}
        </div>
      </section>

      {/* Survey Section */}
      <section id="survey" className="py-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[var(--color-border)] bg-white p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Exit Survey</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                5-minute anonymous survey to reflect on your learning experience. 
                Your feedback helps improve future course materials.
              </p>
              <a 
                href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial text-sm"
              >
                Take Survey →
              </a>
            </div>
            
            <div className="border border-[var(--color-border)] bg-white p-6">
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Research Consent</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Optional 1-minute consent form to allow your anonymized submission 
                to be included in research analysis.
              </p>
              <a 
                href="https://stevens.qualtrics.com/jfe/form/SV_4Mdyeod9Cqi7NFI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                Consent Form →
              </a>
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
