import React, { ChangeEvent } from 'react';

interface EmailInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<EmailInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default Input;
