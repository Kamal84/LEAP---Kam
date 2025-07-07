// Standard libraries
import React from 'react';

interface ButtonProps {
  text: string
  fullWidth?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, fullWidth = false, className}) => {
  
  return (
   <button
        type="submit"
        className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 px-6 ${className} ${fullWidth && 'w-full'}`}
    >
        { text}
    </button>
  );
};

export default Button;