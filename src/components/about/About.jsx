import "./about.css";
import { meAbout } from "../../assets";
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={meAbout} alt="me-img" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1.5+ years</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+ World</small>
                        </article>

                        <article className="about__card">
                            <GoProjectSymlink className="about__icon" />
                            <h5>Projects</h5>
                            <small>50+</small>
                        </article>
                    </div>
                    <p>
                        I am a Frontend Developer with 1.5+ years of experience
                        in building websites and web applications. I specialize
                        in JavaScript and have professional experience working
                        with ReactJS. I also have experience working with NodeJS
                        and ExpressJS.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>  
                </div>
            </div>
        </section>
    );
};

export default About;
