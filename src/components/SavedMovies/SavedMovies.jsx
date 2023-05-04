import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';

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