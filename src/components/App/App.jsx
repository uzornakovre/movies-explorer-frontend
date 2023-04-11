import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Main from './Main';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Movies from './Movies';
import MoviesCard from './MoviesCard';
import MoviesCardList from './MoviesCardList';
import Navigation from './Navigation';
import Preloader from './Preloader';
import Profile from './Profile';
import SavedMovies from './SavedMovies';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="page__content">
      <Routes>
        <Route path="/" />
        <Route path="/movies" />
        <Route path="/saved-movies" />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </div>
  )
}

export default App;
