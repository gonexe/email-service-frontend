import React from 'react';
import '../../styles/SuccessMessage.css';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => (
  <div className="success-message">{message}</div>
);

export default SuccessMessage;
