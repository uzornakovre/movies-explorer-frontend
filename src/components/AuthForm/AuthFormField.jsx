function AuthFormField({ labelText, id, type, error }) {
  return (
    <fieldset className="auth__form-fieldset">
      <label className="auth__form-label" htmlFor={id}>{labelText}</label>
      <input className="auth__form-input" id={id} type={type}></input>
      <span className="auth__form-input-error">{error}</span>
    </fieldset>
  )
}

export default AuthFormField;