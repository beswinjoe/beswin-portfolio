export default function SkillsAndChronicle() {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript"],
    },
    {
      category: "AI / Data",
      items: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    },
    {
      category: "Web",
      items: ["React", "Next.js", "Node.js"],
    },
    {
      category: "Tools",
      items: ["GitHub", "Vercel", "Cursor", "Jupyter"],
    },
  ];

  const chronicle = [
    { year: "2026", event: "Building independent software products" },
    { year: "2026", event: "AI & Data Science projects" },
    { year: "2026", event: "Invited Industry Expert Speaker" },
    { year: "Earlier", event: "Started exploring programming, AI and the web" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-24">
      {/* Skills */}
      <section className="w-full lg:w-1/2">
        <h2 className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-12 border-b border-border-beige pb-4">
          Technical Expertise
        </h2>
        
        <div className="flex flex-col gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="font-serif text-xl mb-3 text-foreground/90">{skillGroup.category}</h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                {skillGroup.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chronicle */}
      <section className="w-full lg:w-1/2">
        <h2 className="font-sans text-xs uppercase tracking-widest text-foreground/50 mb-12 border-b border-border-beige pb-4">
          A Short Chronicle
        </h2>
        
        <div className="relative border-l border-border-beige pl-6 pb-4">
          {chronicle.map((item, idx) => (
            <div key={idx} className="mb-10 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-background border border-accent-burgundy rounded-full"></div>
              
              <h3 className="font-sans text-[10px] uppercase tracking-widest text-foreground/50 mb-1">{item.year}</h3>
              <p className="font-serif text-lg text-foreground/90">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
