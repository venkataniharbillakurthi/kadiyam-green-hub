import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-card">
      <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-heading text-xl font-bold text-primary tracking-tight">
          SNSC Nursery
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-heading text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href="tel:9441363466" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm font-semibold hover:bg-primary-light transition-colors">
            <Phone className="w-4 h-4" />
            <span className="tabular-nums">9441363466</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-heading text-sm font-medium text-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="tel:9441363466" className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-heading text-sm font-semibold">
            <Phone className="w-4 h-4" />
            <span className="tabular-nums">9441363466</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
