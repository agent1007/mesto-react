import PopupWithForm from './PopupWithForm';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName ] = useState(currentUser.name);
  const [link, setLink] = useState(currentUser.link);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setLink(e.target.value);
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link
    });
  } 



    return (
        <PopupWithForm 
            name='add-card' 
            title='Новое место' 
            isOpen={props.isOpen}
            onClose={props.onClose} 
            onSubmit={handleSubmit}  >
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
                value={name || ''}
                onChange={handleChangeName} 
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
                value={link || ''}
                onChange={handleChangeDescription} 
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
    )
}

export default AddPlacePopup;