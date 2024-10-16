import { useProviderContext } from '../context/ProviderContext';

const useProviders = () => {
  return useProviderContext();
};

export default useProviders;
