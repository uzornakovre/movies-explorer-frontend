import AuthForm from '../AuthForm/AuthForm';
import { auth } from '../../utils/Auth';
import AuthFormField from '../AuthForm/AuthFormField';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';

function Register({ formData, handleLogin, loggedIn }) {
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const [errorToolTip, setErrorToolTip] = useState('');
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault(formData.values.name);

    if (formData.values.password === formData.values.passwordConfirm) {
      setIsLoading(true);
      auth.register(formData.values.userName, formData.values.email, formData.values.password)
        .then((res) => {
          setErrorToolTip('test')
          if (!res.error && !res.message) {
            auth.login(formData.values.email, formData.values.password)
              .then((res) => {
                localStorage.setItem('jwt', res.token);
                handleLogin();
                navigate('/movies', {replace: true});
              })
              .catch((error) => {
                console.log(error);
              })
          } else {
            setErrorToolTip(res.message);
          }
        })
        .catch((error) => {
          console.log(`Ошибка при регистрации: ${error}`);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else setErrorToolTip('Пароли не совпадают. Попробуйте еще раз');
  }

  useEffect(() => {
    formData.resetFormValues();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loggedIn) navigate('/movies', {replace: true});
  });

  return (
    <AuthForm type="signup"
              title="Добро пожаловать!"
              submitText={isLoading ? "Выполняется..." : "Зарегистрироваться"}
              tipText="Уже зарегестрированы?"
              tipButtonText="Войти"
              tipLink="/signin"
              formData={formData}
              errorToolTip={errorToolTip}
              handleSubmit={handleSubmit}>
      <AuthFormField type="password"
                name="passwordConfirm"
                labelText="Повторите пароль"
                page="signup"
                formData={formData}
                placeholder="Повторите пароль"
      />
    </AuthForm>
  )
}

export default Register;