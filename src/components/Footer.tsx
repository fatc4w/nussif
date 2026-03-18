import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerCards = [
    {
      title: "About Us",
      links: [
        { text: "Who We Are", href: "/#who-we-are", internal: true },
        { text: "Our Culture", href: "/#culture", internal: true },
        { text: "Achievements", href: "/#achievements", internal: true },
        { text: "Partners", href: "/#partners", internal: true },
      ],
    },
    {
      title: "Program",
      links: [
        { text: "Philosophy", href: "/program#philosophy", internal: true },
        {
          text: "Analyst Pipeline",
          href: "/program#analyst-pipeline",
          internal: true,
        },
        {
          text: "Investment Mandate",
          href: "/program#mandate",
          internal: true,
        },
      ],
    },
    {
      title: "People",
      links: [
        { text: "Leadership", href: "/people#leadership", internal: true },
        { text: "Investing Teams", href: "/people#investing", internal: true },
        { text: "Operations", href: "/people#operations", internal: true },
        {
          text: "LinkedIn",
          href: "https://www.linkedin.com/company/nussif",
          external: true,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-navy-deep text-primary-foreground py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container-site">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Top Section - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            {/* First Column - Branding */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between space-y-6 mb-6 md:mb-0 pr-8"
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold tracking-[0.25em] text-lg text-primary-foreground">
                  NUSSIF
                </span>
              </div>

              {/* Motto */}
              <div>
                <h3 className="font-display text-lg font-medium tracking-tight text-primary-foreground sm:text-xl">
                  Asia’s premier live student fund,
                  <br />
                  built by students
                </h3>
              </div>

              {/* Small Text */}
              <div className="mt-auto">
                <p className="font-body text-sm text-primary-foreground/60">
                  National University of Singapore
                </p>
              </div>
            </motion.div>

            {/* Cards */}
            {footerCards.map((card, index) => {
              let marginClass = "-mt-px md:mt-0";
              if (index > 0) {
                marginClass += " md:-ml-px";
              }

              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  className={`group relative min-h-[200px] overflow-hidden border border-primary-foreground/20 p-6 transition-colors hover:bg-primary-foreground/5 sm:p-8 ${marginClass}`}
                >
                  <h4 className="mb-6 font-body text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                    {card.title}
                  </h4>
                  <ul className="space-y-3">
                    {card.links.map((link) => (
                      <li key={link.text}>
                        {link.internal ? (
                          <Link
                            to={link.href}
                            className="inline-flex font-body font-light items-center gap-1 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground sm:text-base"
                          >
                            {link.text}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex font-body font-light items-center gap-1 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground sm:text-base"
                          >
                            {link.text}
                            {link.external && (
                              <ArrowUpRight className="h-3 w-3" />
                            )}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Section - Large NUSSIF Wordmark */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16"
          >
            <div className="w-full px-4" aria-hidden="true">
              <svg
                viewBox="0 0 600 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="fill-primary-foreground/10"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "72px",
                    fontWeight: 500,
                    letterSpacing: "0.3em",
                  }}
                >
                  NUSSIF
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/10 pt-6 text-center">
            <p className="font-body text-[11px] text-primary-foreground/40 tracking-wide">
              © NUSSIF. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
