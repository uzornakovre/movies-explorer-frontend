import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle title="О проекте" />
      <div className="about-project__descriptions">
        <div className="about-project__description">
          <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, 
          добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, 
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__progress-bar">
        <p className="about-project__progress about-project__progress_week">1 неделя</p>
        <p className="about-project__progress about-project__progress_month">4 недели</p>
      </div>
    </section>
  )
}

export default AboutProject;