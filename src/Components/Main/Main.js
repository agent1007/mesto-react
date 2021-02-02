// import avatarAnalog from '../../images/AvatarAnalog.jpg'
import api from '../../utils/Api';
import Card from '../Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription , setUserDescription ] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect( () => {
      api.getUserData()
        .then(res => {
          setUserName(res.name);
          setUserDescription(res.about);
          setUserAvatar(res.avatar)
        }
      )
      .catch(err => console.log(err))
    
  },[])
  // console.log(userName)
  const [cards, setCards] = useState([]);
  useEffect( () => {
      api.getInitialCards()
        .then(res => {
          const cards = res.map(item => {
            return {
              id: item._id,
              src: item.link,
              name: item.name,
              likes: item.likes,
            }
          })
          setCards(cards)
        })
        .catch(err => console.log(err))
    
  }, [])
  // console.log(cards)
    return (
        <main className="content">
        <section className="profile">
          <div className="profile__columns">
            <img className="profile__avatar" src={userAvatar} alt="Рисунок" onClick={props.onEditAvatar}/>
            <div className="profile__info">
              <h1 className="profile__info-title">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
              <p className="profile__info-subtitle">{userDescription}</p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={props.onAddPlace} />         
        </section>
        <section className="elements">
          {cards.map(item => {return (<Card key={item.id} {...item} onCardClick={props.onCardClick}/>)})}
        </section>
      </main>
    );
}
  
export default Main;