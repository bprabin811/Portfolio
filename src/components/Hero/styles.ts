import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;

  gap: 8rem;
  
  .hero-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 8rem;
      font-family: "Rubik Scribble", system-ui;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social_media_icons{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 1rem;
    /* background-color: rgba( 60,55,55,0.2 ); */
    border-radius: 5px;
    padding: 10px;


    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 400px;
      border-radius: 50%;
      mix-blend-mode: color-burn;
      border: 8px solid var(--green);
      object-fit: contain;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{


      & >h1{
        font-size: 2rem;
      }
    }
    
    .hero-image{
      display: none;
    }

    .social_media_icons{
      flex-direction: row;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`