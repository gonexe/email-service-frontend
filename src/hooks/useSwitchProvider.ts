import { useState } from 'react';
import { switchProvider } from '../services/providerService';

const useSwitchProvider = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSwitchProvider = async (name: string, callback?: () => void) => {
    try {
      await switchProvider(name);
      setSuccessMessage('Provider switched successfully');
      setErrorMessage(null);
      if (callback) callback();
    } catch {
      setErrorMessage('Failed to switch provider');
      setSuccessMessage(null);
    }
  };

  return {
    handleSwitchProvider,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  };
};

export default useSwitchProvider;
