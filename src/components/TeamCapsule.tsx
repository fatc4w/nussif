import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PersonCard from './PersonCard';
import AnalystCard from './AnalystCard';

interface Leader {
  name: string;
  role: string;
  email?: string;
  linkedIn?: string;
  headshot?: string;
}

interface Analyst {
  name: string;
  email?: string;
  linkedIn?: string;
}

interface TeamCapsuleProps {
  name: string;
  description: string;
  teamPhoto?: string;
  imagePosition?: string;
  leaders: Leader[];
  analysts: Analyst[];
  leadersLabel?: string;
}

export default function TeamCapsule({
  name,
  description,
  teamPhoto,
  imagePosition = 'center top',
  leaders,
  analysts,
  leadersLabel = 'Portfolio Managers',
}: TeamCapsuleProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-hidden border border-border/30 transition-all duration-700 hover:border-border/60 group/capsule">
      {/* Header — always visible */}
      <div
        className="relative h-[380px] md:h-[420px] cursor-pointer select-none overflow-hidden"
        onClick={() => setExpanded((v) => !v)}
      >
        {teamPhoto ? (
          <img
            src={teamPhoto}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/capsule:scale-[1.03]"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, hsl(220,55%,10%) 0%, hsl(218,55%,22%) 55%, hsl(37,30%,28%) 100%)',
            }}
          />
        )}

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

        {/* Bottom bar */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-8 md:px-10 pb-8 md:pb-10 gap-4">
          <div className="flex-1 min-w-0">
            <h3
              className="font-display font-medium text-white tracking-wide leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              {name}
            </h3>
            <p
              className={`mt-3 font-body text-white/50 text-sm leading-relaxed line-clamp-2 transition-all duration-500 ${
                expanded ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {description}
            </p>
          </div>

          <button
            className={`flex-shrink-0 w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-500 ${
              expanded ? 'bg-white/20 rotate-180' : 'bg-white/[0.07] hover:bg-white/15'
            }`}
            aria-label={expanded ? 'Collapse team' : 'Expand team'}
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Expanded members panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-background px-8 md:px-10 py-12 border-t border-border/30">
              <p className="body-text max-w-2xl mb-12 text-muted-foreground leading-[1.8]">{description}</p>

              <p className="eyebrow mb-8" style={{ color: 'hsl(var(--gold))' }}>{leadersLabel}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {leaders.map((l) => (
                  <PersonCard key={l.name} {...l} />
                ))}
              </div>

              {analysts.length > 0 && (
                <div className="mt-12 pt-10 border-t border-border/50">
                  <p className="eyebrow mb-8">Analysts</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {analysts.map((a, i) => (
                      <AnalystCard key={`${a.name}-${i}`} {...a} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
