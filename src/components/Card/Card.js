function Card(props) {

    function handleClick() {
        props.onCardClick({
            name: props.name,
            src: props.src
         })
    }

    
    return (
        <div className="element">
            <img className="element__image" src={props.src} alt={props.name} onClick={handleClick}/>
            <div className="element__row">
              <h2 className="element__title" >{props.name}</h2>
              <div className="element__buttons">
                <button type="button" className="element__button" />
                <div className="element__like-numbers" >{props.likes.length}</div>
              </div>
            </div>
            <button type="button" className="element__delete-button" />
          </div>
    )
}

export default Card;