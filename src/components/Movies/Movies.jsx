import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function Movies() {
  return (
    <>
      <Header page="movies" />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Movies;