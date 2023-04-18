import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <>
      <AuthForm type="signup"
                title="Добро пожаловать!"
                submitText="Зарегистрироваться"
                tipText="Уже зарегестрированы?"
                tipButtonText="Войти"
                tipLink="/signin" />
    </>
  )
}

export default Register;