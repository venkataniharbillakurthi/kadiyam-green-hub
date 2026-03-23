import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => (
  <>
    <motion.a
      href="https://wa.me/919441363466?text=Hi%2C%20I'm%20interested%20in%20your%20plants%20from%20SNSC%20Nursery"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="md:flex fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-elevated items-center justify-center"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>

    
  </>
);

export default FloatingActions;
