"use client";

import { motion } from "motion/react";

interface Partner {
  name: string;
  logo: string;
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

        <div className="grid grid-cols-1 border border-border md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center border-b border-border bg-background px-8 py-8 last:border-b-0 md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(5n)]:border-r-0 lg:[&:nth-last-child(-n+5)]:border-b-0"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
