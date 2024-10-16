import axios from 'axios';
import envVars from '../config/validateEnv';
import { ProviderResponse } from 'shared';

const backendUrl = envVars.REACT_APP_BACKEND_URL;

export const fetchProviders = async (): Promise<ProviderResponse[]> => {
  const apiUrl = `${backendUrl}/api/providers`;
  const response = await axios.get(apiUrl);
  return response.data;
};

export const switchProvider = async (provider: string): Promise<void> => {
  const apiUrl = `${backendUrl}/api/providers/switch`;
  try {
    await axios.put(apiUrl, { provider });
  } catch (error) {
    console.error('Failed to switch provider', error);
    throw error;
  }
};
