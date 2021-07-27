import React from "react";
import "./App.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faTelegram,
    faSkype,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
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
            I’M AN ENTHUSIASTIC AND SELF-DRIVEN <b>Software Engineer</b> WHO IS CONSTANTLY LOOKING FOR NEW OPPORTUNITIES. BEING ABLE TO DELIVER HIGH-QUALITY, USER-ORIENTED WEB SOLUTIONS MAKES ME A VALUABLE ADDITION TO ANY TEAM POSSIBLE. I’M IN LOVE WITH CODING AND I CAN SHOW OFF HIGH PROFICIENCY WITH JAVASCRIPT<br/>
            <br/>
            <b>Current job:</b> BearsSoftware(Oversecured), software engineer,
            since 05/01/20 <br/><br/>
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
                Also with this project I am working on digital marketing (SEO, SMM)
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
                MY PET PROJECT WHERE I PRACTICE THE NEW GSAP ANIMATION FRAMEWORK ALONG WITH THE MODERN UX/UI TRENDS <br/><br/>
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
            JavaScript(ES6), Vue, VUEX, TypeScript, NodeJS, Express, AWS, Python, React, Redux, CSS,
            HTML5, GSAP, BEM, SASS(SCSS), Unit Testing, Git, Firebase. <br/>
            <br/>
            <b>HIGH-LEVEL UNDERSTANDING OF:</b> Webpack, Flutter.
            <br/> <br/>
            <b>Languages:</b> English (intermediate), Russian, Ukrainian.
        </p>
    );
}

function Contact() {
    return (
        <>
            <ul className="list-icons">
                <li className="list-icons__item">
                    <a href="https://telegram.im/@alexandr_aleksandrov" target="_blank">
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <FontAwesomeIcon className="list-icons__item-span" icon={faTelegram}/>
                    </a>
                </li>
                <li className="list-icons__item">
                    <a href="mailto:alexandrov6927@gmail.com" target="_blank">
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <FontAwesomeIcon className="list-icons__item-span" icon={faGoogle}/>
                    </a>
                </li>
                <li className="list-icons__item">
                    <a href="skype:alexandrov6927?chat" target="_blank">
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <FontAwesomeIcon className="list-icons__item-span" icon={faSkype}/>
                    </a>
                </li>
                <li className="list-icons__item">
                    <a href="https://www.linkedin.com/in/aleksandr-aleksandrov-1040a8116/" target="_blank">
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <FontAwesomeIcon className="list-icons__item-span" icon={faLinkedin}/>
                    </a>
                </li>
                <li className="list-icons__item">
                    <a href="https://github.com/aleksandrovfe" target="_blank">
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <span className="list-icons__item-span"></span>
                        <FontAwesomeIcon className="list-icons__item-span" icon={faGithub}/>
                    </a>
                </li>
            </ul>
        </>
    );
}

function Home() {
    return (
        <div className="container">
            <div className="wrapper">
                <h5 className="home__text">
                    Hi, I’m a <b> software engineer </b> and I created this website for you to become familiar with what I am capable of.
                </h5>
            </div>
        </div>
    );
}

export default App;
