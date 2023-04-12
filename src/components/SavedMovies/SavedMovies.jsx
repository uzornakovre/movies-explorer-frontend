import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <>
      <Header page="saved-movies" />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default SavedMovies;