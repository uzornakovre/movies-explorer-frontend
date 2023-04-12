function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__top">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2020</p>
          <ul className="footer__links-list">
            <li className="footer__links-item">
              <a className="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a className="footer__link"
                href="https://github.com/uzornakovre"
                target="_blank"
                rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;