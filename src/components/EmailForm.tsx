import React from 'react';
import useEmailForm from '../hooks/useEmailForm';
import useClearMessages from '../hooks/useClearMessages';
import FormWrapper from './common/FormWrapper';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import SuccessMessage from './common/SuccessMessage';
import Input from './form/Input';
import TextArea from './form/TextArea';
import SubmitButton from './form/SubmitButton';
import '../styles/EmailForm.css';

const EmailForm: React.FC = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
    setError,
    setSuccess,
  } = useEmailForm();

  useClearMessages(success, error, setSuccess, setError);

  return (
    <FormWrapper onSubmit={handleSubmit} role="form">
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}
      <Input
        type="email"
        name="to"
        placeholder="To"
        value={formData.to}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <TextArea
        name="text"
        placeholder="Text"
        value={formData.text}
        onChange={handleChange}
      />
      <TextArea
        name="html"
        placeholder="HTML"
        value={formData.html}
        onChange={handleChange}
      />
      <SubmitButton label="Send Email" />
    </FormWrapper>
  );
};

export default EmailForm;
