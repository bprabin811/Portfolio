import { Container } from "./styles";
import se from "../../assets/se.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import pythonIcon from "../../assets/python.svg";

import flutterIcon from "../../assets/flutter.svg";
import postgresIcon from "../../assets/postgres.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";

import gitIcon from "../../assets/git.svg";
import dockerIcon from "../../assets/docker.svg";



import ScrollAnimation from "react-animate-on-scroll";


export function Technologies(){
    return(
        <Container>
            <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          
          <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
           <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mysqlIcon} alt="mySql" />
            </ScrollAnimation>
          </div>
           <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={postgresIcon} alt="Postgres" />
            </ScrollAnimation>
          </div>
           <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={flutterIcon} alt="Flutter" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
         
          <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
           <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={gitIcon} alt="Git" />
            </ScrollAnimation>
          </div>
           <div>
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={dockerIcon} alt="Docker" />
            </ScrollAnimation>
          </div>
        </Container>
    );
}