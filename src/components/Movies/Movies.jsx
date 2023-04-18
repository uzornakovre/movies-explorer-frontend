import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <>
      <Header page="movies" />
      <SearchForm />
      <MoviesCardList page="movies" />
      <Footer />
    </>
  )
}

export default Movies;