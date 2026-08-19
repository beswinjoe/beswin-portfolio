export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 pt-16 border-t border-border-beige flex flex-col items-center text-center">
      <div className="mb-8">
        <h2 className="font-serif text-3xl tracking-tight text-foreground mb-2">BESWIN JOE</h2>
        <p className="font-sans text-xs uppercase tracking-widest text-foreground/60">
          Artificial Intelligence & Data Science <span className="mx-2 text-accent-burgundy">·</span> Nagercoil, India
        </p>
      </div>
      
      <div className="border border-border-beige px-6 py-3 bg-[#F9F6F0] relative mb-12">
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-foreground/30 -translate-x-px -translate-y-px"></div>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-foreground/30 translate-x-px -translate-y-px"></div>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-foreground/30 -translate-x-px translate-y-px"></div>
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-foreground/30 translate-x-px translate-y-px"></div>
        
        <p className="font-serif italic text-foreground/80 text-sm">
          Built with curiosity, code, and an unreasonable number of browser tabs.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-2 pb-8">
        <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/40">
          Archive updated · August 2026
        </p>
        <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/40">
          &copy; {currentYear} Beswin Joe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
