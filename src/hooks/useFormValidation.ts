import { EmailData } from 'shared';
import { useState } from 'react';

const useFormValidation = (formData: EmailData) => {
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateForm = () => {
    if (!formData.to) {
      setValidationError('Recipient email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.to)) {
      setValidationError('Recipient email is invalid');
      return false;
    }
    if (!formData.subject) {
      setValidationError('Subject is required');
      return false;
    }
    if (!formData.text && !formData.html) {
      setValidationError('Either text or HTML content is required');
      return false;
    }
    setValidationError(null);
    return true;
  };

  return { validateForm, validationError };
};

export default useFormValidation;
