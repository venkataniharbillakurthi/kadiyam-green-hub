import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// Import assets as per your project structure
import catFlowers from "@/assets/cat-flowers.jpg";
import catOrnamental from "@/assets/cat-ornamental.jpg";
import catFruit from "@/assets/cat-fruit.jpg";
import catIndoor from "@/assets/cat-indoor.jpg";
import catMedicinal from "@/assets/cat-medicinal.jpg";
import catAvenue from "@/assets/cat-avenue.jpg";

const categories = [
  { name: "Flower Plants", img: catFlowers, count: "Seasonal Blooms" },
  { name: "Ornamental", img: catOrnamental, count: "Exotic Greenery" },
  { name: "Fruit Plants", img: catFruit, count: "Organic Yield" },
  { name: "Indoor Plants", img: catIndoor, count: "Interior Decor" },
  { name: "Medicinal", img: catMedicinal, count: "Natural Healing" },
  { name: "Avenue Trees", img: catAvenue, count: "Urban Greenery" },
];

const CategoriesSection = () => {
  const whatsappBase = "https://wa.me/919441363466?text=";

  return (
    <section id="categories" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-[0.3em] mb-3 block">
            The Collection
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Our Botanical <span className="text-green-600 italic font-medium">Categories</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Direct bulk inventory from Kadiyam. Explore our curated selection of 1000+ species for every landscape need.
          </p>
        </motion.div>

        {/* Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.map(({ name, img, count }, i) => (
            <motion.a
              key={name}
              href={`${whatsappBase}${encodeURIComponent(`Hi, I'm interested in ${name} from SNSC Nursery`)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100 shadow-sm"
            >
              {/* Image with slower, smoother zoom */}
              <img
                src={img}
                alt={`${name} at Kadiyam`}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay: Darker at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {count}
                    </p>
                    <h3 className="font-display text-white font-bold text-base md:text-lg tracking-wide">
                      {name}
                    </h3>
                  </div>
                  
                  {/* Subtle Call-to-Action Circle */}
                  <div className="h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
            Click a category to enquire on WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;