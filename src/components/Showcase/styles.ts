import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12rem;
    gap: 2rem;
    flex-wrap: wrap;
    & > div:nth-child(2){
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: 2rem;
        width: 48%;
        padding: 8px;
        h4{
            font-size: 4rem;
            color: #9f0707;
            margin-bottom: 4rem;
        }
        p{
            font-size: 1.4rem;
            font-weight: 400;
            text-align: justify;
        }
        a{
            color: var(--orange);
            font-weight: 300;
            text-decoration: underline;
        }
    }

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: start;
        width: 48%;
        height: fit-content;
        img{
            width: 100%;
            object-fit: contain;
        }
    }

     @media(max-width: 960px){
         & > div:nth-child(2){
            width: 100%;
         }
         & > div:nth-child(1){
            width: 100%;
            justify-content: center;
            img{
            width: 100%;
        }
         }
     }

`;