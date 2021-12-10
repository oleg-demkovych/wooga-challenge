import React, { memo } from 'react';
import cx from 'classnames';

import { InputError } from '../../';
import type { TInputValue, TInputTypes, TFormErrors } from '../../model';

import './FormInput.less';

interface IProps {
  value?: TInputValue;
  type?: TInputTypes;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  errors?: TFormErrors;
}

const FormInput: React.FC<IProps> = ({ label, type = 'text', name, value = '', onChange, errors }) => (
  <div
    className={cx('form__input', {
      'form__input--has-value': !!value,
      'form__input--has-error': errors && errors?.length,
    })}
  >
    <input type={type} name={name} value={value} onChange={onChange} id={name} autoComplete="off" />
    <label htmlFor={name}>{label}</label>

    {errors && errors?.length && errors.map((err, i) => <InputError error={err} key={i} />)}
  </div>
);

export default memo(FormInput);
