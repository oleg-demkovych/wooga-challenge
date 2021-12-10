import React, { useState } from 'react';

import { Form } from 'Shared';
import type { TFormResponseData } from 'Shared/Form/model';

const data = [
  {
    name: 'firstName',
    label: 'First Name',
    validationType: 'string',
    validations: [
      {
        type: 'max',
        params: [5, 'Max value reached'],
      },
      {
        type: 'min',
        params: [1, 'Min value reached'],
      },
      {
        type: 'required',
        params: ['Field is required'],
      },
    ],
  },
  {
    name: 'lastName',
    label: 'Last Name',
    value: '',
  },
];

const App: React.FC = () => {
  const [formData, setFormData] = useState<TFormResponseData | null>(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} formData={data} />
      {formData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </>
  );
};

export default App;
