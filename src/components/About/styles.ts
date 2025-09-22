import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top:10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }
  
  h4{
    margin-top : 1rem;
    font-weight: bold
    }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
.about-image {
  text-align: center;

  img {
    margin-top: 2rem;
    width: 75%;
    border-radius: 15px;          /* coins arrondis */
    border: 3px solid #ccc;       /* bordure grise élégante */
    object-fit: cover;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* ombre douce */
    filter: grayscale(0);
    transition: filter 0.5s, transform 0.3s, box-shadow 0.3s;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.03);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25); /* ombre plus forte au hover */
    }
  }
}

@media only screen and (max-width: 480px) {
  .about-image {
    max-width: 100%;
    margin-top: 4rem;

    img {
      margin-top: 2rem;
      width: 100%;
      border-radius: 12px;
      border: 2px solid #ccc;
      object-fit: cover;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* ombre adaptée mobile */
      filter: grayscale(0);
      transition: filter 0.5s, transform 0.3s, box-shadow 0.3s;

      &:hover {
        filter: grayscale(0);
        transform: scale(1.03);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
      }
    }
  }
}

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`