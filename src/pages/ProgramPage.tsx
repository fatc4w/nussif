import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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

  const { scrollYProgress: closingScroll } = useScroll({
    target: closingRef,
    offset: ['start end', 'end start'],
  });
  const closingBgY = useTransform(closingScroll, [0, 1], ['0%', '15%']);

  return (
    <div ref={revealRef}>
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
                <p
                  className="font-display font-light text-foreground leading-[1.4]"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)' }}
                >
                  We strive to provide an institutional-grade experience that empowers our members to leverage industry best practices — making decisions with clear ownership and accountability.
                </p>
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
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
            alt="Trading screens"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-navy-deep/50" />
      </section>

      {/* Analyst Pipeline */}
      <section id="analyst-pipeline" className="bg-background">
        <div className="container-site">
          <div className="border-t border-border pt-24 pb-24">
            {/* Header */}
            <motion.div
              className="mb-20"
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

            {/* Vertical timeline */}
            <div className="relative ml-4 md:ml-8">
              {/* Vertical line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0"
                style={{ width: '1px', backgroundColor: 'hsl(var(--gold) / 0.3)' }}
                initial={{ scaleY: 0, transformOrigin: 'top' }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />

              {stages.map((stage, i) => (
                <motion.div
                  key={i}
                  className="relative pl-10 md:pl-14 pb-14 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Gold dot */}
                  <div
                    className="absolute top-[6px]"
                    style={{
                      left: '-4px',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      backgroundColor: 'hsl(var(--gold))',
                    }}
                  />

                  <div className="bg-background border border-border p-8 md:p-10 transition-all duration-500 hover:border-[hsl(var(--gold)/0.3)] hover:shadow-lg">
                    <span
                      className="eyebrow block mb-3"
                      style={{ color: 'hsl(var(--gold))' }}
                    >
                      {stage.eyebrow}
                    </span>
                    <h3 className="font-display font-medium text-foreground text-xl md:text-2xl mb-4">
                      {stage.heading}
                    </h3>
                    {stage.body && (
                      <p className="body-text leading-[1.8]">{stage.body}</p>
                    )}
                    {stage.callout && (
                      <div
                        className="border-l-2 pl-6 mt-2"
                        style={{ borderColor: 'hsl(var(--gold))' }}
                      >
                        <p className="font-display italic text-foreground text-lg">
                          {stage.callout}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Mandate */}
      <section id="mandate" className="bg-muted/30">
        <div className="container-site">
          <div className="border-t border-border pt-24 pb-28">
            {/* Header */}
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

            {/* Table */}
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
                  {mandateData.map((row) => (
                    <tr
                      key={row.label}
                      className="group transition-colors duration-300 hover:bg-background/80"
                      style={{ borderTop: '1px solid hsl(var(--border))' }}
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
                    </tr>
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
          className="absolute inset-0 bg-primary"
          style={{ y: closingBgY }}
        />
        <div className="container-site py-24 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-light text-primary-foreground leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                Built by students. Held to an institutional standard.
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-4 lg:col-start-9"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="body-text" style={{ color: 'hsl(var(--primary-foreground) / 0.55)' }}>
                The NUSSIF program exists to close the gap between university finance education and the professional buy-side.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
