import { motion } from "framer-motion";
import { MapPin, Award, Leaf, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: MapPin, title: "Kadiyam Hub", desc: "India's green capital" },
    { icon: Award, title: "20+ Years", desc: "Proven expertise" },
    { icon: Leaf, title: "1000+ Types", desc: "Premium collection" },
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Side: Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592150621344-82841b6f9302?auto=format&fit=crop&q=80" 
                alt="SNSC Nursery Plants" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>
            {/* Decorative minimalist accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-50/80 rounded-xl -z-0" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em]">
              Our Heritage
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 leading-tight mb-6">
              From Kadiyam to Every <span className="text-green-600 italic font-medium">Corner of India</span>
            </h2>
            
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6">
              Located in the legendary botanical hub of Andhra Pradesh, <span className="text-zinc-800 font-medium">SNSC Nursery</span> bridges traditional horticultural wisdom with modern landscape aesthetics. 
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Direct Pan-India Bulk Supply",
                "Customized Landscape Architecture",
                "Expert Garden Development"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-zinc-700 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {item}
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-100">
              {stats.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="font-bold text-zinc-900 text-sm">{title}</p>
                  <p className="text-[10px] md:text-xs text-zinc-400 leading-tight uppercase tracking-wider">{desc}</p>
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