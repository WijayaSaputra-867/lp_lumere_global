import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Statistics Bar */}
      <section className="bg-brand-dark py-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Partners", value: "500+" },
              { label: "Global Offices", value: "12" },
              { label: "Production Capacity", value: "2M+" },
              { label: "Delivery Success", value: "99.9%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Collections />
      <Features />
      
      {/* Newsletter Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[40px] text-center max-w-4xl mx-auto border-brand-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-950">Partner <span className="text-gradient">With Us</span></h2>
            <p className="text-zinc-700 text-lg mb-10 max-w-xl mx-auto font-medium">
              Join our global network of retail partners and exclusive wholesale drops. Gain access to corporate insights and sustainable manufacturing updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Corporate Email Address" 
                className="flex-1 px-6 py-4 rounded-full bg-white border border-brand-primary/20 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-medium"
              />
              <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Join Network
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
