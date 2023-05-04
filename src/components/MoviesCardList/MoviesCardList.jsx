/* eslint-disable react-hooks/exhaustive-deps */
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useState } from 'react';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';
import { SearchedContext } from '../../contexts/SearchedContext';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ page,
                          onMoreClick,
                          saveMovie,
                          deleteMovie,
                          savedMovies,
                          isLoading 
                        }) {
  const { moviesSearchResult } = useContext(MoviesSearchResultContext);
  const { searched } = useContext(SearchedContext);
  const [savedMoviesCardElements, setSavedMoviesCardElements] = useState([]);
  const [moviesCardElements, setMoviesCardElements] = useState([]);
  const moviesSearchData = JSON.parse(localStorage.getItem('moviesSearchData')) || { result: [] };
  const savedMoviesSearchData = JSON.parse(localStorage.getItem('savedMoviesSearchData')) || { result: [] };
  const notFoundError = (<span className="movies__not-found">Ничего не найдено</span>);

  function renderCard(card) {
    return (
      <li key={(card.id && card.id) || card._id}>
        <MoviesCard card={card}
                    page={page}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie}
                    savedMovies={savedMovies} />
    </li>
    );
  }

  useEffect(() => {
    setSavedMoviesCardElements(savedMovies.map(moviesCard => renderCard(moviesCard)));
  }, []);

  useEffect(() => {
    console.log(searched)
    setMoviesCardElements(moviesSearchData.result.map(moviesCard => renderCard(moviesCard)));
    if (searched.savedMovies) {
      setSavedMoviesCardElements(savedMoviesSearchData.result.map(moviesCard => renderCard(moviesCard)));
    }
  }, [moviesSearchResult]);

  return (
    <section className="movies" aria-label="Фильмы">
      {(moviesSearchResult.length === 0 && page === 'movies' && searched.movies) && notFoundError}
      {(moviesSearchResult.length === 0 && page === 'savedMovies' && searched.savedMovies) && notFoundError}
      {isLoading && <Preloader />}
      <ul className="movies__list">
        {page === 'movies' && moviesCardElements}
        {page === 'savedMovies' && savedMoviesCardElements}
      </ul>
      <button className={`movies__load-more movies__load-more_page_${page}`}
              type="button"
              onClick={onMoreClick}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;