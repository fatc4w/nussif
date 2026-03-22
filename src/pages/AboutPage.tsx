import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import VideoModal from "@/components/VideoModal";
import OrgChart from "@/components/OrgChart";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-singapore.jpg";

import citadelLogo from "@/assets/partners/citadel.png";
import citadelSecLogo from "@/assets/partners/citadel-securities.png";
import point72Logo from "@/assets/partners/point72.png";
import massiveLogo from "@/assets/partners/massive.png";
import millenniumLogo from "@/assets/partners/millennium.png";

const values = [
  {
    num: "01",
    title: "Debate",
    desc: "We want to hear everyone's viewpoints, and we privilege the rigour of contestation of ideas.",
  },
  {
    num: "02",
    title: "Evolve",
    desc: "We believe strongly in anchoring to long-term macro rules, yet are always reminded to interrogate our own intersubjectivity and seek new norms.",
  },
  {
    num: "03",
    title: "Efficiency",
    desc: "We operate in lean and dynamic teams, focusing on agility within comprehensive frameworks to motivate active decision-making.",
  },
  {
    num: "04",
    title: "Ownership",
    desc: "Each pod is lean and takes responsibility for their own returns, keeping every member — down to the analysts — highly involved and committed.",
  },
];

const achievements = [
  { name: "UBS Pan Asia Finance Challenge", result: "Champions" },
  {
    name: "Point72 Oxford University Equity Research Competition",
    result: "Champions",
  },
  { name: "Point72 NTU Stock Pitch Competition", result: "Champion" },
  { name: "CFA Research Challenge (Singapore)", result: "Champions" },
  { name: "Temasek-NUS Stock Pitch Competition", result: "Champion" },
  {
    name: "JPMorgan Asia Asset & Wealth Management Challenge (Singapore)",
    result: "Champions",
  },
];

const partners = [
  { name: "Citadel", logo: citadelLogo, url: "https://www.citadel.com" },
  {
    name: "Citadel Securities",
    logo: citadelSecLogo,
    url: "https://www.citadelsecurities.com",
  },
  { name: "Point72", logo: point72Logo, url: "https://www.point72.com" },
  { name: "Massive", logo: massiveLogo, url: "https://www.massive.com" },
  { name: "Millennium", logo: millenniumLogo, url: "https://www.mlp.com" },
];

