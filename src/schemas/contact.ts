import * as yup from 'yup';

export const contactSchema = yup.object({
  fullName: yup
    .string()
    .required('Full Name is required')
    .min(2, 'Full Name must be at least 2 characters')
    .max(50, 'Full Name must not exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters'),
});

export type ContactFormData = yup.InferType<typeof contactSchema>;
