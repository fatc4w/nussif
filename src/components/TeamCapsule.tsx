import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
    <div className="overflow-hidden rounded-2xl border border-border/40 shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Capsule header — always visible */}
      <div
        className="relative h-[370px] cursor-pointer select-none"
        onClick={() => setExpanded((v) => !v)}
      >
        {teamPhoto ? (
          <img
            src={teamPhoto}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.025]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

        {/* Bottom bar */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-8 pb-8 gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-medium text-white text-3xl md:text-[2.6rem] tracking-wide leading-tight">
              {name}
            </h3>
            <p
              className={`mt-2 font-body text-white/60 text-sm leading-relaxed line-clamp-2 transition-opacity duration-300 ${
                expanded ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {description}
            </p>
          </div>

          <button
            className={`flex-shrink-0 w-11 h-11 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 ${
              expanded ? 'bg-white/25 rotate-180' : 'bg-white/10 hover:bg-white/20'
            }`}
            aria-label={expanded ? 'Collapse team' : 'Expand team'}
          >
            <ChevronDown size={20} className="transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Expanded members panel */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? 'max-h-[3500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background px-8 py-10 border-t border-border/50">
          <p className="body-text max-w-2xl mb-10 text-muted-foreground">{description}</p>

          <p className="eyebrow mb-6 text-gold">{leadersLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {leaders.map((l) => (
              <PersonCard key={l.name} {...l} />
            ))}
          </div>

          {analysts.length > 0 && (
            <div className="mt-10 pt-8 border-t border-border">
              <p className="eyebrow mb-6">Analysts</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {analysts.map((a, i) => (
                  <AnalystCard key={`${a.name}-${i}`} {...a} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
