import { Container } from "./styles";
import se from "../../assets/se.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text" style={{padding:"8px"}}>
        <ScrollAnimation animateIn="fadeInLeft" style={{display:"flex"}}>
          <h2 style={{fontSize:'4rem'}}>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hello! I'm Prabin Bhatt, a versatile professional with a passion for crafting innovative solutions at the intersection of technology and design. With a strong foundation in React, Machine Learning & AI, Python, and Flutter, I thrive on bringing ideas to life through code and creativity.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I have honed my skills in React to develop dynamic and responsive web applications, ensuring seamless user experiences across various platforms. My expertise in Machine Learning allows me to explore and implement intelligent solutions, leveraging data to drive decision-making processes.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Driven by curiosity and a thirst for knowledge, I am continuously expanding my skill set and exploring emerging technologies. Whether it's experimenting with new frameworks or staying updated on the latest design trends, I am committed to staying at the forefront of innovation.</p>
            <p>I'm eager to collaborate on exciting projects. Reach out to discuss opportunities!</p>
        </ScrollAnimation>
      </div>
      <div className="about-image" >
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000} >
          <img src={se} alt="Software Engineer" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
