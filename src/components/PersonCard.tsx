import { Linkedin } from 'lucide-react';

interface PersonCardProps {
  name: string;
  role: string;
  email?: string;
  linkedIn?: string;
  headshot?: string;
}

export default function PersonCard({ name, role, email, linkedIn, headshot }: PersonCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Headshot frame — replace src with real headshot */}
      <div className="headshot-frame mb-5 group-hover:scale-[1.02] group-hover:shadow-lg transition-all duration-300">
        {headshot ? (
          <img src={headshot} alt={name} className="w-full h-full object-cover rounded-full" />
        ) : (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground/40">
            <circle cx="24" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M6 44c0-9.94 8.06-18 18-18s18 8.06 18 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </div>
      <h4 className="font-display font-medium text-lg text-foreground">{name}</h4>
      <p className="eyebrow mt-1 text-[10px]">{role}</p>
      <div className="flex items-center gap-3 mt-3">
        {linkedIn && (
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label={`${name} LinkedIn`}>
            <Linkedin size={16} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="font-body text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
