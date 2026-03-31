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

function SectionNumber({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-6 mb-16"
    >
      <span className="font-body text-sm tracking-wide" style={{ color: 'hsl(var(--gold) / 0.5)' }}>
        {number}
      </span>
      <div className="w-12 h-px" style={{ background: 'hsl(var(--gold) / 0.3)' }} />
      <span className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}

export default function ProgramPage() {
  const revealRef = useScrollReveal();
  const closingRef = useRef<HTMLDivElement>(null);
  const imageBreakRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: closingScroll } = useScroll({
    target: closingRef,
    offset: ['start end', 'end start'],
  });
  const closingBgY = useTransform(closingScroll, [0, 1], ['0%', '15%']);

  const { scrollYProgress: imgScroll } = useScroll({
    target: imageBreakRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(imgScroll, [0, 1], ['-10%', '10%']);

  return (
    <div ref={revealRef}>
      <HeroSection
        image={heroImage}
        title="The NUSSIF Program"
        subtitle="An institutional-grade training experience, built for the next generation of buy-side practitioners."
        noOverlay
      />

      {/* ═══ 01 — PHILOSOPHY — with image ═══ */}
      <section id="philosophy" className="bg-background">
        <div className="container-site pt-32 md:pt-40 lg:pt-48 pb-0">
          <SectionNumber number="01" label="Philosophy" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-light text-foreground leading-[1.15] tracking-tight mb-10"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Investment
                <br />
                <span style={{ color: 'hsl(var(--gold) / 0.7)' }}>Philosophy</span>
              </h2>
              <p className="font-body font-light text-muted-foreground text-base md:text-lg leading-[1.9] max-w-xl">
                We strive to provide an institutional-grade experience that empowers our members to leverage industry best practices — making decisions with clear ownership and accountability.
              </p>
            </motion.div>
            <motion.div
              className="lg:col-span-4 lg:col-start-9 lg:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="border-l-2 pl-8" style={{ borderColor: 'hsl(var(--gold))' }}>
                <p className="body-text leading-[1.9] text-base">
                  Backed by senior advisors with cumulatively 64 years of experience in global finance, the NUSSIF program is structured to ensure learning is held to the highest standard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-width image break with parallax */}
        {/* IMAGE: program-section-1.jpg — eg. trading screens, data terminals, or your team at work */}
        <div ref={imageBreakRef} className="relative h-[50vh] md:h-[60vh] mt-32 overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imgY }}>
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
              alt="Trading environment"
              className="w-full h-[120%] object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-navy-deep/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
        </div>
      </section>

      {/* ═══ 02 — ANALYST PIPELINE ═══ */}
      <section id="analyst-pipeline" className="bg-background">
        <div className="container-site py-32 md:py-40 lg:py-48">
          <SectionNumber number="02" label="Structure" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-foreground leading-[1.15] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            The Analyst Pipeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="body-text max-w-xl text-lg mb-24"
          >
            From entry to the investing teams — a structured pathway of growth.
          </motion.p>

          {/* Alternating timeline */}
          <div className="space-y-0">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-border/40 py-14 md:py-20 group"
              >
                {/* Left — stage number + eyebrow */}
                <div className="lg:col-span-3 flex items-start gap-6">
                  <span
                    className="font-display font-light text-5xl md:text-6xl leading-none"
                    style={{ color: 'hsl(var(--foreground) / 0.08)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-3">
                    <span className="eyebrow block" style={{ color: 'hsl(var(--gold))' }}>
                      {stage.eyebrow}
                    </span>
                  </div>
                </div>

                {/* Right — content */}
                <div className="lg:col-span-8 lg:col-start-5">
                  <h3
                    className="font-display font-medium text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-500"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                  >
                    {stage.heading}
                  </h3>
                  {stage.body && (
                    <p className="body-text leading-[1.9] text-base max-w-2xl">{stage.body}</p>
                  )}
                  {stage.callout && (
                    <div className="border-l-2 pl-6 mt-2" style={{ borderColor: 'hsl(var(--gold))' }}>
                      <p className="font-display italic text-foreground text-lg md:text-xl">
                        {stage.callout}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* ═══ 03 — INVESTMENT MANDATE — dark section ═══ */}
      <section id="mandate" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(255,255,255,0.15) 200px, rgba(255,255,255,0.15) 201px)',
          }}
        />

        <div className="container-site relative py-32 md:py-40 lg:py-48">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-body text-sm tracking-wide text-[hsl(var(--gold)/0.5)]">03</span>
            <div className="w-12 h-px" style={{ background: 'hsl(var(--gold) / 0.3)' }} />
            <span className="font-body text-[11px] uppercase tracking-[0.2em] text-primary-foreground/40">Mandate</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-primary-foreground leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Investment
              <br />Mandate
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-body font-light text-primary-foreground/50 text-base md:text-lg leading-[1.9] self-end max-w-lg"
            >
              A multi-strategy framework combining discretionary and systematic approaches across global markets.
            </motion.p>
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
                  <th className="pb-8 text-left align-bottom" />
                  {['Equities', 'Global Macro', 'Commodities'].map((col) => (
                    <th key={col} className="pb-8 text-left align-bottom pr-4">
                      <div
                        className="mb-4"
                        style={{
                          height: '2px',
                          backgroundColor: 'hsl(var(--gold))',
                          width: '1.75rem',
                        }}
                      />
                      <span
                        className="font-body font-semibold text-primary-foreground uppercase"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}
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
                    className="group transition-colors duration-300 hover:bg-primary-foreground/[0.03]"
                    style={{ borderTop: '1px solid hsl(var(--primary-foreground) / 0.08)' }}
                  >
                    <td
                      className="py-6 pr-6 font-body font-medium text-primary-foreground/80 align-top"
                      style={{ fontSize: '0.8rem' }}
                    >
                      {row.label}
                    </td>
                    {[row.equities, row.macro, row.commodities].map((val, j) => (
                      <td
                        key={j}
                        className="py-6 pr-4 font-body font-light text-primary-foreground/40 align-top group-hover:text-primary-foreground/70 transition-colors duration-300"
                        style={{ fontSize: '0.8rem' }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr style={{ borderTop: '1px solid hsl(var(--primary-foreground) / 0.08)' }}>
                  <td colSpan={4} style={{ padding: 0 }} />
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ═══ CLOSING STRIP ═══ */}
      <section ref={closingRef} className="relative overflow-hidden bg-background">
        <div className="container-site py-32 md:py-40 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-light text-foreground leading-[1.15] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Built by students.
                <br />
                <span style={{ color: 'hsl(var(--gold) / 0.7)' }}>Held to an institutional standard.</span>
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-4 lg:col-start-9"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="border-l-2 pl-8" style={{ borderColor: 'hsl(var(--gold))' }}>
                <p className="font-body font-light text-muted-foreground text-base leading-[1.9]">
                  The NUSSIF program exists to close the gap between university finance education and the professional buy-side.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
