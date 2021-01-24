import React from "react";
import "./App.scss";

import Header from "./components/Header";

import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <div className="wrapper">
                    <div className="home">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/About-me" component={About}/>
                            <Route exact path="/Skills" component={Skills}/>
                            <Route exact path="/Contact-me"
                                   component={Contact}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <p>
            I am an enthusiastic and well-motivated person looking for
            opportunities in <b>WEB
            Development.</b> Able to create high-quality and
            user-friendly Web products from scratch. Using modern technologies
            to design websibtes and related
            materials. Love coding, have extensive
            knowledge in JavaScript, React, Redux, HTML5, CSS/SASS. <br/>
            <br/>
            <b>Current job:</b> BearsSoftware (Oversecured), web developer,
            since 05/01/20 <br/><br/>
            <b>Education:</b> Oles Honchar Dnipro National University,
            specialty: Faculty of Mechanics and Mathematics
            (teacher of mathematics).<br/>
            <b>Frontend courses:</b> full-time online course 4 months HTML, CSS,
            JavaScript, React, Redux.<br/>
            <b>Internships(6 months)</b>: Epam - HTML, CSS, JavaScript,
            Sass(SCSS), jQuery, Bootstrap, Unit Testing,
            Node.js(Express, MongoDB), Webpack. <br/><br/>

            <b>Personal projects</b>: <br/>
            <div className="projects">
                <b><a className="contact-link" target="_blank"
                      href="https://eurolifedp.com/">&#8226;eurolife</a></b> -
                freelance project, currently in production, has daily user
                visits <br/>
                Also with this project I am working on digital marketing CEO, SMM
                <br/> <br/>
                <strike>Can't show the code</strike> <br/><br/>
                For development I used react, firebase (firebase functions,
                hosting, analytics, cloud firestore) <br/><br/>

                <b><a className="contact-link" target="_blank"
                       href="https://cloud-fun-a0417.web.app/">&#8226;mask</a></b> -
                Initially, I created this project to connect people from
                different industries, to acquire connections that you can be
                proud of, I tried to advertise this project at various meetups,
                webinars, courses. <br/>
                project provides such features as the ability to register,
                add
                bio, add posts, delete post, likes, comments, view posts of an
                individual
                user <br/><br/>
                <a href="https://github.com/aleksandrovfe/mask"
                   className="contact-link" target="_blank">GitHub code</a>
                <br/><br/>
                For development I used react, firebase (firebase functions,
                analytics, cloud firestore) <br/> <br/>

                <b><a className="contact-link" target="_blank"
                      href="https://words-25285.web.app/"> &#8226;translator</a></b> -
                This project was more to train the new GSAP animation framework
                and the trendy 2021 glassmorphism approach <br/><br/>
                <a href="https://github.com/aleksandrovfe/words"
                   className="contact-link" target="_blank">GitHub code</a>
                <br/><br/>
                For development I used vue, GSAP <br/> <br/>
            </div>
        </p>
    );
}

function Skills() {
    return (
        <p>
            JavaScript(ES6), React, Redux, Vue, VUEX, NodeJS, Express, CSS,
            HTML5, GSAP, BEM, SASS(SCSS), Unit Testing, Git, Firebase. <br/>
            <br/>
            <b>initial introduction:</b> TypeScript(React), AWS, Webpack,
            Flutter.
            <br/> <br/>
            <b>Languages:</b> English (intermediate), Russian, Ukrainian.
        </p>
    );
}

function Contact() {
    return (
        <p>
            Dnipro, Ukraine <br/>+38(067)-597-09-40 (<a
            className="contact-link"
            href="https://telegram.im/@AleksandrovAlexandr"
            target="_blank">Telegram</a>, Viber),
            +38(099)-647-26-71<br/>
            <a className="contact-link contact-link__lover-case"
               href="mailto:alexandrov6927@gmail.com"
               target="_blank">alexandrov6927@gmail.com</a> <br/>
            Skype - <a href="skype:alexandrov6927?chat"
                       className="contact-link contact-link__lover-case"
                       target="_blank">alexandrov6927</a><br/>
            <a className="contact-link"
               href="https://www.linkedin.com/in/aleksandr-aleksandrov-1040a8116/"
               target="_blank">
                LinkedIn
            </a> <br/>
            <a className="contact-link"
               href="https://github.com/aleksandrovfe" target="_blank">
                GitHub</a>
        </p>
    );
}

function Home() {
    return (
        <div className="container">
            <div className="wrapper">
                <h5>
                    Hi, I’m a <b> web developer </b> and I hope that this site
                    will help you become more familiar
                    with my projects and my skills.
                </h5>
            </div>
        </div>
    );
}

export default App;
