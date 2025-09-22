import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import reactIcon from '../../assets/react-icon.svg'
import telegram from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { Container } from './styles'

export function Footer() {
  return (
    <Container className="footer">
      <p>Soutongnoma Dimitri OUEDRAOGO </p>
      <div>
        <p>
          Cet Site a été développé avec <img src={reactIcon} alt="React" />
        </p>
      </div>
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
    </Container>
  )
}
