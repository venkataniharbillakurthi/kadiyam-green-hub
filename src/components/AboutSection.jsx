import { motion } from "framer-motion";
import { MapPin, Award, Leaf, Truck } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: MapPin, title: "Kadiyam Hub", desc: "India's green capital" },
    { icon: Award, title: "20+ Years", desc: "Expert Horticulture" },
    { icon: Truck, title: "Export Ready", desc: "Pan-India delivery" },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden text-left mb-10">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em]">
            The Hub of Excellence
          </span>
          <h2 className="font-display text-2xl font-bold text-zinc-900 leading-tight mb-6">
            Premium Plants Exported <br />
            <span className="text-green-600 italic font-medium text-xl">Across Every Corner of India</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Visual Element - Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:order-1 mt-8 lg:mt-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-zinc-100">
              <img 
                src="https://res.cloudinary.com/dhzhuobu2/image/upload/v1774880666/Screenshot_2026-03-30_195355_cyxx2m.png" 
                alt="SNSC Nursery Bulk Plant Export" 
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
              />
            </div>
            {/* Minimalist Accents */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-50 rounded-2xl -z-0" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-green-100 rounded-lg -z-0" />
          </motion.div>

          {/* Text Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:order-2"
          >
            {/* Desktop Header (Hidden on Mobile) */}
            <div className="hidden md:block">
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em]">
                The Hub of Excellence
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-zinc-900 leading-tight mb-6">
                Premium Plants Exported <br className="hidden md:block" />
                <span className="text-green-600 italic font-medium text-xl md:text-3xl">Across Every Corner of India</span>
              </h2>
            </div>
            
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 mt-10 md:mt-0">
              Rooted in the nutrient-rich soils of <span className="text-zinc-800 font-semibold text-sm">Kadiyam</span>, SNSC Nursery is a leading bulk supplier of all plant species. We specialize in safe packaging and nationwide shipping, delivering Kadiyam’s finest greenery to homeowners and commercial projects across India.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Direct Pan-India Bulk Export",
                "1000+ Varieties of Indoor & Outdoor Plants",
                "Verified Quality & Robust Root Systems",
                "Reliable Nationwide Logistics Network"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700 text-xs md:text-sm font-medium">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* Stats Grid - Optimized for Small Screens */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 pt-6 border-t border-zinc-100">
              {stats.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="font-bold text-zinc-900 text-[11px] md:text-sm">{title}</p>
                  <p className="text-[9px] md:text-xs text-zinc-400 leading-tight uppercase tracking-wider">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;