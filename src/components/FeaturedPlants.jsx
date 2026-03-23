import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
// Import your assets
import plantThuja from "@/assets/plant-thuja.jpg";
import plantTriangular from "@/assets/plant-triangular.jpg";
import plantRoses from "@/assets/plant-roses.jpg";
import plantCroton from "@/assets/plant-croton.jpg";

const plants = [
  { name: "Golden Thuja", desc: "Vibrant conifer, perfect for ornamental borders.", img: plantThuja },
  { name: "Triangular Shrub", desc: "Geometric topiary ideal for formal gardens.", img: plantTriangular },
  { name: "Signature Roses", desc: "Classic flowering varieties in multiple hues.", img: plantRoses },
  { name: "Variegated Crotons", desc: "Colorful foliage for tropical aesthetics.", img: plantCroton },
];

const FeaturedPlants = () => {
  const whatsappBase = "https://wa.me/919441363466?text=";

  return (
    <section className="py-20 md:py-28 bg-zinc-50/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="flex items-center justify-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-[0.3em] mb-4">
            <Star className="w-3 h-3 fill-current" />
            Spotlight
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Featured <span className="text-green-600 italic font-medium">Varieties</span>
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            A handpicked selection of our most sought-after specimens, nurtured to perfection in Kadiyam.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plants.map(({ name, desc, img }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[1/1] overflow-hidden relative">
                <img 
                  src={img} 
                  alt={name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-md text-zinc-800 uppercase tracking-tighter shadow-sm">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-zinc-900 font-bold text-base mb-2">{name}</h3>
                <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed mb-6 min-h-[32px]">
                  {desc}
                </p>
                
                <motion.a
                  href={`${whatsappBase}${encodeURIComponent(`Hi, I'm interested in the ${name} variety.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest w-full justify-center transition-colors group-hover:bg-green-700"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  Enquiry
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-16 text-center">
          <a href="#categories" className="text-[10px] font-bold text-zinc-400 hover:text-green-600 transition-colors uppercase tracking-[0.2em] border-b border-zinc-200 pb-1">
            View All 1000+ Varieties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;