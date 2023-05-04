import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Menu from '../Menu/Menu';
import { useState } from 'react';

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
  const [moviesQuantity, setMoviesQuantity] = useState(12);

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