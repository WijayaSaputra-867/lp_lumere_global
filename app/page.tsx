import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Collections />
      <Features />
      
      {/* Newsletter Section */}
      <section className="py-24 bg-brand-primary/10">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[40px] text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-950">Join the <span className="text-gradient">Icon Club</span></h2>
            <p className="text-zinc-700 text-lg mb-10 max-w-xl mx-auto font-medium">
              Get early access to new drops, exclusive styling tips, and sustainability updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="icon@email.com" 
                className="flex-1 px-6 py-4 rounded-full border-2 border-brand-dark/10 focus:border-brand-primary outline-none transition-all font-medium"
              />
              <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:scale-105 transition-transform active:scale-95">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
