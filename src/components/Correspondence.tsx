import Link from "next/link";

export default function Correspondence() {
  return (
    <section id="contact" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/4">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/70 sticky top-32">
            <span className="text-accent-burgundy mr-2">05 —</span> Correspondence
          </h2>
        </div>
        
        <div className="w-full md:w-3/4">
          <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-snug max-w-2xl text-balance mb-12">
            Have an idea, project, collaboration, or simply something interesting to discuss?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <Link href="mailto:hello@example.com" className="group flex items-center font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-accent-burgundy transition-colors">
              Email me <span className="ml-2 font-serif text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <Link href="https://github.com/beswinjoe" target="_blank" rel="noopener noreferrer" className="group flex items-center font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-accent-burgundy transition-colors">
              GitHub <span className="ml-2 font-serif text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <Link href="https://linkedin.com/in/beswinjoe" target="_blank" rel="noopener noreferrer" className="group flex items-center font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-accent-burgundy transition-colors">
              LinkedIn <span className="ml-2 font-serif text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <Link href="https://x.com/beswinjoe" target="_blank" rel="noopener noreferrer" className="group flex items-center font-sans text-sm uppercase tracking-widest text-foreground/80 hover:text-accent-burgundy transition-colors">
              X <span className="ml-2 font-serif text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
