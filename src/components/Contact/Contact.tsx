import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import { Container } from "./styles";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contactez-moi</h2>
        <p>Vous avez besoin d'un développeur ?</p>
        <p>Contactez-moi ! Je suis disponible pour transformer vos idées en applications fonctionnelles.</p>

      </header>
      <div className="contacts">
        <div className="contact-email">
          <a href="mailto:dimitriouedraogo9539@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:dimitriouedraogo9539@gmail.com">dimitriouedraogo9539@gmail.com</a>
        </div>
        <div>
          <a href="tel:+22677454757"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+22677454757">(+226) 77454757</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}