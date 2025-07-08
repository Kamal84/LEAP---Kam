// Standard libraries
import React from 'react';

interface ButtonProps {
  text: string
  fullWidth?: boolean
  className?: string
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, fullWidth = false, className, disabled=false}) => {
  return (
   <button
        type="submit"
        className={`${
          disabled 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white font-medium py-3 rounded-lg transition duration-300 px-6 ${className} ${fullWidth && 'w-full'}`}
        disabled={disabled}
    >
        { text}
    </button>
  );
};

export default Button;