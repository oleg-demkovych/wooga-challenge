import React from 'react';

import { FormInput, formHooks } from '.';
import type { TFormData, TFormCallback } from './model';

import './Form.less';

interface IProps {
  onSubmit: TFormCallback;
  formData: TFormData;
}

const Form: React.FC<IProps> = ({ onSubmit, formData }) => {
  const { onChange, handleFormSubmit, values, errors } = formHooks.useForm(onSubmit, formData);

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      {values.map((formElement) => (
        <FormInput
          key={formElement.name}
          name={formElement.name}
          label={formElement?.label}
          value={formElement?.value}
          onChange={onChange}
          errors={errors[formElement.name]}
        />
      ))}
      <button type="submit" className="form__button">
        Send
      </button>
    </form>
  );
};

export default Form;
