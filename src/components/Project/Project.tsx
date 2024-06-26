import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

import churn from '../../assets/cp.png'
import dep from '../../assets/dep.png'
import store from '../../assets/vegstor.png'
import imagelab from '../../assets/imagelab.png'




export function Project() {
  return (
    <Container id="project">
      <h2>Other Projects</h2>
      <div className="projects">
      <ScrollAnimation animateIn="fadeInUp" delay={0.1}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/bprabin811" target="_blank" rel="noreferrer">
                  <img src={churn} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Churn Prediction System</h3>
              <p>
              A ML project for Churn Prediction System in Telecom.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>HTML/CSS/JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.1}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/bprabin811" target="_blank" rel="noreferrer">
                  <img src={dep} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Depression Analysis using Chatbot</h3>
              <p>
              A ML based Depression Analysis system using Chatbot.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.1}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/bprabin811" target="_blank" rel="noreferrer">
                  <img src={store} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>A Multistore Ecommerce Platform</h3>
              <p>
              An B2C ecommerce platform for buying and selling vegetables from anywhere with additional functionalities.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>MySql</li>
                <li>HTML/CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.1}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/bprabin811" target="_blank" rel="noreferrer">
                  <img src={imagelab} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ImageLab-AI</h3>
              <p>
              A Convolutional Neural Network based colorization system for B/W photos.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flask</li>
                <li>MUI</li>
                <li>HTML/CSS/JS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}