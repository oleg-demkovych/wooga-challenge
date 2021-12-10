// Error props
export type TFormError = string;
export type TFormErrors = TFormError[];

// Validation props
export type TInputValidation = {
  type: string; // Add all yup types
  params: (string | number)[]; // Yup validation params and error message
};

// Input props
export type TInputTypes = 'text'; // TODO: Add more types
export type TInputValue = string | number; // TODO: Add specific input value types depends on input type

// Form onSubmit callback
export type TFormCallback = (data: TFormResponseData) => void;

// Basic form data model
export type TFormResponseData = { [key: string]: unknown }[];
export type TFormData = TFormDataEntity[];
export type TFormDataEntity = {
  name: string;
  label?: string;
  value?: TInputValue;
  validationType?: string; // TODO: Add yup types
  validations?: TInputValidation[];
};
