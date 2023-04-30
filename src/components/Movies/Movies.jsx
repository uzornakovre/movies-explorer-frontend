import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Menu from '../Menu/Menu';
import { useState } from 'react';
// import Preloader from '../Preloader/Preloader';

function Movies({ onBurgerClick,
                  isBurgerMenuOpen,
                  closeBurgerMenu,
                  onOverlayClick,
                  loggedIn,
                  formData,
                  saveMovie,
                  deleteMovie,
                  savedMovies
                }) {
  const [moviesQuantity, setMoviesQuantity] = useState(3);

  function increaseMoviesQuantity() {
    setMoviesQuantity(moviesQuantity + 3);
  }

  return (
    <>
      <Header page="movies"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm moviesQuantity={moviesQuantity}
                    formData={formData} />
        <MoviesCardList page="movies"
                        onMoreClick={increaseMoviesQuantity}
                        saveMovie={saveMovie}
                        deleteMovie={deleteMovie}
                        savedMovies={savedMovies}  />
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