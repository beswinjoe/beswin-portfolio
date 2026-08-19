export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/4">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/70 sticky top-32">
            <span className="text-accent-burgundy mr-2">01 —</span> About
          </h2>
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="prose prose-lg prose-neutral max-w-2xl font-serif text-foreground/90 leading-relaxed text-balance">
            <p className="text-xl md:text-2xl mb-8 leading-snug">
              I am an AI & Data Science student, developer, and independent product builder.
            </p>
            <p className="mb-6">
              My work exists at the intersection of artificial intelligence, software engineering, and modern web architecture. I am interested in building systems that abstract complexity and tools that empower human creativity.
            </p>
            <p>
              Rather than assembling generic applications, I treat software as a craft—focusing on architectural elegance, data integrity, and uncompromising user experiences. My current focus is on training intelligent models and seamlessly integrating them into accessible web environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
