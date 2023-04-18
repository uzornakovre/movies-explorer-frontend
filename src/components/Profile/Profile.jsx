import Header from '../Header/Header';

function Profile() {
  let userName = 'Константин'; // temp
  let userEmail = 'email@domain.com' // temp

  return (
    <>
      <Header page="profile" />
      <div className="profile">
        <h2 className="profile__title">{`Привет, ${userName}!`}</h2>
        <table className="profile__info">
          <tr className="profile__info-row">
            <th className="profile__info-heading">Имя</th>
            <td className="profile__info-data">{userName}</td>
          </tr>
          <tr className="profile__info-row">
            <th className="profile__info-heading">Email</th>
            <td className="profile__info-data">{userEmail}</td>
          </tr>
        </table>
        <div className="profile__actions">
          <button className="profile__button profile__button_type_edit" type="button">Редактировать</button>
          <button className="profile__button profile__button_type_logout" type="button">Выйти из аккаунта</button>
        </div>
      </div>
    </>
  )
}

export default Profile;