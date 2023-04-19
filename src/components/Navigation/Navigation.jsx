import Burger from "../BurgerMenu/Burger";
import { Link } from 'react-router-dom';

function Navigation({ page, type, place }) {

  return (
    <nav className={`navigation navigation_type_${type}`}>
      {type === "logged-in" && 
        <>
          <ul className={`navigation__menu navigation__menu_type_movies navigation__menu_place_${place}`}>
            <li className="navigation__menu-item">
              { <Link to="/movies" className={`navigation__button navigation__button_${page === "movies" && "active"}`}>
                Фильмы
                </Link> }
            </li>
            <li className="navigation__menu-item">
              { <Link to="/saved-movies" className={`navigation__button navigation__button_${page === "saved-movies" && "active"}`}>
                  Сохранённые фильмы
                </Link> }
            </li>
          </ul>
          <ul className={`navigation__menu navigation__menu_type_account navigation__menu_place_${place}`}>
            <li className="navigation__menu-item">
              { <Link to="/profile" className={`navigation__button navigation__button_type_account`}>
                  <p className="navigation__button-text">Аккаунт</p>
                  <div className="navigation__account-logo"></div>
                </Link> }
            </li>
          </ul>
          <Burger />
        </>
      }
      {type === "start-page" &&
        <ul className="navigation__menu navigation__menu_type_account">
          <li className="navigation__menu-item">
            { <Link to="/signup" className={`navigation__button navigation__button_${page === "" && "active"}`}>
              Регистрация
              </Link> }
          </li>
          <li className="navigation__menu-item">
            { <Link to="/signin" className={`navigation__button navigation__button_${page === "" && "active"} navigation__button_type_login`}>
                Войти
              </Link> }
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navigation;