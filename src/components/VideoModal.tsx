import { motion } from 'motion/react';

interface VideoModalProps {
  vimeoId?: string;
  thumbnailUrl?: string;
}

export default function VideoModal({ vimeoId = 'VIDEO_ID' }: VideoModalProps) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-site flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1100px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          style={{ paddingTop: '56.25%' }}
        >
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={`https://player.vimeo.com/video/${encodeURIComponent(vimeoId)}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&controls=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
