import { useState } from 'react';

import type { TFormData, TFormCallback } from '../model';
import { getValidationSchema, formatFormInputValues, formatFormResponseData, formatErrorsFromSchema } from '../helpers';

const useForm = (callback: TFormCallback, initialState: TFormData) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value: inputValue } = event.target;

    setValues(formatFormInputValues(values, inputName, inputValue));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Format form response key-value pairs array
    const formResponseData = formatFormResponseData(values);

    // Generate validation schema
    const formSchema = getValidationSchema(values);

    // Check if form is valid
    const isFormValid = await formSchema.isValid(formResponseData, {
      abortEarly: false, // Prevent aborting validation after first error
    });

    if (isFormValid) {
      setErrors({});
      callback(formResponseData);
    } else {
      // check what fields are incorrect
      formSchema.validate(formResponseData, { abortEarly: false }).catch((err) => {
        const errors = formatErrorsFromSchema(err);

        setErrors((prevErrors) => ({ ...prevErrors, ...errors }));
      });
    }
  };

  return {
    onChange,
    handleFormSubmit,
    values,
    errors,
  };
};

export default useForm;
