// Data
import { cmsData } from "@/data/cms.data";
// Types
import { CMSSection } from "@/types/cms";
// Components
import ContactForm from "@/components/layout/ContactForm";
import FeatureGrid from "@/components/layout/FeatureGrid";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";


const Landing: React.FC = () => {

  // This function takes a CMSSection object and returns the appropriate React component
  // based on the section's type. Each section type maps to a specific component.    
  const renderCmsSection = (section: CMSSection) => {
    switch (section.type) {
      case 'hero':
        return <Hero key={section.id} section={section} />;
      case 'grid':
        return <FeatureGrid key={section.id} section={section} />;
      case 'form':
        return <ContactForm key={section.id} section={section} />;
      default:
        return null;
    }
  };

  return (
    <>
      {cmsData.map(renderCmsSection)}
      <Footer />
    </>
  );
};

export default Landing;
