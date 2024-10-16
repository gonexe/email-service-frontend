import React, { ChangeEvent, FormEvent, useState } from 'react';
import useSwitchProvider from '../hooks/useSwitchProvider';
import useClearMessages from '../hooks/useClearMessages';
import FormWrapper from './common/FormWrapper';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import SuccessMessage from './common/SuccessMessage';
import Input from './form/Input';
import SubmitButton from './form/SubmitButton';
import { useProviderContext } from '../context/ProviderContext';

const SwitchProvider: React.FC = () => {
  const [provider, setProvider] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSwitchProvider,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  } = useSwitchProvider();
  const { refreshProviders } = useProviderContext();

  useClearMessages(
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProvider(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await handleSwitchProvider(provider, async () => {
      await refreshProviders();
      setProvider('');
    });
    setLoading(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {loading && <LoadingSpinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {successMessage && <SuccessMessage message={successMessage} />}
      <Input
        type="text"
        name="provider"
        placeholder="Provider"
        value={provider}
        onChange={handleChange}
        required
      />
      <SubmitButton label="Switch Provider" />
    </FormWrapper>
  );
};

export default SwitchProvider;
