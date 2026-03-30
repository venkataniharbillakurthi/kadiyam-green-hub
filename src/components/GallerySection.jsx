import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera } from "lucide-react";

// Assuming assets are imported correctly as per your setup
import heroImg from "@/assets/hero-nursery.jpg";
import galleryLandscape from "@/assets/gallery-landscape.jpg";
import galleryFlowers from "@/assets/gallery-flowers.jpg";
import galleryRows from "@/assets/gallery-rows.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";
import catFlowers from "@/assets/cat-flowers.jpg";
import catOrnamental from "@/assets/cat-ornamental.jpg";

const images = [
  // Span classes adjusted: col-span-2 on mobile for the hero image to make it pop
  { src: heroImg, alt: "SNSC Nursery Aerial View", span: "col-span-2 md:col-span-2 md:row-span-2" },
  { src: galleryLandscape, alt: "Landscape Project", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { src: galleryFlowers, alt: "Tropical Collection", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { src: galleryRows, alt: "Plant Rows", span: "col-span-1 md:col-span-1 md:row-span-2" },
  { src: galleryGarden, alt: "Garden Development", span: "col-span-1 md:col-span-1 md:row-span-1" },
  { src: catFlowers, alt: "Flower Collection", span: "col-span-2 md:col-span-2 md:row-span-1" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selected]);

  return (
    <section id="gallery" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Section - Reduced margins for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="flex items-center justify-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-[0.3em] mb-3">
            <Camera className="w-3.5 h-3.5" />
            Visual Journey
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight">
            Nursery <span className="text-green-600 italic font-medium">Gallery</span>
          </h2>
          <p className="text-zinc-500 text-[11px] md:text-sm max-w-xs md:max-w-lg mx-auto leading-relaxed">
            Inside our Kadiyam hub: explore the greenery we deliver across the country.
          </p>
        </motion.div>

        {/* Bento Grid Gallery - Adjusted for Mobile (2 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 auto-rows-[140px] md:auto-rows-[180px]">
          {images.map(({ src, alt, span }, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setSelected(src)}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-100 shadow-sm transition-all active:scale-[0.98] ${span}`}
            >
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                loading="lazy" 
              />
              
              {/* Mobile Hint (Visible by default on small screens, hover on large) */}
              <div className="absolute inset-0 bg-zinc-950/20 md:bg-zinc-950/40 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-full border border-white/20 scale-75 md:scale-100">
                  <Maximize2 className="w-4 h-4 md:w-5 h-5 text-white" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Premium Lightbox Overlay */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-zinc-950/98 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelected(null)}
          >
            {/* Close Button - Larger and higher for Mobile thumb reach */}
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/40 hover:text-white transition-colors p-2"
            >
              <X className="w-7 h-7 md:w-9 md:h-9" />
            </button>
            
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              src={selected}
              alt="Full view"
              className="max-w-full max-h-[80vh] md:max-h-full object-contain rounded-lg md:rounded-xl"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-10 text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              Tap to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;