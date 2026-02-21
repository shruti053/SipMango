import Image from "next/image";
import MangoAnimation from "../components/MangoAnimation";
import { ShoppingCart, Heart, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 glass">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-mango-500" />
          <span className="text-xl font-black uppercase tracking-tighter">SipMango</span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-bold uppercase tracking-widest md:flex">
          <a href="#about" className="hover:text-mango-500 transition-colors">About</a>
          <a href="#benefits" className="hover:text-mango-500 transition-colors">Benefits</a>
          <a href="#shop" className="hover:text-mango-500 transition-colors">Shop</a>
        </div>
        <button className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-zinc-100 dark:text-zinc-900">
          Order Now
        </button>
      </nav>

      {/* Hero Animation */}
      <section className="relative">
        <MangoAnimation />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-zinc-50 py-32 dark:bg-zinc-900/50">
        <div className="container mx-auto px-8">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
                <Heart className="h-8 w-8 text-mango-500" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Heart Healthy</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Packed with antioxidants and Vitamin C to keep your heart pumping strong.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
                <Zap className="h-8 w-8 text-mango-500" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Natural Energy</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Zero added sugar. Just the natural power of sun-ripened Alphonso mangoes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl dark:bg-zinc-800">
                <ShieldCheck className="h-8 w-8 text-mango-500" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Immunity Boost</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                A daily dose of sunshine to keep your immune system in peak condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="shop" className="py-32">
        <div className="container mx-auto px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-mango-400 py-24 px-12 text-center text-zinc-900">
            <h2 className="mb-8 text-5xl font-black uppercase tracking-tighter sm:text-7xl">
              Ready for a <br /> Mango Rush?
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg font-medium opacity-80">
              Experience the pure, unadulterated taste of the king of fruits. Delivered cold to your doorstep.
            </p>
            <button className="group flex items-center gap-3 mx-auto rounded-full bg-zinc-900 px-10 py-5 text-xl font-bold text-white transition-all hover:gap-6">
              Shop Now <ShoppingCart className="h-6 w-6" />
            </button>
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-mango-300 opacity-50 blur-3xl" />
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-mango-500 opacity-50 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-16 dark:border-zinc-800">
        <div className="container mx-auto px-8 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-mango-500" />
            <span className="text-lg font-black uppercase tracking-tighter">SipMango</span>
          </div>
          <p className="text-sm text-zinc-500">© 2026 SipMango. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Instagram</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
