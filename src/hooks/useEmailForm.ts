import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { sendEmail } from '../services/emailService';
import { EmailData } from 'shared';
import useDebounce from './useDebounce';
import useFormValidation from './useFormValidation';

const useEmailForm = () => {
  const [formData, setFormData] = useState<EmailData>({
    to: '',
    subject: '',
    text: '',
    html: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const debouncedFormData = useDebounce(formData, 300);
  const { validateForm, validationError } =
    useFormValidation(debouncedFormData);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log('Form data updated:', {
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData],
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await sendEmail(formData);
      setSuccess('Email sent successfully');
      console.log('Email sent successfully');
      resetForm();
    } catch (err) {
      const errorMessage =
        (err as { message?: string }).message || 'Failed to send email';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ to: '', subject: '', text: '', html: '' });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useEmailForm;
