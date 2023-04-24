import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    return navigate(-1);
  }

  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <h2 className="not-found-page__error-code">404</h2>
        <p className="not-found-page__error-description">Страница не найдена</p>
        <button className="not-found-page__go-back"
                type="button"
                onClick={goBack}
        >Назад</button>
      </div>
    </div>
  )
}

export default NotFound;