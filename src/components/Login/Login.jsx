import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <>
      <AuthForm type="signin"
                title="Рады видеть!"
                submitText="Войти"
                tipText="Еще не зарегестрированы?"
                tipButtonText="Регистрация"
                tipLink="/signup" />
    </>
  )
}

export default Login;