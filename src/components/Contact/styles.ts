import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;
  padding: 8px;

  header{
    text-align: start;
    h2{
      text-align: start;
      font-size: 4rem;
    }
    p{
      color: var(--orange);
      font-weight: 300;
      font-size: 3rem;
    }
  }

  .contacts{
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    place-items: start;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: start;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--orange);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      a{
        color: var(--black);
        font-weight: 500;
      }
      &:hover{
        background-color: var(--orange);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
