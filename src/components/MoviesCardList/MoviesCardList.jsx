import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ page }) {
  // const MoviesCardElements = MoviesCards.map(moviesCard => (
  //   <li key={moviesCard._id}>
  //     <MoviesCard card={moviesCard} />
  //   </li>
  // ));

  return (
    <section className="movies" aria-label="Фильмы">
      {/* временное рещение для сверки с макетом */}
      {page === "movies" && 
        <>
          <ul className={`movies__list movies__list_page_${page}`}>
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
        </>
      }
      {page === "saved-movies" && 
        <ul className={`movies__list movies__list_page_${page}`}>
          <li><MoviesCard page={page} /></li>
          <li><MoviesCard page={page} /></li>
          <li><MoviesCard page={page} /></li>
        </ul>
      }
      <button className={`movies__load-more movies__load-more_page_${page}`} type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;