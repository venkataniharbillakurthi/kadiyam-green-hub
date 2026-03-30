import { motion } from "framer-motion";
import { MapPin, Leaf, Package, Award, Users, CheckCircle } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Kadiyam Hub", text: "Located in India's botanical capital" },
  { icon: Leaf, title: "1000+ Varieties", text: "Massive inventory of premium species" },
  { icon: Package, title: "Wholesale Rates", text: "Competitive pricing for bulk orders" },
  { icon: Award, title: "Landscape Pros", text: "Expertise spanning over 20+ years" },
  { icon: Users, title: "Trusted Network", text: "Serving happy clients across India" },
  { icon: CheckCircle, title: "Quality First", text: "Nurtured with expert care & soil" },
];

const WhyChooseSection = () => (
  <section className="relative py-20 md:py-28 bg-white overflow-hidden">
    {/* Subtle Background Decoration */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-green-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[10px] font-bold text-green-600 uppercase tracking-[0.3em] mb-4 block">
          The SNSC Advantage
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
          Why Professionals <br className="hidden md:block" />
          <span className="text-zinc-400 font-light italic text-2xl md:text-3xl">Choose Our Nursery</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col items-start gap-4 bg-white border border-zinc-100 p-6 md:p-8 rounded-2xl hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              <Icon className="w-5 h-5" />
            </div>
            
            <div>
              <h4 className="text-zinc-900 font-bold text-sm md:text-base mb-1 tracking-tight">
                {title}
              </h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      
    </div>
  </section>
);

export default WhyChooseSection;