import { motion } from "framer-motion";
import { Palette, Sprout, TreePine, Truck } from "lucide-react";

const services = [
  { icon: Palette, title: "Landscape Design", desc: "Custom landscape architecture for residential and commercial projects" },
  { icon: Sprout, title: "Plant Supply", desc: "Bulk & retail plant supply with 1000+ varieties available" },
  { icon: TreePine, title: "Garden Development", desc: "Complete garden setup from planning to planting and maintenance" },
  { icon: Truck, title: "All India Delivery", desc: "Nationwide shipping with safe packaging for all plant orders" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-narrow">
      <motion.div {...fadeInUp} transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4 text-center">
          Our Services
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          More than a nursery — we are full-service landscape and plant supply experts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card rounded-xl p-6 shadow-card hover:-translate-y-1 transition-transform duration-200"
            style={{ transitionTimingFunction: "var(--easing)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
