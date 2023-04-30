/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect } from "react";
import { MoviesListContext } from "../../contexts/MoviesListContextProvider";
import { MoviesSearchResultContext } from "../../contexts/MoviesSearchResultContext";

function SearchForm({ moviesQuantity, formData, page, savedMovies }) {
  const moviesList = useContext(MoviesListContext);
  const { setMoviesSearchResult } = useContext(MoviesSearchResultContext);
  const shortsRef = useRef();
  let filteredMoviesList = [];

  function filterByName(name, list) {
    filteredMoviesList = list.filter((movie) => {
      return movie.nameRU.includes(name) || movie.nameEN.includes(name);
    });
  }

  function filterByDuration(isOn) {
    if (!isOn) {
      filteredMoviesList = filteredMoviesList.filter((movie) => movie.duration > 40);
    }
  }

  function createResult() {
    let result = [];

    for (let i = 0; i < (moviesQuantity >= filteredMoviesList.length
      ? filteredMoviesList.length : moviesQuantity); i++) {
      result.push(filteredMoviesList[i]);
    }

    setMoviesSearchResult(result);
  }

  function renderCards() {
    setMoviesSearchResult([]);

    if (page === 'movies') {
      filterByName(formData.values.search, moviesList);
    } else filterByName(formData.values.search, savedMovies);

    filterByDuration(shortsRef.current.checked);
    createResult();
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    renderCards();
  }

  useEffect(() => {
    renderCards();
  }, [moviesQuantity]);

  return (
    <section className="search-form" aria-label="Форма поиска">
      <form className="search-form__form" onSubmit={handleSearchSubmit} noValidate>
        <fieldset className="search-form__main">
          <input className="search-form__input"
                 type="text"
                 name="search"
                 placeholder="Фильм"
                 onChange={formData.handleChange}
                 value={formData.values.search || ''}
                 minLength="1"
                 autoComplete="off"
                 required></input>
          <button className="search-form__submit" type="submit">Найти</button>
        </fieldset>
        <fieldset className="search-form__filter">
          <input className="search-form__filter-checkbox"
                 type="checkbox"
                 id="filter-checkbox"
                 name="shorts"
                 ref={shortsRef}
                 defaultChecked></input>
          <label className="search-form__filter-item" htmlFor="filter-checkbox">Короткометражки</label>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;