export default function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/4">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/70 sticky top-32">
            <span className="text-accent-burgundy mr-2">03 —</span> Speaking
          </h2>
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="border border-border-beige p-8 md:p-12 relative bg-[#F9F6F0]">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-background px-4 font-serif italic text-accent-burgundy">
              Invited Address
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-8 gap-4">
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-2">Industry Expert Speaker</h3>
                <p className="font-serif text-2xl tracking-tight text-foreground">Augment Potentials — Monthly AI Series</p>
              </div>
              <div className="font-sans text-xs tracking-widest text-foreground/60 border-b border-border-beige pb-1">
                September 2026
              </div>
            </div>
            
            <div className="mt-8 border-l-2 border-accent-burgundy pl-6">
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-foreground/50 mb-2">Topic of Discourse</h4>
              <p className="font-serif text-xl italic text-foreground/90">"Beyond the Basics: AI Literacy for the Workplace"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
