import { Tree, TreeNode } from "react-organizational-chart";
import { motion } from "motion/react";

const investingTeams = [
  { name: "L/S Equities", tag: "LSE" },
  { name: "Global Macro", tag: "GM" },
  { name: "Commodities", tag: "CMD" },
  { name: "Systematic Strategies", tag: "SYS" },
];

const operationsTeams = [
  { name: "Risk & Infra", tag: "R&I" },
  { name: "Externals", tag: "EXT" },
  { name: "Fund Dev", tag: "FD" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function RootNode() {
  return (
    <div className="inline-block px-10 md:px-14 py-6 md:py-7 rounded border border-border bg-card/50 hover:bg-card transition-colors duration-300 text-center">
      <h3 className="font-display font-normal text-foreground text-xl md:text-[28px] tracking-tight">
        NUSSIF Leadership Team
      </h3>
    </div>
  );
}

function MidNode({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="inline-block px-6 md:px-8 py-4 md:py-5 rounded border border-border bg-card/50 hover:bg-card transition-colors duration-300 text-center min-w-[160px] md:min-w-[200px]">
      <h4 className="font-display font-normal text-foreground text-base md:text-[21px] tracking-tight">
        {title}
      </h4>
      <p className="text-[10px] font-medium tracking-[2px] uppercase text-muted-foreground mt-1">
        {subtitle}
      </p>
    </div>
  );
}

function LeafNode({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="inline-block px-3 md:px-4 py-4 md:py-5 rounded border border-border bg-card/50 hover:bg-card transition-colors duration-300 text-center group min-w-[100px] md:min-w-[120px]">
      <p className="text-[11px] md:text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wide">
        {name}
      </p>
      <p className="text-[8px] md:text-[9px] font-semibold tracking-[2px] uppercase text-muted-foreground/60 group-hover:text-muted-foreground mt-1 md:mt-1.5 transition-colors duration-300">
        {tag}
      </p>
    </div>
  );
}

export default function OrgChart() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full overflow-x-auto pb-4"
    >
      <div className="min-w-[700px] md:min-w-0">
        <Tree
          lineWidth="1px"
          lineColor="hsl(var(--border))"
          lineBorderRadius="0"
          label={<RootNode />}
        >
          <TreeNode
            label={<MidNode title="Investing Teams" subtitle="4 Sub-Teams" />}
          >
            {investingTeams.map((team) => (
              <TreeNode
                key={team.tag}
                label={<LeafNode name={team.name} tag={team.tag} />}
              />
            ))}
          </TreeNode>
          <TreeNode
            label={<MidNode title="Operations Teams" subtitle="3 Sub-Teams" />}
          >
            {operationsTeams.map((team) => (
              <TreeNode
                key={team.tag}
                label={<LeafNode name={team.name} tag={team.tag} />}
              />
            ))}
          </TreeNode>
        </Tree>
      </div>
    </motion.div>
  );
}
