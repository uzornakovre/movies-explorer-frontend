import Burger from "../Burger/Burger";
import { Link } from 'react-router-dom';

function Navigation({ page,
                      type, 
                      place, 
                      onBurgerClick, 
                      isBurgerMenuOpen,
                      closeBurgerMenu
                    }) {

  return (
    <nav className={`navigation navigation_type_${type} navigation_place_${place}`}>
      {type === "logged-in" && 
        <>
          <ul className={`navigation__menu navigation__menu_type_movies navigation__menu_place_${place}`}>
            {place === "burger" &&
              <li className="navigation__menu-item">
                { <Link to="/" 
                        className={`navigation__button`}
                        onClick={closeBurgerMenu}>
                  Главная
                  </Link> }
              </li>
            }
            <li className="navigation__menu-item">
              { <Link to="/movies" 
                      className={`navigation__button navigation__button_${page === "movies" && "active"}`}
                      onClick={closeBurgerMenu}>
                Фильмы
                </Link> }
            </li>
            <li className="navigation__menu-item">
              { <Link to="/saved-movies" 
                      className={`navigation__button navigation__button_${page === "saved-movies" && "active"}`}
                      onClick={closeBurgerMenu}>
                  Сохранённые фильмы
                </Link> }
            </li>
          </ul>
          <ul className={`navigation__menu navigation__menu_type_account navigation__menu_place_${place}`}>
            <li className="navigation__menu-item">
              { <Link to="/profile"
                      className={`navigation__button navigation__button_type_account`}
                      onClick={closeBurgerMenu}>
                  <p className="navigation__button-text">Аккаунт</p>
                  <div className="navigation__account-logo"></div>
                </Link> }
            </li>
          </ul>
          {place !== "burger" && 
            <Burger onBurgerClick={onBurgerClick} /> 
          }
        </>
      }
      {type === "start-page" &&
        <ul className="navigation__menu navigation__menu_type_account">
          <li className="navigation__menu-item">
            { <Link to="/signup" 
                    className={`navigation__button navigation__button_${page === "" && "active"}`}
                    onClick={closeBurgerMenu}>
              Регистрация
              </Link> }
          </li>
          <li className="navigation__menu-item">
            { <Link to="/signin" 
                    className={`navigation__button navigation__button_${page === "" && "active"} navigation__button_type_login`}
                    onClick={closeBurgerMenu}>
                Войти
              </Link> }
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navigation;