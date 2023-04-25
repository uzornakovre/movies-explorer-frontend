import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';

function SavedMovies({ isBurgerMenuOpen,
                       onBurgerClick,
                       closeBurgerMenu,
                       onOverlayClick,
                       loggedIn
                     }) {
  return (
    <>
      <Header page="saved-movies"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm />
        <MoviesCardList page="saved-movies"/>
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