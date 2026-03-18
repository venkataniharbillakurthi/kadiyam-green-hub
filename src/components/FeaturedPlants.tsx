import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import plantThuja from "@/assets/plant-thuja.jpg";
import plantTriangular from "@/assets/plant-triangular.jpg";
import plantRoses from "@/assets/plant-roses.jpg";
import plantCroton from "@/assets/plant-croton.jpg";

const plants = [
  { name: "Golden Thuja", desc: "Vibrant golden conifer, perfect for hedging and ornamental borders", img: plantThuja },
  { name: "Triangular Plant", desc: "Geometric topiary shrub ideal for formal gardens and entrances", img: plantTriangular },
  { name: "Roses", desc: "Classic flowering roses in multiple colors for every garden", img: plantRoses },
  { name: "Crotons", desc: "Colorful variegated foliage plant for tropical landscapes", img: plantCroton },
];

const FeaturedPlants = () => {
  const whatsappBase = "https://wa.me/919441363466?text=";

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4 text-center">
            Featured Plants
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Some of our most popular varieties — enquire for availability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map(({ name, desc, img }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl shadow-card overflow-hidden group hover:-translate-y-1 transition-transform duration-200"
              style={{ transitionTimingFunction: "var(--easing)" }}
            >
              <div className="growth-image aspect-square">
                <img src={img} alt={name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-1">{name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">{desc}</p>
                <motion.a
                  href={`${whatsappBase}${encodeURIComponent(`Hi, I want to enquire about ${name} from SNSC Nursery`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-heading text-sm font-semibold w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
