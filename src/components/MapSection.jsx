import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const mapRedirectUrl = "https://maps.google.com/?q=Snsc+Nursery+Kadiyam";

const MapSection = () => (
  <section className="section-padding bg-surface">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-12 text-center">
          Visit Us
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden shadow-card h-80 lg:h-auto">
          <iframe
            title="SNSC Nursery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.6697623417767!2d81.81574977330445!3d16.91352681628686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37bdaf0f741c83%3A0x19b4ba3bb63ae2d8!2sSnsc%20Nursery!5e1!3m2!1sen!2sin!4v1774882819923!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          {[
            {
              icon: MapPin,
              label: "Address",
              value: "GNR Kalyana Mandapam, near Kadiyam, Andhra Pradesh",
              href: mapRedirectUrl,
              external: true,
            },
            { icon: Phone, label: "Phone", value: "9441363466", href: "tel:9441363466" },
            { icon: Clock, label: "Timings", value: "Open till 6:00 PM" },
          ].map(({ icon: Icon, label, value, href, external }) => (
            <div key={label} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="font-body text-muted-foreground tabular-nums hover:text-primary"
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-body text-muted-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;
