import { useEffect } from 'react';

const useClearMessages = (
  success: string | null,
  error: string | null,
  setSuccess: (value: string | null) => void,
  setError: (value: string | null) => void,
) => {
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, error, setSuccess, setError]);
};

export default useClearMessages;
