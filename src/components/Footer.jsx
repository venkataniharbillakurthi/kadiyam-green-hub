import { Phone, MapPin, Instagram, Youtube } from "lucide-react";

const mapRedirectUrl = "https://maps.google.com/?q=Snsc+Nursery+Kadiyam";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground section-padding py-12">
    <div className="container-narrow">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        <div>
          <img
            src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1773926288/621198387_17889939759420628_8547033588103664593_n-removebg-preview_qp0ljl.png"
            alt="SNSC Nursery logo"
            className="h-10 w-auto mb-3"
          />
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
              <a
                href={mapRedirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                GNR Kalyana Mandapam, near Kadiyam, AP
              </a>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/snsc_nursery_kadiyam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@snscnurserykadiyam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
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
