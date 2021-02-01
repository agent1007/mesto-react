// import Api from '../../Api/Api';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="App">
      
  <div className="body"> 
  <div className="page">
  <Header />
  <Main />
  <Footer />
  <PopupWithForm />
    
    
    <div className="popup popup_type_image">
      <div className="popup__container-image">
        <img className="popup__image" src="<%=require('./images/karachayevsk.jpg')%>" alt="Рисунок" />
        <button type="button" className="popup__close-button popup__close-button-image" />
        <h2 className="popup__image-caption">Карачаевск</h2>
      </div>
    </div>
    
  </div>
  </div>  
  <template className="template-element" id="element" />
  </div>
    
  );
}

export default App;
