import AuthForm from '../AuthForm/AuthForm';

function Register({ formData }) {
  return (
    <>
      <AuthForm type="signup"
                title="Добро пожаловать!"
                submitText="Зарегистрироваться"
                tipText="Уже зарегестрированы?"
                tipButtonText="Войти"
                tipLink="/signin"
                formData={formData} />
    </>
  )
}

export default Register;