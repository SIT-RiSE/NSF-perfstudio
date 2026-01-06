import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

// PerfStudio Course Units mapping based on proposal
const courses = [
  {
    id: '315',
    code: 'SSW 315',
    title: 'Object-Oriented Programming',
    year: 'Junior • Fall',
    unit: 'Unit 1: SPE Basics',
    topics: 'SPE terminologies and methodologies',
    outcomes: 'Understand basic SPE definition and concepts; Understand common performance strategies and limitations',
    pblActivity: 'DWT Pharmacy Vaccination System: SPE process, Java I/O, OO design trade-offs',
    status: 'active',
    color: '#6b5b95',
  },
  {
    id: '345',
    code: 'SSW 345',
    title: 'Model-Based Software Engineering',
    year: 'Junior • Spring',
    unit: 'Units 2-3: Performance Modeling & Bottleneck Analysis',
    topics: 'Performance bugs, Stress testing, eFish\'n\'Sea game',
    outcomes: 'Apply Software Execution Models; Understand system performance metrics; Identify bottleneck resources',
    pblActivity: 'Stress Testing Simulation on eFish\'n\'Sea Game with Loadster',
    status: 'active',
    color: '#2e8b57',
  },
  {
    id: '533',
    code: 'SSW 533',
    title: 'Software Metrics and Estimation',
    year: 'Senior • Fall',
    unit: 'Unit 4: Performance Data Collection',
    topics: 'Basic statistics, data analytics, hypothesis testing',
    outcomes: 'Apply techniques and tools for SPE data collection; Interpret profiling and benchmark data',
    pblActivity: 'ROI Analysis of Apache Avro performance issues',
    status: 'active',
    color: '#c73e1d',
  },
  {
    id: '567',
    code: 'SSW 567',
    title: 'Software Testing',
    year: 'Senior • Spring',
    unit: 'Unit 5: Performance Testing',
    topics: 'Performance testing, reliability testing, test planning',
    outcomes: 'Understand performance test cases with workload specifications; Apply tools to measure performance',
    pblActivity: 'MRTD System Testing: requirements, unit tests, performance tests, test planning',
    status: 'active',
    color: '#326891',
  },
]



// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000, startAnimation: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!startAnimation) return
    
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, startAnimation])
  
  return count
}

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    
    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [])
  
  return { ref, isVisible }
}

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

