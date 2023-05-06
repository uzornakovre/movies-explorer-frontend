import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';

function Profile({ isBurgerMenuOpen,
                   onBurgerClick,
                   closeBurgerMenu,
                   onOverlayClick,
                   loggedIn,
                   handleLogout,
                   handleUpdateUser,
                   formData
                 }) {

  const currentUser = useContext(CurrentUserContext);
  const { isLoading } = useContext(IsLoadingContext);
  const [errorToolTip, setErrorToolTip] = useState('Измените данные и нажмите "Редактировать"');
  const [buttonEditState, setButtonEditState] = useState(true);

  function handleSubmit(evt) {
    evt.preventDefault();

    if (currentUser.email !== formData.values.email || currentUser.name !== formData.values.name) {
      handleUpdateUser({
        name: formData.values.name,
        email: formData.values.email
      });
      setErrorToolTip('Данные успешно обновлены');
    } else {
      setErrorToolTip('Необходимо изменить хотя бы одно поле');
    }

    setButtonEditState(false);
  }

  function handleInputClick() {
    setErrorToolTip('Измените данные и нажмите "Редактировать"');
    setButtonEditState(true);
  }
 
  useEffect(() => {
    formData.setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    setButtonEditState(false);
  }, []);

  return (
    <>
      <Header page="profile"
              type="logged-in"
              loggedIn={loggedIn}
              onBurgerClick={onBurgerClick}
              isBurgerMenuOpen={isBurgerMenuOpen} />
      <main className="content">
        <form className="profile" onSubmit={handleSubmit} noValidate>
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <div className="profile__info">
            <fieldset className="profile__fieldset">
              <label className="profile__label" htmlFor="profileName">Имя</label>
              <input 
                className="profile__input"
                id="profileName"
                type="text"
                name="name"
                placeholder="Введите имя"
                minLength="2"
                maxLength="40"
                value={formData.values.name || ''}
                onChange={formData.handleChange}
                onKeyDown={handleInputClick}
                required
              />
              <span className="profile__input-error">{formData.errors.name}</span>
            </fieldset>
            <fieldset className="profile__fieldset">
              <label className="profile__label" htmlFor="profileEmail">E-mail</label>
              <input 
                className="profile__input profile__input_last"
                id="profileEmail"
                type="email"
                name="email"
                placeholder="Введите email"
                value={formData.values.email || ''}
                onChange={formData.handleChange}
                onKeyDown={handleInputClick}
                required 
              />
              <span className="profile__input-error">{formData.errors.email}</span>
            </fieldset>
          </div>
          <div className="profile__actions">
            <span className={`profile__error-tool-tip 
              ${errorToolTip === "Данные успешно обновлены" && "profile__error-tool-tip_success"}`}>{errorToolTip}</span>
            <button className={`profile__button profile__button_type_edit`}
                    type="submit"
                    disabled={!formData.isValid || !buttonEditState}>
                      {isLoading && '...'}{!isLoading && 'Редактировать'}</button>
            <button className="profile__button profile__button_type_logout"
                    type="button"
                    onClick={handleLogout}>Выйти из аккаунта</button>
          </div>
        </form>
      </main>
      <Menu isOpen={isBurgerMenuOpen}
            closeBurgerMenu={closeBurgerMenu}
            page="profile"
            loggedIn={loggedIn}
            onOverlayClick={onOverlayClick} />
    </>
  )
}

export default Profile;