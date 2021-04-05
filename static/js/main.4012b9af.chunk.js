(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3TDu_",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2_lHG"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__a3f1Q",Modal:"Modal_Modal__1dGPW"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2mpFh"}},24:function(e,t,a){e.exports={Button:"Button_Button__3xxkw"}},30:function(e,t,a){},31:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=(a(30),a(10)),i=a(4),s=a(5),u=a(7),m=a(6),h=(a(31),a(12)),g=a.n(h);g.a.defaults.baseURL="https://pixabay.com/api/";var b=function(e,t){var a="?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat("19920975-a527e386fa9eb188d46acf2f9");return g.a.get(a).then((function(e){var t=e.data;return console.log(t),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),console.log(t.hits),t.hits}))},p=a(8),y=a.n(p),d=a(0),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.reset=function(){e.setState({query:""})},e.onChange=function(t){t.preventDefault();var a=t.currentTarget.value;e.setState({query:a})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:y.a.Searchbar,children:Object(d.jsxs)("form",{className:y.a.SearchForm,onSubmit:this.onSubmit,children:[Object(d.jsx)("button",{type:"submit",className:y.a.SearchFormBtn,onClick:this.onSubmit,children:Object(d.jsx)("span",{className:y.a.SearchFormBtnLabel,children:"Search"})}),Object(d.jsx)("input",{className:y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onChange})]})})}}]),a}(n.Component),f=a(13),O=a.n(f),v=function(e){var t=e.image,a=e.onClick,n=t.id,r=t.webformatURL,o=t.tags;return Object(d.jsx)("li",{className:O.a.ImageGalleryItem,onClick:a,children:Object(d.jsx)("img",{src:r,alt:o,className:O.a.ImageGalleryItemImage})},n)},S=a(23),_=a.n(S),x=a(14),w=a.n(x),I=document.querySelector("#modal-root"),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){var e=this.props.image,t=e.largeImageURL,a=e.tags;return Object(o.createPortal)(Object(d.jsx)("div",{className:w.a.Overlay,onClick:this.onOverlayClick,children:Object(d.jsx)("div",{className:w.a.Modal,children:Object(d.jsx)("img",{src:t,alt:a,width:"100%"})})}),I)}}]),a}(n.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:null},e.hideModal=function(){e.setState({image:null})},e.showModal=function(t){e.setState({image:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(t){return Object(d.jsx)(v,{image:t,onClick:function(){return e.showModal(t)}},t.id)}))}),this.state.image&&Object(d.jsx)(k,{onClose:this.hideModal,image:this.state.image})]})}}]),a}(n.Component),F=a(24),G=a.n(F),q=function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"submit",onClick:t,className:G.a.Button,children:"Load more"})},N=(a(51),a(25)),M=a.n(N),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,gallery:[]},e.componentDidUpdate=function(t,a){var n=e.state,r=n.query,o=n.page;e.state.query!==a.query&&(e.setState({gallery:[]}),b(r,o).then((function(t){e.setState({gallery:Object(l.a)(t)})}))),e.state.query===a.query&&e.state.page!==a.page&&b(r,o).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(t))}}))}))},e.onNewQuery=function(t){var a=t.query;e.setState({query:a})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{onSubmit:this.onNewQuery}),this.state.gallery?Object(d.jsx)(C,{images:this.state.gallery}):Object(d.jsx)(M.a,{type:"Hearts",color:"violet",height:100,width:100,timeout:3e3}),!(!this.state.gallery.length||this.state.gallery.length%12!==0)&&Object(d.jsx)(q,{onClick:function(){e.setState((function(e){return{page:e.page+1}}))}})]})}}]),a}(n.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2MZdW",SearchForm:"Searchbar_SearchForm__2kFy0",SearchFormBtn:"Searchbar_SearchFormBtn__oe7aF",SearchFormBtnLabel:"Searchbar_SearchFormBtnLabel__3h84d",SearchFormInput:"Searchbar_SearchFormInput__wQFv1"}}},[[72,1,2]]]);
//# sourceMappingURL=main.4012b9af.chunk.js.map