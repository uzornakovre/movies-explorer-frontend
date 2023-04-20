// import { useEffect, useRef } from "react";
function Burger({ onBurgerClick }) {
  
  return (
    <button className="burger"
            type="button"
            onClick={onBurgerClick}></button>
  )
}

export default Burger;