import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: start;
    gap: 2rem;
    width: 100%;
    input, textarea{
      width: 70%;
      padding: 1rem 2rem;
      border-radius: 5px;
      outline: none;
      border: none;
      background:none;
      /* border: 1px solid #aaa; */
      background-color: rgba( 60,55,55,0.3 );
      color: white;
      font-weight: 300;
      &::placeholder{
        color: #aaa;
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: start;

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`