import AuthForm from '../AuthForm/AuthForm';
import { auth } from '../../utils/Auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ formData, handleLogin }) {
  const [errorToolTip, setErrorToolTip] = useState('');
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    auth.login(formData.values.email, formData.values.password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        formData.setValues({
          email:    '',
          password: '',
          name:     ''
        })
        handleLogin();
        navigate('/movies', {replace: true});
      })
      .catch((error) =>{
        setErrorToolTip('Неверный логин или пароль.');
        console.log(error);
      })
  }

  return (
    <AuthForm type="signin"
              title="Рады видеть!"
              submitText="Войти"
              tipText="Еще не зарегестрированы?"
              tipButtonText="Регистрация"
              tipLink="/signup"
              formData={formData}
              errorToolTip={errorToolTip}
              handleSubmit={handleSubmit}>
    </AuthForm>
  )
}

export default Login;