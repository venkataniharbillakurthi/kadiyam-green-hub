import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedPlants from "@/components/FeaturedPlants";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CategoriesSection />
      <FeaturedPlants />
      <GallerySection />
      <WhyChooseSection />
      <ContactSection />
      <MapSection />
    </main>
    <Footer />
    <FloatingActions />
  </>
);

export default Index;
