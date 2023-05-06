import AuthForm from '../AuthForm/AuthForm';
import { auth } from '../../utils/Auth';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';

function Login({ formData, handleLogin, loggedIn }) {
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const [errorToolTip, setErrorToolTip] = useState('');
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    setIsLoading(true);
    auth.login(formData.values.email, formData.values.password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        handleLogin();
        navigate('/movies', {replace: true});
      })
      .catch((error) => {
        setErrorToolTip('Неверный логин или пароль.');
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    formData.resetFormValues();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) navigate('/movies', {replace: true});
  });

  return (
    <AuthForm type="signin"
              title="Рады видеть!"
              submitText={isLoading ? "Выполняется..." : "Войти"}
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