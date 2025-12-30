import { Link } from 'react-router-dom'

const resourceCategories = [
  {
    title: 'SSW 533 — Performance Data Collection',
    description: 'Unit 4 materials focusing on ROI analysis of Apache Avro performance issues.',
    status: 'available',
    materials: [
      { name: 'Guest Lecture Slides', type: 'PDF', path: './materials/GuestLecturePerformanceFor533.pdf', size: '~2 MB' },
      { name: 'Activity Document', type: 'HTML', path: './materials/SSW5331028Activity.html', size: '~50 KB' },
      { name: 'ROI Analysis Survey Template', type: 'HTML', path: './materials/ROIAnalysisSurvey.html', size: '~30 KB' },
    ],
    batches: [
      { name: 'Batch 1', path: './materials/Batch-1.pdf' },
      { name: 'Batch 2', path: './materials/Batch-2.pdf' },
      { name: 'Batch 3', path: './materials/Batch-3.pdf' },
      { name: 'Batch 4', path: './materials/Batch-4.pdf' },
      { name: 'Batch 5', path: './materials/Batch-5.pdf' },
      { name: 'Batch 6', path: './materials/Batch-6.pdf' },
      { name: 'Batch 7', path: './materials/Batch-7.pdf' },
      { name: 'Batch 8', path: './materials/Batch-8.pdf' },
      { name: 'Batch 9', path: './materials/Batch-9.pdf' },
      { name: 'Batch 10', path: './materials/Batch-10.pdf' },
    ],
  },
  {
    title: 'SSW 315 — SPE Basics',
    description: 'Unit 1 materials covering SPE terminologies and methodologies.',
    status: 'coming',
    materials: [],
  },
  {
    title: 'SSW 345 — Performance Modeling & Bottleneck Analysis',
    description: 'Units 2-3 materials covering execution models and queueing theory.',
    status: 'coming',
    materials: [],
  },
  {
    title: 'SSW 567 — Performance Testing',
    description: 'Unit 5 materials covering performance testing with JMeter.',
    status: 'coming',
    materials: [],
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] mb-3">
            <Link to="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-ink)]">Resources</span>
          </div>
          
          <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
            Course Resources
          </h1>
          <p className="text-[var(--color-ink-light)] max-w-2xl">
            Download PerfStudio course materials for use in your own institution. 
            All materials are freely available for educational purposes.
          </p>
        </div>
      </section>

      {/* Info Notice */}
      <section className="py-6 bg-[var(--color-highlight)] border-b border-[var(--color-accent-warm)]/20">
        <div className="container-wide">
          <div className="flex items-start gap-3">
            <span className="text-lg">📋</span>
            <div>
              <p className="text-sm text-[var(--color-ink)]">
                <strong>For Educators:</strong> If you plan to adopt these materials in your course, 
                we'd love to hear from you! Please contact{' '}
                <a href="mailto:lxiao6@stevens.edu" className="text-[var(--color-accent-primary)] hover:underline">
                  lxiao6@stevens.edu
                </a>
                {' '}to share your experience or request additional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials List */}
      <section className="py-12">
        <div className="container-wide">
          <div className="space-y-8">
            {resourceCategories.map((category) => (
              <div 
                key={category.title}
                className={`border border-[var(--color-border)] bg-white ${
                  category.status === 'coming' ? 'opacity-60' : ''
                }`}
              >
                <div className="p-6 border-b border-[var(--color-border)] bg-[var(--color-paper)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-1">
                        {category.title}
                      </h2>
                      <p className="text-sm text-[var(--color-ink-muted)]">
                        {category.description}
                      </p>
                    </div>
                    {category.status === 'coming' && (
                      <span className="text-xs text-[var(--color-ink-subtle)] border border-[var(--color-border)] px-2 py-1 flex-shrink-0">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {category.status === 'available' && (
                  <div className="p-6">
                    {/* Main Materials */}
                    <h3 className="font-semibold text-[var(--color-ink)] text-sm mb-4">
                      Core Materials
                    </h3>
                    <div className="space-y-3 mb-6">
                      {category.materials.map((material) => (
                        <div 
                          key={material.name}
                          className="flex items-center justify-between p-3 bg-[var(--color-paper)] border border-[var(--color-border)]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[var(--color-accent-primary)]/10 flex items-center justify-center">
                              <span className="text-xs font-[var(--font-mono)] text-[var(--color-accent-primary)]">
                                {material.type}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-[var(--color-ink)] text-sm">{material.name}</div>
                              <div className="text-xs text-[var(--color-ink-muted)]">{material.size}</div>
                            </div>
                          </div>
                          <a
                            href={material.path}
                            download={material.type === 'PDF'}
                            target={material.type === 'HTML' ? '_blank' : undefined}
                            rel={material.type === 'HTML' ? 'noopener noreferrer' : undefined}
                            className="text-sm text-[var(--color-accent-primary)] hover:underline flex items-center gap-1"
                          >
                            {material.type === 'PDF' ? 'Download' : 'View'}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {material.type === 'PDF' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              )}
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* ROI Batches */}
                    {category.batches && (
                      <>
                        <h3 className="font-semibold text-[var(--color-ink)] text-sm mb-4">
                          ROI Analysis Batches (50 Apache Avro Issue Tickets)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          {category.batches.map((batch) => (
                            <a
                              key={batch.name}
                              href={batch.path}
                              download
                              className="p-3 bg-[var(--color-paper)] border border-[var(--color-border)] text-center hover:border-[var(--color-accent-primary)] transition-colors"
                            >
                              <div className="text-sm font-medium text-[var(--color-ink)]">{batch.name}</div>
                              <div className="text-xs text-[var(--color-accent-primary)]">PDF</div>
                            </a>
                          ))}
                        </div>
                        <p className="text-xs text-[var(--color-ink-muted)] mt-3">
                          Each batch contains 5 curated issue tickets with pre-analyzed ROI data.
                        </p>
                      </>
                    )}
                  </div>
                )}

                {category.status === 'coming' && (
                  <div className="p-6 text-center text-sm text-[var(--color-ink-muted)]">
                    Materials for this course are currently in development.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-12 bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-4">
              Usage Guidelines
            </h2>
            <div className="space-y-3 text-sm text-[var(--color-ink-light)]">
              <p>
                These materials are developed as part of an NSF-funded research project and are 
                freely available for educational use. When using these materials, please:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acknowledge the PerfStudio project and NSF funding in your course materials</li>
                <li>Share feedback on your implementation experience with our research team</li>
                <li>Consider participating in our research by collecting anonymized student feedback</li>
              </ul>
              <p className="pt-2">
                For questions or collaboration inquiries, contact{' '}
                <a href="mailto:lxiao6@stevens.edu" className="text-[var(--color-accent-primary)] hover:underline">
                  Dr. Lu Xiao
                </a>.
              </p>
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

