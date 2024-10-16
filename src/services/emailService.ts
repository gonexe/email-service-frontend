import axios from 'axios';
import { EmailData } from 'shared';
import envVars from '../config/validateEnv';

const backendUrl = envVars.REACT_APP_BACKEND_URL;
const apiUrl = `${backendUrl}/api/email/send`;

export const sendEmail = async (data: EmailData) => {
  try {
    await axios.post(apiUrl, data);
  } catch (error) {
    const err = error as { response?: { data?: { message?: string } } };
    throw new Error(err.response?.data?.message || 'Failed to send email');
  }
};
