import { Link } from 'react-router-dom'

const papers = [
  {
    title: 'A Large-Scale Empirical Study of Real-Life Performance Issues in Open Source Projects',
    authors: ['Yutong Zhao', 'Lu Xiao', 'Andre B. Bondi', 'Bihuan Chen', 'Yang Liu'],
    venue: 'IEEE Transactions on Software Engineering',
    venueDetail: 'Volume 49, Issue 2, Pages 924-946',
    year: '2023',
    type: 'Journal Article',
    abstract: 'Software performance is a critical quality attribute that determines the success of a software system. This paper presents a large-scale empirical study of 570 real-life performance issues from 13 open source projects implemented in Java, C/C++, and Python. We summarize eight general types of performance issues with corresponding root causes and resolutions. We found that 27% of issues are resolved by design-level optimization, and identify four typical design-level optimization patterns. From the engineering perspective, only 15% of issues involve revision of test code. From the economic perspective, we analyze the "Return On Investment" of performance optimization.',
    pdfPath: './materials/papers/Empirical_Study_of_Performance_Issues__ICPE_Journal_Extension_.pdf',
    tags: ['Empirical Study', 'Performance Issues', 'Open Source', 'ROI Analysis'],
    doi: 'https://doi.org/10.1109/TSE.2022.3167628',
  },
  {
    title: "eFish'nSea: Unity Game Set for Learning Software Performance Issues Root Causes and Resolutions",
    authors: ['Andrew Quinlan', 'Ryan Mercadante', 'Vincent Tufo', 'Jonathan Morrone', 'Lu Xiao'],
    venue: 'ICSE-SEET 2024',
    venueDetail: '46th International Conference on Software Engineering: Software Engineering Education and Training, Pages 342-347',
    year: '2024',
    type: 'Conference Paper',
    abstract: "This paper introduces eFish'nSea, an interactive Unity-based educational game designed to help students learn about software performance issues, their root causes, and effective resolutions through hands-on gameplay.",
    pdfPath: './materials/papers/ICSE_Education_EFishNSea.pdf',
    tags: ['Educational Game', 'Unity', 'Performance Learning'],
    doi: 'https://doi.org/10.1145/3639474.3640066',
    link: 'https://efish-n-sea.github.io/',
  },
  {
    title: 'Early Progress on Enhancing Existing Software Engineering Courses to Cultivate Performance Awareness',
    authors: ['André Benjamin Bondi', 'Lu Xiao'],
    venue: 'ICPE 2023 Companion',
    venueDetail: 'ACM/SPEC International Conference on Performance Engineering, Pages 345-349',
    year: '2023',
    type: 'Conference Paper',
    abstract: 'Software engineering and computer science courses are frequently focused on particular areas in a way that neglects such cross-cutting quality attributes as performance, reliability, and security. We describe the progress we have made in developing enhancements to some of our existing software engineering courses to draw attention and lay the foundations of an awareness of performance considerations in the software development life cycle. This work is part of an NSF-funded project for undergraduate curriculum development.',
    pdfPath: './materials/papers/Early Progress on Enhancing Existing Software Engineering Courses to Cultivate Performance Awareness.pdf',
    tags: ['SPE Education', 'Curriculum Design', 'NSF Project'],
    doi: 'https://doi.org/10.1145/3578245.3584352',
  },
]

export default function Papers() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-muted)] mb-3">
            <Link to="/" className="hover:text-[var(--color-accent-primary)]">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-ink)]">Research Papers</span>
          </div>
          
          <h1 className="font-[var(--font-headline)] text-3xl md:text-4xl text-[var(--color-ink)] mb-4">
            Research Papers
          </h1>
          <p className="text-[var(--color-ink-light)] max-w-2xl">
            Publications from the PerfStudio research team on software performance engineering education, 
            empirical studies, and educational tools.
          </p>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-12">
        <div className="container-wide">
          <div className="space-y-8">
            {papers.map((paper) => (
              <div 
                key={paper.title}
                className="border border-[var(--color-border)] bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)]">
                        {paper.type}
                      </span>
                      <span className="text-xs text-[var(--color-ink-muted)]">
                        {paper.venue} • {paper.year}
                      </span>
                    </div>
                    <h2 className="font-[var(--font-headline)] text-lg text-[var(--color-ink)] leading-tight mb-1">
                      {paper.title}
                    </h2>
                    <p className="text-xs text-[var(--color-ink-muted)]">
                      {paper.venueDetail}
                    </p>
                  </div>

                  {/* Authors */}
                  <div>
                    <p className="text-sm text-[var(--color-ink-light)]">
                      {paper.authors.join(', ')}
                    </p>
                  </div>

                  {/* Abstract */}
                  <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
                    {paper.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-[var(--color-paper)] border border-[var(--color-border)] text-[var(--color-ink-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[var(--color-border)]">
                    <a
                      href={paper.pdfPath}
                      download
                      className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                    {paper.doi && (
                      <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] hover:underline"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        DOI
                      </a>
                    )}
                    {paper.link && (
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-primary)] hover:underline"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Info */}
      <section className="py-12 bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-ink)] mb-4">
              Citing Our Work
            </h2>
            <p className="text-sm text-[var(--color-ink-light)] mb-4">
              If you use PerfStudio materials or reference our research in your work, 
              please cite the relevant publications listed above.
            </p>
            <p className="text-sm text-[var(--color-ink-muted)]">
              For questions about our research or collaboration opportunities, contact{' '}
              <a href="mailto:lxiao6@stevens.edu" className="text-[var(--color-accent-primary)] hover:underline">
                Dr. Lu Xiao
              </a>.
            </p>
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
