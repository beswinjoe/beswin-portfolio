import Link from "next/link";

export default function Notes() {
  const categories = ["AI", "BUILDING", "DATA", "SOFTWARE", "LEARNING"];
  
  const placeholders = [
    { title: "On abstractions and understanding", date: "Oct 12, 2026", category: "SOFTWARE" },
    { title: "Training small models for bespoke tasks", date: "Sep 28, 2026", category: "AI" },
    { title: "The architecture of calm interfaces", date: "Sep 04, 2026", category: "BUILDING" },
  ];

  return (
    <section id="notes" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="w-full md:w-1/4">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/70 sticky top-32">
            <span className="text-accent-burgundy mr-2">04 —</span> Notes from the Workshop
          </h2>
        </div>
        
        <div className="w-full md:w-3/4 flex flex-col gap-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 border-b border-border-beige pb-6">
            <span className="font-sans text-[10px] uppercase tracking-widest text-foreground/40 mr-4 self-center">Index:</span>
            {categories.map((cat) => (
              <span key={cat} className="font-sans text-xs uppercase tracking-widest text-foreground/80 hover:text-accent-burgundy transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          {/* Notes List */}
          <div className="flex flex-col">
            {placeholders.map((note, idx) => (
              <Link key={idx} href="#" className="group flex flex-col sm:flex-row justify-between items-baseline py-6 border-b border-border-beige/50 hover:border-foreground/20 transition-colors">
                <h3 className="font-serif text-xl md:text-2xl text-foreground/90 group-hover:text-accent-burgundy transition-colors mb-2 sm:mb-0">
                  {note.title}
                </h3>
                <div className="flex items-center gap-6 font-sans text-xs tracking-widest text-foreground/50">
                  <span className="uppercase">{note.category}</span>
                  <span>{note.date}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-4">
            <Link href="#" className="font-serif text-lg italic text-foreground/60 hover:text-foreground transition-colors">
              Browse the complete archive →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
