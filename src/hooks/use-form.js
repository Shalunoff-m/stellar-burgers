import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const useForm = (defaultData, submitCb) => {
  const [formData, setFormData] = useState(defaultData);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitCb();
  };

  return { formData, setFormData, onChange, onSubmit };
};
