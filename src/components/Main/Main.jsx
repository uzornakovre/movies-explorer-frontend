import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
// import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <>
      <Header page="main"
              type="start-page"/>
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  )
}

export default Main;