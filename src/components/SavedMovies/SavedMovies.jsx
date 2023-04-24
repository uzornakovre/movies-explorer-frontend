import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
// import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ isBurgerMenuOpen,
                       onBurgerClick,
                       closeBurgerMenu,
                       onOverlayClick
                     }) {
  return (
    <>
      <Header page="saved-movies"
              type="logged-in"
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
            onOverlayClick={onOverlayClick} />
    </>
  )
}

export default SavedMovies;