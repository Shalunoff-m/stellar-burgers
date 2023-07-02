import { useState } from 'react';

export const useForm = (defaultData: any, submitCb: any) => {
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
