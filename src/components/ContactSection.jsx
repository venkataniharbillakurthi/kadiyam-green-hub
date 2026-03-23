import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name} from ${form.location}. Phone: ${form.phone}. Requirement: ${form.requirement}`;
    window.open(`https://wa.me/919441363466?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-4 text-center">
            Get in Touch
          </h2>
          <p className="font-body text-primary-foreground/80 text-center mb-10">
            Bulk orders, landscape consultations, or plant enquiries — we'd love to hear from you.
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <p className="font-heading text-xl text-primary-foreground font-semibold">Thank you! We'll connect with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 font-body focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 font-body focus:outline-none focus:ring-2 focus:ring-accent tabular-nums"
              />
              <input
                type="text"
                placeholder="Your Location"
                required
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 font-body focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                placeholder="Your Requirement (e.g., 500 ornamental plants for landscaping project)"
                rows={4}
                required
                value={form.requirement}
                onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-semibold"
                >
                  <Send className="w-4 h-4" />
                  Submit via WhatsApp
                </motion.button>
                <motion.a
                  href="https://wa.me/919441363466?text=Hi%2C%20I'm%20interested%20in%20your%20plants%20from%20SNSC%20Nursery"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground px-6 py-3 rounded-lg font-heading font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </motion.a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
