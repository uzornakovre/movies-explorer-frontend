import earthLogo from '../../images/earth.png'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__heading">
          <h1 className="promo__heading-title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__heading-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className="promo__image" src={earthLogo} alt="Изображение планеты земля из слов Веб" />
        <button className="promo__button" type="button">Узнать больше</button>
      </div>
    </section>
  )
}

export default Promo;