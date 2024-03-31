import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 1000}>
          <img src={"https://prabinbhatt.com.np/assets/pro-633eabc4.png"} alt="Profile" />
        </ScrollAnimation>
      </div>
      <div className="hero-text">
        
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Prabin Bhatt</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Software Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">1+ Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">E-mail</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      
    </Container>
  )
}