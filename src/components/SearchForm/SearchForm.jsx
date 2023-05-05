/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect, useState } from "react";
import { MoviesListContext } from "../../contexts/MoviesListContextProvider";
import { MoviesSearchResultContext } from "../../contexts/MoviesSearchResultContext";
import { SearchedContext } from "../../contexts/SearchedContext";

function SearchForm({ moviesQuantity,
                      formData,
                      page,
                      savedMovies,
                      searchData
                    }) {
  const moviesList = useContext(MoviesListContext);
  const { searched, setSearched } = useContext(SearchedContext);
  const { moviesSearchResult, setMoviesSearchResult } = useContext(MoviesSearchResultContext);
  const [searchError, setSearchError] = useState(false);
  const shortsRef = useRef();
  let filteredMoviesList = [];

  let data = { movies: searchData, savedMovies: searchData };

  function filterByName(name, list, page) {
    data[page] = {...data[page], input: name, result: list};
    filteredMoviesList = list.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(name) || movie.nameEN.toLowerCase().includes(name);
    });
  }

  function filterByDuration(isOn, page) {
    data[page] = {...data[page], filterShorts: !isOn };

    if (!isOn) {
      filteredMoviesList = filteredMoviesList.filter((movie) => movie.duration > 40);
      data[page] = {...data[page], filterShorts: !isOn };
    }
  }

  function createResult(page) {
    let result = [];

    for (let i = 0; i < (moviesQuantity >= filteredMoviesList.length
      ? filteredMoviesList.length : moviesQuantity); i++) {
      result.push(filteredMoviesList[i]);
    }

    setMoviesSearchResult({ ...moviesSearchResult, [page]: result, filteredMoviesList: filteredMoviesList });
    data[page] = {...data[page], filtered: filteredMoviesList};
  }

  function renderCards(page) {

    if (page === 'movies') {
      filterByName(formData.values.search, moviesList, page);
    } 
    if (page === 'savedMovies') {
      filterByName(formData.values.search, savedMovies, page);
    }

    filterByDuration(shortsRef.current.checked, page);
    createResult(page);
  }

  function storeData() {
    if (page === 'movies') {
      localStorage.setItem('moviesSearchData', JSON.stringify(data.movies));
    }
    if (page === 'savedMovies') {
      localStorage.setItem('savedMoviesSearchData', JSON.stringify(data.savedMovies));
    }
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (formData.values.search !== '') {
      setSearchError(false);
      renderCards(page);
      storeData();
      setSearched({ ...searched, [page]: true });
    } else {
      setSearchError(true);
    }
  }

  useEffect(() => {
    renderCards(page);
  }, [moviesQuantity]);

  useEffect(() => {
    const moviesSearchData = JSON.parse(localStorage.getItem('moviesSearchData')) || { input: '' };
    const savedMoviesSearchData = JSON.parse(localStorage.getItem('savedMoviesSearchData')) || { input: '' };
    
    if (page === 'savedMovies') {
      formData.values.search = savedMoviesSearchData.input;
      shortsRef.current.checked = !savedMoviesSearchData.filterShorts;
    }
    if (page === 'movies') { 
      formData.values.search = moviesSearchData.input;
      shortsRef.current.checked = !moviesSearchData.filterShorts;
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
          {searchError && <span className="search-form__error">Нужно ввести ключевое слово</span>}
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