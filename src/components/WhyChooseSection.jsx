import { motion } from "framer-motion";
import { MapPin, Leaf, Package, Award, Users } from "lucide-react";

const reasons = [
  { icon: MapPin, text: "Located in Kadiyam – India's nursery hub" },
  { icon: Leaf, text: "1000+ Plant Varieties available" },
  { icon: Package, text: "Bulk Orders Available at competitive rates" },
  { icon: Award, text: "Landscape Experts with 20+ years experience" },
  { icon: Users, text: "Trusted by customers across India" },
];

const WhyChooseSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-12 text-center">
          Why Choose SNSC Nursery
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map(({ icon: Icon, text }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-heading text-sm font-semibold text-foreground">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
