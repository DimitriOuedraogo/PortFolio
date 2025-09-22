import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    width: 100%; /* Ajouté pour éviter le débordement */

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      min-width: 0; /* Permet au contenu de se réduire */
      word-wrap: break-word; /* Casse les mots longs */
      overflow-wrap: break-word; /* Support pour les navigateurs plus anciens */
      
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        min-width: 0; /* Permet la réduction */
        
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0; /* Empêche la réduction des liens */
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto; /* Césure automatique */
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }
      
      .visit-site {
        width: 30px;
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap; /* Permet aux éléments de passer à la ligne */
        }
      }
    }
  }

  @media (max-width: 960px) {
    margin-top: 10rem; /* Réduction de la marge top */
    
    h2 {
      font-size: 3.5rem;
      margin-bottom: 2rem;
    }
    
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      padding: 0.8rem;
    }

    .project {
      padding: 1.5rem 1rem;

      header {
        margin-bottom: 2.5rem;

        .project-links a > img {
          width: 4.2rem;
        }
      }

      h3 {
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
      }

      p {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        letter-spacing: 0.08rem;
      }

      footer .tech-list {
        gap: 1.2rem;
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 740px) {
    margin-top: 8rem;
    
    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
      padding: 0 1rem; /* Ajout de padding pour éviter le débordement */
    }
    
    .projects {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1rem;
      margin: 0 auto;
      max-width: 100%;
    }

    .project {
      padding: 1.5rem 1.2rem;
      margin: 0;
      max-width: 100%;

      header {
        margin-bottom: 2rem;

        .project-links a > img {
          width: 3.8rem;
        }
      }

      h3 {
        margin-bottom: 1.2rem;
        font-size: 1.6rem;
        line-height: 1.3;
      }

      p {
        margin-bottom: 1.2rem;
        font-size: 1.1rem;
        letter-spacing: 0.05rem;
        line-height: 1.4;
      }

      footer .tech-list {
        gap: 0.8rem;
        font-size: 1.1rem;
        flex-wrap: wrap;
      }
    }
  }

  /* Très petit écran */
  @media (max-width: 480px) {
    margin-top: 6rem;
    
    h2 {
      font-size: 2.5rem;
      padding: 0 1.5rem;
    }

    .projects {
      padding: 0.5rem;
      gap: 1rem;
    }

    .project {
      padding: 1.2rem 1rem;
      
      header {
        margin-bottom: 1.5rem;
        
        .project-links a > img {
          width: 3.2rem;
        }
      }

      h3 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        line-height: 1.2;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
        letter-spacing: 0.02rem;
        line-height: 1.3;
      }

      footer .tech-list {
        gap: 0.6rem;
        font-size: 1rem;
        li {
          padding: 0.2rem 0.4rem;
          border-radius: 0.3rem;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  /* Écran très très petit */
  @media (max-width: 360px) {
    .projects {
      padding: 0.3rem;
    }

    .project {
      padding: 1rem 0.8rem;

      header .project-links a > img {
        width: 3rem;
      }

      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.95rem;
      }

      footer .tech-list {
        font-size: 0.9rem;
        gap: 0.4rem;
      }
    }
  }
`;