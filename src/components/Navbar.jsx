import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plants", href: "#categories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const logoUrl = "https://res.cloudinary.com/dhzhuobu2/image/upload/v1773926288/621198387_17889939759420628_8547033588103664593_n-removebg-preview_qp0ljl.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  // Framer Motion Variants
  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    opened: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-6 px-2"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
          
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src={logoUrl} 
              alt="SNSC Nursery" 
              className={`transition-all duration-300 object-contain ${
                scrolled ? "h-12" : "h-14"
              } `} 
            />
          </a>

          {/* Right Actions: Call + Toggle */}
          <div className="flex items-center gap-3 md:gap-6">
            <a 
              href="tel:9441363466" 
              className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 ${
                scrolled ? "bg-green-700 text-white shadow-md" : "bg-white text-green-800 shadow-xl"
              }`}
            >
              <Phone className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">9441363466</span>
            </a>

            <button 
              onClick={() => setOpen(!open)} 
              className={`p-3 rounded-full transition-all duration-300 z-[120] ${
                open ? "bg-zinc-900 text-white rotate-180" : 
                scrolled ? "bg-zinc-100 text-zinc-900" : "bg-white/10 text-white backdrop-blur-md"
              }`}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Global Sidebar Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[105] bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden"
          >
            {/* Visual Side (Hidden on Mobile) */}
            <div className="hidden md:flex w-1/3 bg-green-950 relative items-end p-12">
              <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80')] bg-cover"></div>
              <div className="relative z-10">
                <p className="text-green-400 font-bold tracking-widest text-xs uppercase mb-2">Quality from Kadiyam</p>
                <h2 className="text-white text-3xl font-bold italic">SNSC Nursery</h2>
              </div>
            </div>

            {/* Links Side */}
            <div className="flex-1 flex flex-col justify-center px-10 md:px-24 pt-24 md:pt-0">
              <div className="space-y-4 md:space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} custom={i} variants={linkVariants}>
                    <a 
                      href={link.href} 
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between text-4xl md:text-4xl font-bold text-zinc-900 hover:text-green-700 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer Info */}
              <div className="mt-12 pt-8 border-t border-zinc-100 md:hidden">
                <p className="text-zinc-500 font-medium italic">“Quality Plants Delivered with Care”</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;