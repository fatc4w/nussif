import { Link } from "react-router-dom";
import { motion } from "motion/react";

const investingTeams = [
  { name: "L/S Equities", anchor: "l-s-equities" },
  { name: "Global Macro", anchor: "global-macro" },
  { name: "Commodities", anchor: "commodities" },
  { name: "Systematic Strategies", anchor: "systematic-strategies" },
];

const operationsTeams = [
  { name: "Risk & Infrastructure", anchor: "risk-infrastructure" },
  { name: "Externals", anchor: "externals" },
  { name: "Fund Development", anchor: "fund-development" },
];

export default function OrgChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Leadership */}
      <div className="flex flex-col items-center mb-16">
        <p className="eyebrow mb-3">Leadership</p>
        <Link
          to="/people#leadership"
          className="font-display font-normal text-foreground text-2xl md:text-3xl tracking-tight hover:text-primary transition-colors duration-300"
        >
          NUSSIF Leadership Team
        </Link>
        <div className="mt-8 w-px h-10 bg-border" />
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Investing Teams */}
        <div className="border-b md:border-b-0 md:border-r border-border pb-14 md:pb-0 md:pr-16 lg:pr-24">
          <p className="eyebrow text-[hsl(var(--gold))] mb-10">
            Investing Teams
          </p>
          <ul className="space-y-7">
            {investingTeams.map((team, i) => (
              <motion.li
                key={team.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex items-center gap-5"
              >
                <span className="block h-px w-5 bg-border group-hover:w-8 group-hover:bg-[hsl(var(--gold))] transition-all duration-300 shrink-0" />
                <Link
                  to={`/people#${team.anchor}`}
                  className="font-display text-foreground text-xl md:text-2xl tracking-tight group-hover:text-primary transition-colors duration-300"
                >
                  {team.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Operations Teams */}
        <div className="pt-14 md:pt-0 md:pl-16 lg:pl-24">
          <p className="eyebrow text-[hsl(var(--gold))] mb-10">
            Operations Teams
          </p>
          <ul className="space-y-7">
            {operationsTeams.map((team, i) => (
              <motion.li
                key={team.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.15, duration: 0.5 }}
                className="group flex items-center gap-5"
              >
                <span className="block h-px w-5 bg-border group-hover:w-8 group-hover:bg-[hsl(var(--gold))] transition-all duration-300 shrink-0" />
                <Link
                  to={`/people#${team.anchor}`}
                  className="font-display text-foreground text-xl md:text-2xl tracking-tight group-hover:text-primary transition-colors duration-300"
                >
                  {team.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
