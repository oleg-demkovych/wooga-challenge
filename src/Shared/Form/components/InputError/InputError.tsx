import React from 'react';

import type { TFormError } from '../../model';

import './InputError.less';

interface IProps {
  error: TFormError;
}

const InputError: React.FC<IProps> = ({ error }) => <div className="form__error">{error}</div>;

export default InputError;
