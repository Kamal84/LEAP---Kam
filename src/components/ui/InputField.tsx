// Standard libraries
import React from 'react';
// Types
import { InputField } from '@/types/cms';

interface FormInputFieldProps {
  field: InputField
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormInputField: React.FC<FormInputFieldProps> = ({ field, value, onChange }) => {
  const { validation, styling } = field;

  // Prepare validation attributes for input/textarea elements
  const validationProps: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {
    required: validation?.required,
    minLength: validation?.minLength,
    maxLength: validation?.maxLength,
    pattern: validation?.pattern?.toString()
  };

  return (
    <div className="mb-6">
      <label
        htmlFor={field?.name}
        className="block text-gray-700 font-medium mb-2"
      >
        { field.label }
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field?.name}
          name={field?.name}
          value={value}
          onChange={onChange}
          placeholder={styling?.placeholder}
          rows={4}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${styling?.className}`}
          {...validationProps}
          />
      ) : (
        <input
          type={field.type}
          id={field?.name}
          name={field?.name}
          value={value}
          onChange={onChange}
          placeholder={styling?.placeholder}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${styling?.className}`}
          {...validationProps} 
        />
      )}
      
    </div>
  );
};

export default FormInputField;