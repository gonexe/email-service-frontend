import React, { ChangeEvent } from 'react';

interface EmailTextareaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextArea: React.FC<EmailTextareaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default TextArea;
