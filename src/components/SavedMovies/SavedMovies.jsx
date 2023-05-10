import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
import { SearchedContext } from '../../contexts/SearchedContext';
import { useEffect, useContext } from 'react';

function SavedMovies({ isBurgerMenuOpen,
                       onBurgerClick,
                       closeBurgerMenu,
                       onOverlayClick,
                       loggedIn,
                       formData,
                       savedMovies,
                       deleteMovie,
                       searchData
                     }) {

  const { setSearched } = useContext(SearchedContext);

  useEffect(() => {
    setSearched({ movies: false, savedMovies: false});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header page="savedMovies"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm formData={formData}
                    savedMovies={savedMovies}
                    page="savedMovies" 
                    moviesQuantity={1000} 
                    searchData={searchData} />
        <MoviesCardList page="savedMovies"
                        savedMovies={savedMovies}
                        deleteMovie={deleteMovie} />
      </main>
      <Footer />
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            page="savedMovies"
            loggedIn={loggedIn}
            onOverlayClick={onOverlayClick} />
    </>
  )
}

export default SavedMovies;