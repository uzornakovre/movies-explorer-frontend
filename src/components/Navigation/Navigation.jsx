import Burger from "../Burger/Burger";
import { NavLink } from 'react-router-dom';

function Navigation({ type, 
                      place, 
                      onBurgerClick, 
                      loggedIn,
                      closeBurgerMenu
                    }) {

  function navLinkDefaultClass({ isActive }) {
    if (isActive) {
      return "navigation__button navigation__button_active";
    } else return "navigation__button";
  }

  return (
    <nav className={`navigation navigation_type_${type} navigation_place_${place}`}>
      {loggedIn && 
        <>
          <ul className={`navigation__menu navigation__menu_type_movies navigation__menu_place_${place}`}>
            {place === "burger" &&
              <li className="navigation__menu-item">
                { <NavLink to="/" 
                        className={navLinkDefaultClass}
                        onClick={closeBurgerMenu}>
                  Главная
                  </NavLink> }
              </li>
            }
            <li className="navigation__menu-item">
              { <NavLink to="/movies"
                         className={navLinkDefaultClass}
                         onClick={closeBurgerMenu}>
                Фильмы
                </NavLink> }
            </li>
            <li className="navigation__menu-item">
              { <NavLink to="/saved-movies" 
                      className={navLinkDefaultClass}
                      onClick={closeBurgerMenu}>
                  Сохранённые фильмы
                </NavLink> }
            </li>
          </ul>
          <ul className={`navigation__menu navigation__menu_type_account navigation__menu_place_${place}`}>
            <li className="navigation__menu-item">
              { <NavLink to="/profile"
                      className={({ isActive }) =>
                        isActive ? "navigation__button navigation__button_active navigation__button_type_account" :
                        "navigation__button navigation__button_type_account"}
                      onClick={closeBurgerMenu}>
                  <p className="navigation__button-text">Аккаунт</p>
                  <div className="navigation__account-logo"></div>
                </NavLink> }
            </li>
          </ul>
          {place !== "burger" && 
            <Burger onBurgerClick={onBurgerClick} loggedIn={loggedIn} /> 
          }
        </>
      }
      {(type === "start-page" && !loggedIn) &&
        <ul className="navigation__menu navigation__menu_type_account">
          <li className="navigation__menu-item">
            { <NavLink to="/signup" 
                    className={navLinkDefaultClass}
                    onClick={closeBurgerMenu}>
              Регистрация
              </NavLink> }
          </li>
          <li className="navigation__menu-item">
            { <NavLink to="/signin" 
                    className={({ isActive }) =>
                      isActive ? "navigation__button navigation__button_active navigation__button_type_login" :
                      "navigation__button navigation__button_type_login"}
                    onClick={closeBurgerMenu}>
                Войти
              </NavLink> }
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navigation;