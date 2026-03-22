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
          <div className="border-t border-border pt-20 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 fade-up">
                <span
                  className="block font-display font-light leading-none mb-6 select-none"
                  style={{ fontSize: '4rem', color: 'hsl(var(--gold))', lineHeight: 1, opacity: 0.3 }}
                >
                  "
                </span>
                <p
                  className="font-display font-light text-foreground leading-relaxed"
                  style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)' }}
                >
                  We strive to provide an institutional-grade experience that empowers our members to leverage industry best practices — making decisions with clear ownership and accountability.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 lg:pt-4 fade-up" style={{ transitionDelay: '0.15s' }}>
                <div className="border-l-2 pl-8" style={{ borderColor: 'hsl(var(--gold))' }}>
                  <p className="body-text leading-relaxed">
                    Backed by senior advisors with cumulatively 64 years of experience in global finance, the NUSSIF program is structured to ensure learning is held to the highest standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analyst Pipeline */}
      <section id="analyst-pipeline" className="bg-muted/30">
        <div className="container-site">
          <div className="border-t border-border pt-20 pb-20">
            {/* Header */}
            <div className="mb-16 fade-up">
              <span className="eyebrow block mb-4" style={{ color: 'hsl(var(--gold))' }}>Structure</span>
              <h2 className="heading-section mb-3">The Analyst Pipeline</h2>
              <p className="body-text max-w-xl">
                From entry to the investing teams — a structured pathway of growth.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="relative ml-4 md:ml-8">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-0 bottom-0"
                style={{ width: '1px', backgroundColor: 'hsl(var(--gold) / 0.4)' }}
              />

              {stages.map((stage, i) => (
                <div
                  key={i}
                  className="relative pl-10 md:pl-14 pb-12 last:pb-0 fade-up"
                  style={{ transitionDelay: `${i * 0.1}s` }}
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

                  <div className="bg-background border border-border p-8 md:p-10">
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
                      <p className="body-text leading-relaxed">{stage.body}</p>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Mandate */}
      <section id="mandate" className="bg-background">
        <div className="container-site">
          <div className="border-t border-border pt-20 pb-24">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-5 fade-up">
                <span className="eyebrow block mb-4" style={{ color: 'hsl(var(--gold))' }}>Mandate</span>
                <h2 className="heading-section">Investment Mandate</h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end fade-up" style={{ transitionDelay: '0.1s' }}>
                <p className="body-text">
                  A multi-strategy framework combining discretionary and systematic approaches across global markets.
                </p>
              </div>
            </div>

            {/* Table — no overflow scroll, table-fixed fills width */}
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
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
                      className="group"
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
                          className="py-5 pr-4 font-body text-muted-foreground align-top group-hover:text-foreground transition-colors duration-150"
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
            </div>
          </div>
        </div>
      </section>

      {/* Closing strip */}
      <section className="bg-primary">
        <div className="container-site py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-7 fade-up">
              <h2
                className="font-display font-light text-primary-foreground leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
              >
                Built by students. Held to an institutional standard.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 fade-up" style={{ transitionDelay: '0.1s' }}>
              <p className="body-text" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>
                The NUSSIF program exists to close the gap between university finance education and the professional buy-side.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
