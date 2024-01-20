import React from "react";
import "./portfolio.css";
import {
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
} from "../../assets";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={portfolio1} alt="pf" />
                    </div>
                    <h3>JS/CSS Avto Tuning Landing Page</h3>
                    <div className="portfolio__item-cta">
                        <a
                            rel="noreferrer"
                            href="https://github.com/XushbaxtovNodirbek/avtotuning"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://tuning009.netlify.app/"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={portfolio2} alt="pf" />
                    </div>
                    <h3>Bootstrap 5 Creative portfolio website</h3>
                    <div className="portfolio__item-cta">
                        <a
                            rel="noreferrer"
                            href="https://github.com/XushbaxtovNodirbek/bootstrap-web-page"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://bootstrap-web-page.netlify.app/"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={portfolio3} alt="pf" />
                    </div>
                    <h3>Animated portfolio website</h3>
                    <div className="portfolio__item-cta">
                        <a
                            rel="noreferrer"
                            href="https://github.com/XushbaxtovNodirbek/sammi.portfolio"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://legendary-eclair-aad51a.netlify.app/"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={portfolio4} alt="pf" />
                    </div>
                    <h3>ReactJs portfolio website</h3>
                    <div className="portfolio__item-cta">
                        <a
                            rel="noreferrer"
                            href="https://github.com/XushbaxtovNodirbek/react-portfolio"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nodirbekdev.tech/"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={portfolio5} alt="pf" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            rel="noreferrer"
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://dribbble.com/nodibx"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-img">
                        <img src={portfolio6} alt="pf" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            rel="noreferrer"
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://dribbble.com/nodibx"
                            className="btn btn-primary"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
