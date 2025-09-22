import githubIcon from "../../assets/github.svg";
import { Container } from "./styles";
// import DownloadApp from '../../assets/download.webp'
import ScrollAnimation from "react-animate-on-scroll";
import externalLink from "../../assets/external-link.svg";


export function Project() {
  return (
    <Container id="project">
      <h2>Mes Projets</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/DimitriOuedraogo/METEO_BURKINA" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://meteo-burkina.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Meteo Burkina </h3>
              <p>
                J'ai développé une application SaaS permettant d’obtenir des informations météorologiques pour n’importe quelle localité nationale et de fournir des conseils personnalisés grâce à l’intelligence artificielle.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>OpenWeatherMap </li>
                <li>Supabase</li>
                <li>Google Gemini</li>
                <li>PayDunya</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/DimitriOuedraogo/Wendso_Mobile" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
              </div>
            </header>
            <div className="body">
              <h3>Wendinso Mobile</h3>
              <p> J'ai développé une application Mobile permettant d'automatiser le processus de gestion de la boulangeire Wendinso </p>
            </div>
            <footer> <ul className="tech-list"> <li>Flutter</li> <li>Docker</li> <li>SQlite</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/DimitriOuedraogo/projet_stage" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Application de Suivi de l'Hypertension Arterielle</h3>
              <p>
                Pour mon projet de fin de cycle de licence, et avec l’appui d’un mentor, j’ai développé une application permettant aux médecins généralistes du Burkina Faso d’assurer un meilleur suivi des patients hypertendus, grâce aux avis de médecins spécialistes.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>Angular</li>
                <li>MySql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/DimitriOuedraogo/Application-mobile-reservation-parking" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              
              </div>
            </header>
            <div className="body">
              <h3>Parking Reservation App</h3>
              <p>J'ai développé lors de ma formation une application mobile qui permet aux utilisateurs de réserver facilement une place de parking, d’effectuer un paiement en ligne et de recevoir un QR code comme preuve de réservation. .</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flutter</li>
                <li>Firebase</li>
                <li>qr_flutter</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/DimitriOuedraogo/Projet_Developpement_N_Tiers" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Projet de Developpement N-Tiers</h3>
              <p>Projet scolaire réalisé dans le cadre du module Développement N-Tiers à Orange Digital Center. Application permettant de gérer une liste de contacts avec : création, modification, suppression, recherche et organisation par groupes.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>Angular</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/DimitriOuedraogo/e-programme" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-Programme</h3>
              <p>
                Application web pour  établir le programme de la semaine !
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>MYSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}