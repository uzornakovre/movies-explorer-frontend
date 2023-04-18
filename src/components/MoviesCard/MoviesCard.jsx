import testImage from '../../images/test_image.jpg';
import checkMark from '../../images/check_mark.svg';
import { useState, useEffect } from 'react';

function MoviesCard() {
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [buttonContent, setButtonContent] = useState('Сохранить');

  function handleSaveClick() {
    if (!isMovieSaved) {
      setIsMovieSaved(true);
    } else setIsMovieSaved(false);
  }

  useEffect(() => {
    if (isMovieSaved) {
      setButtonContent(<img src={checkMark} alt="Фильм добавлен" />)
    } else setButtonContent('Сохранить');
  }, [isMovieSaved, buttonContent]);

  return (
    <article className="movies-card">
      <div className="movies-card__heading">
        <h3 className="movies-card__title">В погоне за Бенкси</h3>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img className="movies-card__image" src={testImage} alt="Здесь будет описание карточки" />
      <div className="movies-card__caption">
        <button className={`movies-card__save-button ${isMovieSaved && "movies-card__save-button_active"}`}
                type="button"
                onClick={handleSaveClick}>{buttonContent}</button>
      </div>
    </article>
  )
}

export default MoviesCard;