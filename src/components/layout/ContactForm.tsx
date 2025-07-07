// Standard libraries
import React, { useContext } from 'react';
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
  const { submitForm } = useSubmitForm();
  
  // Return null if contact form section not found
  if (!contactFormSection) {
    return null;
  }

  const { fields, submission } = contactFormSection.attributes;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm({});
  };
  return (
     <section id={contactFormSection.id} className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

          <form
            onSubmit={handleFormSubmit}
            method={submission?.method}
            className="bg-gray-50 p-8 rounded-lg shadow-md"
          >
            {fields.map((field, idx) => {
              // For each field in the fields array, render a InputField component
              // Pass the field object as a prop and use the index as the key
              // Use props to pass attributes to input field instead of useContext
              return (
                <InputField key={idx} field={field}/>
              );
            })}

            <Button text="Send Message" fullWidth />

          </form>

          <div
            id="formSuccess"
            className="hidden mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
          >
            {submission?.successMessage}
          </div>

          <div
            id="formError"
            className="hidden mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
          >
            {submission?.errorMessage}
          </div>
        </div>
      </section>
  );
};

export default ContactForm;