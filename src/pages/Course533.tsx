import { useState } from 'react'

const batchFiles = [
  { id: 1, name: 'Batch 1', tickets: ['AVRO-3050', 'AVRO-392', 'AVRO-1282', 'AVRO-2145', 'AVRO-1876'] },
  { id: 2, name: 'Batch 2', tickets: ['AVRO-2234', 'AVRO-1567', 'AVRO-890', 'AVRO-2456', 'AVRO-1123'] },
  { id: 3, name: 'Batch 3', tickets: ['AVRO-3123', 'AVRO-2789', 'AVRO-1456', 'AVRO-2012', 'AVRO-1789'] },
  { id: 4, name: 'Batch 4', tickets: ['AVRO-2567', 'AVRO-1890', 'AVRO-3234', 'AVRO-1234', 'AVRO-2678'] },
  { id: 5, name: 'Batch 5', tickets: ['AVRO-1345', 'AVRO-2901', 'AVRO-1678', 'AVRO-3012', 'AVRO-2345'] },
  { id: 6, name: 'Batch 6', tickets: ['AVRO-2456', 'AVRO-1789', 'AVRO-3123', 'AVRO-1901', 'AVRO-2567'] },
  { id: 7, name: 'Batch 7', tickets: ['AVRO-1234', 'AVRO-2678', 'AVRO-1456', 'AVRO-3234', 'AVRO-2012'] },
  { id: 8, name: 'Batch 8', tickets: ['AVRO-2789', 'AVRO-1567', 'AVRO-3345', 'AVRO-1890', 'AVRO-2123'] },
  { id: 9, name: 'Batch 9', tickets: ['AVRO-1678', 'AVRO-2901', 'AVRO-1234', 'AVRO-3456', 'AVRO-2234'] },
  { id: 10, name: 'Batch 10', tickets: ['AVRO-2345', 'AVRO-1890', 'AVRO-3012', 'AVRO-1567', 'AVRO-2678'] },
]

const learningOutcomes = [
  'Understand the importance of software performance in production systems',
  'Learn performance metrics commonly used in industry',
  'Identify what constitutes a performance issue in real software projects',
  'Interpret profiling and benchmark data from issue reports',
  'Estimate developer effort required to fix performance issues',
  'Evaluate performance improvements based on profiling data',
  'Reason about trade-offs among performance, maintainability, and readability',
  'Communicate performance findings in cost-benefit terms',
  'Integrate performance considerations into software cost estimation',
]

