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
                            <Route exact path="/Contact-me" component={Contact}/>
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
            I am an enthusiastic and well-motivated person looking for new opportunities in <b>FrontEnd
            Development.</b> Able to create high-quality and
            user-friendly Web products from scratch. Using modern technologies to design websibtes and related
            materials. Love coding, have extensive
            knowledge in JavaScript, React, Redux, HTML5, CSS/SASS. <br/>
            <br/>
            <b>Current job:</b> BearsSoftware, web developer, since 05/01/20 <br/><br/>
            <b>Education:</b> Oles Honchar Dnipro National University, specialty: Faculty of Mechanics and Mathematics
            (teacher of mathematics).<br/>
            <b>Frontend courses:</b> full-time online course 4 months HTML, CSS, JavaScript, React, Redux.<br/>
            <b>Internships(6 months)</b>: Epam - HTML, CSS, JavaScript, Sass(SCSS), jQuery, Bootstrap, Unit Testing,
            Node.js(Express, MongoDB), Webpack.
        </p>
    );
}

function Skills() {
    return (
        <p>
            JavaScript(ES6), React, Redux, Vue, CSS, HTML5, BEM, SASS(SCSS), Unit Testing, Git<br/> <br/>
            initial introduction: TypeScript(React), Node.js(Express, MongoDB), Webpack.
            <br/> <br/>
            Languages: English (intermediate), Russian, Ukrainian.
        </p>
    );
}

function Contact() {
    return (
        <p>
            Dnipro, Ukraine <br/>+38(067)-597-09-40 (<a className="contact-link"
                                                        href="https://telegram.im/@AleksandrovAlexandr"
                                                        target="_blank">Telegram</a>, Viber),
            +38(099)-647-26-71<br/>
            <a className="contact-link contact-link__lover-case"
               href="mailto:alexandrov6927@gmail.com" target="_blank">alexandrov6927@gmail.com</a> <br/>
            Skype - <a href="skype:alexandrov6927?chat"
                       className="contact-link contact-link__lover-case" target="_blank">alexandrov6927</a><br/>
            <a className="contact-link" href="https://www.linkedin.com/in/aleksandr-aleksandrov-1040a8116/"
               target="_blank">
                LinkedIn
            </a> <br/>
            <a className="contact-link" href="https://github.com/aleksandrovfe" target="_blank">
                GitHub
            </a>
        </p>
    );
}

function Home() {
    return (
        <div className="container">
            <div className="wrapper">
                <h5>
                    Hi, I’m a <b> front-end developer </b> and I hope that this site will help you become more familiar
                    with my projects and my skills.
                </h5>
            </div>
        </div>
    );
}

export default App;
