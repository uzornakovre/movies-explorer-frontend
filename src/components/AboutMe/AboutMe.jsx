import photo from '../../images/photo.jpg';
import Portfolio from '../Portfolio/Portfolio';
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className="about-me__name">Константин</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">Я родился и живу в Москве, закончил факультет приборостроения 
          и радоэлектроники в МГУПИ. Поработал какое-то время инженером в по оцифровке бумажных носителей
          и в сфере продаж. Еще со времен универа хотел заниматься программированием, 
          так что выбрал для себя направление Frontend и усердно учусь писать красивый и качественный код.
          Получаю колоссальное удовольствие от решения задач на языке программирования, так что намерен
          развиваться и развиваться!</p>
          <a className="about-me__portfolio"
             href="https://github.com/uzornakovre"
             target="_blank"
             rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография разработчика" />
      </div>
      <Portfolio />
    </section>
  )
}

export default AboutMe;