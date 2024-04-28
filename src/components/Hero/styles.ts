import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;

  gap: 8rem;
  
  .hero-text{
    /* background-color: #121111;
    padding: 1rem 5rem;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    border-radius: 5px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 8rem;
      /* font-family: "Rubik Scribble", system-ui; */
    }

    /* h1::after {
      content: "";
      width: 6rem;
      height: 8px;
      border-radius: 2px;
      background-color: var(--orange);
      top: -10px;
      left: -20px;
      position: absolute;
      z-index: 0;
    }
  h1::before {
    content: "";
    width: 8px;
    height: 6rem;
    border-radius: 2px;
    background-color: var(--orange);
    top: -10px;
    left: -20px;
    position: absolute;
    z-index: 0;
  } */

    h3{
      color:var(--orange);
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
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
    /* background-color: rgba( 60,55,55,0.2 ); */
    border-radius: 5px;
    padding-top: 2rem;


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
      max-width: 300px;
      border-radius: 50%;
      mix-blend-mode: color-burn;
      /* border: 8px solid #eee; */
      object-fit: contain;
      filter: drop-shadow(0mm -5mm 8mm var(--orange));
      /* background-color: #eee; */
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
      display: block;
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