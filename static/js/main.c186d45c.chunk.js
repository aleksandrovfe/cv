(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],{23:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),s=t.n(r),c=(t(28),t(10)),i=t(11),o=t(17),m=t(7),u=t(8),E=t(3),p=function(e){E.a.to(e.target,{duration:.3,y:3,skewX:4,ease:"power1.inOut"})},d=function(e){E.a.to(e.target,{duration:.3,y:-3,skewX:0,ease:"power1.inOut"})},b=[{name:"Eurolife",image:"assets/eurolife.png",link:"https://eurolifedp.com/"},{name:"Mask",image:"assets/mask.png",link:"https://cloud-fun-a0417.web.app/"},{name:"Translator",image:"assets/words.png",link:"https://words-25285.web.app/"},{name:"Social Network",image:"assets/img.webp",link:"https://aleksandrovfe.github.io/socialnetwork/#/socialnetwork/profile"},{name:"Presentation Page",image:"assets/img4.webp",link:"https://aleksandrovfe.github.io/pattern/"}],f=function(e){var a=e.state,t=Object(n.useRef)(null),r=Object(n.useRef)(null),s=Object(n.useRef)(null),c=Object(n.useRef)(null),i=Object(n.useRef)(null),o=Object(n.useRef)(null),u=Object(n.useRef)(null),f=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e,n,l;!1===a.clicked?(n=s,l=r,E.a.to([n,l],{duration:.8,height:0,ease:"power3.inOut",stagger:{amount:.07}}),E.b.to(t,{duration:1,css:{display:"none"}})):(!0===a.clicked||!0===a.clicked&&null===a.initial)&&(E.b.to(t,{duration:0,css:{display:"block"}}),E.b.to([r,s],{duration:0,opacity:1,height:"100%"}),function(e,a){E.a.from([e,a],{duration:.8,height:0,transformOrigin:"right top",skewY:2,ease:"power3.inOut",stagger:{amount:.1}})}(r,s),e=f,E.a.from(e,{y:60,duration:1,delay:.2,opacity:0,ease:"power3.inOut"}),function(e,a,t){E.a.from([e,a,t],{duration:.8,y:100,delay:.1,ease:"power3.inOut",stagger:{amount:.3}})}(i,o,u))}),[a]),l.a.createElement("div",{ref:function(e){return t=e},className:"hamburger-menu"},l.a.createElement("div",{ref:function(e){return r=e},className:"menu-secondary-background-color"}),l.a.createElement("div",{ref:function(e){return s=e},className:"menu-layer"},l.a.createElement("div",{ref:function(e){return c=e},className:"menu-work-background"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"menu-links"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.b,{onMouseEnter:function(e){return p(e)},onMouseOut:function(e){return d(e)},ref:function(e){return i=e},to:"/About-me"},"About me")),l.a.createElement("li",null,l.a.createElement(m.b,{onMouseEnter:function(e){return p(e)},onMouseOut:function(e){return d(e)},ref:function(e){return o=e},to:"/Skills"},"Skills")),l.a.createElement("li",null,l.a.createElement(m.b,{onMouseEnter:function(e){return p(e)},onMouseOut:function(e){return d(e)},ref:function(e){return u=e},to:"/Contact-me"},"Contact me")))),l.a.createElement("div",{ref:function(e){return f=e},className:"info"},l.a.createElement("p",null,"Every day, I strive to become a better Web Development professional. Learning new frameworks, programming languages, and approaches are tools I use in pushing myself forward day by day. My passion is solving complicated problems and the more complicated the problem is - the better.")),l.a.createElement("div",{className:"list-links"},"My works:",b.map((function(e){return l.a.createElement("a",{href:e.link,className:"link-to-work",key:e.name,onMouseEnter:function(){return a=e.image,t=c,E.a.to(t,{duration:0,background:"url(".concat(a,") center center")}),E.a.to(t,{duration:.4,opacity:1,ease:"power3.inOut"}),void E.a.from(t,{duration:.4,skewY:2,transformOrigin:"right top"});var a,t},onMouseOut:function(){return e=c,E.a.to(e,{duration:0,skewY:0}),void E.a.to(e,{duration:.4,opacity:0,skewY:0});var e},target:"_blank"},e.name)}))))))))},N=Object(u.f)((function(e){var a=e.history,t=Object(n.useState)({initial:!1,clicked:null,menuName:"Menu"}),r=Object(o.a)(t,2),s=r[0],c=r[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),E=u[0],p=u[1];Object(n.useEffect)((function(){a.listen((function(){c({clicked:!1,menuName:"Menu"})}))}),[a]);var d=function(){p(!E),setTimeout((function(){p(!1)}),1200)};return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"inner-header"},l.a.createElement("div",{className:"logo"},l.a.createElement(m.b,{to:"/"},"Oleksandr Aleksandrov.")),l.a.createElement("div",{className:"menu"},l.a.createElement("button",{disabled:E,onClick:function(){d(),!1===s.initial?c({initial:null,clicked:!0,menuName:"Close"}):!0===s.clicked?c({clicked:!s.clicked,menuName:"Menu"}):!1===s.clicked&&c({clicked:!s.clicked,menuName:"Close"})}},s.menuName))))),l.a.createElement(f,{state:s}))}));function g(){return l.a.createElement("p",null,"I\u2019M AN ENTHUSIASTIC AND SELF-DRIVEN ",l.a.createElement("b",null,"Software Engineer")," WHO IS CONSTANTLY LOOKING FOR NEW OPPORTUNITIES. BEING ABLE TO DELIVER HIGH-QUALITY, USER-ORIENTED WEB SOLUTIONS MAKES ME A VALUABLE ADDITION TO ANY TEAM POSSIBLE. I\u2019M IN LOVE WITH CODING AND I CAN SHOW OFF HIGH PROFICIENCY WITH JAVASCRIPT",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Current job:")," SoftServe, software engineer, since 28/08/21 ",l.a.createElement("br",null),l.a.createElement("b",null,"Experience:")," BearsSoftware(Oversecured), software engineer, since 05/01/20 to 28/08/21 ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Frontend courses:")," full-time online course 4 months HTML, CSS, JavaScript, React, Redux.",l.a.createElement("br",null),l.a.createElement("b",null,"Internships(6 months)"),": Epam - HTML, CSS, JavaScript, Sass(SCSS), jQuery, Bootstrap, Unit Testing, Node.js(Express, MongoDB), Webpack. ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Personal projects"),": ",l.a.createElement("br",null),l.a.createElement("div",{className:"projects"},l.a.createElement("b",null,l.a.createElement("a",{className:"contact-link",target:"_blank",href:"https://eurolifedp.com/"},"\u2022eurolife"))," - freelance project, currently in production, has daily user visits ",l.a.createElement("br",null),"Also with this project I am working on digital marketing (SEO, SMM)",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("strike",null,"Can't show the code")," ",l.a.createElement("br",null),l.a.createElement("br",null),"For development I used react, firebase (firebase functions, hosting, analytics, cloud firestore) ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("a",{className:"contact-link",target:"_blank",href:"https://cloud-fun-a0417.web.app/"},"\u2022mask"))," - Initially, I created this project to connect people from different industries, to acquire connections that you can be proud of, I tried to advertise this project at various meetups, webinars, courses. ",l.a.createElement("br",null),"project provides such features as the ability to register, add bio, add posts, delete post, likes, comments, view posts of an individual user ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/aleksandrovfe/mask",className:"contact-link",target:"_blank"},"GitHub code"),l.a.createElement("br",null),l.a.createElement("br",null),"For development I used react, firebase (firebase functions, analytics, cloud firestore) ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("a",{className:"contact-link",target:"_blank",href:"https://words-25285.web.app/"}," \u2022translator"))," - MY PET PROJECT WHERE I PRACTICE THE NEW GSAP ANIMATION FRAMEWORK ALONG WITH THE MODERN UX/UI TRENDS ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/aleksandrovfe/words",className:"contact-link",target:"_blank"},"GitHub code"),l.a.createElement("br",null),l.a.createElement("br",null),"For development I used vue, GSAP ",l.a.createElement("br",null)," ",l.a.createElement("br",null)))}function k(){return l.a.createElement("p",null,"Software Process and Life Cycle, Software Requirements, Software Design, Software Construction Management, Software Construction Design and Coding, Software Construction Testing and Debugging ",l.a.createElement("br",null),l.a.createElement("br",null),"JavaScript(ES6), React, Redux, NodeJS, Express, AWS, Vue, VUEX, TypeScript, Python, CSS, Mocha, Jest, HTML5, GSAP, BEM, SASS(SCSS), Unit Testing, Git, Firebase. ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"HIGH-LEVEL UNDERSTANDING OF:")," Webpack, Flutter.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"Languages:")," English (intermediate strong), Russian.")}function h(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"list-icons"},l.a.createElement("li",{className:"list-icons__item"},l.a.createElement("a",{href:"https://telegram.im/@alexandr_aleksandrov",target:"_blank"},l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement(c.a,{className:"list-icons__item-span",icon:i.e}))),l.a.createElement("li",{className:"list-icons__item"},l.a.createElement("a",{href:"mailto:alexandrov6927@gmail.com",target:"_blank"},l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement(c.a,{className:"list-icons__item-span",icon:i.b}))),l.a.createElement("li",{className:"list-icons__item"},l.a.createElement("a",{href:"skype:alexandrov6927?chat",target:"_blank"},l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement(c.a,{className:"list-icons__item-span",icon:i.d}))),l.a.createElement("li",{className:"list-icons__item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/aleksandr-aleksandrov-1040a8116/",target:"_blank"},l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement(c.a,{className:"list-icons__item-span",icon:i.c}))),l.a.createElement("li",{className:"list-icons__item"},l.a.createElement("a",{href:"https://github.com/aleksandrovfe",target:"_blank"},l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement("span",{className:"list-icons__item-span"}),l.a.createElement(c.a,{className:"list-icons__item-span",icon:i.a})))))}function _(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h5",{className:"home__text"},"Hi, I\u2019m a ",l.a.createElement("b",null," software engineer ")," and I created this website for you to become familiar with what I am capable of.")))}var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"home"},l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:_}),l.a.createElement(u.a,{exact:!0,path:"/About-me",component:g}),l.a.createElement(u.a,{exact:!0,path:"/Skills",component:k}),l.a.createElement(u.a,{exact:!0,path:"/Contact-me",component:h}))))))};s.a.render(l.a.createElement(m.a,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.c186d45c.chunk.js.map