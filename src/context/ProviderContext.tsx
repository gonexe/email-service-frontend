import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { fetchProviders } from '../services/providerService';
import { ProviderResponse } from 'shared';

interface ProviderContextProps {
  providers: ProviderResponse[];
  loading: boolean;
  error: string | null;
  refreshProviders: () => void;
}

interface ProviderProviderProps {
  children: ReactNode;
}

const ProviderContext = createContext<ProviderContextProps | undefined>(
  undefined,
);

export const ProviderProvider: React.FC<ProviderProviderProps> = ({
  children,
}) => {
  const [providers, setProviders] = useState<ProviderResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProviders = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProviders();
      setProviders(data);
    } catch {
      setError('Failed to fetch providers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProviders();
  }, []);

  return (
    <ProviderContext.Provider
      value={{ providers, loading, error, refreshProviders: getProviders }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export const useProviderContext = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error(
      'useProviderContext must be used within a ProviderProvider',
    );
  }
  return context;
};
