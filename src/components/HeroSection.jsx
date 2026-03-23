import { motion } from "framer-motion";
import { MessageCircle, ChevronRight, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-nursery.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/919441363466?text=Hi%2C%20I'm%20interested%20in%20your%20plants%20from%20SNSC%20Nursery";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Optimized Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImg} 
          alt="SNSC Nursery Kadiyam Hub" 
          className="w-full h-full object-cover opacity-70 scale-105 animate-slow-zoom" 
          loading="eager" 
        />
        {/* Subtle vignette for focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-zinc-950" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Refined Badge */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
          >
            
            <span>Kadiyam's Premier Plant Hub</span>
          </motion.div>

          {/* Heading - Elegant & Balanced */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-white text-balance font-bold leading-[1.2] mb-6 drop-shadow-lg"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.25rem)" }}
          >
            SNSC Nursery <br className="hidden md:block" />
            <span className="font-light opacity-80">Premium Greenery & Landscaping</span>
          </motion.h1>

          {/* Clean Description */}
          <motion.p 
            variants={itemVariants}
            className="font-body text-gray-300 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed px-2"
          >
            Experience the heritage of Kadiyam greenery. We bring the nursery to you with pan-India bulk shipping and a diverse range of 1,000+ varieties to bring any landscape vision to life.
          </motion.p>

          
        </motion.div>
      </div>

      {/* Subtle bottom fade to transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;