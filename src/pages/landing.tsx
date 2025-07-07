// Data
import { cmsData } from "@/data/cms.data";
// Types
import { CMSSection } from "@/types/cms";
// Components
import ContactForm from "@/components/layout/ContactForm";
import FeatureGrid from "@/components/layout/FeatureGrid";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
// Context
import { LandingContext } from "@/contexts/LandingContext";
// React
import { useContext } from "react";


const LandingContent: React.FC = () => {
  // Use context to get CMS data
  const contextData = useContext(LandingContext);
  
  // This function takes a CMSSection object and returns the appropriate React component
  // based on the section's type. Each section type maps to a specific component.    
  const renderCmsSection = (section: CMSSection) => {
    switch (section.type) {
      case 'hero':
        return <Hero key={section.id} />;
      case 'grid':
        return <FeatureGrid key={section.id} />;
      case 'form':
        return <ContactForm key={section.id} />;
      default:
        return null;
    }
  };

  return (
    <>
      {contextData?.map(renderCmsSection)}
      <Footer />
    </>
  );
};

const Landing: React.FC = () => {
  return (
    <LandingContext.Provider value={cmsData}>
      <LandingContent />
    </LandingContext.Provider>
  );
};

export default Landing;
