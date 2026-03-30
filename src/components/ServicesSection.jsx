import { motion } from "framer-motion";
import { Package, Sprout, ShieldCheck, Truck, ArrowUpRight } from "lucide-react";

const services = [
  { 
    icon: Sprout, 
    title: "Bulk Supply", 
    desc: "Direct access to 1000+ premium species from Kadiyam's fertile silt." 
  },
  { 
    icon: ShieldCheck, 
    title: "Quality Care", 
    desc: "Hand-inspected root systems ensuring 99% survival rates post-transit." 
  },
  { 
    icon: Package, 
    title: "Safe Packing", 
    desc: "Specialized climate-controlled packaging for long-distance hauls." 
  },
  { 
    icon: Truck, 
    title: "Fast Logistics", 
    desc: "Dedicated transport network delivering to every corner of India." 
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-32 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      
      {/* Header - Mobile Optimized Typography */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left md:text-center mb-12 md:mb-24"
      >
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.3em]">
          Our Expertise
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight">
          Nurturing India's <br className="md:hidden" />
          <span className="text-green-600 italic font-medium">Green Future</span>
        </h2>
        <p className="text-zinc-500 text-[11px] md:text-sm max-w-md md:mx-auto leading-relaxed">
          Standardizing plant procurement with Kadiyam's heritage and modern logistics.
        </p>
      </motion.div>

      {/* Grid - 2 columns on mobile for better scannability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-zinc-50/50 border border-zinc-100 p-6 md:p-10 rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-green-900/5 hover:border-green-100 transition-all duration-500"
          >
            {/* Minimalist Icon */}
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-500 shadow-sm">
              <Icon strokeWidth={1.5} className="w-5 h-5" />
            </div>

            {/* Content - Scaled down for Minimalist look */}
            <h3 className="text-zinc-900 font-bold text-sm md:text-base mb-2 tracking-tight flex items-center justify-between uppercase">
              {title}
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </h3>
            <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed max-w-[200px]">
              {desc}
            </p>

            {/* Subtle Highlight line */}
            <div className="absolute top-0 right-0 h-0 w-[1px] bg-green-100 transition-all duration-500 group-hover:h-full rounded-r-2xl" />
          </motion.div>
        ))}
      </div>

      
    </div>
  </section>
);

export default ServicesSection;