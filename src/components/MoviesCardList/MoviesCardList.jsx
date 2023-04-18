import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  // const MoviesCardElements = MoviesCards.map(moviesCard => (
  //   <li key={moviesCard._id}>
  //     <MoviesCard card={moviesCard} />
  //   </li>
  // ));

  return (
    <section className="movies" aria-label="Фильмы">
      <ul className="movies__list">
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
        <li><MoviesCard /></li>
      </ul>
      <button className="movies__load-more" type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;