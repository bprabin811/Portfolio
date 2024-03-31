import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 12rem;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 3rem 8px;
    /* background-color: rgba( 60,55,55,0.2 ); */
    border-radius: 5px;

    & > div{
        img{
            width: 40px;
        }
    }
`;