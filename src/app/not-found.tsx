import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] w-full max-w-6xl mx-auto px-6 md:px-12">
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-16 text-center">
        <div className="border border-border-beige p-12 md:p-24 bg-[#F9F6F0] relative max-w-3xl w-full">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-background px-4 font-serif italic text-accent-burgundy">
            Error 404
          </div>
          
          <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground mb-6">
            ARCHIVE ENTRY NOT FOUND
          </h1>
          
          <p className="font-sans text-sm md:text-base text-foreground/80 max-w-md mx-auto mb-12 leading-relaxed">
            The page you&apos;re looking for appears to have wandered outside the collection.
          </p>
          
          <Link href="/" className="group inline-flex items-center font-sans text-xs uppercase tracking-widest text-accent-burgundy hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1">
            Return to the archive <span className="ml-2 font-serif text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
