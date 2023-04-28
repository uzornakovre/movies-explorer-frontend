/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect } from "react";
import { MoviesListContext } from "../../contexts/MoviesListContextProvider";
import { MoviesSearchResultContext } from "../../contexts/MoviesSearchResultContext";

function SearchForm({ moviesQuantity, formData }) {
  const moviesList = useContext(MoviesListContext);
  const { setMoviesSearchResult } = useContext(MoviesSearchResultContext);
  let filteredMoviesList = [];
  const shortsRef = useRef();

  function filterByName(name) {
    filteredMoviesList = moviesList.filter((movie) => {
      return movie.nameRU.includes(name) || movie.nameEN.includes(name);
    });
  }

  function filterByDuration(isOn) {
    if (!isOn) {
      filteredMoviesList = filteredMoviesList.filter((movie) => {
        return movie.duration > 40;
      })
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

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    setMoviesSearchResult([]);
    filterByName(formData.values.search);
    filterByDuration(shortsRef.current.checked);
    createResult();
  }

  useEffect(() => {
    setMoviesSearchResult([]);
    filterByName(formData.values.search);
    filterByDuration(shortsRef.current.checked);
    createResult();
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