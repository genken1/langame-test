import { FormEventHandler, useRef } from 'react';

export type FormValidateFunction = (value: FormDataEntryValue | null) => string;

interface IFormRef {
  [name: string]: {
    validate: FormValidateFunction
  };
}

export interface IFormErrors {
  [name: string]: string;
}

export interface OnSubmitData {
  [key: string]: FormDataEntryValue | null;
}

export const useForm = () => {
  const refs =  useRef<IFormRef>({})
  const errorsRef = useRef<IFormErrors>({})

  const register = (name: string, validate: FormValidateFunction) => {
    refs.current[name] = {
      validate
    }
    return { name }
  }

  const handleSubmit = (onSubmit: (data: OnSubmitData, hasErrors: boolean, errors: IFormErrors) => void) => {
    const callback: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault()
      const form = event.target as HTMLFormElement;
      onSubmit(
        Object.entries(refs.current).reduce((acc, [fieldName, input]) => {
          if (input) {
            acc[fieldName] = form[fieldName].value
            errorsRef.current[fieldName] = input.validate(form[fieldName].value)
          }
          return acc
        }, {} as OnSubmitData),
        Object.entries(errorsRef.current).some(([, value]) => value !== ''),
        errorsRef.current
      )
    }
    return callback
  }

  return {
    handleSubmit,
    register,
  }
}
