// Standard libraries
import React from 'react';
// Types
import { InputField } from '@/types/cms';

interface FormInputFieldProps {
  field: InputField
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const FormInputField: React.FC<FormInputFieldProps> = ({ field, value, onChange, disabled=false }) => {
  const { validation, styling } = field;

  // Prepare validation attributes for input/textarea elements
  const validationProps: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = {
    required: validation?.required,
    minLength: validation?.minLength,
    maxLength: validation?.maxLength,
    pattern: validation?.pattern?.toString()
  };

  const commonProps = {
    id: field?.name,
    name: field?.name,
    value,
    onChange,
    placeholder: styling?.placeholder,
    disabled,
    ...validationProps
  };

  const inputClassName = `w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    disabled ? 'text-gray-400 select-none' : 'text-gray-700'
  } ${styling?.className || ''}`;

  return (
    <div className="mb-6">
      <label
        htmlFor={field?.name}
        className="block text-gray-700 font-medium mb-2"
      >
        {field.label}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          {...commonProps}
          rows={4}
          className={inputClassName}
        />
      ) : (
        <input
          {...commonProps}
          type={field.type}
          className={inputClassName}
        />
      )}
      
    </div>
  );
};

export default FormInputField;