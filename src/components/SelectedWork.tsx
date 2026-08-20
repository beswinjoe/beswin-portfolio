import Link from "next/link";

export default function SelectedWork() {
  const projects = [
    {
      id: "01",
      name: "FILOZA",
      year: "2026",
      description: "Creative and AI-powered tools designed for everyday users. An exploration into abstracting complex machine learning models behind intuitive, handcrafted interfaces.",
      tech: ["Next.js", "Python", "Machine Learning", "Tailwind CSS"],
      link: "https://filoza.vercel.app",
    },
    {
      id: "02",
      name: "HOSTWHERE",
      year: "2026",
      description: "A developer-oriented infrastructure analysis tool focused on resolving domain hosting, IP routing, and server topography with high precision.",
      tech: ["TypeScript", "React", "DNS Protocols", "Node.js"],
      link: "https://hostwhere.vercel.app",
    },
    {
      id: "03",
      name: "DISHUB",
      year: "2026",
      description: "A web project built with Next.js, focused on delivering a polished modern digital experience.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      link: "https://github.com/beswinjoe/dishub",
    },
    {
      id: "04",
      name: "CHILLOFI",
      year: "2026",
      description: "A modern, minimal web experience designed to help you chill.",
      tech: ["HTML", "CSS", "JavaScript", "Web Design"],
      link: "https://chillofi.vercel.app",
    }
  ];

  return (
    <section id="work" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <div className="w-full md:w-1/4">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/70 sticky top-32">
            <span className="text-accent-burgundy mr-2">02 —</span> Selected Work
          </h2>
        </div>
        
        <div className="w-full md:w-3/4">
          <p className="font-serif text-xl text-foreground/80 leading-relaxed max-w-2xl text-balance">
            An archive of recent software experiments, tools, and digital products.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project) => (
          <article key={project.id} className="group relative border border-border-beige p-6 md:p-12 hover:border-foreground/20 transition-colors duration-500 bg-[#F9F6F0]">
            {/* Numbering */}
            <div className="absolute -top-3 left-6 md:-left-4 bg-[#F9F6F0] px-3 font-sans text-xs tracking-widest text-accent-burgundy">
              No. {project.id}
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-6 border-b border-border-beige pb-4">
                    <h3 className="text-3xl font-serif tracking-tight">{project.name}</h3>
                    <span className="font-sans text-xs text-foreground/50">{project.year}</span>
                  </div>
                  
                  <p className="font-serif text-lg leading-relaxed text-foreground/80 mb-8">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-widest text-foreground/50 mb-3">Technologies</h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="font-sans text-xs text-foreground/80 border border-border-beige px-2 py-1">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-sans text-xs uppercase tracking-widest text-accent-burgundy hover:text-foreground transition-colors group-hover:underline underline-offset-4">
                      View Project <span className="ml-2 font-serif text-lg leading-none">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Image Placeholder (Archival Style) */}
              <div className="w-full lg:w-2/3 aspect-[4/3] bg-foreground/5 border border-border-beige relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
                <div className="font-sans text-xs uppercase tracking-widest text-foreground/30 border border-foreground/10 px-4 py-2">
                  [ Figure {project.id} — Visual Archive ]
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
