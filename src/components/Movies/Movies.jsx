import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Menu from '../Menu/Menu';
// import Preloader from '../Preloader/Preloader';

function Movies({ onBurgerClick,
                  isBurgerMenuOpen,
                  closeBurgerMenu,
                  onOverlayClick
                }) {
  return (
    <>
      <Header page="movies"
              type="logged-in"
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <SearchForm />
        <MoviesCardList page="movies" />
      </main>
      <Footer />
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            page="movies"
            onOverlayClick={onOverlayClick} />
    </>
  )
}

export default Movies;