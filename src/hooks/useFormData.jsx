import { useState } from 'react';

function useFormValues() {
  const [values,  setValues ] = useState({});
  const [errors,  setErrors ] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const { value, name, changed } = evt.target;

    setValues({
      ...values,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: evt.target.validationMessage
    })

    if (changed !== 0) {
      console.log(0)
      setIsValid(evt.target.closest('form').checkValidity());
    } else setIsValid(false);
  }

  function resetFormValues() {
    setValues({});
    setErrors({});
    setIsValid(false);
  }


  return { values, errors, isValid, handleChange, setValues, setIsValid, resetFormValues }
}

export default useFormValues;