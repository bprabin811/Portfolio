import { Container } from "./styles";
import show from "../../assets/showcase.gif";


import ScrollAnimation from "react-animate-on-scroll";


export function Showcase(){
    return(
        <Container>

           <div>
            <ScrollAnimation animateIn="fadeInLeft" style={{display:"flex",justifyContent:"end"}}>  
            <img src={show} alt="Showcase" style={{borderRadius:"5px"}}/>
            </ScrollAnimation>
           </div>
           <div>
            <ScrollAnimation animateIn="fadeInRight">
            <h4>UIBOXX</h4>
            <p>The ultimate destination for customizable UI components and modern UI tools. We provide a wide range of cutting-edge design resources, including neumorphic and glassmorphic styles. Create visually striking and user-friendly interfaces with our collection of UI components. Our platform empowers designers, developers, and business owners, offering the tools and resources needed to bring creative visions to life. Explore our offerings and unlock a world of possibilities to elevate your digital projects to new heights.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight">

            <a href="https://www.uiboxx.in">Learn More</a>
            </ScrollAnimation>
           </div>
        </Container>
    );
}