import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
  { name: "Point72 Oxford University Equity Research Competition", result: "Champions" },
  { name: "Point72 NTU Stock Pitch Competition", result: "Champion" },
  { name: "CFA Research Challenge (Singapore)", result: "Champions" },
  { name: "Temasek-NUS Stock Pitch Competition", result: "Champion" },
  { name: "JPMorgan Asia Asset & Wealth Management Challenge (Singapore)", result: "Champions" },
];

const partners = [
  { name: "Citadel", logo: citadelLogo, url: "https://www.citadel.com" },
  { name: "Citadel Securities", logo: citadelSecLogo, url: "https://www.citadelsecurities.com" },
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center px-8 py-16 md:py-20"
    >
      <span className="font-display font-light text-primary-foreground text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight tabular-nums">
        {count}{suffix}
      </span>
      <span className="mt-6 text-[10px] tracking-[0.25em] uppercase text-primary-foreground/40 font-body">
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutPage() {
  const revealRef = useScrollReveal();
  const cultureRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: cultureScroll } = useScroll({
    target: cultureRef,
    offset: ['start end', 'end start'],
  });
  const cultureBgY = useTransform(cultureScroll, [0, 1], ['0%', '10%']);

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <HeroSection
        image={heroImage}
        title="NUSSIF"
        subtitle="Asia's premier buy-side structured, multi-strategy student investment fund"
        fullHeight
      >
        <div className="flex items-center justify-center gap-10 mt-12">
          <Link
            to="/program"
            className="font-body text-sm tracking-[0.1em] uppercase text-white/70 hover:text-[hsl(var(--gold))] transition-all duration-500 relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-[hsl(var(--gold)/0.5)] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
          >
            Our Program
          </Link>
          <span className="w-px h-4 bg-white/20" />
          <Link
            to="/people"
            className="font-body text-sm tracking-[0.1em] uppercase text-white/70 hover:text-[hsl(var(--gold))] transition-all duration-500 relative after:content-[''] after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-[hsl(var(--gold)/0.5)] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
          >
            Our People
          </Link>
        </div>
      </HeroSection>

      {/* Stats — dark navy strip */}
      <section className="bg-primary relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container-site relative">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10">
            <StatCounter value={35} suffix="+" label="Members" delay={0} />
            <StatCounter value={25} suffix="+" label="Analysts" delay={0.15} />
            {/* 1 in 25 — static */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center px-8 py-16 md:py-20"
            >
              <span className="font-display font-light text-primary-foreground leading-none tracking-tight">
                <span className="text-7xl md:text-8xl lg:text-9xl">1</span>
                <span className="text-3xl md:text-4xl mx-3 opacity-30">in</span>
                <span className="text-7xl md:text-8xl lg:text-9xl">25</span>
              </span>
              <span className="mt-6 text-[10px] tracking-[0.25em] uppercase text-primary-foreground/40 font-body">
                Acceptance Rate
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video — cinematic full-width */}
      <VideoModal
        vimeoId="1171285504"
        thumbnailUrl="https://i.vimeocdn.com/video/2130738176-ba696526f900a41a6a9305fe38df112d76e67f15047bd3e1941bbbaba103f600-d_640?region=us"
      />

      {/* Who We Are — Split layout with parallax quote */}
      <section id="who-we-are" className="section-padding bg-background overflow-hidden">
        <div className="container-site">
          {/* Gold line reveal */}
          <div className="w-16 h-px bg-[hsl(var(--gold))] mb-20 fade-up" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left column — large quote */}
            <div className="lg:col-span-5 fade-up">
              <motion.p
                className="font-display font-light italic text-foreground leading-[1.3] tracking-wide"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)' }}
              >
                "Forging the next generation of NUS and Finance in Asia."
              </motion.p>
              {/* Decorative element */}
              <div className="mt-10 w-8 h-px bg-[hsl(var(--gold)/0.5)]" />
            </div>

            {/* Right column — content blocks with staggered reveal */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-16">
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
              ].map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  {/* Gold dot */}
                  <div className="absolute -left-6 top-1 w-2 h-2 rounded-full bg-[hsl(var(--gold)/0.4)] group-hover:bg-[hsl(var(--gold))] transition-colors duration-500 hidden lg:block" />
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold))] font-body mb-4">
                    {block.title}
                  </p>
                  <p className="body-text text-foreground/70 leading-[1.8] group-hover:text-foreground/90 transition-colors duration-500">
                    {block.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break — placeholder */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Financial district skyline"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-navy-deep/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light italic text-white/90 text-center px-6 max-w-3xl"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)' }}
          >
            "Built by students. Held to an institutional standard."
          </motion.p>
        </div>
      </section>

      {/* Org Structure */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-px bg-[hsl(var(--gold))] mb-10" />
            <h2 className="heading-section mb-4">Organisational Structure</h2>
            <p className="body-text max-w-2xl mb-20">
              A simple and powerful model, focused on complementary teams specialising in specific asset classes.
            </p>
          </motion.div>
          <OrgChart />
        </div>
      </section>

      {/* Culture — dark navy with parallax */}
      <section id="culture" ref={cultureRef} className="relative section-padding overflow-hidden">
        {/* Dark background with subtle parallax */}
        <motion.div
          className="absolute inset-0 bg-primary"
          style={{ y: cultureBgY }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(255,255,255,0.1) 120px, rgba(255,255,255,0.1) 121px)', backgroundSize: '121px 100%' }} />

        <div className="container-site relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <div className="w-16 h-px bg-[hsl(var(--gold))] mb-10" />
            <h2
              className="font-display font-light text-primary-foreground tracking-wide leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Our Culture
            </h2>
            <p className="mt-6 body-text text-primary-foreground/50 max-w-2xl">
              We push boundaries through diverse perspectives and bold ambition — driving learning, leadership, and growth unique to NUS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/[0.06]">
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-primary px-8 py-12 group cursor-default transition-colors duration-700 hover:bg-primary-foreground/[0.04]"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold)/0.5)] font-body transition-colors duration-500 group-hover:text-[hsl(var(--gold))]">
                  {v.num}
                </span>
                <h3 className="font-display font-light text-primary-foreground text-2xl lg:text-3xl mt-8 mb-6 tracking-wide transition-colors duration-500 group-hover:text-white">
                  {v.title}
                </h3>
                {/* Reveal line */}
                <div className="w-0 h-px bg-[hsl(var(--gold)/0.4)] mb-6 transition-all duration-700 group-hover:w-10" />
                <p className="text-primary-foreground/40 font-body text-sm leading-[1.8] transition-colors duration-500 group-hover:text-primary-foreground/70">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section-padding bg-background">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <div className="w-16 h-px bg-[hsl(var(--gold))] mb-10" />
            <h2 className="heading-section">Recognised on a Regional &amp; Global Stage</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-background px-10 py-12 group cursor-default overflow-hidden"
              >
                {/* Top gold line that reveals on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[hsl(var(--gold))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                <p className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold))] font-body mb-5">
                  {a.result}
                </p>
                <p className="font-display font-light text-foreground text-xl md:text-2xl leading-snug transition-colors duration-500 group-hover:text-foreground">
                  {a.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Advisors — clean, editorial layout */}
      <section className="section-padding bg-muted/30">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-16 h-px bg-[hsl(var(--gold))] mb-10" />
            <h2 className="heading-section mb-4">Senior Advisors</h2>
            <p className="body-text max-w-2xl mb-20">
              Guided by industry practitioners with decades of experience in global finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {[
              {
                name: "Adjunct Professor James Cheng",
                role: "Senior Advisor",
                bio: "Previously CEO & Senior Advisor to Morgan Stanley Investment Management, and CIO at Invesco Asia.",
              },
              {
                name: "Kwan Ng",
                role: "Senior Advisor",
                bio: "Currently Portfolio Manager at ExodusPoint. Formerly Senior Portfolio Manager at BlueCrest Capital Management, Head of FX Trading at Barclays, and Trader at Millennium.",
              },
            ].map((advisor, i) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-default"
              >
                <div className="w-0 h-px bg-[hsl(var(--gold)/0.4)] mb-8 transition-all duration-700 group-hover:w-12" />
                <h3 className="font-display font-medium text-foreground text-2xl mb-2 transition-colors duration-500 group-hover:text-primary">
                  {advisor.name}
                </h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold))] font-body mt-2 mb-6">
                  {advisor.role}
                </p>
                <p className="body-text text-sm text-foreground/65 leading-[1.8]">
                  {advisor.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners — refined */}
      <section id="partners" className="section-padding bg-background border-t border-border/50">
        <div className="container-site">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-section text-center mb-6"
          >
            Our Partners
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-[hsl(var(--gold)/0.5)] mx-auto mb-20 origin-center"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-16 md:gap-24"
          >
            {partners.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-110"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
