import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => (
  <>
    {/* Desktop: WhatsApp FAB */}
    <motion.a
      href="https://wa.me/919441363466?text=Hi%2C%20I'm%20interested%20in%20your%20plants%20from%20SNSC%20Nursery"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-elevated items-center justify-center"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>

    {/* Mobile: Sticky bottom bar */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-elevated">
      <a
        href="tel:9441363466"
        className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-heading text-sm font-semibold"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href="https://wa.me/919441363466?text=Hi%2C%20I'm%20interested%20in%20your%20plants%20from%20SNSC%20Nursery"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground py-4 font-heading text-sm font-semibold"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  </>
);

export default FloatingActions;
