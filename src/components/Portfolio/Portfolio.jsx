import PortfolioLink from "../PortfolioLink/PortfolioLink";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <PortfolioLink name="Статичный сайт"
                     link="https://uzornakovre.github.io/how-to-learn/" />
      <PortfolioLink name="Адаптивный сайт"
                     link="https://uzornakovre.github.io/russian-travel/" />
      <PortfolioLink name="Одностраничное приложение"
                     link="https://mesto-project.website/" />
    </section>
  )
}

export default Portfolio;