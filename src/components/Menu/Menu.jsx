import Navigation from "../Navigation/Navigation";

function Menu({ isOpen, closeBurgerMenu, onOverlayClick, loggedIn }) {
  return (
    <div className={`menu ${isOpen ? 'menu_opened' : ''}`}
         onMouseDown={onOverlayClick}>
      <button className="menu__close-button" 
              type="button"
              onClick={closeBurgerMenu}></button>
      <div className={`menu__container ${isOpen ? 'menu__container_opened' : ''}`}>
        <Navigation type="logged-in"
                    place="burger"
                    loggedIn={loggedIn}
                    closeBurgerMenu={closeBurgerMenu} />
      </div>
    </div>
  )
}

export default Menu;