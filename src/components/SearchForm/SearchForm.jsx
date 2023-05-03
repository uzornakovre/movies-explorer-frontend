/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect } from "react";
import { MoviesListContext } from "../../contexts/MoviesListContextProvider";
import { MoviesSearchResultContext } from "../../contexts/MoviesSearchResultContext";

function SearchForm({ moviesQuantity, formData, page, savedMovies }) {
  const moviesList = useContext(MoviesListContext);
  const { setMoviesSearchResult } = useContext(MoviesSearchResultContext);
  const shortsRef = useRef();
  let filteredMoviesList = [];

  let data = {};

  function filterByName(name, list) {
    page === 'movies' ? data = {...data, input: name} : data = {...data};
    filteredMoviesList = list.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(name) || movie.nameEN.toLowerCase().includes(name);
    });
  }

  function filterByDuration(isOn) {
    if (!isOn) {
      filteredMoviesList = filteredMoviesList.filter((movie) => movie.duration > 40);
      page === 'movies' ? data = {...data, filterShorts: !isOn } : data = {...data};
    } else {
      page === 'movies' ? data = {...data, filterShorts: !isOn } : data = {...data};
    }
  }

  function createResult() {
    let result = [];

    for (let i = 0; i < (moviesQuantity >= filteredMoviesList.length
      ? filteredMoviesList.length : moviesQuantity); i++) {
      result.push(filteredMoviesList[i]);
    }

    setMoviesSearchResult(result);
    page === 'movies' ? data = {...data, result: result} : data = {...data};
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
    if (page === 'movies') {
      localStorage.setItem('searchData', JSON.stringify(data));
    }
  }

  useEffect(() => {
    renderCards();
  }, [moviesQuantity]);

  useEffect(() => {
    const searchData = JSON.parse(localStorage.getItem('searchData'));
    
    if (page === 'saved-movies') formData.values.search = '';
    if (page === 'movies') { 
      formData.values.search = searchData.input;
      shortsRef.current.checked = !searchData.filterShorts;
    }
  }, []);

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