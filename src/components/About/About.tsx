import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import Identite from "../../assets/identite.jpg";
import java from "../../assets/java.svg";
import jsIcon from "../../assets/js-icon.svg";
import python from "../../assets/python.svg";
import wordpress from "../../assets/wordpress.svg";
import { Container } from "./styles";
// import nodeIcon from "../../assets/node-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import angular from "../../assets/angular-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import dart from "../../assets/dart-icon.svg";
import django from "../../assets/django-svgrepo-com.svg";
import figma from "../../assets/figma-icon.svg";
import flutter from "../../assets/flutter-icon.svg";
import next from "../../assets/nextjs-light.svg";
import reactIcon from "../../assets/react-icon.svg";
import springBoot from "../../assets/spring-boot-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sur moi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Bonjour ! Je suis Soutongnoma Dimitri OUEDRAOGO, développeur full stack , spécialisé dans la création d’applications web et mobiles.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Je crée des applications Web et Mobile réactives adaptées au normes WCAG , et j'implemente des services backend robustes.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Je travaille aussi avec Figma pour faire les maquettes des applications , le CMS Wordpress pour realiser des sites vitrines.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Licence en Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)</h4>
            <p>Institut Burkinabé des Arts et Métiers (IBAM), Burkina Faso - Ouagadougou - Somgandé | 2021 - 2024</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3><h4>Développeur Full stack</h4>
            <p>Heka Concept | 3 Mois</p>
            <p>THE BID SARL | 3 Mois </p>
          </div>
          <h4>Développeur Mobile Indépendant</h4>
            <p>Boulangerie Wendso | 2 Mois</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Voici Mes Compétences :</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft"  delay={0.5 * 1000} >
          <h4>Langages :</h4>
        </ScrollAnimation>       
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={dart} alt="Dart" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>  
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>      
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
        </div>
       <ScrollAnimation animateIn="fadeInLeft" >
          <h4>Frameworks Web :</h4>
        </ScrollAnimation>
        <div className="hard-skills">      
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={django} alt="Django" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={springBoot} alt="Spring boot" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={next} alt="Netx.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={angular} alt="Angular" />
            </ScrollAnimation>
          </div>
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
       <ScrollAnimation animateIn="fadeInLeft" >
          <h4>Mobile :</h4>
        </ScrollAnimation>
          <div className="hard-skills">        
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" >
              <img src={flutter} alt="Flutter" />
            </ScrollAnimation>
          </div>
        </div>
         <ScrollAnimation animateIn="fadeInLeft" >
          <h4>Autre Outils :</h4>
        </ScrollAnimation>
         <div className="hard-skills">        
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" >
              <img src={wordpress} alt="WordPress" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" >
              <img src={figma} alt="Figma" />
            </ScrollAnimation>
          </div>
          
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={Identite} alt="Photo " />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
