(this.webpackJsonpstormbreaker=this.webpackJsonpstormbreaker||[]).push([[0],{155:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(28),c=t.n(l);t(94),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(95),t(96),t(97),t(98);var o=t(23),m=t(24),s=t(26),i=t(25),u=t(35),d=t(159),E=t(160),h=t(161),f=t(162),p=t(179),b=t(163),v=t(164),N=t(10),g=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={isNavOpen:!1},r.toggleNav=r.toggleNav.bind(Object(u.a)(r)),r}return Object(m.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{fluid:!0},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h1",null,"Storm Breaker"))))),n.a.createElement(E.a,{dark:!0,sticky:"top",expand:"md"},n.a.createElement("div",{className:"container"},n.a.createElement(h.a,{className:"mr-auto"}),n.a.createElement(f.a,{onClick:this.toggleNav}),n.a.createElement(p.a,{isOpen:this.state.isNavOpen,navbar:!0},n.a.createElement(b.a,{navbar:!0},n.a.createElement(v.a,{style:{marginRight:10}},n.a.createElement(N.c,{className:"nav-link",to:"/home"},n.a.createElement("i",{className:"fa fa-home fa-sm"})," Home")),n.a.createElement(v.a,{style:{marginRight:10}},n.a.createElement(N.c,{className:"nav-link",to:"/historical"},n.a.createElement("i",{className:"fa fa-folder fa-sm"})," Historical Reports")),n.a.createElement(v.a,{style:{marginRight:10}},n.a.createElement(N.c,{className:"nav-link",to:"/about"},n.a.createElement("i",{className:"fa fa-info fa-sm"})," About")),n.a.createElement(v.a,{style:{marginRight:10}},n.a.createElement(N.c,{className:"nav-link",to:"/contact"},n.a.createElement("i",{className:"fa fa-address-card fa-sm"})," Contact")))))))}}]),t}(r.Component);var y=function(e){return n.a.createElement("footer",{className:"site-footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4 col-sm-2 offset-1"},n.a.createElement("h5",null,"Links"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("a",{href:"/"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"/historical"},"Historical Reports")),n.a.createElement("li",null,n.a.createElement("a",{href:"/about"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"/contact"},"Contact")))),n.a.createElement("div",{className:"col-6 col-sm-3 text-center"},n.a.createElement("h5",null,"Social"),n.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"},n.a.createElement("i",{className:"fa fa-instagram"}))," ",n.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/"},n.a.createElement("i",{className:"fa fa-facebook"}))," ",n.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},n.a.createElement("i",{className:"fa fa-twitter"}))," ",n.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},n.a.createElement("i",{className:"fa fa-youtube"}))),n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},n.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),n.a.createElement("br",null),n.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co"},n.a.createElement("i",{className:"fa fa-envelope-o"})," stormbreaker@stormbreaker.com")))))},k=t(12),w=t(55),O=t(165),j=t(166),x=t(167),S=t(168),L=t(169),F=t(6);var R=function(e){var a=e.data;if(!a)return null;var t=a.title,r=void 0===t?"":t,l=a.features,c=void 0===l?[]:l;if(400===a.status)return n.a.createElement("h2",null,"Invalid parameters!");if(0===c.length)return n.a.createElement(d.a,{className:"noalertjumbo"},"No severe weather alerts");var o=(c[0]||{}).properties,m=void 0===o?{}:o,s=r.charAt(0).toUpperCase()+r.slice(1);return n.a.createElement("div",null,n.a.createElement(d.a,{className:"jumboweather"},n.a.createElement("h2",{className:"weatherheader"},s," at ",(new Date).toLocaleTimeString()),n.a.createElement("span",null,n.a.createElement("h1",null,m.event),n.a.createElement("p",null,"Severity: ",m.severity),n.a.createElement("p",null,"Certainty: ",m.certainty),n.a.createElement("p",null,"Urgency: ",m.urgency))))},T=function(){return n.a.createElement("div",{className:"col"},n.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),n.a.createElement("p",null,"Loading..."))};var C=function(){var e=Object(r.useState)({state:"",coordinates:"",touched:{state:!1,coordinates:!1}}),a=Object(w.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(null),o=Object(w.a)(c,2),m=o[0],s=o[1],i=Object(r.useState)(null),u=Object(w.a)(i,2),d=u[0],E=u[1],h={state:"https://api.weather.gov/alerts/active?status=actual&message_type=alert&area=".concat(t.state,"&urgency=Immediate,Expected&severity=Extreme,Severe&certainty=Observed,Likely"),coordinates:"https://api.weather.gov/alerts/active?status=actual&message_type=alert&point=".concat(t.coordinates,"&urgency=Immediate,Expected&severity=Extreme,Severe&certainty=Observed,Likely")},f=function(e){return function(a){return!a||a.length<=e}},p=function(e){if(e.ok)return e.json();E(e.errorMessage)};"object"===m&&m.features&&[].isArray(m.features);var b,v=function(e){var a=e.target.name,r=e.target.value;"state"===a&&l(Object(k.a)(Object(k.a)({},t),{},{state:r})),"coordinates"===a&&l(Object(k.a)(Object(k.a)({},t),{},{coordinates:r}))};return n.a.createElement("div",{className:"row text-center"},n.a.createElement("h2",{style:{marginTop:50,marginBottom:20}},"Severe Weather Search"),n.a.createElement(O.a,null,n.a.createElement(j.a,null,n.a.createElement(x.a,{className:"form-group"},n.a.createElement(S.a,{sm:{size:6,offset:3}},n.a.createElement(F.Control.text,{model:".state",id:"state",name:"state",placeholder:"State abbreviation e.g. WA",className:"form-control",onChange:function(e){return v(e)},validators:{validAbbreviation:function(e){return/^[A-Z]/i.test(e)},minLength:(b=2,function(e){return e&&e.length>=b}),maxLength:f(2.5)}}),n.a.createElement(F.Errors,{className:"error-text",model:".state",show:"touched",component:"div",messages:{validAbbreviation:"Invalid state abbreviation! ",minLength:"Must be at least two characters!",maxLength:"Cannot exceed two characters!"}})),n.a.createElement("p",{style:{marginTop:15,marginBottom:10}},"or"),n.a.createElement(S.a,{sm:{size:8,offset:2}},n.a.createElement(F.Control.text,{model:".coordinates",id:"coordinates",name:"coordinates",placeholder:"Latitude/longitude coordinates e.g. 47.8209,-122.3151 no spaces",className:"form-control",onChange:function(e){return v(e)},validators:{isNumber:function(e){return/[0-9]\,./i.test(e)},maxLength:f(13)}}),n.a.createElement(F.Errors,{className:"error-text",model:".coordinates",show:"touched",component:"div",messages:{isNumber:"US latitude/longitude coordinates only!"}})))),n.a.createElement(L.a,{type:"submit",color:"primary",size:"lg",style:{marginTop:15,marginRight:5,marginBottom:50},onClick:function(e){return function(e){e.preventDefault();var a=t.state?"state":"coordinates";fetch(h[a]).then(p).then((function(e){return s(e)})).catch((function(e){return E(e.errorMessage)}))}(e)}},"Search"),n.a.createElement(L.a,{type:"submit",color:"danger",size:"lg",style:{marginTop:15,marginBottom:50},href:"/"},"Clear"),n.a.createElement("div",{style:{marginTop:20}},m&&n.a.createElement("div",null,n.a.createElement(R,{data:m}))),n.a.createElement("div",null,d&&n.a.createElement("h1",null,d))))};var M=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md m-1"},n.a.createElement(C,null))))},A=t(170),P=t(171),B=t(172),I=t(173),q=t(174),D=t(175),H="http://54.201.39.167/";function _(e){var a=e.report;return n.a.createElement(A.a,null,n.a.createElement(N.b,{to:"/historical/".concat(a.id)},n.a.createElement(P.a,{width:"100%",src:H+a.image,alt:a.name}),n.a.createElement(B.a,null,n.a.createElement(I.a,null,a.name))))}var U=function(e){var a=e.reports.reports.map((function(e){return n.a.createElement("div",{key:e.id,className:"col-md-5 m-1"},n.a.createElement(_,{report:e}))}));return e.reports.isLoading?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(T,null))):e.reports.errMess?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,e.reports.errMess)))):n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(q.a,null,n.a.createElement(D.a,null,n.a.createElement(N.b,{to:"/home"},"Home")),n.a.createElement(D.a,{active:!0},"Reports")),n.a.createElement("h2",null,"Historical Reports"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},a))},z=t(176),W=t(177),Y=t(69);function J(e){var a=e.report;return n.a.createElement("div",{className:"col-sm-4 m-1"},n.a.createElement(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},n.a.createElement(A.a,{style:{padding:10}},n.a.createElement(P.a,{top:!0,src:H+a.image,alt:a.name}))))}function Z(e){var a=e.report;return n.a.createElement("div",{className:"col m-1"},n.a.createElement(Y.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translate(-50%)"}},n.a.createElement(A.a,null,n.a.createElement(z.a,{style:{paddingTop:4,paddingBottom:4,paddingLeft:10,paddingRight:10}},n.a.createElement(W.a,null,a.description)))))}var G=function(e){return e.isLoading?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(T,null))):e.errMess?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h4",null,e.errMess)))):e.report?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(q.a,null,n.a.createElement(D.a,null,n.a.createElement(N.b,{to:"/historical"},"Historical Reports")),n.a.createElement(D.a,{active:!0},e.report.name)),n.a.createElement("h2",null,e.report.name),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement(J,{report:e.report}),n.a.createElement(Z,{report:e.report}))):n.a.createElement("div",null)},$=t(178),K=function(e){return e&&e.length},Q=function(e){return function(a){return!a||a.length<=e}},V=function(e){return function(a){return a&&a.length>=e}},X=function(e){return!isNaN(+e)},ee=function(e){return/^[A-Z0-0._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},ae=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},r.handleSubmit=r.handleSubmit.bind(Object(u.a)(r)),r}return Object(m.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(q.a,null,n.a.createElement(D.a,null,n.a.createElement(N.b,{to:"/home"},"Home")),n.a.createElement(D.a,{active:!0},"Contact Us")),n.a.createElement("h2",null,"Contact Us"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row row-content align-items-center"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h5",null,"Our Address"),n.a.createElement("address",null,"135 West 50th Street Seventh Floor",n.a.createElement("br",null),"New York, NY 10020",n.a.createElement("br",null),"U.S.A.")),n.a.createElement("div",{className:"col"},n.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},n.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),n.a.createElement("br",null),n.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co"},n.a.createElement("i",{className:"fa fa-envelope-o"})," stormbreaker@stormbreaker.com"))),n.a.createElement("div",{className:"row row-content"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h2",null,"Send us your Feedback"),n.a.createElement("hr",null)),n.a.createElement("div",{className:"col-md-10"},n.a.createElement(F.Form,{model:"feedbackForm",onSubmit:function(a){return e.handleSubmit(a)}},n.a.createElement(x.a,{className:"form-group"},n.a.createElement($.a,{htmlFor:"firstName",md:2},"First Name"),n.a.createElement(S.a,{md:10},n.a.createElement(F.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:K,minLength:V(2),maxLength:Q(15)}}),n.a.createElement(F.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),n.a.createElement(x.a,{className:"form-group"},n.a.createElement($.a,{htmlFor:"lastName",md:2},"Last Name"),n.a.createElement(S.a,{md:10},n.a.createElement(F.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:K,minLength:V(2),maxLength:Q(15)}}),n.a.createElement(F.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),n.a.createElement(x.a,{className:"form-group"},n.a.createElement($.a,{htmlFor:"phoneNum",md:2},"Phone"),n.a.createElement(S.a,{md:10},n.a.createElement(F.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:K,minLength:V(10),maxLength:Q(15),isNumber:X}}),n.a.createElement(F.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),n.a.createElement(x.a,{className:"form-group"},n.a.createElement($.a,{htmlFor:"email",md:2},"Email"),n.a.createElement(S.a,{md:10},n.a.createElement(F.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:K,validEmail:ee}}),n.a.createElement(F.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),n.a.createElement(x.a,{className:"form-group"},n.a.createElement(S.a,{md:{size:4,offset:2}},n.a.createElement("div",{className:"form-check"},n.a.createElement($.a,{check:!0},n.a.createElement(F.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",n.a.createElement("strong",null,"May we contact you?")))),n.a.createElement(S.a,{md:4},n.a.createElement(F.Control.select,{model:".contactType",name:"contactType",className:"form-control"},n.a.createElement("option",null,"By Phone"),n.a.createElement("option",null,"By Email")))),n.a.createElement(x.a,{className:"form-group"},n.a.createElement($.a,{htmlFor:"feedback",md:2},"Your Feedback"),n.a.createElement(S.a,{md:10},n.a.createElement(F.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"}))),n.a.createElement(x.a,{className:"form-group"},n.a.createElement(S.a,{md:{size:10,offset:2}},n.a.createElement(L.a,{className:"align-item-right",type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(r.Component);var te=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row-content align-items-center"},n.a.createElement("div",{className:"col-6"},n.a.createElement(q.a,null,n.a.createElement(D.a,null,n.a.createElement(N.b,{to:"/home"},"Home")),n.a.createElement(D.a,{active:!0},"About")),n.a.createElement("h2",null,"About"),n.a.createElement("p",null," Storm Breaker is a a real time severe weather tracker built with React, React-Redux, Express, MongoDB, and the Weather.gov API."))))},re=t(7),ne=t(17),le=function(e){return{type:"ADD_REPORTS",payload:e}},ce=function(){return{type:"REPORTS_LOADING"}},oe=function(e){return{type:"REPORTS_FAILED",payload:e}},me=t(27),se={postFeedback:function(e){return function(e){return function(){return fetch(H+"api/feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var a=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){console.log("Feedback:",e),alert("Thank you for your feedback!\n"+JSON.stringify(e))})).catch((function(e){console.log("Feedback:",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(e)},resetFeedbackForm:function(){return F.actions.reset("feedbackForm")},fetchReports:function(){return function(e){return e(ce()),fetch(H+"api/reports").then((function(e){if(e.ok)return e;var a=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(le(a))})).catch((function(a){return e(oe(a.message))}))}}},ie=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchReports()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,null),n.a.createElement(me.TransitionGroup,null,n.a.createElement(me.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},n.a.createElement(re.d,null,n.a.createElement(re.b,{path:"/home",component:function(){return n.a.createElement(M,null)}}),n.a.createElement(re.b,{exact:!0,path:"/historical",render:function(){return n.a.createElement(U,{reports:e.props.reports})}}),n.a.createElement(re.b,{path:"/historical/:reportId",component:function(a){var t=a.match;return n.a.createElement(G,{report:e.props.reports.reports.filter((function(e){return e.id===t.params.reportId}))[0],isLoading:e.props.reports.isLoading,errMess:e.props.reports.errMess})}}),n.a.createElement(re.b,{exact:!0,path:"/about",render:function(){return n.a.createElement(te,null)}}),n.a.createElement(re.b,{exact:!0,path:"/contact",render:function(){return n.a.createElement(ae,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),n.a.createElement(re.a,{to:"/home"})))),n.a.createElement(y,null))}}]),t}(r.Component),ue=Object(re.g)(Object(ne.connect)((function(e){return{reports:e.reports}}),se)(ie)),de=t(18),Ee=t(54),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,reports:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_REPORTS":return Object(k.a)(Object(k.a)({},e),{},{isLoading:!1,errMess:null,reports:a.payload});case"REPORTS_LOADING":return Object(k.a)(Object(k.a)({},e),{},{isLoading:!0,errMess:null,reports:[]});case"REPORTS_FAILED":return Object(k.a)(Object(k.a)({},e),{},{isLoading:!1,errMess:a.payload});default:return e}},fe={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},pe=(t(155),Object(de.createStore)(Object(de.combineReducers)(Object(k.a)({reports:he},Object(F.createForms)({feedbackForm:fe}))),Object(de.applyMiddleware)(Ee.a,Ee.a))),be=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(ne.Provider,{store:pe},n.a.createElement(N.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(ue,null))))}}]),t}(r.Component);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,t){e.exports=t(156)},94:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.61c4b53e.chunk.js.map