(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),s=n.n(o),i=(n(28),n(7)),c=n.n(i),l=n(8),u=n(2),h=n(6),d=n(4),f=n(3),m=(n(30),n(0)),p=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){e.setState({showDetails:!0})},e.handleCloseDetails=function(){e.setState({showDetails:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.eventData;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"event",children:[Object(m.jsx)("h1",{className:"eventSummary",children:t.summary}),Object(m.jsx)("h3",{className:"eventLocation",children:t.location}),Object(m.jsxs)("h4",{className:"eventtime",children:["Start: ",t.start.dateTime.substr(0,10)," Time: ",t.start.dateTime.substr(11,5)," ",Object(m.jsx)("br",{}),"End: ",t.end.dateTime.substr(0,10)," Time: ",t.end.dateTime.substr(11,5)]}),!0===this.state.showDetails&&Object(m.jsx)("h5",{className:"eventDescription",children:t.description}),!1===this.state.showDetails&&Object(m.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()},children:"Show Details"}),!0===this.state.showDetails&&Object(m.jsx)("button",{className:"hideDetailsButton",onClick:function(){return e.handleCloseDetails()},children:"Hide Details"})]})})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"eventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(p,{eventData:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontStyle:a.fontStyle,height:a.height}},a.color=null,a.fontStyle=null,a.height=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Alert",children:Object(m.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="white",a.height="frCell",a}return n}(b),j=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.fontStyle="italic",a.height="frCell",a}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="yellow",a.height="frCell",a}return n}(b),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleNumberInputChange=function(t){var n=t.target.value,a=e.props.updateNumberOfEvents;return n<1?e.setState({error:"Number must at least be 1",numberOfEvents:""}):n>32?e.setState({error:"Number can not be higher than 32",numberOfEvents:""}):(e.setState({numberOfEvents:n,error:""}),void a(n))},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"numberOfEvents",children:[Object(m.jsx)("label",{className:"numberOfEventsLabel",children:"Number of Events shown"}),Object(m.jsx)("input",{type:"number",className:"numberOfEventInput",value:this.state.numberOfEvents,placeholder:"Type in number, 1-32",onChange:this.handleNumberInputChange}),Object(m.jsx)(j,{text:this.state.error})]})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,e.props.numberOfEvents)},e.state={query:"",suggestions:[],showSuggestions:void 0},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"citySearch",children:[Object(m.jsx)(g,{text:this.state.infoText}),Object(m.jsx)("label",{className:"citySearch_label",children:"Find Events"}),Object(m.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),y=n(23),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(11),T=n.n(k),N=n(9),E=n.n(N),C=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},W=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,Z();case 11:if(!(n=e.sent)){e.next=21;break}return I(),a="https://tslzbfaj92.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,T.a.get(a);case 17:return(r=e.sent).data&&(o=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://tslzbfaj92.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://tslzbfaj92.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(49),n(50);var L=function(e){return e.showWelcomeScreen?Object(m.jsxs)("div",{className:"WelcomeScreen",children:[Object(m.jsx)("h1",{children:"Welcome to the Meet app"}),Object(m.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(m.jsx)("div",{className:"button_cont",align:"center",children:Object(m.jsxs)("div",{class:"google-btn",children:[Object(m.jsx)("div",{class:"google-icon-wrapper",children:Object(m.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})}),Object(m.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(m.jsx)("b",{children:"Sign in with google"})}),"Page 1"]})}),Object(m.jsx)("a",{href:"https://YOUR_GITHUB_USERNAME.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},M=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],NumberOfEvents:32,currentCity:"all",warningText:null,showWelcomeScreen:void 0},e.updateEvents=function(t,n){D().then((function(a){var r="all"===t?a.slice(0,n):a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e.updateNumberOfEvents=function(t){e.setState({NumberOfEvents:t});var n=e.state.currentCity;e.updateEvents(n,t)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"Please go online to see the updated Content, you are currently seeing stored content of your last session!"}),t=localStorage.getItem("access_token"),e.next=5,W(t);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&D().then((function(e){o.mounted&&o.setState({events:e,locations:C(e)})}));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(m.jsx)("div",{className:"App"}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)("h1",{children:"TECH EVENTS"})}),Object(m.jsx)(w,{text:this.state.warningText}),Object(m.jsx)(x,{numberOfEvents:this.state.NumberOfEvents,locations:this.state.locations,updateEvents:this.updateEvents}),Object(m.jsx)(O,{updateNumberOfEvents:this.updateNumberOfEvents}),Object(m.jsx)(v,{events:this.state.events}),Object(m.jsx)(L,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){Z()}})]})}}]),n}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(22).config("c8b938f324144062ba8ca70409e1c0b3").install(),s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(t,e)}))}}(),B()}},[[52,1,2]]]);
//# sourceMappingURL=main.0d9b4412.chunk.js.map