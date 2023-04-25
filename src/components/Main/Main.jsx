import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Menu from '../Menu/Menu';

function Main({ 
  loggedIn,
  isBurgerMenuOpen,
  closeBurgerMenu,
  handleMenuOverlayClick,
  onBurgerClick,
}) {
  return (
    <>
      <Header page="main"
              type="start-page"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen}  />
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            loggedIn={loggedIn}
            onOverlayClick={handleMenuOverlayClick} />
    </>
  )
}

export default Main;