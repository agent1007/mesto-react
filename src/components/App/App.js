

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';

import { useState } from 'react';
// import { useEffect } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false)
  }


  const [selectedCard, setSelectedCard] = useState(false);
  function handleCardClick (card) {
    setSelectedCard(card);
  }

  

  return (
    <div className="App">
      
    <div className="body"> 
    <div className="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
    />
    <Footer />
    <PopupWithForm 
      name='edit' 
      title='Редактировать профиль' 
      
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    > 
      <>
        <input 
          type="text" 
          required 
          minLength={2} 
          maxLength={40} 
          className="popup__info popup__info_title popup__input" 
          placeholder="Имя" 
          defaultValue={123} 
          name="name" 
          id="info-title-edit" 
        />
        <span 
          id="info-title-edit-error" 
          className="error" 
        />
        <input 
          type="text" 
          required 
          minLength={2} 
          maxLength={200}
          className="popup__info popup__info_subtitle popup__input" 
          placeholder="Проффесия" 
          defaultValue={321} 
          name="job" id="info-subtitle-edit" 
        />
        <span 
          id="info-subtitle-edit-error" 
          className="error" 
        />    
        <button 
          type="submit" 
          className="popup__submit-button">Сохранить
        </button>
        </>
      </PopupWithForm>
    <PopupWithForm 
      name='add-card' 
      title='Новое место' 
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <> 
        <input 
          type="text" 
          required 
          minLength={2} 
          maxLength={30} 
          className="popup__info popup__info_title popup__info_title-add-card" 
          placeholder="Название" 
          name="name" 
          id="info-title-add-card" 
        />
        <span 
          id="info-title-add-card-error" 
          className="error" 
        />  
        <input 
          type="url" 
          required 
          className="popup__info popup__info_subtitle popup__info_subtitle-add-card" 
          placeholder="Ссылка на картинку" 
          name="link" 
          id="info-subtitle-add-card" 
        />
        <span 
          id="info-subtitle-add-card-error" 
          className="error" 
        />  
        <button 
          type="submit" 
          className="popup__submit-button popup__submit-button_add-card">Создать
        </button>
      </>
      </PopupWithForm>
    <PopupWithForm 
      name='confirm' 
      title='Вы уверены?'
    >
      <>
        <button 
          type="submit" 
          className="popup__submit-button">Да
        </button>
      </>
      </PopupWithForm>
    <PopupWithForm 
      name='avatar' 
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <>
        <input 
          type="url" 
          required 
          className="popup__info popup__info_subtitle popup__info_subtitle-add-card" 
          placeholder="Ссылка на аватар" 
          name="link" 
          id="info-subtitle-avatar" 
        />
        <span 
          id="info-subtitle-avatar-error" 
          className="error" 
        />  
        <button 
          type="submit" 
          className="popup__submit-button popup__submit-button_add-card">Сохранить
        </button>
      </>
    </PopupWithForm>
    <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}/>

  </div>
  </div>  
  <template className="template-element" id="element" />
  </div>
    
  );
}

export default App;
