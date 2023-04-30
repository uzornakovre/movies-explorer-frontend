/* eslint-disable react-hooks/exhaustive-deps */
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useState } from 'react';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';

function MoviesCardList({ page,
                          onMoreClick,
                          saveMovie,
                          deleteMovie,
                          savedMovies 
                        }) {
  const { moviesSearchResult } = useContext(MoviesSearchResultContext);
  const [savedMoviesCardElements, setSavedMoviesCardElements] = useState([]);
  const moviesCardElements = moviesSearchResult.map(moviesCard => (
    <li key={moviesCard.id}>
      <MoviesCard card={moviesCard}
                  page={page}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie} />
    </li>
  ));

  useEffect(() => {
    console.log(savedMovies)
    setSavedMoviesCardElements(savedMovies.map(moviesCard => (
      <li key={moviesCard._id}>
        <MoviesCard card={moviesCard}
                    page={page}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie} />
      </li>
    )));
  }, [savedMovies]);

  return (
    <section className="movies" aria-label="Фильмы">
      <ul className="movies__list">
        {page === 'movies' && moviesCardElements}
        {page === 'saved-movies' && savedMoviesCardElements}
      </ul>
      <button className={`movies__load-more movies__load-more_page_${page}`}
              type="button"
              onClick={onMoreClick}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;