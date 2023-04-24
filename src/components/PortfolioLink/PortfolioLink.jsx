function PortfolioLink({ name, link }) {
  return (
    <a className="portfolio-link" href={link} target="_blank" rel="noreferrer">
      <p className="portfolio-link__name">{name}</p>
      <p className="portfolio-link__arrow">↗</p>
    </a>
  )
}

export default PortfolioLink;