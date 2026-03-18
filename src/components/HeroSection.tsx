import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-nursery.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/919441363466?text=Hi%2C%20I'm%20interested%20in%20your%20plants%20from%20SNSC%20Nursery";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="SNSC Nursery aerial view of plant rows in Kadiyam" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-heading text-accent text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
            Kadiyam – India's Largest Nursery Hub
          </p>
          <h1 className="font-display text-primary-foreground text-balance leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Direct from Kadiyam: Premium Plants & Landscape Services
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            All kinds of plants available · Bulk supply across India · 20+ years of horticultural expertise
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:9441363466"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-heading text-base font-semibold shadow-elevated transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-xl font-heading text-base font-semibold shadow-elevated transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
