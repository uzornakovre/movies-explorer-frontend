import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ page }) {
  // const MoviesCardElements = MoviesCards.map(moviesCard => (
  //   <li key={moviesCard._id}>
  //     <MoviesCard card={moviesCard} />
  //   </li>
  // ));

  return (
    <section className="movies" aria-label="Фильмы">
      <ul className="movies__list">
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
        <li><MoviesCard page={page} /></li>
      </ul>
      <button className="movies__load-more" type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;