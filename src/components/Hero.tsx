'use client';

import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section 
      className="pt-12 pb-24 md:pt-24 flex flex-col md:flex-row md:items-end justify-between gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-6"
          variants={itemVariants}
        >
          BESWIN JOE
        </motion.h1>
        
        <motion.div 
          className="flex flex-col gap-6"
          variants={itemVariants}
        >
          <h2 className="text-xl md:text-2xl font-serif text-accent-burgundy/90 italic">
            Artificial Intelligence · Data Science · Software
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl text-balance">
            I build AI-powered products, software experiments, and useful tools at the intersection of intelligence and the web.
          </p>
          
          <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/50 mt-4 md:mt-2">
            Currently building · Open to interesting collaborations
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col gap-3 font-sans text-xs uppercase tracking-widest text-foreground/60 md:text-right border-l md:border-l-0 md:border-r border-border-beige pl-4 md:pl-0 md:pr-4 py-1"
        variants={itemVariants}
      >
        <p>Nagercoil, India</p>
        <p>AI & Data Science</p>
        <p>Independent Builder</p>
        <p className="text-accent-green mt-2 font-serif italic normal-case text-sm">Est. 2007</p>
      </motion.div>
    </motion.section>
  );
}
