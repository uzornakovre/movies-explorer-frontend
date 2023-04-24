function SearchForm() {
  return (
    <section className="search-form" aria-label="Форма поиска">
      <form className="search-form__form">
        <fieldset className="search-form__main">
          <input className="search-form__input" type="text" placeholder="Фильм"></input>
          <button className="search-form__submit" type="submit">Найти</button>
        </fieldset>
        <fieldset className="search-form__filter">
          <input className="search-form__filter-checkbox" type="checkbox" id="filter-checkbox" defaultChecked></input>
          <label className="search-form__filter-item" htmlFor="filter-checkbox">Короткометражки</label>
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;