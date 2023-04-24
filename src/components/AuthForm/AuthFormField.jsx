function AuthFormField({ labelText, name, type, formData, page, placeholder }) {
  return (
    <fieldset className="auth__form-fieldset">
      <label className="auth__form-label" htmlFor={`${page}_${name}`}>{labelText}</label>
      <input className={`auth__form-input auth__form-input_type_${name} ${
                   formData.errors[name] && 'auth__form-input_error'   
                 }`}
             name={name}
             id={`${page}_${name}`}
             type={type}
             onChange={formData.handleChange}
             value={formData.values[name] || ''}
             minLength={2}
             maxLength={40}
             required
             placeholder={placeholder}
      ></input>
      <span className={`auth__form-input-error`}>{formData.errors[name]}</span>
    </fieldset>
  )
}

export default AuthFormField;