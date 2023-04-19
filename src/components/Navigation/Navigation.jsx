import Burger from "../BurgerMenu/Burger";

function Navigation({ page, type, place }) {
  return (
    <nav className={`navigation navigation_type_${type}`}>
      {type === "logged-in" && 
        <>
          <ul className={`navigation__menu navigation__menu_type_movies navigation__menu_place_${place}`}>
            <li className="navigation__menu-item">
              <button className={`navigation__button navigation__button_${page === "movies" && "active"}`} 
                      type="button">Фильмы</button>
            </li>
            <li className="navigation__menu-item">
              <button className={`navigation__button navigation__button_${page === "saved-movies" && "active"}`} 
                      type="button">Сохранённые фильмы</button>
            </li>
          </ul>
          <ul className={`navigation__menu navigation__menu_type_account navigation__menu_place_${place}`}>
            <li className="navigation__menu-item">
              <button className={`navigation__button navigation__button_type_account`} 
                      type="button">
                <p className="navigation__button-text">Аккаунт</p>
                <div className="navigation__account-logo"></div>
              </button>
            </li>
          </ul>
          <Burger />
        </>
      }
      {type === "start-page" &&
        <ul className="navigation__menu navigation__menu_type_account">
          <li className="navigation__menu-item">
            <button className={`navigation__button navigation__button_${page === "" && "active"}`} 
                    type="button">Регистрация</button>
          </li>
          <li className="navigation__menu-item">
            <button className={`navigation__button navigation__button_${page === "" && "active"} navigation__button_type_login`} 
                    type="button">Войти</button>
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navigation;