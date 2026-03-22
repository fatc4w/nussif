import HeroSection from '@/components/HeroSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroImage from '@/assets/hero-trading.jpg';

const stages = [
  {
    number: '01',
    eyebrow: 'Recruitment',
    heading: 'Execution Track — Trainee Analyst',
    body: 'Analysts join NUSSIF through a selective recruitment process into the Execution Track as a Trainee Analyst. Selection is based on intellectual curiosity, financial acumen, and the drive to operate in a professional investment environment.',
  },
  {
    number: '02',
    eyebrow: 'Semester One',
    heading: 'Trading Simulation Programme',
    body: 'All incoming Trainee Analysts participate in the Trading Simulation Programme — a structured simulation environment designed to develop trading intuition, decision-making under uncertainty, and investment thesis construction. Simultaneously, each Trainee Analyst selects two Portfolio Managers to shadow on a weekly basis. These sessions are where analysts present their market intuition and analysis directly to the hosting PMs. Position management decisions during these sessions are left to the discretion of the Portfolio Manager.',
  },
  {
    number: '03',
    eyebrow: 'Ongoing',
    heading: 'Live Project Allocation',
    body: "Throughout the semester, each Trainee Analyst is assigned distinct tasks, research projects, and analytical responsibilities. These are allocated by the Portfolio Managers they shadow, ensuring direct exposure to live investment decision-making processes across the fund's asset classes.",
  },
  {
    number: '04',
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
      />

      {/* Philosophy */}
      <section id="philosophy" className="bg-background">
        <div className="container-site">
          <div className="border-t border-border pt-20 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 fade-up">
                <span
                  className="block font-display font-light leading-none mb-8 select-none"
                  style={{ fontSize: '5rem', color: 'hsl(var(--gold))', lineHeight: 1, opacity: 0.25 }}
                >
                  "
                </span>
                <p
                  className="font-display font-light text-foreground leading-relaxed"
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
                >
                  We strive to provide an institutional-grade experience that empowers our members to leverage industry best practices — making decisions with clear ownership and accountability.
                </p>
              </div>

              <div className="lg:col-span-5 lg:pt-4 fade-up" style={{ transitionDelay: '0.15s' }}>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-5 fade-up">
                <span className="eyebrow text-gold block mb-4">Structure</span>
                <h2 className="heading-section">The Analyst Pipeline</h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end fade-up" style={{ transitionDelay: '0.1s' }}>
                <p className="body-text">
                  From entry to the investing teams — a structured pathway of growth designed around live markets and direct practitioner mentorship.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {stages.map((stage, i) => (
                <div
                  key={i}
                  className="bg-background p-10 md:p-12 fade-up"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className="font-display font-light text-foreground/10 select-none"
                      style={{ fontSize: '3.5rem', lineHeight: 1 }}
                    >
                      {stage.number}
                    </span>
                    <span className="eyebrow mt-2" style={{ color: 'hsl(var(--gold))' }}>
                      {stage.eyebrow}
                    </span>
                  </div>

                  <div
                    className="w-8 mb-6"
                    style={{ height: '1px', backgroundColor: 'hsl(var(--gold))' }}
                  />

                  <h3 className="font-display font-medium text-foreground text-xl mb-5">
                    {stage.heading}
                  </h3>

                  {stage.body && (
                    <p className="body-text leading-relaxed">{stage.body}</p>
                  )}

                  {stage.callout && (
                    <p className="font-display italic text-foreground text-lg leading-relaxed">
                      {stage.callout}
                    </p>
                  )}
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-5 fade-up">
                <span className="eyebrow text-gold block mb-4">Mandate</span>
                <h2 className="heading-section">Investment Mandate</h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-end fade-up" style={{ transitionDelay: '0.1s' }}>
                <p className="body-text">
                  A multi-strategy framework combining discretionary and systematic approaches across global markets.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto fade-up" style={{ transitionDelay: '0.2s' }}>
              <table className="w-full min-w-[640px]" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th className="pb-5 text-left align-bottom" style={{ width: '28%' }} />
                    {['Equities', 'Global Macro', 'Commodities'].map((col) => (
                      <th key={col} className="pb-5 text-left align-bottom" style={{ width: '24%' }}>
                        <div
                          className="mb-3"
                          style={{ height: '2px', backgroundColor: 'hsl(var(--gold))', width: '2rem' }}
                        />
                        <span
                          className="font-body font-semibold text-foreground tracking-widest uppercase"
                          style={{ fontSize: '0.65rem', letterSpacing: '0.12em' }}
                        >
                          {col}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mandateData.map((row, i) => (
                    <tr
                      key={row.label}
                      style={{ borderTop: '1px solid hsl(var(--border))', transition: 'background 0.15s' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLTableRowElement).style.background = 'hsl(var(--muted) / 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLTableRowElement).style.background = 'transparent';
                      }}
                    >
                      <td
                        className="py-5 pr-8 font-body font-medium text-foreground"
                        style={{ fontSize: '0.8rem' }}
                      >
                        {row.label}
                      </td>
                      {[row.equities, row.macro, row.commodities].map((val, j) => (
                        <td
                          key={j}
                          className="py-5 pr-6 font-body text-muted-foreground"
                          style={{ fontSize: '0.8rem' }}
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

      {/* Closing CTA strip */}
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
              <p className="body-text text-primary-foreground/60">
                The NUSSIF program exists to close the gap between university finance education and the professional buy-side.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
