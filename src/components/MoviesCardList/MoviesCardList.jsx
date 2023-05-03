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
  const [moviesCardElements, setMoviesCardElements] = useState([]);
  const searchData = JSON.parse(localStorage.getItem('searchData'));

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
    setMoviesCardElements(searchData.result.map(moviesCard => renderCard(moviesCard)));
    setSavedMoviesCardElements(moviesSearchResult.map(moviesCard => renderCard(moviesCard)));
  }, [moviesSearchResult]);

  useEffect(() => {
    setSavedMoviesCardElements(savedMovies.map(moviesCard => renderCard(moviesCard)));
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