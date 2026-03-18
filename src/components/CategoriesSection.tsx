import { motion } from "framer-motion";
import catFlowers from "@/assets/cat-flowers.jpg";
import catOrnamental from "@/assets/cat-ornamental.jpg";
import catFruit from "@/assets/cat-fruit.jpg";
import catIndoor from "@/assets/cat-indoor.jpg";
import catMedicinal from "@/assets/cat-medicinal.jpg";
import catAvenue from "@/assets/cat-avenue.jpg";

const categories = [
  { name: "Flower Plants", img: catFlowers },
  { name: "Ornamental Plants", img: catOrnamental },
  { name: "Fruit Plants", img: catFruit },
  { name: "Indoor Plants", img: catIndoor },
  { name: "Medicinal Plants", img: catMedicinal },
  { name: "Avenue Trees", img: catAvenue },
];

const CategoriesSection = () => {
  const whatsappBase = "https://wa.me/919441363466?text=";

  return (
    <section id="categories" className="section-padding bg-surface">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4 text-center">
            Plant Categories
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Browse our extensive collection — enquire for availability and bulk pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map(({ name, img }, i) => (
            <motion.a
              key={name}
              href={`${whatsappBase}${encodeURIComponent(`Hi, I'm interested in ${name} from SNSC Nursery`)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl overflow-hidden shadow-card aspect-square"
            >
              <img
                src={img}
                alt={`${name} at Kadiyam nursery`}
                className="w-full h-full object-cover transition-transform duration-[800ms]"
                style={{ transitionTimingFunction: "var(--easing)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent group-hover:from-foreground/80 transition-colors" />
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-[800ms]" style={{ transitionTimingFunction: "var(--easing)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-heading text-primary-foreground font-semibold text-base sm:text-lg">
                  {name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
