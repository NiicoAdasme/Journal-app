(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{217:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(39),c=n.n(r),o=n(9),i=n.n(o),s=n(15),u=n(18),l=n(24),d=n(7),j=n(8),b=n(5),p=n(27);n(219),n(94);p.a.initializeApp({apiKey:"AIzaSyACxO5-Rj9UCcRcUiPs0LhRe0erK1Yvytk",authDomain:"react-app-curso-d5704.firebaseapp.com",projectId:"react-app-curso-d5704",storageBucket:"react-app-curso-d5704.appspot.com",messagingSenderId:"191971322294",appId:"1:191971322294:web:1a4e2ec5cf215533d4b917",measurementId:"G-ZHS57JKJ7N"});var f=p.a.firestore(),h=new p.a.auth.GoogleAuthProvider,m=new p.a.auth.FacebookAuthProvider,O=new p.a.auth.GithubAuthProvider,x=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v="[Auth] Login",g="[Auth] Logout",y="[UI] Set Error",_="[UI] Remove Error",w="[UI] Start loading",N="[UI] Finish loading",k="[Notes] New note",C="[Notes] Set active note",E="[Notes] Load notes",S="[Notes] Update note",A="[Notes] Updated image url",B="[Notes] Delete note",I="[Notes] Logout Clearing",P=n(12),T=n.n(P),L=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dfdtq3zzf/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dfdtq3zzf/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e,t){return{type:C,payload:Object(b.a)({id:e},t)}},U=function(e,t){return{type:k,payload:Object(b.a)({id:e},t)}},R=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:a=t.sent,n(z(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=function(e){return{type:E,payload:e}},F=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n,a){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.uid,!e.url&&delete e.url,delete(c=Object(b.a)({},e)).id,t.next=6,f.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c).then((function(){n(R(r)),n(W(e.id,e)),T.a.fire("Note Saved!","","success")})).catch((function(e){console.log(e)}));case 6:n(W(e.id,c));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},W=function(e,t){return{type:S,payload:{id:e,note:Object(b.a)({id:e},t)}}},G=function(e){return{type:B,payload:e}},q=n(41),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(b.a)(Object(b.a)({},r),{},Object(q.a)({},t.name,t.value)))};return[r,i,o]},Y=n(30),K=n.n(Y),X=n(2),H=function(){var e=Object(j.b)(),t=K()().format("LL"),n=Object(j.c)((function(e){return e.notes})).active,r=Object(a.useState)(K()().format("LTS")),c=Object(u.a)(r,2),o=c[0],l=c[1];setTimeout((function(){l(K()().format("LTS"))}),1e3);return Object(X.jsxs)("div",{className:"notes__appbar",children:[Object(X.jsx)("span",{children:t}),Object(X.jsx)("span",{children:o}),Object(X.jsx)("input",{type:"file",id:"fileSelector",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n,a){var r,c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().notes.active,c=a().auth.uid,T.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){T.a.showLoading()}}),t.next=5,L(e);case 5:o=t.sent,r.url=o,n(F(r)),n(R(c)),n(W(r.id,r)),T.a.close();case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(X.jsxs)("div",{children:[Object(X.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(X.jsx)("button",{className:"btn",onClick:function(){e(F(n))},children:"Save"})]})]})},M=function(){var e=Object(j.c)((function(e){return e.notes})).active,t=Object(j.c)((function(e){return e.notes.active})).url,n=Object(j.b)(),r=J(e),c=Object(u.a)(r,3),o=c[0],l=c[1],d=c[2],p=o.title,h=o.body,m=Object(a.useRef)(e.id);Object(a.useEffect)((function(){e.id!==m.current&&(d(e),m.current=e.id)}),[e,d]),Object(a.useEffect)((function(){n(D(o.id,Object(b.a)({},o)))}),[n,o]);return Object(X.jsxs)("div",{className:"notes__main-content",children:[Object(X.jsx)(H,{}),Object(X.jsxs)("div",{className:"notes__content",children:[Object(X.jsx)("input",{type:"text",name:"title",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",autoFocus:!0,onChange:l,value:p}),Object(X.jsx)("textarea",{name:"body",cols:"30",rows:"10",placeholder:"What happened today",className:"notes__textarea",onChange:l,value:h}),t&&Object(X.jsx)("div",{className:"notes__images",children:Object(X.jsx)("img",{src:t,alt:"img-notes"})})]}),Object(X.jsx)("button",{className:"btn btn-danger",onClick:function(){var t;n((t=e.id,function(){var e=Object(s.a)(i.a.mark((function e(n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a().auth.uid,T.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(){var e=Object(s.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConfirmed){e.next=3;break}return e.next=3,f.doc("".concat(r,"/journal/notes/").concat(t)).delete().then((function(){n(G(t)),T.a.fire("Deleted!","Your note has been deleted.","success")})).catch((function(e){throw e}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:"Delete"})]})},V=function(){return Object(X.jsxs)("div",{className:"nothing__main-content",children:[Object(X.jsxs)("p",{children:["Select something",Object(X.jsx)("br",{}),"or create an entry!"]}),Object(X.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Z=function(){return{type:_}},Q=function(){return{type:N}},$=function(e,t){return function(n){n({type:w}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Q()),n(te(t.uid,t.displayName))})).catch((function(e){n(Q()),T.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}))}},ee=function(){return function(e){p.a.auth().signOut().then((function(){e(ne()),e({type:I})})).catch((function(e){throw e}))}},te=function(e,t){return{type:v,payload:{uid:e,displayName:t}}},ne=function(){return{type:g}},ae=function(e){var t=e.id,n=e.title,a=e.body,r=e.date,c=e.url,o=K()(r),i=Object(j.b)();return Object(X.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){i(D(t,{id:t,title:n,body:a,date:r,url:c}))},children:[c&&Object(X.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url( ".concat(c," )")}}),Object(X.jsxs)("div",{className:"journal__entry-body",children:[Object(X.jsx)("p",{className:"journal__entry-title",children:n}),Object(X.jsx)("p",{className:"journal__entry-content",children:a})]}),Object(X.jsxs)("div",{className:"journal__entry-date-box",children:[Object(X.jsx)("span",{children:o.format("dddd")}),Object(X.jsx)("h4",{children:o.format("Do")})]})]})},re=function(){var e=Object(j.c)((function(e){return e.notes})).notes;return Object(X.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(X.jsx)(ae,Object(b.a)({},e),e.id)}))})},ce=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.auth})).name;return Object(X.jsxs)("aside",{className:"journal__sidebar",children:[Object(X.jsxs)("div",{className:"jounal__sidebar-navbar",children:[Object(X.jsxs)("h3",{className:"mt-5",children:[Object(X.jsx)("i",{className:"far fa-moon"}),Object(X.jsxs)("span",{children:[" ",t]})]}),Object(X.jsx)("button",{className:"btn",onClick:function(){e(ee())},children:"Logout"})]}),Object(X.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,r={title:"",body:"",url:"",date:(new Date).getTime()},e.next=4,f.collection("".concat(a,"/journal/notes")).add(r);case 4:c=e.sent,t(D(c.id,r)),t(U(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(X.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(X.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(X.jsx)(re,{})]})},oe=function(){var e=Object(j.c)((function(e){return e.notes})).active;return Object(X.jsxs)("div",{className:"jounarl__main-content animate__animated animate__fadeIn animate__faster",children:[Object(X.jsx)(ce,{}),Object(X.jsx)("main",{children:e?Object(X.jsx)(M,{}):Object(X.jsx)(V,{})})]})},ie=n(82),se=n.n(ie),ue=n(42),le=n.n(ue),de=function(){var e=Object(j.b)(),t=J({email:"",password:""}),n=Object(u.a)(t,2),a=n[0],r=n[1],c=a.email,o=a.password,i=Object(j.c)((function(e){return e.ui})).loading,s=function(){return le.a.isEmail(c)?o.length<5?(T.a.fire({title:"Error!",text:"Password is not valid",icon:"error",confirmButtonText:"Ok"}),!1):(e(Z()),!0):(T.a.fire({title:"Error!",text:"Email is not valid",icon:"error",confirmButtonText:"Ok"}),!1)};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)("h3",{className:"auth__title mb-5",children:"Login"}),Object(X.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s()&&e($(c,o))},className:"animate__animated animate__fadeIn",children:[Object(X.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:"auth__input",autoComplete:"off",value:c,onChange:r}),Object(X.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"auth__input",value:o,onChange:r}),Object(X.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:i,children:"Login"}),Object(X.jsx)("hr",{}),Object(X.jsxs)("div",{className:"auth__social-newtworks",children:[Object(X.jsx)("p",{children:"Login Social Networks"}),Object(X.jsxs)("div",{className:"google-btn mb-5 mt-1",onClick:function(){e((function(e){p.a.auth().signInWithPopup(h).then((function(t){var n=t.user;e(te(n.uid,n.displayName))})).catch((function(e){T.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}))}))},children:[Object(X.jsx)("div",{className:"google-icon-wrapper",children:Object(X.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(X.jsx)("p",{className:"btn-text",children:Object(X.jsx)("b",{children:"Sign in with google"})})]}),Object(X.jsx)("button",{type:"button",className:"loginBtn loginBtn--facebook mb-5",onClick:function(){e((function(e){p.a.auth().signInWithPopup(m).then((function(t){var n=t.user;e(te(n.uid,n.displayName))})).catch((function(e){T.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}))}))},children:"Sign in with Facebook"}),Object(X.jsx)(se.a,{onClick:function(){e((function(e){p.a.auth().signInWithPopup(O).then((function(t){var n=t.user;e(te(n.uid,n.displayName))})).catch((function(e){T.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}))}))}})]}),Object(X.jsx)(l.b,{to:"/auth/register",className:"link",children:"Create new Account"})]})]})},je=function(){var e=Object(j.b)(),t=J({name:"",email:"",password:"",password2:""}),n=Object(u.a)(t,3),a=n[0],r=n[1],c=n[2],o=a.name,d=a.email,b=a.password,f=a.password2,h=function(){return 0===o.trim().length?(T.a.fire({title:"Error!",text:"Name is required",icon:"error",confirmButtonText:"Ok"}),!1):le.a.isEmail(d)?b!==f?(T.a.fire({title:"Error!",text:"Password not match",icon:"error",confirmButtonText:"Ok"}),!1):b.length<5?(T.a.fire({title:"Error!",text:"Password is too weak or common to use",icon:"error",confirmButtonText:"Ok"}),!1):(e(Z()),!0):(T.a.fire({title:"Error!",text:"Email is not valid",icon:"error",confirmButtonText:"Ok"}),!1)};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)("h3",{className:"auth__title mb-5",children:"Register"}),Object(X.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t,n){return function(a){p.a.auth().createUserWithEmailAndPassword(t,n).then(function(){var t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.user,t.next=3,r.updateProfile({displayName:e});case 3:a(te(r.uid,r.displayName));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){T.a.fire({title:"Error!",text:e.message,icon:"error",confirmButtonText:"Ok"})}))}}(o,d,b)),c()},className:"animate__animated animate__fadeIn",children:[Object(X.jsx)("input",{type:"text",name:"name",placeholder:"Name",className:"auth__input",autoComplete:"off",onChange:r,value:o}),Object(X.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:"auth__input",autoComplete:"off",onChange:r,value:d}),Object(X.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:"auth__input",onChange:r,value:b}),Object(X.jsx)("input",{type:"password",name:"password2",placeholder:"Confirm Password",className:"auth__input",onChange:r,value:f}),Object(X.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(X.jsx)("hr",{}),Object(X.jsx)(l.b,{to:"/auth/login",className:"link",children:"Alredy register"})]})]})},be=function(){return Object(X.jsx)("div",{className:"auth__main",children:Object(X.jsx)("div",{className:"auth__box-container",children:Object(X.jsxs)(d.d,{children:[Object(X.jsx)(d.b,{path:"/auth/login",component:de}),Object(X.jsx)(d.b,{path:"/auth/register",component:je}),Object(X.jsx)(d.a,{to:"/auth/login"})]})})})},pe=n(83),fe=n.n(pe),he=n(43),me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(X.jsx)(d.a,{to:"/"}):Object(X.jsx)(n,Object(b.a)({},e))}}))},Oe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(he.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(d.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(X.jsx)(n,Object(b.a)({},e)):Object(X.jsx)(d.a,{to:"/auth/login"})}}))},xe=function(){var e=Object(j.b)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),b=Object(u.a)(o,2),f=b[0],h=b[1];return Object(a.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(te(n.uid,n.displayName)),h(!0),e(R(n.uid))):h(!1),c(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,c,h]),r?Object(X.jsx)(fe.a,{loading:!0,bgColor:"#676767",spinnerColor:"#9ee5f8",textColor:"#f1f1f1",text:"Loading...",children:""}):Object(X.jsx)(l.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(d.d,{children:[Object(X.jsx)(me,{isAuthenticated:f,path:"/auth",component:be}),Object(X.jsx)(Oe,{isAuthenticated:f,exact:!0,path:"/",component:oe}),Object(X.jsx)(d.a,{to:"/auth/login"})]})})})},ve=n(26),ge=n(86),ye={loading:!1,msgError:null},_e=n(55),we={notes:[],active:null},Ne="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,ke=Object(ve.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{uid:t.payload.uid,name:t.payload.displayName};case g:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case _:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case N:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case k:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(_e.a)(e.notes))});case E:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(_e.a)(t.payload)});case S:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case A:return;case B:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case I:return Object(b.a)(Object(b.a)({},e),{},{notes:[],active:null});default:return e}}}),Ce=Object(ve.e)(ke,Ne(Object(ve.a)(ge.a))),Ee=function(){return Object(X.jsx)(j.a,{store:Ce,children:Object(X.jsx)(xe,{})})};n(217);c.a.render(Object(X.jsx)(Ee,{}),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.3f4d479a.chunk.js.map