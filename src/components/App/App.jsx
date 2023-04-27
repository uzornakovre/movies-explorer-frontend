import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import useFormData from '../../hooks/useFormData';
import { auth } from '../../utils/Auth';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../../utils/ProtectedRoute';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const formData = useFormData();
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');

  // Авторизация

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate('/', {replace: true});
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((error) => {
          console.log(`Ошибка при получении данных: ${error}`);
        })
    }
  }

  // Получение данных с сервера о пользователе, проверка токена

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      mainApi.getCurrentUser(jwt)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(`Ошибка при получении данных: ${error}`);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // Обновление данных о пользователе

  function handleUpdateUser(userData) {
    mainApi.updateUserInfo(userData, jwt)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        navigate('/profile', {replace: true});
      })
      .catch((error) => {
        console.log(`Ошибка при изменении данных о пользователе: ${error}`);
      })
  }

  // "Бургер"-меню

  function handleBurgerClick() {
    setBurgerMenuOpen(true);
    console.log('123');
  }

  function closeBurgerMenu() {
    setBurgerMenuOpen(false);
  }

  function handleMenuOverlayClick(evt) {
    if (evt.target.classList.contains('menu_opened')) {
      closeBurgerMenu();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <Main isBurgerMenuOpen={isBurgerMenuOpen}
                  onBurgerClick={handleBurgerClick}
                  closeBurgerMenu={closeBurgerMenu}
                  onOverlayClick={handleMenuOverlayClick}
                  loggedIn={loggedIn} />}/>
          <Route path="/movies" element={
            <ProtectedRoute element={Movies}
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerClick={handleBurgerClick}
                            closeBurgerMenu={closeBurgerMenu}
                            onOverlayClick={handleMenuOverlayClick}
                            loggedIn={loggedIn} /> }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute element={SavedMovies}
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerClick={handleBurgerClick}
                            closeBurgerMenu={closeBurgerMenu}
                            onOverlayClick={handleMenuOverlayClick}
                            loggedIn={loggedIn} /> }/>
          <Route path="/profile" element={
            <ProtectedRoute element={Profile}
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerClick={handleBurgerClick}
                            closeBurgerMenu={closeBurgerMenu}
                            onOverlayClick={handleMenuOverlayClick}
                            loggedIn={loggedIn}
                            handleLogout={handleLogout}
                            formData={formData}
                            handleUpdateUser={handleUpdateUser} /> }/>
          <Route path="/signin" element={<Login formData={formData} handleLogin={handleLogin} />}/>
          <Route path="/signup" element={<Register formData={formData} />}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
