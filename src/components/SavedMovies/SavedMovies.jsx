import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <>
      <Header page="saved-movies" />
      <MoviesCardList page="saved-movies"/>
      <Footer />
    </>
  )
}

export default SavedMovies;