function StatCounter({
  value,
  suffix,
  label,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-8 py-16 fade-up"
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="font-display font-light text-primary-foreground text-7xl md:text-8xl leading-none tracking-tight tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="mt-5 text-[10px] tracking-[0.25em] uppercase text-primary-foreground/45 font-body">
        {label}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <HeroSection
        image={heroImage}
        title="NUSSIF"
        subtitle="Asia's premier buy-side structured, multi-strategy student investment fund"
        fullHeight
      >
        <div className="flex items-center justify-center gap-8 mt-10">
          <Link to="/program" className="gold-link">
            → Our Program
          </Link>
          <Link to="/people" className="gold-link">
            → Our People
          </Link>
        </div>
      </HeroSection>

      {/* Stats — dark navy strip */}
      <section className="bg-primary">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
            <StatCounter value={35} suffix="+" label="Members" delay={0} />
            <StatCounter value={25} suffix="+" label="Analysts" delay={0.1} />
            {/* 1 in 25 — static */}
            <div
              className="flex flex-col items-center text-center px-8 py-16 fade-up"
              style={{ transitionDelay: "0.2s" }}
            >
              <span className="font-display font-light text-primary-foreground leading-none tracking-tight">
                <span className="text-7xl md:text-8xl">1</span>
                <span className="text-3xl md:text-4xl mx-3 opacity-40">in</span>
                <span className="text-7xl md:text-8xl">25</span>
              </span>
              <span className="mt-5 text-[10px] tracking-[0.25em] uppercase text-primary-foreground/45 font-body">
                Acceptance Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoModal
        vimeoId="1171285504"
        thumbnailUrl="https://i.vimeocdn.com/video/2130738176-ba696526f900a41a6a9305fe38df112d76e67f15047bd3e1941bbbaba103f600-d_640?region=us"
      />

      {/* Who We Are */}
      <section id="who-we-are" className="section-padding bg-background">
        <div className="container-site">
          <div className="w-12 h-px bg-gold mb-16 fade-up" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-2 fade-up">
              <p className="font-display font-light italic text-foreground text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.25] tracking-wide">
                Forging the next generation of NUS and Finance in Asia.
              </p>
            </div>
            <div
              className="lg:col-span-3 space-y-14 fade-up"
              style={{ transitionDelay: "0.1s" }}
            >
              {[
                {
                  title: "Background",
                  text: "NUSSIF was founded to bring real, professional investment opportunities to NUS students passionate about careers in buy-side asset management and hedge funds.",
                },
                {
                  title: "Our Purpose",
                  text: "Drawing inspiration from leading global practices and internship experiences across hedge funds and trading desks, we are determined to build a platform for active professional growth — through the management of live capital, industry connections, and genuine member ownership.",
                },
                {
                  title: "Our Vision",
                  text: "To become an institution where our members are bold, future-ready leaders in industry and government, building a network of illustrious alumni who actively give back to the NUS community.",
                },
              ].map((block) => (
                <div key={block.title} className="group">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-body mb-4 transition-opacity duration-300 group-hover:opacity-100">
                    {block.title}
                  </p>
                  <p className="body-text text-foreground/75 leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Org Structure */}
      <section className="section-padding bg-muted/50">
        <div className="container-site">
          <h2 className="heading-section mb-3 fade-up">
            Organisational Structure
          </h2>
          <p
            className="body-text max-w-2xl mb-16 fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            A simple and powerful model, focused on complementary teams
            specialising in specific asset classes.
          </p>
          <OrgChart />
        </div>
      </section>

      {/* Culture — dark navy */}
      <section id="culture" className="section-padding bg-primary">
        <div className="container-site">
          <div className="mb-20 fade-up">
            <div className="w-12 h-px bg-gold mb-10" />
            <h2 className="font-display font-light text-primary-foreground text-4xl md:text-5xl lg:text-[3.25rem] tracking-wide leading-tight">
              Our Culture
            </h2>
            <p className="mt-5 body-text text-primary-foreground/55 max-w-2xl">
              We push boundaries through diverse perspectives and bold ambition
              — driving learning, leadership, and growth unique to NUS.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/10">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="px-8 py-10 first:pl-0 fade-up group cursor-default transition-colors duration-500 hover:bg-primary-foreground/[0.03]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold/70 font-body transition-colors duration-300 group-hover:text-gold">
                  {v.num}
                </span>
                <h3 className="font-display font-light text-primary-foreground text-2xl mt-8 mb-5 tracking-wide transition-colors duration-300 group-hover:text-white">
                  {v.title}
                </h3>
                <p className="text-primary-foreground/50 font-body text-sm leading-relaxed transition-colors duration-300 group-hover:text-primary-foreground/75">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section-padding bg-background">
        <div className="container-site">
          <div className="mb-16 fade-up">
            <div className="w-12 h-px bg-gold mb-10" />
            <h2 className="heading-section">
              Recognised on a Regional & Global Stage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="relative bg-background px-10 py-10 fade-up group cursor-default overflow-hidden transition-colors duration-300 hover:bg-muted/30"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Gold top border reveal on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-body mb-5">
                  {a.result}
                </p>
                <p className="font-display font-light text-foreground text-xl md:text-2xl leading-snug transition-colors duration-300 group-hover:text-foreground">
                  {a.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Advisors */}
      <section className="section-padding bg-muted/40">
        <div className="container-site">
          <div className="w-12 h-px bg-gold mb-10 fade-up" />
          <h2 className="heading-section mb-3 fade-up">Senior Advisors</h2>
          <p
            className="body-text max-w-2xl mb-16 fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            Guided by industry practitioners with decades of experience in
            global finance.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 fade-up"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="group cursor-default">
              <h3 className="font-display font-medium text-foreground text-2xl mb-1 transition-colors duration-300 group-hover:text-primary">
                Adjunct Professor James Cheng
              </h3>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-body mt-2 mb-5">
                Senior Advisor
              </p>
              <p className="body-text text-sm text-foreground/70 leading-relaxed">
                Previously CEO & Senior Advisor to Morgan Stanley Investment
                Management, and CIO at Invesco Asia.
              </p>
            </div>
            <div className="group cursor-default">
              <h3 className="font-display font-medium text-foreground text-2xl mb-1 transition-colors duration-300 group-hover:text-primary">
                Kwan Ng
              </h3>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-body mt-2 mb-5">
                Senior Advisor
              </p>
              <p className="body-text text-sm text-foreground/70 leading-relaxed">
                Currently Portfolio Manager at ExodusPoint. Formerly Senior
                Portfolio Manager at BlueCrest Capital Management, Head of FX
                Trading at Barclays, and Trader at Millennium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners — full opacity, subtle scale on hover */}
      <section
        id="partners"
        className="section-padding bg-background border-t border-border"
      >
        <div className="container-site">
          <h2 className="heading-section text-center mb-20 fade-up">
            Our Partners
          </h2>
          <div
            className="flex flex-wrap items-center justify-center gap-16 md:gap-24 fade-up"
            style={{ transitionDelay: "0.1s" }}
          >
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
