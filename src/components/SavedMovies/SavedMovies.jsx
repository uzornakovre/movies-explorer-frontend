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
                       deleteMovie
                     }) {
  return (
    <>
      <Header page="saved-movies"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm formData={formData}/>
        <MoviesCardList page="saved-movies"
                        savedMovies={savedMovies}
                        deleteMovie={deleteMovie} />
      </main>
      <Footer />
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            page="saved-movies"
            loggedIn={loggedIn}
            onOverlayClick={onOverlayClick} />
    </>
  )
}

export default SavedMovies;