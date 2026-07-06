import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import HeroSection from '@/components/HeroSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroImage from '@/assets/hero-program.jpg';

const stages = [
  {
    eyebrow: 'Recruitment',
    heading: 'Execution Track — Trainee Analyst',
    body: 'Analysts join NUSSIF through a selective recruitment process into the Execution Track as a Trainee Analyst. Selection is based on intellectual curiosity, financial acumen, and the drive to operate in a professional investment environment.',
  },
  {
    eyebrow: 'First Semester',
    heading: 'Trading Simulation Programme',
    body: 'All incoming Trainee Analysts participate in the Trading Simulation Programme — a structured simulation environment designed to develop trading intuition, decision-making under uncertainty, and investment thesis construction. Simultaneously, each Trainee Analyst selects two Portfolio Managers to shadow on a weekly basis. These sessions are where analysts present their market intuition and analysis directly to the hosting PMs. Position management decisions during these sessions are left to the discretion of the Portfolio Manager.',
  },
  {
    eyebrow: 'Second Semester',
    heading: 'Live Project Allocation',
    body: "Throughout the semester, each Trainee Analyst is assigned distinct tasks, research projects, and analytical responsibilities. These are allocated by the Portfolio Managers they shadow, ensuring direct exposure to live investment decision-making processes across the fund's asset classes.",
  },
  {
    eyebrow: 'Outcome',
    heading: 'Pathway to the Investing Teams',
    body: null,
    callout: 'Outstanding Trainee Analysts will be invited to join the Investing Teams.',
  },
];

const mandateData = [
  {
    label: 'Strategies',
    equities: 'Blend of Discretionary & Systematic',
    macro: 'Blend of Discretionary & Systematic',
    commodities: 'Blend of Discretionary & Systematic',
  },
  {
    label: 'Directional / Relative Value',
    equities: '~50% / 50%',
    macro: '~30% / 70%',
    commodities: '~30% / 70%',
  },
  {
    label: 'Instruments',
    equities: 'Equities, ETFs, Equity & Index Options',
    macro: 'Mini-Forwards, Futures, Options',
    commodities: 'Micro / Mini-Futures',
  },
  {
    label: 'Geographic Focus',
    equities: 'Singapore / Global + Thematic',
    macro: 'Global',
    commodities: 'Global / Commodity Only',
  },
  {
    label: 'Max Instruments',
    equities: '< 20',
    macro: '< 45',
    commodities: '< 20',
  },
  {
    label: 'Volatility Target',
    equities: '~20%',
    macro: '~10%',
    commodities: '~10%',
  },
];