export default function Home() {
  const [activeSection, setActiveSection] = useState('')
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)
  const statsReveal = useScrollReveal()
  
  const courseCount = useAnimatedCounter(4, 1000, statsReveal.isVisible)

  // Track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['objectives', 'methodology', 'courses', 'outcomes']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="min-h-screen">
      {/* Header - PerfStudio Branding */}
      <section className="py-16 border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-primary)]">
              NSF IUSE: EHR Project
            </span>
            <span className="text-[var(--color-border)]">•</span>
            <span className="text-xs text-[var(--color-ink-muted)]">Stevens Institute of Technology</span>
          </div>
          
          <h1 className="font-[var(--font-headline)] text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)] mb-2 leading-tight">
            PerfStudio
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-ink-light)] max-w-3xl mb-6">
            Problem-Based Learning for{' '}
            <span className="text-[var(--color-accent-primary)] font-medium">Software Performance Engineering</span>{' '}
            Education in Undergraduate Curricula
          </p>
          <p className="text-[var(--color-ink-muted)] max-w-2xl mb-8">
            Developing and evaluating curricular units that integrate SPE concepts across 
            Software Engineering, Computer Science, and Systems Engineering programs through 
            authentic industry problems and hands-on learning activities.
          </p>
          
          {/* Quick Stats */}
          <div ref={statsReveal.ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--color-border)]">
            <div className="text-center md:text-left">
              <div className="font-[var(--font-headline)] text-3xl text-[var(--color-accent-purple)]">
                5
              </div>
              <div className="text-xs text-[var(--color-ink-muted)]">SPE Units</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-[var(--font-headline)] text-3xl text-[var(--color-accent-primary)]">
                {courseCount}
              </div>
              <div className="text-xs text-[var(--color-ink-muted)]">Courses Integrated</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-[var(--font-headline)] text-3xl text-[var(--color-accent-coral)]">
                200+
              </div>
              <div className="text-xs text-[var(--color-ink-muted)]">Student Participants</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-[var(--font-headline)] text-3xl text-[var(--color-accent-warm)]">
                3
              </div>
              <div className="text-xs text-[var(--color-ink-muted)]">Year Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation - Fixed anchor links */}
      <section className="py-4 bg-[var(--color-paper)] border-b border-[var(--color-border)] sticky top-[60px] z-40">
        <div className="container-wide">
          <nav className="flex flex-wrap gap-8 text-sm">
            <button 
              onClick={() => scrollToSection('objectives')}
              className={`transition-colors ${activeSection === 'objectives' ? 'text-[var(--color-accent-primary)] font-medium' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]'}`}
            >
              Research Objectives
            </button>
            <button 
              onClick={() => scrollToSection('methodology')}
              className={`transition-colors ${activeSection === 'methodology' ? 'text-[var(--color-accent-primary)] font-medium' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]'}`}
            >
              Methodology
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className={`transition-colors ${activeSection === 'courses' ? 'text-[var(--color-accent-primary)] font-medium' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]'}`}
            >
              Course Materials
            </button>
            <button 
              onClick={() => scrollToSection('outcomes')}
              className={`transition-colors ${activeSection === 'outcomes' ? 'text-[var(--color-accent-primary)] font-medium' : 'text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)]'}`}
            >
              Learning Outcomes
            </button>
            <Link to="/team" className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
              Research Team
            </Link>
          </nav>
        </div>
      </section>

      {/* Research Objectives - Editorial Style */}
      <section id="objectives" className="py-20">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-[var(--font-headline)] text-3xl text-[var(--color-ink)] mb-8">
              Project Overview
            </h2>
            
            <div className="space-y-6 text-lg text-[var(--color-ink-light)] leading-relaxed">
              <p>
                <span className="font-semibold text-[var(--color-ink)]">PerfStudio</span> is an NSF-funded 
                educational research project that develops <span className="bg-[var(--color-highlight)] px-1">problem-based 
                learning (PBL) curricular units</span> to integrate Software Performance Engineering (SPE) 
                concepts across undergraduate Computer Science, Software Engineering, and Systems Engineering programs.
              </p>
              
              <p>
                Software performance is critical to user experience, system reliability, and business success—yet 
                SPE remains <span className="text-[var(--color-accent-coral)] font-medium">underrepresented in most 
                CS curricula</span>. Students often graduate without understanding how to identify, measure, or 
                reason about performance issues in production systems.
              </p>
              
              <p>
                PerfStudio addresses this gap through <span className="bg-[var(--color-highlight)] px-1">5 cohesive 
                course units</span> covering SPE basics, performance modeling, bottleneck analysis, data collection, 
                and performance testing. These units are integrated into <span className="text-[var(--color-accent-primary)] font-medium">4 
                undergraduate courses</span> (SSW 315, 345, 533, 567) spanning junior and senior years, with 
                plans to expand across CS and Systems Engineering programs.
              </p>
              
              <p>
                Our approach emphasizes <span className="font-semibold text-[var(--color-ink)]">authentic industry 
                problems</span>—including COVID Vaccine Scheduling systems, Apache Avro performance issues, and 
                crowdsourced performance testing games—to ensure students can apply SPE knowledge and techniques 
                to real-world scenarios.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology - SPE Units & PBL */}
      <section id="methodology" className="py-20 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="font-[var(--font-headline)] text-3xl text-[var(--color-ink)] mb-3">
              Curricular Framework
            </h2>
            <p className="text-[var(--color-ink-muted)] max-w-2xl">
              Five cohesive SPE units integrated across the undergraduate curriculum through problem-based learning.
            </p>
          </div>

          {/* SPE Units Table */}
          <div className="bg-white border border-[var(--color-border)] overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-ink)] text-white">
                    <th className="text-left py-3 px-4 font-medium">Unit</th>
                    <th className="text-left py-3 px-4 font-medium">Topics</th>
                    <th className="text-left py-3 px-4 font-medium">Learning Outcomes</th>
                    <th className="text-left py-3 px-4 font-medium">PBL Activities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-3 px-4">
                      <span className="font-semibold text-[var(--color-accent-purple)]">Unit 1</span><br/>
                      <span className="text-xs text-[var(--color-ink-muted)]">SPE Basics</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">SPE terminologies and methodologies</td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Understand basic SPE concepts; Common performance strategies</td>
                    <td className="py-3 px-4"><span className="bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)] px-1 text-xs font-medium">DWT Pharmacy System</span></td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-paper)]/50">
                    <td className="py-3 px-4">
                      <span className="font-semibold text-[var(--color-accent-teal)]">Unit 2</span><br/>
                      <span className="text-xs text-[var(--color-ink-muted)]">Performance Modeling</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Performance bugs, Execution models</td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Apply Software & System Execution Models</td>
                    <td className="py-3 px-4"><span className="bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] px-1 text-xs font-medium">eFish'n'Sea Stress Testing</span></td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-3 px-4">
                      <span className="font-semibold text-[var(--color-accent-teal)]">Unit 3</span><br/>
                      <span className="text-xs text-[var(--color-ink-muted)]">Bottleneck Analysis</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Stress testing, Loadster tool</td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Interpret system metrics; Identify bottleneck resources</td>
                    <td className="py-3 px-4"><span className="bg-[var(--color-accent-teal)]/10 text-[var(--color-accent-teal)] px-1 text-xs font-medium">eFish'n'Sea Stress Testing</span></td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-paper)]/50">
                    <td className="py-3 px-4">
                      <span className="font-semibold text-[var(--color-accent-coral)]">Unit 4</span><br/>
                      <span className="text-xs text-[var(--color-ink-muted)]">Data Collection</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Statistics, data analytics, hypothesis testing</td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Apply techniques & tools for SPE data collection</td>
                    <td className="py-3 px-4"><span className="bg-[var(--color-accent-coral)]/10 text-[var(--color-accent-coral)] px-1 text-xs font-medium">Apache OSS ROI Analysis</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-[var(--color-accent-warm)]">Unit 5</span><br/>
                      <span className="text-xs text-[var(--color-ink-muted)]">Performance Testing</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Test planning, resource & response time measurement</td>
                    <td className="py-3 px-4 text-[var(--color-ink-light)]">Performance test cases; Apply measurement tools</td>
                    <td className="py-3 px-4"><span className="bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-1 text-xs font-medium">MRTD System Testing</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Course Implementation */}
      <section id="courses" className="py-20 bg-[var(--color-paper)] border-y border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="font-[var(--font-headline)] text-3xl text-[var(--color-ink)] mb-3">
              Course Implementation
            </h2>
            <p className="text-[var(--color-ink-muted)] max-w-2xl">
              PerfStudio units are integrated into 4 undergraduate Software Engineering courses at Stevens, 
              spanning junior and senior years with approximately 200 students over the project duration.
            </p>
          </div>

          {/* Implementation Timeline Visual - Interactive */}
          <div className="mb-8 p-4 bg-white border border-[var(--color-border)]">
            <div className="flex items-center justify-between text-xs text-[var(--color-ink-muted)] mb-2">
              <span>Junior Year</span>
              <span>Senior Year</span>
            </div>
            <div className="flex gap-2">
              <div 
                className={`flex-1 h-2 rounded-l transition-all duration-300 ${
                  hoveredCourse === '315' ? 'bg-[var(--color-accent-purple)] scale-y-150' : 'bg-[var(--color-accent-purple)]/30'
                }`} 
                title="SSW 315 - Fall"
              />
              <div 
                className={`flex-1 h-2 transition-all duration-300 ${
                  hoveredCourse === '345' ? 'bg-[var(--color-accent-teal)] scale-y-150' : 'bg-[var(--color-accent-teal)]/30'
                }`} 
                title="SSW 345 - Spring"
              />
              <div 
                className={`flex-1 h-2 transition-all duration-300 ${
                  hoveredCourse === '533' ? 'bg-[var(--color-accent-coral)] scale-y-150' : 'bg-[var(--color-accent-coral)]/30'
                }`} 
                title="SSW 533 - Fall"
              />
              <div 
                className={`flex-1 h-2 rounded-r transition-all duration-300 ${
                  hoveredCourse === '567' ? 'bg-[var(--color-accent-primary)] scale-y-150' : 'bg-[var(--color-accent-primary)]/30'
                }`} 
                title="SSW 567 - Spring"
              />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className={`transition-all duration-300 ${hoveredCourse === '315' ? 'text-[var(--color-accent-purple)] font-semibold' : 'text-[var(--color-accent-purple)]/60'}`}>
                {hoveredCourse === '315' ? '● ' : ''}Fall
              </span>
              <span className={`transition-all duration-300 ${hoveredCourse === '345' ? 'text-[var(--color-accent-teal)] font-semibold' : 'text-[var(--color-accent-teal)]/60'}`}>
                {hoveredCourse === '345' ? '● ' : ''}Spring
              </span>
              <span className={`transition-all duration-300 ${hoveredCourse === '533' ? 'text-[var(--color-accent-coral)] font-semibold' : 'text-[var(--color-accent-coral)]/60'}`}>
                {hoveredCourse === '533' ? '● ' : ''}Fall
              </span>
              <span className={`transition-all duration-300 ${hoveredCourse === '567' ? 'text-[var(--color-accent-primary)] font-semibold' : 'text-[var(--color-accent-primary)]/60'}`}>
                {hoveredCourse === '567' ? '● ' : ''}Spring
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`group relative bg-white overflow-hidden transition-all duration-300 ${
                  course.status === 'coming' 
                    ? 'opacity-70' 
                    : 'hover:shadow-lg cursor-pointer'
                }`}
                style={{ 
                  borderWidth: '1px',
                  borderColor: course.status === 'active' ? course.color : 'var(--color-border)',
                  borderLeftWidth: '4px',
                  borderLeftColor: course.color,
                }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                {course.status === 'active' && (
                  <Link to={`/courses/${course.id}`} className="absolute inset-0 z-10" />
                )}
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-[var(--font-mono)] text-sm font-semibold" style={{ color: course.color }}>
                          {course.code}
                        </span>
                        <span className="text-xs text-[var(--color-ink-subtle)]">•</span>
                        <span className="text-xs text-[var(--color-ink-muted)]">{course.year}</span>
                      </div>
                      <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-ink)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    {course.status === 'active' ? (
                      <span className="text-xs bg-[var(--color-accent-coral)] text-white px-2 py-0.5 rounded">
                        Materials Available
                      </span>
                    ) : (
                      <span className="text-xs text-[var(--color-ink-subtle)] border border-[var(--color-border)] px-2 py-0.5">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ 
                      backgroundColor: `${course.color}15`,
                      color: course.color 
                    }}>
                      {course.unit}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--color-ink-muted)] mb-3">
                    <strong className="text-[var(--color-ink)]">Topics:</strong> {course.topics}
                  </p>
                  
                  <p className="text-sm text-[var(--color-ink-muted)] mb-3">
                    <strong className="text-[var(--color-ink)]">Outcomes:</strong> {course.outcomes}
                  </p>

                  <div className="pt-3 border-t border-[var(--color-border)]">
                    <p className="text-xs text-[var(--color-ink-subtle)]">
                      <strong>PBL Activity:</strong> {course.pblActivity}
                    </p>
                  </div>

                  {course.status === 'active' && (
                    <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent-primary)] font-medium">
                      <span>View Materials</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Learning Outcomes - By Unit */}
      <section id="outcomes" className="py-20 border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="font-[var(--font-headline)] text-3xl text-[var(--color-ink)] mb-4">
              Expected Learning Outcomes
            </h2>
            <p className="text-[var(--color-ink-muted)] mb-8">
              Each PerfStudio unit targets specific SPE competencies, progressing from foundational 
              concepts to applied skills across the curriculum.
            </p>
            
            <div className="space-y-8">
              {/* Unit 1 */}
              <div className="border-l-4 border-[var(--color-accent-purple)] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--color-accent-purple)]">UNIT 1</span>
                  <span className="text-sm font-medium text-[var(--color-ink)]">SPE Basics</span>
                </div>
                <p className="text-[var(--color-ink-light)] leading-relaxed">
                  Students will <span className="bg-[var(--color-highlight)] px-1">understand basic SPE 
                  definitions and concepts</span>, including performance terminologies and methodologies. 
                  They will learn <span className="text-[var(--color-accent-purple)] font-medium">common 
                  performance strategies</span> and their limitations when analyzing real applications.
                </p>
              </div>

              {/* Unit 2 */}
              <div className="border-l-4 border-[var(--color-accent-teal)] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--color-accent-teal)]">UNIT 2</span>
                  <span className="text-sm font-medium text-[var(--color-ink)]">Performance Modeling</span>
                </div>
                <p className="text-[var(--color-ink-light)] leading-relaxed">
                  Students will <span className="text-[var(--color-accent-teal)] font-medium">apply Software 
                  Execution Models and System Execution Models</span> to analyze application performance. 
                  They will understand <span className="bg-[var(--color-highlight)] px-1">execution graphs 
                  and performance metrics</span> in the context of NodeJS applications.
                </p>
              </div>

              {/* Unit 3 */}
              <div className="border-l-4 border-[var(--color-accent-primary)] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--color-accent-primary)]">UNIT 3</span>
                  <span className="text-sm font-medium text-[var(--color-ink)]">Bottleneck Analysis</span>
                </div>
                <p className="text-[var(--color-ink-light)] leading-relaxed">
                  Students will understand <span className="bg-[var(--color-highlight)] px-1">basic system 
                  performance metrics</span> and be able to interpret their values. Using 
                  <span className="text-[var(--color-accent-primary)] font-medium"> basic queueing theory</span>, 
                  they will learn to identify bottleneck resources in system execution models.
                </p>
              </div>

              {/* Unit 4 */}
              <div className="border-l-4 border-[var(--color-accent-coral)] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--color-accent-coral)]">UNIT 4</span>
                  <span className="text-sm font-medium text-[var(--color-ink)]">Performance Data Collection</span>
                </div>
                <p className="text-[var(--color-ink-light)] leading-relaxed">
                  Students will <span className="text-[var(--color-accent-coral)] font-medium">apply techniques 
                  and tools for SPE data collection</span>, including basic statistics, data analytics, and 
                  hypothesis testing. Through ROI analysis of Apache Avro issues, they learn to 
                  <span className="bg-[var(--color-highlight)] px-1">interpret profiling data and estimate 
                  developer effort</span>.
                </p>
              </div>

              {/* Unit 5 */}
              <div className="border-l-4 border-[var(--color-accent-warm)] pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-[var(--font-mono)] text-xs font-semibold text-[var(--color-accent-warm)]">UNIT 5</span>
                  <span className="text-sm font-medium text-[var(--color-ink)]">Performance Testing</span>
                </div>
                <p className="text-[var(--color-ink-light)] leading-relaxed">
                  Students will understand <span className="bg-[var(--color-highlight)] px-1">performance test 
                  cases with reference to workload specifications</span> and performance requirements. They will 
                  <span className="text-[var(--color-accent-warm)] font-medium"> apply tools like JMeter</span> to 
                  measure resource usage and response time of real software systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-[var(--color-paper)] border-t border-[var(--color-border)]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-headline)] text-3xl text-[var(--color-ink)] mb-3">
              Explore PerfStudio
            </h2>
            <p className="text-[var(--color-ink-muted)]">
              Access course materials, meet the research team, or request resources for your institution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <button 
              onClick={() => scrollToSection('courses')}
              className="group border-2 border-[var(--color-border)] bg-white p-8 text-center hover:border-[var(--color-accent-coral)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-accent-coral)]/10 text-[var(--color-accent-coral)] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                📚
              </div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Course Materials</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Browse PBL activities, lecture slides, and learning resources for each course.
              </p>
              <span className="text-[var(--color-accent-coral)] font-medium group-hover:underline">
                View Courses →
              </span>
            </button>
            
            <Link 
              to="/team" 
              className="group border-2 border-[var(--color-border)] bg-white p-8 text-center hover:border-[var(--color-accent-primary)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Research Team</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Meet the faculty and researchers behind the PerfStudio project.
              </p>
              <span className="text-[var(--color-accent-primary)] font-medium group-hover:underline">
                View Team →
              </span>
            </Link>
            
            <Link 
              to="/resources"
              className="group border-2 border-[var(--color-border)] bg-white p-8 text-center hover:border-[var(--color-accent-purple)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                📦
              </div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">Download Resources</h3>
              <p className="text-sm text-[var(--color-ink-muted)] mb-4">
                Access all PerfStudio course materials for use at your institution.
              </p>
              <span className="text-[var(--color-accent-purple)] font-medium group-hover:underline">
                View Resources →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="py-12 border-t border-[var(--color-border)] bg-[var(--color-paper)]">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--color-accent-primary)] text-white flex items-center justify-center font-bold text-lg">
                NSF
              </div>
              <div className="text-sm text-[var(--color-ink-muted)]">
                <strong className="text-[var(--color-ink)]">Acknowledgment:</strong>{' '}
                This project is funded by the National Science Foundation (NSF).
              </div>
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
