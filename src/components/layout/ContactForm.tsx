// Standard libraries
import React, { useContext, useState } from 'react';
// Validation
import { contactSchema } from '@/schemas/contact';
// Hooks
import { useSubmitForm } from "@/hooks/submitForm.hook";
// Components
import Button from '../ui/Button';
import InputField from '../ui/InputField';
// Types
import { CMSFormSection } from '@/types/cms';
// Context
import { LandingContext } from '@/contexts/LandingContext';

const ContactForm: React.FC = () => {
  // Data from LandingContext
  // Find the contact form section from context data
  const contextContactFormData = useContext(LandingContext);
  const contactFormSection = contextContactFormData?.find(section => section.type === 'form') as CMSFormSection;
  
  // State to manage form data and submission status
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const { submitForm } = useSubmitForm();
  
  // Return null if contact form section not found
  if (!contactFormSection) {
    return null;
  }

  const { fields, submission } = contactFormSection.attributes;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
    setIsSubmitting(true);
    
    try {
      // Added 2 second delay to simulate server processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      const result = await submitForm(formData);
      
      if (result.success) {
        setShowSuccess(true);
        const form = e.target as HTMLFormElement;
        form.reset();
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
     <section id={contactFormSection.id} className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

          <form
            onSubmit={handleFormSubmit}
            method={submission?.method}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
            noValidate
          >
            {fields.map((field, idx) => {
              return (
                <InputField 
                  key={idx} 
                  field={field} 
                  value={formData[field.name] || ''}
                  onChange={handleInputChange} 
                  disabled={isSubmitting}
                  error={errors[field.name]}
                />
              );
            })}
            <Button text={isSubmitting ? "Sending..." : "Send Message"} disabled={isSubmitting} fullWidth />
          </form>

          {showSuccess && (
            <div
              id="formSuccess"
              className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
            >
              {submission?.successMessage}
            </div>
          )}

          {showError && (
            <div
              id="formError"
              className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
            >
              {submission?.errorMessage}
            </div>
          )}
        </div>
      </section>
  );
};

export default ContactForm;