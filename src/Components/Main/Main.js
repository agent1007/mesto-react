import avatarAnalog from '../../images/AvatarAnalog.jpg'

function Main() {

    function handleEditAvatarClick () {
      document.querySelector('.popup_avatar').classList.add('popup_opened')
    }
    function handleEditProfileClick () {
      document.querySelector('.popup_type_edit').classList.add('popup_opened')
    }
    function handleAddPlaceClick () {
      document.querySelector('.popup_type_add-card').classList.add('popup_opened')
    }
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__columns">
            <img className="profile__avatar" src={avatarAnalog} alt="Рисунок" onClick={handleEditAvatarClick}/>
            <div className="profile__info">
              <h1 className="profile__info-title" />
              <button type="button" className="profile__edit-button" onClick={handleEditProfileClick} />
              <p className="profile__info-subtitle" />
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={handleAddPlaceClick} />         
        </section>
        <section className="elements">
        </section>
      </main>
    );
  }
  
  export default Main;