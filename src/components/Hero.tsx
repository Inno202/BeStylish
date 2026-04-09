import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/tailoring-art-sewing/1920/1080"
          alt="Artistic Tailoring"
          className="w-full h-full object-cover opacity-50 grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/80 text-xs uppercase tracking-[0.5em] mb-6 block font-medium"
        >
          BeStylish.
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.85]"
        >
          THE ART OF <br />
          <span className="italic font-thin text-white/90">TAILORING</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience the fusion of heritage patterns and modern silhouettes. 
          Bespoke tailoring that tells your unique story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#collections" className="px-10 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-200 transition-all w-full sm:w-auto text-center">
            View Collections
          </a>
          <a href="#appointment" className="px-10 py-4 border border-white text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all w-full sm:w-auto text-center">
            Book Appointment
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
