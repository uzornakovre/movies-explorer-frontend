import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
// import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ isBurgerMenuOpen, onBurgerClick, closeBurgerMenu }) {
  return (
    <>
      <Header page="saved-movies"
              type="logged-in"
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <SearchForm />
      <MoviesCardList page="saved-movies"/>
      <Footer />
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            page="saved-movies" />
    </>
  )
}

export default SavedMovies;