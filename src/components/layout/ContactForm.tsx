// Standard libraries
import React from 'react';
// Hooks
import { useSubmitForm } from "@/hooks/submitForm.hook";
// Components
import Button from '../ui/Button';
import InputField from '../ui/InputField';
// Types
import { CMSFormSection } from '@/types/cms';

interface ContactFormProps {
  section: CMSFormSection
}

const ContactForm: React.FC<ContactFormProps> = ({ section }) => {
  const { fields, submission } = section.attributes;
  const { submitForm } = useSubmitForm();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm({});
  };
  return (
     <section id={section.id} className="py-16 px-4 bg-white">
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