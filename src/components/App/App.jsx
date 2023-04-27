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
import { moviesApi } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { MoviesListContext } from '../../contexts/MoviesListContextProvider';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';
import ProtectedRoute from '../../utils/ProtectedRoute';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesList, setMoviesList] = useState([]);
  const [moviesSearchResult, setMoviesSearchResult] = useState([]);
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
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            handleLogin();
            navigate({ replace: false });
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
      Promise.all([mainApi.getCurrentUser(jwt), moviesApi.getMoviesList()])
      .then(([userData, movies]) => {
        setCurrentUser(userData);
        setMoviesList(movies);
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
    <MoviesListContext.Provider value={moviesList}>
    <MoviesSearchResultContext.Provider value={{moviesSearchResult, setMoviesSearchResult}}>
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
                            loggedIn={loggedIn}
                            formData={formData} /> }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute element={SavedMovies}
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerClick={handleBurgerClick}
                            closeBurgerMenu={closeBurgerMenu}
                            onOverlayClick={handleMenuOverlayClick}
                            loggedIn={loggedIn}
                            formData={formData} /> }/>
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
    </MoviesSearchResultContext.Provider>
    </MoviesListContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App;
