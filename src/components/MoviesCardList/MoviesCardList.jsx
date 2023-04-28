/* eslint-disable react-hooks/exhaustive-deps */
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext } from 'react';
import { MoviesSearchResultContext } from '../../contexts/MoviesSearchResultContext';

function MoviesCardList({ page, onMoreClick, saveMovie }) {
  const { moviesSearchResult } = useContext(MoviesSearchResultContext);
  const moviesCardElements = moviesSearchResult.map(moviesCard => (
    <li key={moviesCard.id}>
      <MoviesCard card={moviesCard}
                  page={page}
                  saveMovie={saveMovie} />
    </li>
  ));

  return (
    <section className="movies" aria-label="Фильмы">
      <ul className="movies__list">
        {moviesCardElements}
      </ul>
      <button className={`movies__load-more movies__load-more_page_${page}`}
              type="button"
              onClick={onMoreClick}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;