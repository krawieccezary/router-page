(this.webpackJsonprouter_page=this.webpackJsonprouter_page||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/matthew-brodeur-V9nLp8zE_eQ-unsplash.6af7a9a2.jpg"},,,,,,function(e,t,a){"use strict";(function(e){var n=a(6),r=a(7),c=a(9),l=a(8),o=a(0),u=a.n(o),s=a(3),i=a(1),m=a(21),p=a(26),d=a(28),h=a(27),f=(a(51),function(t){Object(c.a)(o,t);var a=Object(l.a)(o);function o(){return Object(n.a)(this,o),a.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return console.log(e),u.a.createElement(s.a,{basename:"/router-page"},u.a.createElement("div",{className:"app"},u.a.createElement(i.c,{render:function(e){if(!e.location.pathname.includes("product/"))return u.a.createElement("header",null,u.a.createElement(m.a,null))}}),u.a.createElement("main",{className:"wrapper"},u.a.createElement("aside",null,u.a.createElement(p.a,null)),u.a.createElement("section",{className:"page"},u.a.createElement(d.a,null))),u.a.createElement("footer",null,u.a.createElement("div",{className:"wrapper"},u.a.createElement(h.a,null)))))}}]),o}(o.Component));t.a=f}).call(this,a(36))},function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),l=a(22),o=a.n(l),u=a(23),s=a.n(u),i=a(24),m=a.n(i),p=a(14),d=a.n(p);a(37);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:o.a,alt:"nature"})}}),r.a.createElement(c.c,{path:"/products",render:function(){return r.a.createElement("img",{src:s.a,alt:"nature"})}}),r.a.createElement(c.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:m.a,alt:"nature"})}}),r.a.createElement(c.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:d.a,alt:"nature"})}}),r.a.createElement(c.c,{path:"/login",render:function(){return r.a.createElement("img",{src:d.a,alt:"nature"})}}))}},function(e,t,a){e.exports=a.p+"static/media/dave-hoefler-lsoogGC_5dg-unsplash.d788a630.jpg"},function(e,t,a){e.exports=a.p+"static/media/jay-mantri-TFyi0QOx08c-unsplash.1fac6351.jpg"},function(e,t,a){e.exports=a.p+"static/media/kunal-shinde--f0YLss50Bs-unsplash.8b3028c2.jpg"},,function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(3);a(43);t.a=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.c,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/products"},"Products")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/admin"},"Admin"))))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(50);t.a=function(){var e=new Date,t=new Date(e).getFullYear();return r.a.createElement("small",null,"\xa9 ",t," Cezary Krawiec")}},function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),l=a(6),o=a(7),u=a(9),s=a(8),i=function(e){var t=e.post,a=e.user;return r.a.createElement("article",null,r.a.createElement("h2",null,t.title),r.a.createElement("span",null,a.name),r.a.createElement("p",null,t.body))},m=(a(44),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],users:[],isLoaded:!1},e.fetchUsers=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({users:t,isLoaded:!0})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){var a=t.slice(0,4);e.setState({posts:a}),e.fetchUsers()}))}},{key:"render",value:function(){var e=this,t=this.state.posts.map((function(t){return r.a.createElement(i,{key:t.id,post:t,user:e.state.users.filter((function(e){return e.id===t.userId}))[0]})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Home"),r.a.createElement("div",null,this.state.isLoaded&&t))}}]),a}(n.Component)),p=a(3),d=function(e){var t=e.id,a=e.image,n=e.title,c=e.price;return r.a.createElement("div",{className:"product"},r.a.createElement(p.b,{to:"/product/".concat(t)},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:a,alt:n})),r.a.createElement("h2",null,n),r.a.createElement("span",null,c," $")))},h=(a(45),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[],isLoaded:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(t){e.setState({products:t,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state.products.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Products"),r.a.createElement("div",{className:"products-grid"},this.state.isLoaded&&e))}}]),a}(n.Component)),f=(a(46),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={product:null,isLoaded:!1},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fakestoreapi.com/products/".concat(this.props.match.params.id)).then((function(e){return e.json()})).then((function(t){e.setState({product:t,isLoaded:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.isLoaded&&function(){var t=e.state.product,a=t.title,n=t.image,c=t.price,l=t.description;return r.a.createElement("div",{className:"product-page"},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("div",{className:"procuct-details"},r.a.createElement("h1",null,a),r.a.createElement("p",null,l),r.a.createElement("div",{className:"price-wrapp"},r.a.createElement("span",null,c," $"),r.a.createElement("button",null,"Add to cart"))))}())}}]),a}(n.Component)),E=(a(47),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={textarea:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({textarea:""})},e.handleTextarea=function(t){e.setState({textarea:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Contact"),r.a.createElement("form",{className:"contact-form",onSubmit:this.handleSubmit},r.a.createElement("textarea",{onChange:this.handleTextarea,value:this.state.textarea,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(c.a,{when:!!this.state.textarea.length,message:"Masz niewys\u0142any formularz. Czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),a}(n.Component)),g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Admin Panel"))},v=(a(48),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={login:"",password:"",isLoged:!1},e.date={login:"cesar",password:"1234"},e.handleLogin=function(t){e.setState({login:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.handleSubmit=function(t){var a=e.state,n=a.login,r=a.password;t.preventDefault(),n===e.date.login&&r===e.date.password&&e.setState({isLoged:!0})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.isLoged?r.a.createElement(c.b,{to:"/admin"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login Page"),r.a.createElement("form",{className:"admin-form",onSubmit:e.handleSubmit},r.a.createElement("input",{value:e.state.login,onChange:e.handleLogin,placeholder:"login",type:"text"}),r.a.createElement("input",{value:e.state.password,onChange:e.handlePassword,placeholder:"has\u0142o",type:"password"}),r.a.createElement("button",null,"Zaloguj si\u0119"))))}}]),a}(n.Component));a(49),t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,{path:"/",exact:!0,component:m}),r.a.createElement(c.c,{path:"/products",component:h}),r.a.createElement(c.c,{path:"/product/:id",component:f}),r.a.createElement(c.c,{path:"/contact",component:E}),r.a.createElement(c.c,{path:"/admin",component:g}),r.a.createElement(c.c,{path:"/login",component:v}))}},function(e,t,a){e.exports=a(30)},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(35),a(20));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null)),document.getElementById("root"))},,,,,function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){}],[[29,1,2]]]);
//# sourceMappingURL=main.6403755f.chunk.js.map