import { useState } from 'react';

export const useForm = (
  defaultData: Record<string, string>,
  submitCb: () => void
) => {
  const [formData, setFormData] = useState(defaultData);

  const onChange = (e: React.BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    submitCb();
  };

  return { formData, setFormData, onChange, onSubmit };
};
