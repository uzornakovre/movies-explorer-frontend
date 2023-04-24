import AuthForm from '../AuthForm/AuthForm';

function Login({ formData }) {
  return (
    <>
      <AuthForm type="signin"
                title="Рады видеть!"
                submitText="Войти"
                tipText="Еще не зарегестрированы?"
                tipButtonText="Регистрация"
                tipLink="/signup"
                formData={formData} />
    </>
  )
}

export default Login;