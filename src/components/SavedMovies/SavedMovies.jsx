import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
// import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <>
      <Header page="saved-movies"
              type="logged-in" />
      <SearchForm />
      <MoviesCardList page="saved-movies"/>
      <Footer />
    </>
  )
}

export default SavedMovies;