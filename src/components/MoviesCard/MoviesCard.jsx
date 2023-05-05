import checkMark from '../../images/check_mark.svg';
import removeIcon from '../../images/remove_icon.svg';
import { useState, useEffect } from 'react';

function MoviesCard({ card, page, saveMovie, deleteMovie, savedMovies, movieId }) {
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [buttonContent, setButtonContent] = useState('Сохранить');
  const [currentMovie] = useState(savedMovies.find(movie => movie.movieId === card.id));

  useEffect(() => {
    if (page === 'movies' && currentMovie) {
      setIsMovieSaved(() => savedMovies.some(movie => movie._id === currentMovie._id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMovie]);

  function handleSaveClick() {
    if (!isMovieSaved) {
      setIsMovieSaved(true);
      saveMovie(card);
    } else {
      deleteMovie(card);
      setIsMovieSaved(false);
    }
  }

  function handleDeleteClick() {
    deleteMovie(card);
  }

  useEffect(() => {
    // setCurrentMovie(savedMovies.find(movie => movie.movieId === card.id));
    
    if (page === 'movies') {
      if (isMovieSaved) {
        setButtonContent(<img src={checkMark} alt="Фильм добавлен" />)
      } else setButtonContent('Сохранить');
    }
    if (page === 'savedMovies') {
        setButtonContent(<img src={removeIcon} alt="Фильм добавлен" />)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMovieSaved, savedMovies]);

  function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
  }

  let duration = card.duration + ' ' + declOfNum(card.duration, ['минута', 'минуты', 'минут']);

  return (
    <article className="movies-card">
      <div className="movies-card__heading">
        <h3 className="movies-card__title">{card.nameRU}</h3>
        <p className="movies-card__duration">{duration}</p>
      </div>
      <a className="movies-card__trailer-link" href={card.trailerLink} target="blank">
        { page === 'movies' &&
          <img className="movies-card__image" src={`https://api.nomoreparties.co${card.image.url}`} alt={`Обложка фильма ${card.nameRU}`} />
        }
        { page === 'savedMovies' &&
          <img className="movies-card__image" src={card.image} alt={`Обложка фильма ${card.nameRU}`} />
        }
      </a>
      <div className="movies-card__caption">
        { page === 'movies' &&
          <button className={`movies-card__save-button ${(isMovieSaved && page === "movies") && "movies-card__save-button_active"}`}
                  type="button"
                  onClick={handleSaveClick}>{buttonContent}</button>
        }
        { page === 'savedMovies' &&
          <button className={`movies-card__save-button`}
                  type="button"
                  onClick={handleDeleteClick}>{buttonContent}</button>
        }

      </div>
    </article>
  )
}

export default MoviesCard;