import styled from 'styled-components'


const Button = styled.button`
    background: ${props => props.primary ? "black": "transparent" };
    border: ${props => props.primary ? "none": "1px solid black" };
    color: ${props => props.primary ? "white": "black" };
    font-size: 21px;
    width: 220px;
    height: 55px;
    cursor: pointer;
    `;

const H1 = styled.p`
    font-size: 3rem;
    line-height:1;
    font-weight: 500;
    word-spacing: -5px;
    font-family: 'Alef','sans-serif';
    color: ${(props) => props.color};
    margin:0;
    `;

export {Button,H1};




