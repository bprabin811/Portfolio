import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: start;
    font-size: 4rem;
    padding: 10px;
    margin-bottom: 2rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      /* background-color: #2b2b2b; */
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;

      background: rgba( 60, 55, 55, 0.2 );
      /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ); */
      /* backdrop-filter: blur( 3.5px );
      -webkit-backdrop-filter: blur( 3.5px ); */
      border-radius: 10px;
      /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
      &:hover{
        transform: translateY(-5px);
        background: rgba( 60, 55, 55, 0.9 );
      }

      .body{
        h3{
          color: green;
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 50%;
          border-radius: 5px;
        }
      }
      
      h3{
        margin-bottom: 1rem;
      }

      p{
        /* letter-spacing: 0.12rem; */
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`