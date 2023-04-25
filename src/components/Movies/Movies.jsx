import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Menu from '../Menu/Menu';
// import Preloader from '../Preloader/Preloader';

function Movies({ onBurgerClick,
                  isBurgerMenuOpen,
                  closeBurgerMenu,
                  onOverlayClick,
                  loggedIn
                }) {
  return (
    <>
      <Header page="movies"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm />
        <MoviesCardList page="movies" />
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