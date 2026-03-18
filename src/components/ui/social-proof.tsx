"use client";

import { motion } from "motion/react";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

interface SocialProofProps {
  partners: Partner[];
  title?: string;
}

export default function SocialProof({ partners, title }: SocialProofProps) {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="heading-section mb-12 text-center fade-up">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 border border-border sm:grid-cols-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center border-b border-border bg-background px-8 py-8 last:border-b-0 sm:border-r sm:last:border-r-0 sm:border-b-0"
            >
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-8 w-auto object-contain transition-transform duration-300 hover:-translate-y-1"
                  />
                </a>
              ) : (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 w-auto object-contain transition-transform duration-300 hover:-translate-y-1"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
