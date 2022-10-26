import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;
    &:hover{
        box-shadow:0px 0px 5px #006666;
        transition: 1s;
     }

    @media (max-width: 768px) {
        width: 20%;
        p{
            font-size: 12px;
        }
        span {
            font-size: 20px;
        }
        svg {
            display: none;
        }

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin: 15px auto;
    color: rgb(0,128,128);
    
    svg{
        width: 25px;
        height: 25px;
    }
    `;
export const HeaderTitle = styled.p`
    font-size: 20px;
    `
export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`