import React from 'react';
import useProviders from '../hooks/useProviders';
import useSwitchProvider from '../hooks/useSwitchProvider';
import useClearMessages from '../hooks/useClearMessages';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import SuccessMessage from './common/SuccessMessage';
import '../styles/ProviderList.css';

const ProviderList: React.FC = () => {
  const { providers, loading, error, refreshProviders } = useProviders();
  const {
    handleSwitchProvider,
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  } = useSwitchProvider();

  useClearMessages(
    successMessage,
    errorMessage,
    setSuccessMessage,
    setErrorMessage,
  );

  const handleSwitch = async (providerName: string) => {
    await handleSwitchProvider(providerName);
    await refreshProviders();
  };

  return (
    <div className="provider-list-container">
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {successMessage && <SuccessMessage message={successMessage} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <table className="provider-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.name}>
              <td>{provider.name}</td>
              <td>{provider.active ? 'Active' : 'Inactive'}</td>
              <td>
                {!provider.active && (
                  <button
                    className="provider-list-button"
                    onClick={() => handleSwitch(provider.name)}
                  >
                    Switch
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(ProviderList);
