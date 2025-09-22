import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';
import { Container, ContainerSucces } from './styles';

export function Form() {

  const [state, handleSubmit] = useForm("xjkababv");
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState('');


  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email));
  }

  // Notification de succès
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email envoyé avec succès !', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Merci ! Votre message a bien été envoyé.</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
            Retour en haut
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Contactez-nous via le formulaire</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Votre email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          placeholder="Écrivez votre message ici..."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* reCAPTCHA v2 */}
        <ReCAPTCHA
          sitekey="6LeHb9ErAAAAAC2K2tPhsRW0sW4uR6tco4XjIarz"
          onChange={(token) => setIsHuman(!!token)}
        />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Envoyer
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
