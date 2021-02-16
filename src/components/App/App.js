import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';
import EditConfirmPopup from '../EditConfirmPopup/EditConfirmPopup';
import ImagePopup from '../ImagePopup/ImagePopup';
import api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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
  function handleCardClick (card) {
    setSelectedCard(card);
  }
 function handleUpdateUser(data) {
  api.editProfile(data)
    .then(data => {
      setCurrentUser(data);
      closeAllPopups()
    }
    )
    .catch(err => console.log(err))
  } 
  function handleUpdateAvatar(data) {
    api.changeUserAvatar(data)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups()
      }
      )
      .catch(err => console.log(err))
    } 
    function handleAddPlaceSubmit(data) {
      api.addCard(data)
        .then(newCard => {
          setCards([newCard, ...cards]);;
          closeAllPopups()
        }
        )
        .catch(err => console.log(err))
    } 
    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      const likeRequest = !isLiked ? api.addCardLike(card._id) : api.deleteCardLike(card._id);
      likeRequest
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch(err => console.log(err))
    } 
    function handleCardDelete(card) {
      api.removeCard(card._id) 
        .then(() => {
          const newCards = cards.filter((data) => {return card._id !== data._id} );
          setCards(newCards);
        })
        .catch(err => console.log(err))
    } 

    useEffect( () => {
      api.getUserData()
        .then(data => {
          setCurrentUser(data);
        })
      .catch(err => console.log(err))  
      
    },[])

    useEffect( () => {
      api.getInitialCards()
        .then(res => {
          setCards(res)
        })
        .catch(err => console.log(err))
      
    }, [])
  
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
         
        <div className="page">
          <Header />
          <Main 
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}  />
          <Footer />
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups} 
            onAddPlace={handleAddPlaceSubmit}    />




          <EditConfirmPopup />
          
          <ImagePopup 
            card={selectedCard}
            onClose={closeAllPopups}
          />

        </div>
      </div>  
      <template className="template-element" id="element" />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
