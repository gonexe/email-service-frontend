import React from 'react';

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => (
  <button type="submit">{label}</button>
);

export default SubmitButton;
