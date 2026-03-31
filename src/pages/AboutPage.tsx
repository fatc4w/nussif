import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
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
  description,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  description?: string;
  delay?: number;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col px-8 py-16 md:py-20"
    >
      <span
        className="font-display font-light leading-none tracking-tight tabular-nums"
        style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: 'hsl(var(--gold))' }}
      >
        {count}{suffix}
      </span>
      <span className="mt-6 font-display font-medium text-white text-xl md:text-2xl tracking-wide">
        {label}
      </span>
      {description && (
        <span className="mt-3 font-body text-sm text-white/50 leading-relaxed max-w-xs">
          {description}
        </span>
      )}
    </motion.div>
  );
}

export default function AboutPage() {
  const revealRef = useScrollReveal();
  const cultureRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // Scroll progress bar
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const { scrollYProgress: cultureScroll } = useScroll({
    target: cultureRef,
    offset: ['start end', 'end start'],
  });
  const cultureBgY = useTransform(cultureScroll, [0, 1], ['0%', '10%']);

  return (
    <div ref={(el) => { revealRef.current = el; (pageRef as any).current = el; }}>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{ scaleX, backgroundColor: 'hsl(var(--gold))' }}
      />

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
      <section className="relative overflow-hidden" style={{ backgroundColor: 'hsl(218, 55%, 12%)' }}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 200px, rgba(255,255,255,0.15) 200px, rgba(255,255,255,0.15) 201px)',
          }}
        />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left — large stat */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <StatCounter
                value={35}
                suffix="+"
                label="Members"
                description="A diverse and driven community of student investors operating across multiple asset classes and strategies."
                delay={0}
              />
            </div>
            {/* Right — two smaller stats stacked */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                <div className="border-b sm:border-b-0 sm:border-r border-white/[0.06]">
                  <StatCounter
                    value={25}
                    suffix="+"
                    label="Analysts"
                    description="Trained through a rigorous pipeline modelled after institutional buy-side programs."
                    delay={0.15}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col px-8 py-16 md:py-20"
                >
                  <span className="font-display font-light leading-none tracking-tight">
                    <span style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: 'hsl(var(--gold))' }}>1</span>
                    <span className="text-2xl md:text-3xl mx-3 text-white/30">in</span>
                    <span style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: 'hsl(var(--gold))' }}>25</span>
                  </span>
                  <span className="mt-6 font-display font-medium text-white text-xl md:text-2xl tracking-wide">
                    Acceptance Rate
                  </span>
                  <span className="mt-3 font-body text-sm text-white/50 leading-relaxed max-w-xs">
                    Selective recruitment ensures only the most committed and capable students join our ranks.
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video — cinematic full-width */}
      <VideoModal
        vimeoId="1171285504"
        thumbnailUrl="https://i.vimeocdn.com/video/2130738176-ba696526f900a41a6a9305fe38df112d76e67f15047bd3e1941bbbaba103f600-d_640?region=us"
      />

      {/* Who We Are — Split layout */}
      <section id="who-we-are" className="section-padding bg-background overflow-hidden">
        <div className="container-site">
          {/* Animated gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px mb-20 origin-left"
            style={{ backgroundColor: 'hsl(var(--gold))' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left column — large quote */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="font-display font-light italic text-foreground leading-[1.3] tracking-wide"
                style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)' }}
              >
                "Forging the next generation of{' '}
                <span style={{ color: 'hsl(var(--gold))' }}>NUS</span> and{' '}
                <span style={{ color: 'hsl(var(--gold))' }}>Finance</span> in Asia."
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 w-8 h-px origin-left"
                style={{ backgroundColor: 'hsl(var(--gold) / 0.5)' }}
              />
            </motion.div>

            {/* Right column — content blocks */}
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
                  transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative pl-8 border-l-2 border-transparent hover:border-[hsl(var(--gold)/0.4)] transition-all duration-700"
                >
                  <p className="text-[10px] tracking-[0.25em] uppercase font-body mb-4" style={{ color: 'hsl(var(--gold))' }}>
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

      {/* Full-width image break */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Financial district skyline"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[hsl(220,55%,8%,0.45)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-px mb-10 origin-left"
              style={{ backgroundColor: 'hsl(var(--gold))' }}
            />
            <h2 className="heading-section mb-4">Organisational Structure</h2>
            <p className="body-text max-w-2xl mb-20">
              A simple and powerful model, focused on complementary teams specialising in specific asset classes.
            </p>
          </motion.div>
          <OrgChart />
        </div>
      </section>

      {/* Culture — dark navy with glass cards */}
      <section id="culture" ref={cultureRef} className="relative overflow-hidden" style={{ padding: 'clamp(6rem, 10vw, 10rem) 0' }}>
        {/* Dark background with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: cultureBgY, backgroundColor: 'hsl(218, 55%, 12%)' }}
        />
        {/* Subtle vertical line pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 150px, rgba(255,255,255,0.12) 150px, rgba(255,255,255,0.12) 151px)',
          }}
        />

        <div className="container-site relative">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-px mb-10 origin-left"
                style={{ backgroundColor: 'hsl(var(--gold))' }}
              />
              <h2
                className="font-display font-light text-white tracking-wide leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Driven by <span style={{ color: 'hsl(var(--gold))' }}>Ownership</span>.
              </h2>
            </motion.div>
            <motion.div
              className="lg:col-span-5 lg:col-start-8 flex items-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-base text-white/50 leading-relaxed">
                We push boundaries through diverse perspectives and bold ambition — driving learning, leadership, and growth unique to NUS.
              </p>
            </motion.div>
          </div>

          {/* Culture cards — glass grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px]">
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-default overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px hsl(var(--gold) / 0.2)' }}
                />

                {/* Large faded gold number watermark */}
                <span
                  className="absolute top-6 right-8 font-display font-light select-none transition-all duration-700 group-hover:opacity-[0.12] group-hover:scale-110"
                  style={{
                    fontSize: 'clamp(5rem, 8vw, 8rem)',
                    color: 'hsl(var(--gold))',
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  {v.num}
                </span>

                <div className="relative px-10 py-14 md:py-16">
                  {/* Eyebrow */}
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-body transition-colors duration-500"
                    style={{ color: 'hsl(var(--gold) / 0.5)' }}
                  >
                    {v.num}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display font-medium text-white text-2xl lg:text-3xl mt-6 mb-4 tracking-wide transition-colors duration-500 group-hover:text-white"
                  >
                    {v.title}
                  </h3>

                  {/* Animated gold underline */}
                  <motion.div
                    className="h-px mb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      backgroundColor: 'hsl(var(--gold) / 0.5)',
                      width: '0%',
                    }}
                  />
                  <div className="w-0 h-px mb-6 transition-all duration-700 group-hover:w-12" style={{ backgroundColor: 'hsl(var(--gold) / 0.5)' }} />

                  {/* Description */}
                  <p className="font-body text-sm text-white/40 leading-[1.8] transition-colors duration-500 group-hover:text-white/65 max-w-sm">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second full-width image break */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
            alt="Professional environment"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[hsl(220,55%,8%,0.5)]" />
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
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-px mb-10 origin-left"
              style={{ backgroundColor: 'hsl(var(--gold))' }}
            />
            <h2 className="heading-section">Recognised on a Regional &amp; Global Stage</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border/40">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-background px-10 py-14 group cursor-default overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Large faded index number */}
                <span
                  className="absolute top-4 right-6 font-display font-light select-none transition-all duration-700 group-hover:opacity-[0.1]"
                  style={{
                    fontSize: '5rem',
                    color: 'hsl(var(--gold))',
                    opacity: 0.05,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Top gold line that reveals on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left"
                  style={{ backgroundColor: 'hsl(var(--gold))' }}
                />
                <p
                  className="text-[10px] tracking-[0.25em] uppercase font-body mb-5"
                  style={{ color: 'hsl(var(--gold))' }}
                >
                  {a.result}
                </p>
                <p className="font-display font-light text-foreground text-xl md:text-2xl leading-snug">
                  {a.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Advisors */}
      <section className="section-padding bg-muted/30">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-px mb-10 origin-left"
              style={{ backgroundColor: 'hsl(var(--gold))' }}
            />
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-default"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-0 h-px mb-8 origin-left group-hover:w-12 transition-all duration-700"
                  style={{ backgroundColor: 'hsl(var(--gold) / 0.4)', width: '0px' }}
                />
                <div className="w-0 h-px mb-8 transition-all duration-700 group-hover:w-12" style={{ backgroundColor: 'hsl(var(--gold) / 0.4)' }} />
                <h3 className="font-display font-medium text-foreground text-2xl mb-2 transition-colors duration-500 group-hover:text-primary">
                  {advisor.name}
                </h3>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase font-body mt-2 mb-6"
                  style={{ color: 'hsl(var(--gold))' }}
                >
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

      {/* Partners — NORMAL logos, no grayscale */}
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
            className="w-16 h-px mx-auto mb-20 origin-center"
            style={{ backgroundColor: 'hsl(var(--gold) / 0.5)' }}
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
                className="transition-transform duration-500 hover:scale-110"
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
