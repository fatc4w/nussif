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

function StatBlock({
  value,
  suffix,
  label,
  description,
  delay = 0,
  large = false,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay?: number;
  large?: boolean;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className={`font-display font-light text-foreground leading-none tracking-tight tabular-nums block ${
          large ? 'text-8xl md:text-[10rem] lg:text-[12rem]' : 'text-6xl md:text-7xl lg:text-8xl'
        }`}
        style={{ color: 'hsl(var(--foreground) / 0.15)' }}
      >
        {count}{suffix}
      </span>
      <h3 className="font-display font-medium text-foreground text-xl md:text-2xl mt-4 mb-3">
        {label}
      </h3>
      <p className="font-body font-light text-muted-foreground text-sm leading-[1.8] max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}

function SectionNumber({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-6 mb-16"
    >
      <span
        className="font-body text-sm tracking-wide"
        style={{ color: 'hsl(var(--gold) / 0.5)' }}
      >
        {number}
      </span>
      <div className="w-12 h-px" style={{ background: 'hsl(var(--gold) / 0.3)' }} />
      <span className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutPage() {
  const revealRef = useScrollReveal();
  const cultureRef = useRef<HTMLDivElement>(null);
  const imageBreak1Ref = useRef<HTMLDivElement>(null);
  const imageBreak2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: cultureScroll } = useScroll({
    target: cultureRef,
    offset: ['start end', 'end start'],
  });
  const cultureBgY = useTransform(cultureScroll, [0, 1], ['0%', '15%']);

  const { scrollYProgress: img1Scroll } = useScroll({
    target: imageBreak1Ref,
    offset: ['start end', 'end start'],
  });
  const img1Y = useTransform(img1Scroll, [0, 1], ['-10%', '10%']);

  const { scrollYProgress: img2Scroll } = useScroll({
    target: imageBreak2Ref,
    offset: ['start end', 'end start'],
  });
  const img2Y = useTransform(img2Scroll, [0, 1], ['-10%', '10%']);

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

      {/* ═══ STATS — Brevan Howard asymmetric style ═══ */}
      <section className="bg-background">
        <div className="container-site py-28 md:py-40 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left — big hero stat */}
            <StatBlock
              value={35}
              suffix="+"
              label="Members"
              description="A diverse and driven community of student investors operating across multiple asset classes and strategies."
              large
              delay={0}
            />
            {/* Right — two stacked stats */}
            <div className="flex flex-col justify-between gap-16 lg:gap-20 lg:pt-12">
              <StatBlock
                value={25}
                suffix="+"
                label="Analysts"
                description="Trained through a rigorous pipeline modelled after institutional buy-side programs."
                delay={0.15}
              />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="font-display font-light leading-none tracking-tight block text-6xl md:text-7xl lg:text-8xl"
                  style={{ color: 'hsl(var(--foreground) / 0.15)' }}
                >
                  1<span className="text-3xl md:text-4xl mx-2 opacity-60">in</span>25
                </span>
                <h3 className="font-display font-medium text-foreground text-xl md:text-2xl mt-4 mb-3">
                  Acceptance Rate
                </h3>
                <p className="font-body font-light text-muted-foreground text-sm leading-[1.8] max-w-xs">
                  Selective recruitment ensures only the most committed and capable students join our ranks.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VIDEO ═══ */}
      <VideoModal
        vimeoId="1171285504"
        thumbnailUrl="https://i.vimeocdn.com/video/2130738176-ba696526f900a41a6a9305fe38df112d76e67f15047bd3e1941bbbaba103f600-d_640?region=us"
      />

      {/* ═══ 01 — WHO WE ARE — with image ═══ */}
      <section id="who-we-are" className="bg-background overflow-hidden">
        <div className="container-site pt-32 md:pt-40 lg:pt-48 pb-0">
          <SectionNumber number="01" label="About Us" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — large statement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-display font-light text-foreground leading-[1.15] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Firm Overview
              </h2>
              <p className="mt-10 font-body font-light text-muted-foreground text-base md:text-lg leading-[1.9] max-w-xl">
                NUSSIF was founded to bring real, professional investment opportunities to NUS students passionate about careers in buy-side asset management and hedge funds. Drawing inspiration from leading global practices, we build a platform for active professional growth — through the management of live capital, industry connections, and genuine member ownership.
              </p>
              <Link
                to="/program"
                className="inline-flex items-center gap-3 mt-10 font-body text-sm tracking-wide text-foreground group"
              >
                <span className="group-hover:text-[hsl(var(--gold))] transition-colors duration-300">More Details</span>
                <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-[hsl(var(--gold))] group-hover:bg-[hsl(var(--gold)/0.1)] transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-foreground group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Right — stacked info blocks */}
            <div className="space-y-14 lg:pt-6">
              {[
                {
                  title: "Our Purpose",
                  text: "To build a platform for active professional growth through the management of live capital, industry connections, and genuine member ownership.",
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
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pl-8 border-l-2 border-border hover:border-[hsl(var(--gold))] transition-colors duration-700"
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold))] font-body mb-4">
                    {block.title}
                  </p>
                  <p className="font-body font-light text-foreground/70 text-sm leading-[1.9] group-hover:text-foreground/90 transition-colors duration-500">
                    {block.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width image below — placeholder: replace src with your own image */}
        {/* IMAGE: about-section-1.jpg — a wide shot of your team, campus, or Singapore skyline */}
        <div ref={imageBreak1Ref} className="relative h-[60vh] md:h-[70vh] mt-32 overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: img1Y }}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt="Financial district skyline"
              className="w-full h-[120%] object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-navy-deep/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light italic text-white text-center px-6 max-w-3xl"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              "Forging the next generation of NUS and Finance in Asia."
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══ 02 — ORG STRUCTURE ═══ */}
      <section className="bg-background">
        <div className="container-site py-32 md:py-40 lg:py-48">
          <SectionNumber number="02" label="Structure" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2
              className="font-display font-light text-foreground leading-[1.15] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Organisational Structure
            </h2>
            <p className="mt-6 body-text max-w-2xl text-lg">
              A simple and powerful model, focused on complementary teams specialising in specific asset classes.
            </p>
          </motion.div>
          <OrgChart />
        </div>
      </section>

      {/* ═══ 03 — CULTURE — dark cinematic section ═══ */}
      <section id="culture" ref={cultureRef} className="relative overflow-hidden">
        {/* Background with parallax */}
        <motion.div className="absolute inset-0 bg-primary" style={{ y: cultureBgY }} />
        {/* Subtle vertical lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(255,255,255,0.15) 200px, rgba(255,255,255,0.15) 201px)',
          }}
        />

        <div className="container-site relative py-32 md:py-40 lg:py-48">
          <div className="flex items-center gap-6 mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-sm tracking-wide text-[hsl(var(--gold)/0.5)]"
            >
              03
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-px origin-left"
              style={{ background: 'hsl(var(--gold) / 0.3)' }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-[11px] uppercase tracking-[0.2em] text-primary-foreground/40"
            >
              Our Culture
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-primary-foreground tracking-tight leading-[1.15] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Built on conviction.
            <br />
            <span style={{ color: 'hsl(var(--gold) / 0.6)' }}>Driven by ownership.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-body font-light text-primary-foreground/50 text-base md:text-lg max-w-2xl mb-24 leading-[1.8]"
          >
            We push boundaries through diverse perspectives and bold ambition — driving learning, leadership, and growth unique to NUS.
          </motion.p>

          {/* Values — 2x2 grid with large numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-foreground/[0.06]">
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="bg-primary p-10 md:p-14 lg:p-16 group cursor-default transition-colors duration-700 hover:bg-primary-foreground/[0.04]"
              >
                {/* Large faded number */}
                <span
                  className="font-display font-light text-6xl md:text-7xl lg:text-8xl leading-none block mb-8"
                  style={{ color: 'hsl(var(--primary-foreground) / 0.06)' }}
                >
                  {v.num}
                </span>
                <h3 className="font-display font-medium text-primary-foreground text-2xl lg:text-3xl mb-4 tracking-wide transition-colors duration-500 group-hover:text-white">
                  {v.title}
                </h3>
                {/* Reveal line */}
                <div className="w-0 h-px bg-[hsl(var(--gold)/0.4)] mb-6 transition-all duration-700 group-hover:w-16" />
                <p className="text-primary-foreground/40 font-body font-light text-sm md:text-base leading-[1.9] transition-colors duration-500 group-hover:text-primary-foreground/70 max-w-sm">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FULL-WIDTH IMAGE BREAK 2 ═══ */}
      {/* IMAGE: about-section-2.jpg — eg. your members in action, campus at night, or trading floor */}
      <div ref={imageBreak2Ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: img2Y }}>
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
            alt="Professional environment"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-navy-deep/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light italic text-white/90 text-center px-6 max-w-3xl"
            style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.4rem)' }}
          >
            "Built by students. Held to an institutional standard."
          </motion.p>
        </div>
      </div>

      {/* ═══ 04 — ACHIEVEMENTS ═══ */}
      <section id="achievements" className="bg-background">
        <div className="container-site py-32 md:py-40 lg:py-48">
          <SectionNumber number="04" label="Track Record" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-foreground leading-[1.15] tracking-tight mb-20"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Recognised on a Regional
            <br />& Global Stage
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-0">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative border border-border/40 px-10 py-14 group cursor-default overflow-hidden -mt-px -ml-px"
              >
                {/* Top gold line that reveals on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[hsl(var(--gold))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
                {/* Large faded index */}
                <span className="font-display text-5xl font-light leading-none block mb-6" style={{ color: 'hsl(var(--foreground) / 0.06)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold))] font-body mb-4">
                  {a.result}
                </p>
                <p className="font-display font-light text-foreground text-lg md:text-xl leading-snug group-hover:text-foreground transition-colors duration-500">
                  {a.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 05 — SENIOR ADVISORS ═══ */}
      <section className="bg-muted/30">
        <div className="container-site py-32 md:py-40 lg:py-48">
          <SectionNumber number="05" label="Advisors" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-foreground leading-[1.15] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Senior Advisors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="body-text max-w-2xl text-lg mb-24"
          >
            Guided by industry practitioners with decades of experience in global finance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
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
                <div className="w-0 h-px bg-[hsl(var(--gold)/0.4)] mb-10 transition-all duration-700 group-hover:w-16" />
                <h3
                  className="font-display font-medium text-foreground mb-3 transition-colors duration-500 group-hover:text-primary"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                >
                  {advisor.name}
                </h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[hsl(var(--gold))] font-body mt-2 mb-8">
                  {advisor.role}
                </p>
                <p className="body-text text-foreground/65 leading-[1.9] text-base">
                  {advisor.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section id="partners" className="bg-background border-t border-border/30">
        <div className="container-site py-32 md:py-40">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-foreground text-center tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Our Partners
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-[hsl(var(--gold)/0.4)] mx-auto mb-24 origin-center"
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
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-700 hover:scale-110"
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
