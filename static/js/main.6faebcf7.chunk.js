(this["webpackJsonpmy-react-portfolio"]=this["webpackJsonpmy-react-portfolio"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(19),r=t.n(c),n=t(17),i=t(7),o=(t(25),t(0)),l=["btn--primary","btn--outline"],d=["btn--medium","btn--large"],h=function(e){var a=e.children,t=e.type,s=e.onClick,c=e.buttonStyle,r=e.buttonSize,n=l.includes(c)?c:l[0],i=d.includes(r)?r:d[0];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("a",{href:"https://github.com/katers0259",target:"_blank",className:"btn-mobile",children:Object(o.jsx)("button",{className:"btn ".concat(n," ").concat(i),onClick:s,type:t,children:a})})})};t(27);var j=function(){var e=Object(s.useState)(!1),a=Object(n.a)(e,2),t=a[0],c=a[1],r=Object(s.useState)(!0),l=Object(n.a)(r,2),d=(l[0],l[1]),h=function(){return c(!1)},j=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(s.useEffect)((function(){j()}),[]),window.addEventListener("resize",j),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsxs)(i.b,{to:"/",className:"navbar-logo",onClick:h,children:["KB ",Object(o.jsx)("i",{className:"fas fa-dragon"})]}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return c(!t)},children:Object(o.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(o.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{to:"/about",className:"nav-links",onClick:h,children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{to:"/projects",className:"nav-links",onClick:h,children:"Projects"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{to:"/contact",className:"nav-links",onClick:h,children:"Contact"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"mailto:kaitlynbranagan@gmail.com",className:"nav-links",onClick:h,children:"kaitlynbranagan@gmail.com"})})]})]})})})},b=t(2);t(9),t(33);var m=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsx)("video",{src:"https://res.cloudinary.com/dqtnonoqg/video/upload/v1613200421/Pexels_Videos_1321208_xol8an.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(o.jsx)("h1",{children:"Kaitlyn Branagan"}),Object(o.jsx)("p",{children:"Full Stack Web Developer"}),Object(o.jsx)("div",{className:"hero-btns",children:Object(o.jsx)(h,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GitHub"})})]})})};var u=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(m,{})})},p=[{title:"Who is on your team?",des1:"This is a Node.js file that when run creates a html doc that displays all of your teammates and their respective information.",tech:"Javascript, HTML, CSS, API, Node.js",img:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/my_team_jjzhgb.png",repo:"https://github.com/katers0259/WhoIsOnYourTeam"},{title:"Password Generator",des1:"This is a random password generator app, that can help you create passwords based on what you select for your preferences i.e length, special characters, etc.",tech:" HTML, CSS, Javascript",img:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/passgenerator_smhmmz.png",liveLink:"https://katers0259.github.io/passgen/",repo:"https://github.com/katers0259/passgen"},{title:"Macrame Madness",des1:"Macrame Madness, is a site that you can upload photos and designs of macrame to share with other enthusiats, you are presented with a login page, that you must enter in you information before you are allowed into the site. You also have your own profile that you can create, and update.",tech:"HTML, TailwindCSS, JavaScript, MySQL, Heroku",img:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/macrame2_arp2gh.png",liveLink:"https://the-best-around-project.herokuapp.com/",repo:"https://github.com/katers0259/The-Best-Around-Project"},{title:"Weather Dashboard",des1:"This weather app allows the user to input any city, and see the current weather, and also the 5 day forecast.",tech:"HTML, CSS, Javascript, API",img:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/weather_dashboard_ezpjnq.png",liveLink:"https://katers0259.github.io/BranaganWeatherDashboard/",repo:"https://github.com/katers0259/BranaganWeatherDashboard"},{title:"Pick Your Pet",des1:"Pick your Pet, uses API calls to a petfinder API, that allows you to search for dogs or cats with specifications that you select and then displays those animals that are available for adoption.",tech:" HTML, CSS, Javascript, API,",img:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427709/search_cl9smp.png",liveLink:"https://katers0259.github.io/Pick-your-pet/",repo:"https://github.com/katers0259/Pick-your-pet"},{title:"Fitness Tracker",des1:"This workout fitness tracker lets the user input workouts, and tracks the specifications on a graph and displays this to the user on their personal dashboard.",tech:"HTML, CSS, Javascript, MongoDB Atlas, Heroku",img:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1613202799/workout_jvm7ph.png",liveLink:"https://warm-fjord-24002.herokuapp.com/",repo:"https://github.com/katers0259/Fitness-Whole-App"}];var g=function(){return Object(o.jsxs)("div",{classname:"cards",children:[Object(o.jsx)("a",{url:p.repo,children:"Github Repo"}),Object(o.jsx)("div",{className:"cards"}),Object(o.jsx)("a",{url:p.liveLink,children:"Live Link Repo"})]})};t(13);var x=function(e){return Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)(i.b,{className:"cards__item__link",children:[Object(o.jsx)("div",{className:"cards__item__pic-wrap",children:Object(o.jsx)("img",{src:e.src,alt:"",className:"cards__item__img"})}),Object(o.jsx)("div",{className:"cards",children:e.label}),Object(o.jsx)("h5",{className:"cards__item__text"}),Object(o.jsxs)("div",{className:"cards__item__info",children:[e.text,Object(o.jsx)(g,{})]})]})})};var O=function(){return Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)("h1",{children:"See My Work"}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsxs)("div",{className:"cards__wrapper",children:[Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(x,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/my_team_jjzhgb.png",text:"This is an App that allows you to see a list of employees and their jobs and titles, you can add, delete and update the list\r as you please.\r Languages used: Node.js, Javascript, HTML, CSS",label:"Employee Tracker",path:"https://github.com/katers0259/WhoIsOnYourTeam"}),Object(o.jsx)(x,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/passgenerator_smhmmz.png",text:"This is a random password generator app, that can help you create passwords based on what you select for your\r preferences, i.e length, special characters, etc.\r Languages used: HTML, CSS, Javascript",label:"Random Password Generator",path:"https://github.com/katers0259/passgen"}),Object(o.jsx)(x,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/macrame2_arp2gh.png",text:"Macrame Madness, is a site that you can upload photos and designs of macrame to share with other enthusiats, you are presented with a \r login page, that you must enter in you information before you are allowed into the site. You also have your own profile that you can \r create, and update.\r Laguages used: HTML, TailwindCSS, JavaScript, MySQL, ",label:"Random Password Generator",path:"https://github.com/katers0259/The-Best-Around-Project"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(x,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/weather_dashboard_ezpjnq.png",text:"This weather app allows the user to input any city, and see the current weather, and also the 5 day forecast.\r Laguages used: HTML, CSS, Javascript, API ",label:"Weather Dashboard",path:"https://github.com/katers0259/BranaganWeatherDashboard"}),Object(o.jsx)(x,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427709/search_cl9smp.png",text:"Pick your Pet, uses API calls to a petfinder API, that allows you to search for dogs or cats with specifications that \r you select and then displays those animals that are available for adoption.\r Laguages used: HTML, CSS, Javascript, API ",label:"Pick Your Pet",path:"https://github.com/katers0259/Pick-your-pet",path1:""}),Object(o.jsx)(x,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1613202799/workout_jvm7ph.png",text:"This workout fitness tracker lets the user input workouts, and tracks the specifications on a graph and displays this to the user\r on their personal dashboard.\r Laguages used: HTML, CSS, Javascript, MongoDB Atlas\r This App is deployed on Heroku. ",label:"Fitness Tracker",path:"https://github.com/katers0259/Fitness-Whole-App"})]})]})})]})};var f=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(O,{})})};t(14);var v=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:"cards_item",children:[e.src&&Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"project image",className:"cards__item__img"})}),Object(o.jsx)("div",{className:"cards__item__info",children:Object(o.jsx)("h1",{className:"cards__item__text",children:e.children})})]})})};t(34);var _=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)("h1",{children:"Get In Touch"}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsx)("div",{className:"cards__wrapper",children:Object(o.jsx)("ul",{className:"cards__items",children:Object(o.jsxs)(v,{children:[Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("a",{href:"mailto:kaitlynbranagan@gmail.com",children:"kaitlynbranagan@gmail.com"})}),Object(o.jsx)("div",{className:"cards",children:"801-800-3411"}),Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsxs)("a",{href:"https://www.facebook.com/katers0259",target:"_blank",children:[" ",Object(o.jsx)("i",{class:"fab fa-facebook"})]}),Object(o.jsx)("a",{href:"https://www.instagram.com/ohbranagans/",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-instagram"})}),Object(o.jsx)("a",{href:"https://codepen.io/katers0259",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-codepen"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/kaitlyn-branagan-a119891b1/",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-linkedin-in"})}),Object(o.jsx)("a",{href:"https://github.com/katers0259",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-github"})})]}),Object(o.jsx)("div",{className:"cards resume",children:Object(o.jsxs)("a",{href:"https://drive.google.com/file/d/1QcubR8-_WiX1CtYaMo0wdqjN9CIfRF7w/view?usp=sharing",download:!0,children:[Object(o.jsx)("i",{class:"fas fa-file"}),"Download My Resume Here"]})})]})})})})]})})})};function y(){return Object(o.jsx)(_,{})}var k=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("li",{className:"cards_item",children:[e.src&&Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"project image",className:"cards__item__img"})}),Object(o.jsx)("div",{className:"cards__item__info",children:Object(o.jsx)("h1",{className:"cards__item__text",children:e.children})})]})})};function w(){return Object(o.jsx)("div",{className:"cards-container",children:Object(o.jsx)("div",{className:"cards-wrapper",children:Object(o.jsx)("ul",{className:"cards_items",children:Object(o.jsxs)(k,{src:"https://res.cloudinary.com/dqtnonoqg/image/upload/v1610427708/portfolio-photo1_rfmuwo.jpg",children:[Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("h1",{children:"About Myself"})}),"My Name is Kaitlyn Branagan. I have a love for full stack web development. I am excellent at\xa0creating and maintaining great client relationships. I have 10 plus years of customer service skills, as well as management and organization skills. Proven ability to be able to manage a team of employees, while meeting goals.",Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("h1",{children:"Languages"})}),Object(o.jsx)("div",{className:"cards",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("i",{class:"fab fa-html5",children:" HTML"})}),Object(o.jsx)("li",{children:Object(o.jsx)("i",{class:"fab fa-css3-alt",children:" CSS"})}),Object(o.jsx)("li",{children:"Tailwind CSS"}),Object(o.jsx)("li",{children:Object(o.jsx)("i",{class:"fab fa-node-js",children:" Node JS"})}),Object(o.jsx)("li",{children:Object(o.jsx)("i",{class:"fas fa-database",children:" My SQL, MongoDB"})}),Object(o.jsx)("li",{children:Object(o.jsx)("i",{class:"fab fa-react",children:" React"})}),Object(o.jsx)("li",{children:" Handlebars.js"}),Object(o.jsx)("li",{children:" Express.js"}),Object(o.jsx)("li",{children:Object(o.jsx)("i",{class:"fab fa-js",children:" Javascript, JQuery"})})]})}),Object(o.jsx)("div",{className:"cards",children:Object(o.jsx)("h2",{children:"Skills"})}),Object(o.jsx)("p",{children:"Team Management, Problem Solving, Debugging, Customer Service, Client Relations, Training, Time Management, Team Oriented, Self Motivated."})]})})})})}function N(){return Object(o.jsx)(w,{})}var S=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/",exact:!0,component:u}),Object(o.jsx)(b.a,{path:"/projects",component:f}),Object(o.jsx)(b.a,{path:"/about",component:N}),Object(o.jsx)(b.a,{path:"/contact",component:y})]})]})})};r.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))},9:function(e,a,t){}},[[35,1,2]]]);
//# sourceMappingURL=main.6faebcf7.chunk.js.map