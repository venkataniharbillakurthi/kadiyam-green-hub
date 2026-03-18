import { motion } from "framer-motion";
import { MapPin, Award, Leaf } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-surface">
    <div className="container-narrow">
      <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-6">
          About SNSC Nursery
        </h2>
        <p className="font-body text-lg leading-relaxed text-foreground max-w-[65ch] mb-8">
          Located in the heart of <strong>Kadiyam, Andhra Pradesh</strong> — India's largest nursery hub — SNSC Nursery brings over 20 years of horticultural expertise. We specialize in landscape design, bulk plant supply, and garden development, serving homeowners, landscape architects, and commercial buyers nationwide.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Kadiyam Based", desc: "Heart of India's nursery capital" },
            { icon: Award, title: "20+ Years", desc: "Trusted horticultural expertise" },
            { icon: Leaf, title: "1000+ Varieties", desc: "Complete plant collection" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">{title}</p>
                <p className="font-body text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