export default function Course533() {
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null)

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 border border-accent-teal/20 rounded-full mb-6">
              <span className="px-2 py-0.5 text-xs font-bold bg-accent-teal text-navy-950 rounded">SSW 533</span>
              <span className="text-accent-teal text-sm font-medium">Software Metrics & Performance</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              ROI Analysis for{' '}
              <span className="text-accent-teal">Software Performance</span>
            </h1>

            <p className="text-xl text-navy-300 leading-relaxed max-w-2xl mb-8">
              Learn to analyze real-world performance issues using ROI frameworks. 
              Explore issue tickets from open-source projects to understand how 
              engineers identify, measure, and fix performance problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#materials" className="btn-primary">
                <span>Access Materials</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a 
                href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Take Exit Survey</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Learning Outcomes
              </h2>
              <p className="text-lg text-navy-300 leading-relaxed mb-8">
                After completing this module, students will be able to analyze 
                software performance issues with a structured, data-driven approach.
              </p>
              <div className="card bg-gradient-to-br from-accent-teal/10 to-transparent border-accent-teal/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/20 flex items-center justify-center text-accent-teal shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Course Context</h3>
                    <p className="text-navy-300 text-sm">
                      This activity is part of SSW 533: Software Metrics and uses real 
                      Apache Avro issue tickets for hands-on learning about performance 
                      analysis in production software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-navy-800/50 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-navy-300">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="section-padding bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Course Materials
            </h2>
            <p className="text-lg text-navy-300 max-w-2xl mx-auto">
              Access all the resources you need for the ROI Analysis activity, 
              including lecture slides, exercises, and analysis templates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Guest Lecture Slides */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-coral to-orange-400 flex items-center justify-center text-navy-950 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Guest Lecture Slides
              </h3>
              <p className="text-navy-400 text-sm mb-4">
                Comprehensive presentation on software performance metrics, 
                profiling techniques, and ROI analysis methodology.
              </p>
              <a 
                href="./materials/GuestLecturePerformanceFor533.pdf"
                download
                className="inline-flex items-center gap-2 text-accent-teal hover:gap-3 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </a>
            </div>

            {/* Activity Document */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple to-pink-400 flex items-center justify-center text-navy-950 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Activity Document
              </h3>
              <p className="text-navy-400 text-sm mb-4">
                Exercise instructions for analyzing Apache Avro issue tickets. 
                Complete analysis templates for 3 assigned tickets.
              </p>
              <a 
                href="./materials/SSW5331028Activity.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-teal hover:gap-3 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Activity</span>
              </a>
            </div>

            {/* Exit Survey */}
            <div className="card group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-gold to-yellow-400 flex items-center justify-center text-navy-950 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">
                Exit Survey
              </h3>
              <p className="text-navy-400 text-sm mb-4">
                5-minute anonymous survey to reflect on your learning experience 
                and help improve future course materials.
              </p>
              <a 
                href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-teal hover:gap-3 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Take Survey</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis Sheets */}
      <section className="section-padding bg-navy-950">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              ROI Analysis Sheets
            </h2>
            <p className="text-lg text-navy-300">
              Each batch contains 5 carefully selected Apache Avro issue tickets for 
              ROI analysis. Students are assigned 3 tickets from their designated batch 
              to complete the analysis exercise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {batchFiles.map((batch) => (
              <button
                key={batch.id}
                onClick={() => setSelectedBatch(selectedBatch === batch.id ? null : batch.id)}
                className={`card text-left transition-all ${
                  selectedBatch === batch.id
                    ? 'border-accent-teal bg-accent-teal/10'
                    : 'hover:border-navy-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    selectedBatch === batch.id
                      ? 'bg-accent-teal text-navy-950'
                      : 'bg-navy-800 text-navy-300'
                  }`}>
                    {batch.id}
                  </span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${
                      selectedBatch === batch.id ? 'rotate-180 text-accent-teal' : 'text-navy-500'
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <h3 className={`font-semibold ${
                  selectedBatch === batch.id ? 'text-accent-teal' : 'text-white'
                }`}>
                  {batch.name}
                </h3>
                <p className="text-navy-500 text-sm">5 tickets</p>
              </button>
            ))}
          </div>

          {/* Expanded Batch Details */}
          {selectedBatch && (
            <div className="card bg-navy-900/50 border-accent-teal/30">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    Batch {selectedBatch} - Issue Tickets
                  </h3>
                  <p className="text-navy-400 text-sm">
                    Click on a ticket to view it on the Apache Avro JIRA
                  </p>
                </div>
                <a 
                  href={`./materials/Batch-${selectedBatch}.pdf`}
                  download
                  className="btn-primary text-sm py-2 px-4"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                {batchFiles.find(b => b.id === selectedBatch)?.tickets.map((ticket) => (
                  <a
                    key={ticket}
                    href={`https://issues.apache.org/jira/browse/${ticket}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800 border border-navy-700 rounded-lg text-navy-200 hover:border-accent-teal hover:text-accent-teal transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-mono text-sm">{ticket}</span>
                    <svg className="w-3 h-3 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Download All */}
          <div className="mt-8 text-center">
            <p className="text-navy-400 mb-4">
              Need all batches? Download the complete collection.
            </p>
            <a 
              href="./materials/ROI-Analysis-Sheets.zip"
              download
              className="btn-secondary"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download All Batches (ZIP)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Activity Instructions */}
      <section className="section-padding bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
              Activity Instructions
            </h2>

            <div className="space-y-6">
              <div className="card">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/20 flex items-center justify-center text-accent-teal font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Review the Guest Lecture</h3>
                    <p className="text-navy-400">
                      Watch or review the guest lecture slides to understand performance metrics, 
                      profiling techniques, and the ROI analysis framework.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/20 flex items-center justify-center text-accent-teal font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Analyze Your Assigned Tickets</h3>
                    <p className="text-navy-400">
                      You'll be assigned 3 Apache Avro issue tickets from your batch. For each ticket, 
                      determine if it's performance-related and complete the analysis template covering:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {[
                        'Performance Problem Summary',
                        'Profiling Data (quotes from issue)',
                        'Metrics Used',
                        'Performance Improvements',
                        'Developer Effort (developers & comments)',
                        'Quality Trade-offs',
                        'Personal Reflection',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-navy-300 text-sm">
                          <svg className="w-4 h-4 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-teal/20 flex items-center justify-center text-accent-teal font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Submit Your Analysis</h3>
                    <p className="text-navy-400">
                      Submit your completed analysis document to Canvas by the deadline, 
                      or email directly to <a href="mailto:lxiao6@Stevens.edu" className="text-accent-teal hover:underline">lxiao6@Stevens.edu</a>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Complete the Survey (Optional)</h3>
                    <p className="text-navy-400">
                      Take the 5-minute anonymous exit survey to reflect on your learning experience. 
                      Your feedback helps us improve the course for future students.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a 
                        href="https://stevens.qualtrics.com/jfe/form/SV_bfnyQnFGjdbQrEW"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-lg hover:bg-accent-gold/30 transition-colors text-sm"
                      >
                        <span>Take Exit Survey</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a 
                        href="https://stevens.qualtrics.com/jfe/form/SV_4Mdyeod9Cqi7NFI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-navy-700 text-navy-200 rounded-lg hover:bg-navy-600 transition-colors text-sm"
                      >
                        <span>Research Consent Form</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-accent-teal/10 border border-accent-teal/30 rounded-2xl">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-accent-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Time Estimate</h3>
                  <p className="text-navy-300">
                    The complete activity takes approximately <strong className="text-accent-teal">1 hour</strong> to complete, 
                    with each ticket analysis taking 10-20 minutes. Plan accordingly and take breaks as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

