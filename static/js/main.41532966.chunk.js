(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(7),s=n.n(i),r=(n(16),n(10)),u=n(2),l=n.p+"static/media/logo.03b78ada.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:l,alt:"\u0420\u0438\u0441\u0443\u043d\u043e\u043a"})})},p=n(6),b=o.a.createContext();var j=function(e){var t=Object(c.useContext)(b),n=e.owner._id===t._id,o="element__delete-button ".concat(n?"element__delete-button":"element__delete-button_hidden"),i=e.likes.some((function(e){return e._id===t._id})),s="element__button ".concat(i?"element__button_active":"");return Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("img",{className:"element__image",src:e.link,alt:e.name,onClick:function(){e.onCardClick({name:e.name,src:e.link})}}),Object(a.jsxs)("div",{className:"element__row",children:[Object(a.jsx)("h2",{className:"element__title",children:e.name}),Object(a.jsxs)("div",{className:"element__buttons",children:[Object(a.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardLike({likes:e.likes,_id:e._id})}}),Object(a.jsx)("div",{className:"element__like-numbers",children:e.likes.length})]})]}),Object(a.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardDelete({_id:e._id})}})]})};var _=function(e){var t=Object(c.useContext)(b);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__columns",children:[Object(a.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0420\u0438\u0441\u0443\u043d\u043e\u043a",onClick:e.onEditAvatar}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__info-title",children:t.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile}),Object(a.jsx)("p",{className:"profile__info-subtitle",children:t.about})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(a.jsx)(j,Object(p.a)(Object(p.a)({},t),{},{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete}),t._id)}))})]})};var m=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""," "),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsx)("form",{className:"popup__form popup__form_type_".concat(e.name),name:"form-popup",onSubmit:e.onSubmit,children:e.children}),Object(a.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose})]})})})};var f=function(e){var t=Object(c.useContext)(b),n=Object(c.useState)(t.name),o=Object(u.a)(n,2),i=o[0],s=o[1],r=Object(c.useState)(t.about),l=Object(u.a)(r,2),d=l[0],p=l[1];return Object(c.useEffect)((function(){s(t.name),p(t.about)}),[t]),Object(a.jsx)(h,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:d})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",name:"name",className:"popup__info popup__info_title popup__input",id:"name-input",value:i||"",onChange:function(e){s(e.target.value)},required:!0,minLength:2,maxLength:40,placeholder:"\u0418\u043c\u044f"}),Object(a.jsx)("span",{id:"name-input-error",className:"error"}),Object(a.jsx)("input",{type:"text",name:"about",className:"popup__info popup__info_subtitle popup__input",id:"title-input",value:d||"",onChange:function(e){p(e.target.value)},required:!0,minLength:2,maxLength:200,placeholder:"\u041f\u0440\u043e\u0444\u0444\u0435\u0441\u0438\u044f"}),Object(a.jsx)("span",{id:"title-input-error",className:"error"}),Object(a.jsx)("button",{type:"submit",className:"popup__submit-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var O=function(e){var t=Object(c.useRef)();return Object(a.jsx)(h,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"url",required:!0,className:"popup__info popup__info_subtitle popup__info_subtitle-add-card",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"link",id:"info-subtitle-avatar",ref:t}),Object(a.jsx)("span",{id:"info-subtitle-avatar-error",className:"error"}),Object(a.jsx)("button",{type:"submit",className:"popup__submit-button popup__submit-button_add-card",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var v=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(a.jsx)(h,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value}),t.current.value="",n.current.value=""},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",required:!0,minLength:2,maxLength:30,className:"popup__info popup__info_title popup__info_title-add-card",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",id:"info-title-add-card",ref:t}),Object(a.jsx)("span",{id:"info-title-add-card-error",className:"error"}),Object(a.jsx)("input",{type:"url",required:!0,className:"popup__info popup__info_subtitle popup__info_subtitle-add-card",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"info-subtitle-add-card",ref:n}),Object(a.jsx)("span",{id:"info-subtitle-add-card-error",className:"error"}),Object(a.jsx)("button",{type:"submit",className:"popup__submit-button popup__submit-button_add-card",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})};var x=function(){return Object(a.jsx)(h,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{type:"submit",className:"popup__submit-button",children:"\u0414\u0430"})})})};var C=function(e){return Object(a.jsx)("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""," "),children:Object(a.jsxs)("div",{className:"popup__container-image",children:[Object(a.jsx)("img",{className:"popup__image",src:e.card?e.card.src:"#",alt:e.card?e.card.name:"#"}),Object(a.jsx)("button",{type:"button",className:"popup__close-button popup__close-button-image",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__image-caption",children:e.card?e.card.name:"#"})]})})},k=n(8),g=n(9),N=new(function(){function e(t){var n=t.baseUrl,a=t.token;Object(k.a)(this,e),this._baseUrl=n,this._token=a}return Object(g.a)(e,[{key:"_requestResult",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._requestResult(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._requestResult(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._requestResult(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",token:"f552dc2b-43e4-4b2f-bf48-212edce5bbdf"});var y=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),s=Object(u.a)(i,2),l=s[0],p=s[1],j=Object(c.useState)(!1),h=Object(u.a)(j,2),k=h[0],g=h[1],y=Object(c.useState)(!1),U=Object(u.a)(y,2),S=U[0],L=U[1],P=Object(c.useState)({}),q=Object(u.a)(P,2),E=q[0],A=q[1],R=Object(c.useState)([]),D=Object(u.a)(R,2),T=D[0],F=D[1];function z(){o(!1),p(!1),g(!1),L(!1)}return Object(c.useEffect)((function(){N.getUserData().then((function(e){A(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){N.getInitialCards().then((function(e){F(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(b.Provider,{value:E,children:Object(a.jsx)("div",{className:"body",children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(d,{}),Object(a.jsx)(_,{onEditAvatar:function(){g(!0)},onEditProfile:function(){o(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){L(e)},onCardLike:function(e){(e.likes.some((function(e){return e._id===E._id}))?N.deleteCardLike(e._id):N.addCardLike(e._id)).then((function(t){var n=T.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){N.removeCard(e._id).then((function(){var t=T.filter((function(t){return e._id!==t._id}));F(t)})).catch((function(e){return console.log(e)}))},cards:T}),Object(a.jsx)(m,{}),Object(a.jsx)(f,{isOpen:n,onClose:z,onUpdateUser:function(e){N.editProfile(e).then((function(e){A(e),z()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(O,{isOpen:k,onClose:z,onUpdateAvatar:function(e){N.changeUserAvatar(e).then((function(e){A(e),z()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(v,{isOpen:l,onClose:z,onAddPlace:function(e){N.addCard(e).then((function(e){F([e].concat(Object(r.a)(T))),z()})).catch((function(e){return console.log(e)}))}}),Object(a.jsx)(x,{}),Object(a.jsx)(C,{card:S,onClose:z})]})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),U()}},[[17,1,2]]]);
//# sourceMappingURL=main.41532966.chunk.js.map