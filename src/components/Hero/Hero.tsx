import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

import facebook from '../../assets/facebook.svg'
import snapchat from '../../assets/snapchat.svg'
import instagram from '../../assets/instagram.svg'
export function Hero() {
  return (
    <Container id="home">
      
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 1000}>
          <img src={"https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/368794556_1367683624129088_3725648074823202911_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nluHHJAsvIMAX_umkUJ&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAyt7AWpkV0FpxB0YtiZKKOZFS3gQbhbKJ6lKyaXjffuA&oe=660EC6BD"} alt="Profile" />
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
       <div className="social_media_icons">
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <a href="https://www.linkedin.com/in/prabin-bhatt-9b0a1b1b9/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
            
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <a href="https://www.linkedin.com/in/prabin-bhatta-33b48b27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </ScrollAnimation>
         <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <a href="https://www.instagram.com/pro_win811/" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github" />
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <a href="https://www.facebook.com/pro.win.125" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
        </ScrollAnimation>
         <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <a href="https://www.snapchat.com/add/prabin_bhatta19?share_id=4eW-hTwTxoA&locale=en-US" target="_blank" rel="noreferrer">
            <img src={snapchat} alt="Snapchat" />
          </a>
        </ScrollAnimation>
        
        
        
      </div>
     
      
    </Container>
  )
}