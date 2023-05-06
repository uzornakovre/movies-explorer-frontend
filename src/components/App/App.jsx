import { useState, useEffect }       from 'react';
import { Routes, 
         Route, 
         useNavigate }               from 'react-router-dom';
import Register                      from '../Register/Register';
import Login                         from '../Login/Login';
import Main                          from '../Main/Main';
import Movies                        from '../Movies/Movies';
import Profile                       from '../Profile/Profile';
import SavedMovies                   from '../SavedMovies/SavedMovies';
import NotFound                      from '../NotFound/NotFound';
import useFormData                   from '../../hooks/useFormData';
import { auth }                      from '../../utils/Auth';
import { mainApi }                   from '../../utils/MainApi';
import { moviesApi }                 from '../../utils/MoviesApi';
import { CurrentUserContext }        from '../../contexts/CurrentUserContext';
import { MoviesListContext }         from '../../contexts/MoviesListContextProvider';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';
import { SearchedContext }           from '../../contexts/SearchedContext';
import { IsLoadingContext }          from '../../contexts/IsLoadingContext';
import ProtectedRoute                from '../../utils/ProtectedRoute';

function App() {
  const moviesSearchData = JSON.parse(localStorage.getItem('moviesSearchData')) || { result: [], filtered: [] };

  const [isBurgerMenuOpen,   setBurgerMenuOpen    ] = useState(false);
  const [loggedIn,           setLoggedIn          ] = useState(false);
  const [currentUser,        setCurrentUser       ] = useState({});
  const [moviesList,         setMoviesList        ] = useState([]);
  const [savedMovies,        setSavedMovies       ] = useState([]);
  const [isLoading,          setIsLoading         ] = useState(false);
  const [errorToolTip,       setErrorToolTip      ] = useState('Измените данные и нажмите "Редактировать"');
  const [searched,           setSearched          ] = useState({
    movies: false,
    savedMovies: false 
  });
  const [moviesSearchResult, setMoviesSearchResult] = useState({
    movies: moviesSearchData.result || [],
    savedMovies: [],
    filteredMoviesList: moviesSearchData.filtered || []
  });
  
  const formData   = useFormData();
  const navigate   = useNavigate();
  const jwt        = localStorage.getItem('jwt');
  const searchData = {
    input: '',
    result: [],
    filtered: [],
    filterShorts: false
  }

  // Авторизация

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesSearchData');
    localStorage.removeItem('savedMoviesSearchData');
    setSearched({ movies: false, savedMovies: false });
    navigate('/', {replace: true});
  }

  function tokenCheck() {
    if (jwt) {
      setIsLoading(true);
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
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  // Получение данных с сервера о пользователе, карточках, проверка токена

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      Promise.all([mainApi.getCurrentUser(jwt), moviesApi.getMoviesList(), mainApi.getMovies(jwt)])
      .then(([userData, movies, savedMovies]) => {
        setCurrentUser(userData);
        setMoviesList(movies);
        setSavedMovies(savedMovies);
      })
      .catch((error) => {
        console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // Обновление данных о пользователе

  function handleUpdateUser(userData) {
    setIsLoading(true);
    mainApi.updateUserInfo(userData, jwt)
      .then((newUserData) => {
        if (!newUserData.error && !newUserData.message) {
          setCurrentUser(newUserData);
          navigate('/profile', {replace: true});
          setErrorToolTip('Данные успешно обновлены');
        } else setErrorToolTip(newUserData.message);
      })
      .catch((error) => {
        console.log(`Ошибка при изменении данных о пользователе: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Сохранение и удаление фильмов

  function saveMovie(movieData) {
    mainApi.saveMovie(movieData, jwt)
      .then((savedMovie) => {
        setSavedMovies((state) => [savedMovie, ...state]);
      })
      .catch((error) => {
        console.log(`Ошибка при сохраниении фильма: ${error}`);
      })
  }

  function deleteMovie(movie) {
    let id;

    if (!movie._id) {
      id = savedMovies.find(mov => mov.movieId === movie.id)._id;
    } else id = movie._id;

    mainApi.deleteMovie(id, jwt)
      .then(() => {
        setSavedMovies((state) => state.filter((mov) => mov._id !== id));
      })
      .catch((error) => {
        console.log(`Ошибка при удалении фильма: ${error}`);
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
    <SearchedContext.Provider value = {{searched, setSearched}}>
    <IsLoadingContext.Provider value = {{isLoading, setIsLoading}}>
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
                            formData={formData}
                            saveMovie={saveMovie}
                            deleteMovie={deleteMovie}
                            savedMovies={savedMovies}
                            searchData={searchData}
                            moviesSearchData={moviesSearchData} /> }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute element={SavedMovies}
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerClick={handleBurgerClick}
                            closeBurgerMenu={closeBurgerMenu}
                            onOverlayClick={handleMenuOverlayClick}
                            loggedIn={loggedIn}
                            formData={formData}
                            deleteMovie={deleteMovie}
                            savedMovies={savedMovies}
                            searchData={searchData} /> }/>
          <Route path="/profile" element={
            <ProtectedRoute element={Profile}
                            isBurgerMenuOpen={isBurgerMenuOpen}
                            onBurgerClick={handleBurgerClick}
                            closeBurgerMenu={closeBurgerMenu}
                            onOverlayClick={handleMenuOverlayClick}
                            loggedIn={loggedIn}
                            handleLogout={handleLogout}
                            formData={formData}
                            handleUpdateUser={handleUpdateUser}
                            errorToolTip={errorToolTip}
                            setErrorToolTip={setErrorToolTip} /> }/>
          <Route path="/signin" element={<Login formData={formData}
                                                handleLogin={handleLogin}
                                                loggedIn={loggedIn} />}/>
          <Route path="/signup" element={<Register formData={formData} 
                                                   handleLogin={handleLogin}
                                                   loggedIn={loggedIn} />}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </IsLoadingContext.Provider>
    </SearchedContext.Provider>
    </MoviesSearchResultContext.Provider>
    </MoviesListContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App;
