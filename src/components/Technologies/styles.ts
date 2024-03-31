import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12rem;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 8px;

    & > div{
        img{
            width: 50px;
        }
    }
`;