export default function ProgramPage() {
  const revealRef = useScrollReveal();
  const closingRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: pageRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const { scrollYProgress: closingScroll } = useScroll({
    target: closingRef,
    offset: ['start end', 'end start'],
  });
  const closingBgY = useTransform(closingScroll, [0, 1], ['0%', '15%']);

  const timelineRef = useRef<HTMLDivElement>(null);
  const [linePos, setLinePos] = useState({ top: 0, height: 0 });

  // The gold thread draws itself as the reader moves through the pipeline
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.75', 'end 0.45'],
  });
  const threadScale = useSpring(timelineProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  const measureLine = useCallback(() => {
    if (!timelineRef.current) return;
    const dots = timelineRef.current.querySelectorAll<HTMLElement>('[data-dot]');
    if (dots.length < 2) return;
    const containerRect = timelineRef.current.getBoundingClientRect();
    const firstRect = dots[0].getBoundingClientRect();
    const lastRect = dots[dots.length - 1].getBoundingClientRect();
    const top = firstRect.top + firstRect.height / 2 - containerRect.top;
    const bottom = lastRect.top + lastRect.height / 2 - containerRect.top;
    setLinePos({ top, height: bottom - top });
  }, []);

  useEffect(() => {
    const timer = setTimeout(measureLine, 200);
    window.addEventListener('resize', measureLine);
    return () => { clearTimeout(timer); window.removeEventListener('resize', measureLine); };
  }, [measureLine]);

  return (
    <div ref={(el) => { revealRef.current = el; (pageRef as React.MutableRefObject<HTMLDivElement | null>).current = el; }}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX, backgroundColor: 'hsl(var(--gold))' }}
      />

      <HeroSection
        image={heroImage}
        title="The NUSSIF Program"
        subtitle="An institutional-grade training experience, built for the next generation of buy-side practitioners."
        noOverlay
      />

      {/* Philosophy */}
      <section id="philosophy" className="bg-background">
        <div className="container-site">
          <div className="border-t border-border pt-24 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="block font-display font-light leading-none mb-6 select-none"
                  style={{ fontSize: '5rem', color: 'hsl(var(--gold))', lineHeight: 1, opacity: 0.25 }}
                >
                  "
                </span>
                <motion.p
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-light text-foreground leading-[1.4]"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)' }}
                >
                  We strive to provide an institutional-grade experience that empowers our members to leverage industry best practices — making decisions with clear{' '}
                  <span style={{ color: 'hsl(var(--gold))' }}>ownership</span> and{' '}
                  <span style={{ color: 'hsl(var(--gold))' }}>accountability</span>.
                </motion.p>
              </motion.div>
              <motion.div
                className="lg:col-span-4 lg:col-start-9 lg:pt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="border-l-2 pl-8" style={{ borderColor: 'hsl(var(--gold))' }}>
                  <p className="body-text leading-[1.8]">
                    Backed by senior advisors with cumulatively 64 years of experience in global finance, the NUSSIF program is structured to ensure learning is held to the highest standard.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/program-candles.jpg"
            alt="Trading screens"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[hsl(220,55%,8%,0.5)]" />
      </section>

      {/* Analyst Pipeline */}
      <section id="analyst-pipeline" className="bg-background">
        <div className="container-site">
          <div className="border-t border-border pt-24 pb-24">
            <motion.div
              className="mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="eyebrow block mb-4" style={{ color: 'hsl(var(--gold))' }}>Structure</span>
              <h2 className="heading-section mb-4">The Analyst Pipeline</h2>
              <p className="body-text max-w-xl">
                From entry to the investing teams — a structured pathway of growth.
              </p>
            </motion.div>

            {/* Timeline with scroll-drawn vertical thread */}
            <div className="relative" ref={timelineRef}>
              {linePos.height > 0 && (
                <>
                  {/* Faint base line */}
                  <div
                    className="absolute left-[2.75rem] -translate-x-1/2 w-px hidden lg:block"
                    style={{
                      backgroundColor: 'hsl(var(--gold) / 0.12)',
                      top: linePos.top,
                      height: linePos.height,
                    }}
                  />
                  {/* Bright thread that draws itself with scroll */}
                  <motion.div
                    className="absolute left-[2.75rem] -translate-x-1/2 w-px hidden lg:block origin-top"
                    style={{
                      backgroundColor: 'hsl(var(--gold) / 0.55)',
                      top: linePos.top,
                      height: linePos.height,
                      scaleY: threadScale,
                      boxShadow: '0 0 8px 0 hsl(var(--gold) / 0.3)',
                    }}
                  />
                </>
              )}

              {stages.map((stage, i) => {
                const isLast = i === stages.length - 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={isLast ? 'mt-6' : ''}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-[5.5rem_1fr] gap-6 lg:gap-12 ${isLast ? 'py-16 lg:py-20' : 'py-12 lg:py-16'}`}>
                      <div className="relative flex flex-col items-start lg:items-center">
                        <div
                          data-dot
                          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-3 z-10 rounded-full"
                          style={isLast ? {
                            width: '12px',
                            height: '12px',
                            backgroundColor: 'hsl(var(--gold))',
                            boxShadow: '0 0 8px 3px hsl(var(--gold) / 0.45), 0 0 22px 8px hsl(var(--gold) / 0.2), 0 0 40px 14px hsl(var(--gold) / 0.08)',
                          } : {
                            width: '8px',
                            height: '8px',
                            backgroundColor: 'hsl(var(--gold))',
                          }}
                        />
                        <span
                          className="font-display select-none"
                          style={{
                            fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                            color: 'hsl(var(--gold))',
                            lineHeight: 1,
                            fontWeight: 300,
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div
                        className={isLast ? '' : 'pb-12 lg:pb-16'}
                        style={isLast ? {} : { borderBottom: '1px solid hsl(var(--border))' }}
                      >
                        <span
                          className="font-body text-xs tracking-[0.2em] uppercase font-medium block mb-5"
                          style={{ color: 'hsl(var(--gold))' }}
                        >
                          {stage.eyebrow}
                        </span>
                        <h3
                          className="font-display font-medium text-foreground mb-5"
                          style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
                        >
                          {stage.heading}
                        </h3>
                        {stage.body && (
                          <p className="body-text leading-[1.85] max-w-2xl">{stage.body}</p>
                        )}
                        {stage.callout && (
                          <div
                            className="mt-3 py-5 px-8"
                            style={{ backgroundColor: 'hsl(var(--gold) / 0.06)' }}
                          >
                            <p className="font-display italic text-foreground" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                              {stage.callout}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Second image break */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="/program-buildings.jpg"
            alt="Skyline"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[hsl(220,55%,8%,0.5)]" />
      </section>

      {/* Investment Mandate */}
      <section id="mandate" className="bg-muted/30">
        <div className="container-site">
          <div className="border-t border-border pt-24 pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow block mb-4" style={{ color: 'hsl(var(--gold))' }}>Mandate</span>
                <h2 className="heading-section">Investment Mandate</h2>
              </motion.div>
              <motion.div
                className="lg:col-span-5 lg:col-start-8 flex items-end"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="body-text">
                  A multi-strategy framework combining discretionary and systematic approaches across global markets.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <table className="w-full table-fixed" style={{ borderCollapse: 'collapse' }}>
                <colgroup>
                  <col style={{ width: '26%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '24%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className="pb-6 text-left align-bottom" />
                    {['Equities', 'Global Macro', 'Commodities'].map((col) => (
                      <th key={col} className="pb-6 text-left align-bottom pr-4">
                        <div
                          className="mb-3"
                          style={{
                            height: '2px',
                            backgroundColor: 'hsl(var(--gold))',
                            width: '1.75rem',
                          }}
                        />
                        <span
                          className="font-body font-semibold text-foreground uppercase"
                          style={{ fontSize: '0.62rem', letterSpacing: '0.13em' }}
                        >
                          {col}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mandateData.map((row, rowIndex) => (
                    <motion.tr
                      key={row.label}
                      className="group transition-colors duration-300 hover:bg-background/80"
                      style={{ borderTop: '1px solid hsl(var(--border))' }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + rowIndex * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <td
                        className="py-5 pr-6 font-body font-semibold text-foreground align-top"
                        style={{ fontSize: '0.78rem' }}
                      >
                        {row.label}
                      </td>
                      {[row.equities, row.macro, row.commodities].map((val, j) => (
                        <td
                          key={j}
                          className="py-5 pr-4 font-body text-muted-foreground align-top group-hover:text-foreground transition-colors duration-300"
                          style={{ fontSize: '0.78rem' }}
                        >
                          {val}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                  <tr style={{ borderTop: '1px solid hsl(var(--border))' }}>
                    <td colSpan={4} style={{ padding: 0 }} />
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing strip with parallax */}
      <section ref={closingRef} className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: closingBgY, backgroundColor: 'hsl(218, 55%, 12%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 150px, rgba(255,255,255,0.12) 150px, rgba(255,255,255,0.12) 151px)',
          }}
        />
        <div className="container-site py-28 md:py-36 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-light text-white leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                Built by students. Held to an{' '}
                <span style={{ color: 'hsl(var(--gold))' }}>institutional standard</span>.
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-4 lg:col-start-9"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="body-text text-white/50">
                The NUSSIF program exists to close the gap between university finance education and the professional buy-side.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
