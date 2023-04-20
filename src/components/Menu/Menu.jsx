import Navigation from "../Navigation/Navigation";

function Menu({ isOpen, page, closeBurgerMenu }) {
  return (
    <div className={`menu ${isOpen ? 'menu_opened' : ''}`}>
      <button className="menu__close-button" 
              type="button"
              onClick={closeBurgerMenu}></button>
      <div className={`menu__container ${isOpen ? 'menu__container_opened' : ''}`}>
        <Navigation type="logged-in"
                    place="burger"
                    page={page}
                    closeBurgerMenu={closeBurgerMenu} />
      </div>
    </div>
  )
}

export default Menu;