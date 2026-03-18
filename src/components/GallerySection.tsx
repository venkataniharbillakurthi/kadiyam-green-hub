import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-nursery.jpg";
import galleryLandscape from "@/assets/gallery-landscape.jpg";
import galleryFlowers from "@/assets/gallery-flowers.jpg";
import galleryRows from "@/assets/gallery-rows.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";
import catFlowers from "@/assets/cat-flowers.jpg";
import catOrnamental from "@/assets/cat-ornamental.jpg";

const images = [
  { src: heroImg, alt: "SNSC Nursery aerial view" },
  { src: galleryLandscape, alt: "Landscape project by SNSC" },
  { src: galleryFlowers, alt: "Close-up tropical flowers" },
  { src: galleryRows, alt: "Plant rows in nursery" },
  { src: galleryGarden, alt: "Garden development project" },
  { src: catFlowers, alt: "Colorful flower plants" },
  { src: catOrnamental, alt: "Ornamental plants collection" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-surface">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4 text-center">
            Gallery
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A glimpse of our nursery, landscape projects, and plant collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map(({ src, alt }, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => setSelected(src)}
              className={`growth-image rounded-xl overflow-hidden shadow-card ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img src={src} alt={alt} className="w-full h-full object-cover aspect-square" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-primary-foreground p-2">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
