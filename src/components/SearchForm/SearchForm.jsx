/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, useEffect } from "react";
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
  const { setMoviesSearchResult } = useContext(MoviesSearchResultContext);
  const shortsRef = useRef();
  let filteredMoviesList = [];

  let data = {
    movies: {
      input: '',
      result: [],
      filterShorts: false
    },
    savedMovies: {
      input: '',
      result: [],
      filterShorts: false
    }
  };

  // localStorage.setItem('moviesSearchData', JSON.stringify(data.movies));

  function filterByName(name, list, page) {
    data[page] = {...data[page], input: name};
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

    setMoviesSearchResult(result);
    data[page] = {...data[page], result: result};
  }

  function renderCards(page) {
    setMoviesSearchResult([]);

    if (page === 'movies') {
      filterByName(formData.values.search, moviesList, page);
    } 
    if (page === 'savedMovies') {
      filterByName(formData.values.search, savedMovies, page);
    }

    filterByDuration(shortsRef.current.checked, page);
    createResult(page);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    renderCards(page);

    if (page === 'movies') {
      localStorage.setItem('moviesSearchData', JSON.stringify(data.movies));
    }
    if (page === 'savedMovies') {
      localStorage.setItem('savedMoviesSearchData', JSON.stringify(data.savedMovies));
    }

    setSearched({ ...searched, [page]: true });
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