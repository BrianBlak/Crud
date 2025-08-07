import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) => props.theme === 'primary' ? 'none' : '0.5px solid #ffff'};
    border-radius: 30px;
    background: ${(props) => props.theme ===
        'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #ffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
        border: none;   
    }
    &:active{
        opacity: 0.5;
    }
`