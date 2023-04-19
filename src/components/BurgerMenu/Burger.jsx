function Burger() {
  return (
    <div className="burger">
      <input className="burger__switcher" 
            id="burgerSwitcher"
            type="checkbox" />
      <label className="burger__button"
            htmlFor="burgerSwitcher">
        <span className="burger__line"></span>
      </label>
    </div>
  )
}

export default Burger