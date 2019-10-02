import styled from 'styled-components'


const Button = styled.button`
    background: ${props => props.primary ? "#AEC54F": "transparent" };
    border: ${props => props.primary ? "none": "1px solid black" };
    color: ${props => props.primary ? "white": "black" };

    font-size: 21px;
    width: 220px;
    height: 40px;
    `;

    

export {Button};




