import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding py-12">
    <div className="container-narrow">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-lg font-bold mb-3">SNSC Nursery</h3>
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            Premium plants and landscape services from Kadiyam — India's largest nursery hub. Serving customers nationwide.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
            {["Home", "About", "Services", "Plants", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <div className="space-y-2 font-body text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:9441363466" className="tabular-nums hover:text-primary-foreground">9441363466</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>GNR Kalyana Mandapam, near Kadiyam, AP</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground">Instagram</a>
            <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground">YouTube</a>
            <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SNSC Nursery, Kadiyam. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
