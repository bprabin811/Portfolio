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
            <p>It offers the ultimate destination for customizable UI components and modern UI tools. It provides a wide range of cutting-edge design resources, including neumorphic and glassmorphic styles. Users can create visually striking and user-friendly interfaces with its collection of UI components. The platform empowers designers, developers, and business owners by offering the tools and resources needed to bring creative visions to life. Users can explore its offerings and unlock a world of possibilities to elevate their digital projects to new heights.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight">

            <a href="https://www.uiboxx.in">Learn More</a>
            </ScrollAnimation>
           </div>
        </Container>
    );
}