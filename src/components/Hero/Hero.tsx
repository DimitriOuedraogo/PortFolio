import ScrollAnimation from "react-animate-on-scroll"
import { BrowserRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import telegram from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Flag from './Flag'
import { Container } from "./styles"
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Salut <img src={Hello} alt="Hello" width="20px"/>, Je suis</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Soutongnoma Dimitri OUEDRAOGO</h1>
          <Flag countryCode="bf"></Flag>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Développeur Full Stack</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
       <div className="social-media">
        <a
          href="https://www.linkedin.com/in/soutongnomadimitriouedraogo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/DimitriOuedraogo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
             href="https://api.whatsapp.com/send?phone=22651039539&text=Bonjour%20Soutongnoma%20Dimitri%2C%20je%20viens%20de%20votre%20portfolio."
           target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/Soutongnoma_dimitri"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
      </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}