import React, { FormEvent } from 'react';

interface FormWrapperProps {
  onSubmit: (e: FormEvent) => void;
  children: React.ReactNode;
  role?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  onSubmit,
  children,
  role,
}) => (
  <form onSubmit={onSubmit} role={role}>
    {children}
  </form>
);

export default FormWrapper;
