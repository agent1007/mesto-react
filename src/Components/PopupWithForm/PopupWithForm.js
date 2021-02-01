

function PopupWithForm() {

    
    return (
        <>
        <div className="popup popup_type_edit"> 
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form popup__form_type_edit" name="form-popup">
          <input type="text" required minLength={2} maxLength={40} className="popup__info popup__info_title popup__input" placeholder="Имя" defaultValue={123} name="name" id="info-title-edit" />
          <span id="info-title-edit-error" className="error" />
          <input type="text" required minLength={2} maxLength={200} className="popup__info popup__info_subtitle popup__input" placeholder="Проффесия" defaultValue={321} name="job" id="info-subtitle-edit" />
          <span id="info-subtitle-edit-error" className="error" />    
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </form>
        <button type="button" className="popup__close-button" />
      </div>
    </div>
    <div className="popup popup_type_add-card"> 
    <div className="popup__container-add-card">
      <h2 className="popup__title popup__title_add-card">Новое место</h2>
      <form className="popup__form popup__form_type_add-card" name="form-popup">
        <input type="text" required minLength={2} maxLength={30} className="popup__info popup__info_title popup__info_title-add-card" placeholder="Название" name="name" id="info-title-add-card" />
        <span id="info-title-add-card-error" className="error" />  
        <input type="url" required className="popup__info popup__info_subtitle popup__info_subtitle-add-card" placeholder="Ссылка на картинку" name="link" id="info-subtitle-add-card" />
        <span id="info-subtitle-add-card-error" className="error" />  
        <button type="submit" className="popup__submit-button popup__submit-button_add-card">Создать</button>
      </form>
      <button type="button" className="popup__close-button popup__close-button_add-card" />
    </div>
  </div>
  <div className="popup popup_confirm"> 
  <div className="popup__container-confirm">
    <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
    <form className="popup__form popup__form-confirm" name="form-popup">
      <button type="submit" className="popup__submit-button">Да</button>
    </form>
    <button type="button" className="popup__close-button popup__close-button_add-card" />
  </div>
</div>
<div className="popup popup_avatar"> 
  <div className="popup__container-add-card">
    <h2 className="popup__title popup__title_add-card">Обновить аватар</h2>
    <form className="popup__form popup__form-avatar" name="form-popup">
      <input type="url" required className="popup__info popup__info_subtitle popup__info_subtitle-add-card" placeholder="Ссылка на аватар" name="link" id="info-subtitle-avatar" />
      <span id="info-subtitle-avatar-error" className="error" />  
      <button type="submit" className="popup__submit-button popup__submit-button_add-card">Сохранить</button>
    </form>
    <button type="button" className="popup__close-button popup__close-button_add-card" />
  </div>
</div>
</>
    );
  }
  
  export default PopupWithForm;