import { motion } from "framer-motion";
import { Palette, Sprout, TreePine, Truck, ArrowUpRight } from "lucide-react";

const services = [
  { 
    icon: Palette, 
    title: "Landscape Design", 
    desc: "Bespoke architecture for residential and commercial estates." 
  },
  { 
    icon: Sprout, 
    title: "Bulk Plant Supply", 
    desc: "Access 1000+ premium varieties directly from Kadiyam." 
  },
  { 
    icon: TreePine, 
    title: "Garden Development", 
    desc: "End-to-end planning, planting, and curated maintenance." 
  },
  { 
    icon: Truck, 
    title: "Pan-India Logistics", 
    desc: "Secure nationwide shipping with professional plant care." 
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-zinc-50/50">
    <div className="max-w-6xl mx-auto px-6 lg:px-10">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20"
      >
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-[0.2em]">
          Our Expertise
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Professional <span className="text-green-600 italic font-medium">Green Solutions</span>
        </h2>
        <p className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Beyond a nursery — we are architects of nature, providing end-to-end botanical and landscaping excellence.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-white border border-zinc-200/60 p-8 rounded-2xl hover:shadow-xl hover:shadow-green-900/5 hover:border-green-200 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>

            {/* Content */}
            <h3 className="text-zinc-900 font-bold text-lg mb-3 flex items-center justify-between">
              {title}
              <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-green-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-4">
              {desc}
            </p>

            {/* Subtle Hover Decoration */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-300 group-hover:w-full rounded-b-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Trust Quote */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.3em]">
          Trusted by Homeowners & Architects Nationwide
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;