// Components
import ContactForm from "@/components/layout/ContactForm";
import FeatureGrid from "@/components/layout/FeatureGrid";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

const Landing: React.FC = () => {

  return (
    <>
      <Hero id="hero-section" />
      <FeatureGrid id="feature-grid" />    
      <ContactForm id="contact-form" />     
      <Footer />
    </>
  );
};

export default Landing;
