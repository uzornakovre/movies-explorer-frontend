/* eslint-disable react-hooks/exhaustive-deps */
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useState } from 'react';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';
import { SearchedContext } from '../../contexts/SearchedContext';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ page,
                          onMoreClick,
                          saveMovie,
                          deleteMovie,
                          savedMovies,
                          moviesQuantity
                        }) {
  const { moviesSearchResult } = useContext(MoviesSearchResultContext);
  const { isLoading } = useContext(IsLoadingContext);
  const { searched } = useContext(SearchedContext);
  const [savedMoviesCardElements, setSavedMoviesCardElements] = useState([]);
  const [moviesCardElements, setMoviesCardElements] = useState([]);
  const notFoundError = (<span className="movies__error">Ничего не найдено</span>);

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
  }, [savedMovies]);

  useEffect(() => {
    if (searched.movies) {
      setMoviesCardElements(moviesSearchResult.movies.map(moviesCard => renderCard(moviesCard)));
    }
    if (searched.savedMovies) {
      setSavedMoviesCardElements(moviesSearchResult.savedMovies.map(moviesCard => renderCard(moviesCard)));
    }
  }, [moviesSearchResult]);

  return (
    <section className="movies" aria-label="Фильмы">
      {(moviesSearchResult.movies.length === 0 && page === 'movies' && searched.movies) && notFoundError}
      {(moviesSearchResult.savedMovies.length === 0 && page === 'savedMovies' && searched.savedMovies) && notFoundError}
      {isLoading && <Preloader />}
      <ul className="movies__list">
        {page === 'movies' && moviesCardElements}
        {page === 'savedMovies' && savedMoviesCardElements}
      </ul>
      {(moviesSearchResult.filteredMoviesList.length > 12 &&
        moviesCardElements.length !== 0) && 
        <button className={`movies__load-more movies__load-more_page_${page}`}
                type="button"
                onClick={onMoreClick}>Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;