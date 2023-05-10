import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Menu from '../Menu/Menu';
import { useState, useEffect, useContext } from 'react';
import { SearchedContext } from '../../contexts/SearchedContext';
import { MoviesSearchResultContext } from "../../contexts/MoviesSearchResultContext";

function Movies({ onBurgerClick,
                  isBurgerMenuOpen,
                  closeBurgerMenu,
                  onOverlayClick,
                  loggedIn,
                  formData,
                  saveMovie,
                  deleteMovie,
                  savedMovies,
                  searchData,
                  moviesSearchData
                }) {

  const { setSearched } = useContext(SearchedContext);
  const { moviesSearchResult, setMoviesSearchResult } = useContext(MoviesSearchResultContext);

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

  useEffect(() => {
    setSearched({ movies: false, savedMovies: false});
    setMoviesQuantity(12);
    if (moviesSearchData) {
      setMoviesSearchResult({ 
        ...moviesSearchResult, 
        movies: moviesSearchData.result,
        filteredMoviesList: moviesSearchData.filtered })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                        savedMovies={savedMovies}
                        moviesQuantity={moviesQuantity}
                        moviesSearchData={moviesSearchData} />
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