(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{225:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(1),c=n.n(a),l=n(541),i=n(542),u=n(543),s=n(243),f=n(244),m=n(544),p=n(545),d=n(546),h=n(245),g=n(118),b=n(226),y=n.n(b),E=n(53),v=n.n(E),w=n(77),A=n(227),N=n.n(A),O=n(228),j=n(241),P=n(235),k=n.n(P);function F(e){return(F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t&&C(e.prototype,t),n&&C(e,n),e}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(t){function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=x(this,S(a).call(this,e))).state={name:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,r["Component"]),L(a,null,[{key:"toggleLanguage",value:function(t){t&&t.preventDefault(),e.setLanguage("en_CA"===e.lang?"fr_CA":"en_CA")}}]),L(a,[{key:"render",value:function(){var e=this,t=this.props,c=t.onLogin,g=t.onLogout,b=function(t){e.setState({name:t.profile.name}),c(t)};return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(l.a,{color:"white",className:"shadow-sm"},o.a.createElement("div",{className:"h-100 directory-fip"},o.a.createElement("img",{src:k.a,alt:"Government of Canada"})),o.a.createElement(i.a,{href:"/",className:"directory-brand"},o.a.createElement("span",null,"App Title")),o.a.createElement(u.a,{className:"ml-auto"},o.a.createElement(s.a,{className:"mr-2"},o.a.createElement(y.a,{oidcConfig:N.a,onUserLoaded:b,onUserFetched:b,onLogoutClick:function(t,n){n.logout(),e.setState({name:!1}),g()}},function(t){var n=t.onClick;return o.a.createElement(f.a,{onClick:function(e){e.stopPropagation(),n(e)}},e.state.name||"Login")})),o.a.createElement(s.a,null,o.a.createElement(f.a,{onClick:a.toggleLanguage},n(526).translate("src/containers/App.js","Language"))))),o.a.createElement("main",null,o.a.createElement(m.a,{className:"mt-3"},o.a.createElement(d.a,null,o.a.createElement(r.Fragment,null,o.a.createElement(h.a,{exact:!0,path:"/",component:O.a}),o.a.createElement(h.a,{path:"/info",component:j.a})))))))}}]),a}();H.defaultProps={onLogin:function(){},onLogout:function(){}},H.propTypes={onLogin:c.a.func,onLogout:c.a.func};t.a=Object(g.b)(function(e){return{showError:e.showError||[]}},function(e){return{onLogin:function(t){return e(Object(w.c)(t))},onLogout:function(){return e(Object(w.d)())},onErrorClose:function(){return e(Object(w.a)())}}})(v()(H))}).call(this,n(120).default({availableLanguages:["en_CA","fr_CA"]}))},227:function(e,t){var n=window.location.origin;e.exports={authority:"https://dev.account.gccollab.ca/openid",client_id:"123456",client_secret:"shhhhhitsasecrettoeveryone",scope:"openid modify_profile email profile",post_logout_redirect_uri:"".concat(n,"/#!logout"),redirect_uri:"".concat(n,"/#!callback"),silent_redirect_uri:"".concat(n,"/#!silent")}},228:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(539),c=n(242),l=n(540),i=n(229),u=n.n(i);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,i,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){document.title="Front-end Template"}},{key:"render",value:function(){var e="https://github.com/gctools-outilsgc/micro_service_template",t="https://github.com/gctools-outilsgc/micro_service_template",n="https://github.com/gctools-outilsgc/concierge";return o.a.createElement(a.a,{className:"flex"},o.a.createElement("h1",{className:"sr-only"},"Front End Template"),o.a.createElement(c.a,{className:"align-self-center",xs:"12",sm:"7",md:"5"},o.a.createElement("h2",{className:"display-4"},"Start building your front-end"),o.a.createElement("p",null,"Quickly prototype your applications by connecting to your account provider and back-end service. Also features easy internationalization."),o.a.createElement(l.a,{to:"/info",href:"/info"},"Get started using the front-end template"),o.a.createElement("h3",{className:"h4 mt-5"},"More information to get the job done"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://design.gccollab.ca"},"Aurora Design System")),o.a.createElement("li",null,o.a.createElement("a",{href:e},"Micro service template")),o.a.createElement("li",null,o.a.createElement("a",{href:n},"Concierge")),o.a.createElement("li",null,o.a.createElement("a",{href:t},"Front-end template")))),o.a.createElement(c.a,{className:"img-col",xs:"12",sm:"5",md:{size:6,offset:1}},o.a.createElement("img",{src:u.a,alt:"",className:"display-img"})))}}])&&f(n.prototype,i),s&&f(n,s),t}();t.a=h},229:function(e,t,n){e.exports=n.p+"static/media/static-blob.76bcf63c.png"},232:function(e,t,n){e.exports=n.p+"static/media/config.492ecfdc.png"},233:function(e,t,n){e.exports=n.p+"static/media/arch.57738954.png"},234:function(e,t,n){e.exports=n.p+"static/media/comp.42c202ed.png"},235:function(e,t){e.exports="data:image/png;base64,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"},241:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(540),c=n(539),l=n(242),i=n(53),u=n.n(i),s=n(232),f=n.n(s);var m=u()(function(){return o.a.createElement(c.a,{className:"flex mt-5"},o.a.createElement(l.a,{md:"7",className:"align-self-center"},o.a.createElement("h2",null,"Configuration"),o.a.createElement("p",null,"To get started with the front-end template, you will need to create a ",o.a.createElement("code",null,"oidcConfig.dev.js")," file in the",o.a.createElement("code",null," src")," directory to connect to your OpenID authentication provider. The file should follow this format:"),o.a.createElement("pre",null,o.a.createElement("code",null,o.a.createElement("p",null,"code"))),o.a.createElement("p",null,"Next enter the the uri to your graphql backend in the",o.a.createElement("code",null," src/index.js")," file."),o.a.createElement("pre",null,o.a.createElement("code",null,o.a.createElement("p",null,"code again"))),o.a.createElement("p",null,"You are now ready to go.")),o.a.createElement(l.a,{md:{size:5},className:"sm-img-col"},o.a.createElement("img",{className:"align-self-center sm-blob",src:f.a,alt:""})))}),p=n(233),d=n.n(p);var h=u()(function(){return o.a.createElement(c.a,{className:"flex mt-4"},o.a.createElement(l.a,{md:{size:6,offset:1},className:"align-self-center order-md-12"},o.a.createElement("h2",null,"Project Structure"),o.a.createElement("p",null,"The front-end template project structure has been setup to provide better findability and organization for you and your components. In the ",o.a.createElement("code",null,"src")," directory you have four main directories to work with, the ",o.a.createElement("code",null,"assets"),",",o.a.createElement("code",null," components"),", ",o.a.createElement("code",null,"containers")," and",o.a.createElement("code",null," gql")," directories."),o.a.createElement("p",null,"The ",o.a.createElement("code",null,"container")," directory is for your top-level page containers of your application. These are what you would use with ",o.a.createElement("code",null,"React Router")," to route to new pages in your application."),o.a.createElement("p",null,"The ",o.a.createElement("code",null,"components")," directory is for the rest of your components that will make up the pages of your application. We suggest creating a ",o.a.createElement("code",null,"core")," directory to house your components that will be used on multiple pages of your application. Other components can then be sorted into directories based of your page structure and then be broken down further into separate features."),o.a.createElement("p",null,"The ",o.a.createElement("code",null,"gql")," directory is for your graphql",o.a.createElement("code",null," queries")," and ",o.a.createElement("code",null,"mutations"),". We recommend keeping these in separate files for better organization."),o.a.createElement("p",null,"You can find examples of most of the structure already in the front-end template when you first load the project.")),o.a.createElement(l.a,{md:"5",className:"order-md-1 text-right sm-img-col"},o.a.createElement("img",{className:"align-self-center float-right sm-blob",src:d.a,alt:""})))}),g=n(234),b=n.n(g),y={micro:"https://github.com/gctools-outilsgc/micro_service_template"};var E=u()(function(){return o.a.createElement(c.a,{className:"flex mt-4"},o.a.createElement(l.a,{md:"7",className:"align-self-center"},o.a.createElement("h2",null,"Bringing it all together"),o.a.createElement("p",null,"The front-end template has been configured to easily work with our ",o.a.createElement("a",{href:y.micro},"Micro Service Template"),". Using both in combination you can quickly build great applications that utilize ",o.a.createElement("code",null,"GraphQL"),", ",o.a.createElement("code",null," Prisma")," and",o.a.createElement("code",null," React"),".")),o.a.createElement(l.a,{className:"sm-img-col",md:{size:5}},o.a.createElement("img",{className:"align-self-center sm-blob",src:b.a,alt:""})))});function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,N(t).apply(this,arguments))}var n,c,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),n=t,(c=[{key:"componentDidMount",value:function(){document.title="Using the Front-end template"}},{key:"render",value:function(){return o.a.createElement("div",{className:"mt-5"},o.a.createElement("h1",null,"Using the Front-end Template"),o.a.createElement(m,null),o.a.createElement(h,null),o.a.createElement(E,null),o.a.createElement("div",null,o.a.createElement("p",{className:"text-center h2 mt-4"},"Happy Coding")),o.a.createElement("div",{className:"mt-5 mb-5"},o.a.createElement(a.a,{to:"/",href:"/"},"Return to home")))}}])&&w(n.prototype,c),l&&w(n,l),t}();t.a=j},247:function(e,t,n){e.exports=n(538)},260:function(e,t,n){var r={"./src/containers/App.js.po":[547,0]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,7)})}o.keys=function(){return Object.keys(r)},o.id=260,e.exports=o},261:function(e,t,n){var r={"./src/containers/App.js.po":[548,1]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,7)})}o.keys=function(){return Object.keys(r)},o.id=261,e.exports=o},528:function(e,t,n){},538:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(223),c=n.n(a),l=n(240),i=n(239),u=(n(252),n(118)),s=n(225);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(77),m=(n(528),new l.a({uri:"https://link.to.your.backend/graphql"}));c.a.render(o.a.createElement(u.a,{store:f.b},o.a.createElement(i.ApolloProvider,{client:m},o.a.createElement(s.a,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"d",function(){return f}),n.d(t,"a",function(){return m});var r=n(115),o="LOGIN",a="LOGOUT",c="ERROR",l="CLEAR_ERROR",i={showError:!1,user:!1};var u=Object(r.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object.assign({},{user:t.user});case a:return Object.assign({},{user:!1});case c:return Object.assign({},e,{showError:t.error});case l:return Object.assign({},e,{showError:!1});default:return e}}),s=function(e){return{type:o,user:e}},f=function(){return{type:a}},m=function(){return{type:l}};t.b=u}},[[247,3,4]]]);
//# sourceMappingURL=main.bd214931.chunk.js.map