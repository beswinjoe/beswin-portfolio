import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/4">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/70 sticky top-32">
            <span className="text-accent-burgundy mr-2">01 —</span> About
          </h2>
        </div>
        
        <div className="w-full md:w-3/4 flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="prose prose-lg prose-neutral max-w-xl font-serif text-foreground/90 leading-relaxed text-balance">
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
          
          {/* Portrait Image */}
          <div className="w-full lg:w-64 shrink-0 flex flex-col gap-3">
            <div className="relative aspect-[3/4] w-full max-w-[280px] border border-border-beige bg-foreground/5 p-2">
              <div className="relative w-full h-full overflow-hidden filter grayscale-[20%] sepia-[15%] contrast-[1.05]">
                <Image
                  src="/beswin.png"
                  alt="Beswin Joe, AI & Data Science Developer"
                  fill
                  sizes="(max-width: 1024px) 280px, 256px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/50 pl-2">
              Beswin Joe · Nagercoil, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
