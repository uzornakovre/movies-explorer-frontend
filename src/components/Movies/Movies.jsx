import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Menu from '../Menu/Menu';
import { useState, useEffect } from 'react';

function Movies({ onBurgerClick,
                  isBurgerMenuOpen,
                  closeBurgerMenu,
                  onOverlayClick,
                  loggedIn,
                  formData,
                  saveMovie,
                  deleteMovie,
                  savedMovies,
                  searchData
                }) {

  //  Количество отображаемых фильмов на странице
  const [moviesQuantity, setMoviesQuantity] = useState(12);

  function handleChangeWidth() {
    if (window.innerWidth <= 767) {
      setMoviesQuantity(5);
    } else if (window.innerWidth <= 1023) {
      setMoviesQuantity(8);
    } else {
      setMoviesQuantity(12);
    }
  }

  function increaseMoviesQuantity() {
    if (window.innerWidth > 1023) {
      setMoviesQuantity(moviesQuantity + 3);
    } else setMoviesQuantity(moviesQuantity + 2);
  }

  useEffect(() => {
    let timeout;

    function handleChangeWithTimeout() {
      timeout = setTimeout(handleChangeWidth, 1000);
    };

    window.addEventListener("resize", handleChangeWithTimeout);
    return () => {
      window.removeEventListener("resize", handleChangeWithTimeout);
      clearTimeout(timeout);
    };
  });

  return (
    <>
      <Header page="movies"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm moviesQuantity={moviesQuantity}
                    formData={formData}
                    page="movies"
                    savedMovies={savedMovies}
                    searchData={searchData} />
        <MoviesCardList page="movies"
                        onMoreClick={increaseMoviesQuantity}
                        saveMovie={saveMovie}
                        deleteMovie={deleteMovie}
                        savedMovies={savedMovies} />
      </main>
      <Footer />
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            loggedIn={loggedIn}
            onOverlayClick={onOverlayClick} />
    </>
  )
}

export default Movies;