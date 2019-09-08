import styled from 'styled-components'


const Button = styled.button`
    background: ${props => props.primary ? "#AEC54F": "transparent" };
    border: ${props => props.primary ? "none": "1px solid black" };
    color: ${props => props.primary ? "white": "black" };

    font-size: 21px;
    width: 220px;
    height: 40px;
    `;



const Treatments = [
    {treatment:"הפחתת שיער לצמיתות",link:"#", src:"#", size:"test" },{treatment:"הבהרת כתמים",link:"#" },{treatment:"צלוליט",link:"#" }, 
    {treatment:"אקנה",link:"#" },{treatment:"טיפול5",link:"#" },{treatment:"טיפול6",link:"#" }
    ];

// const Treatments = {"hair":{treatment:"הפחתת שיער לצמיתות",link:"#", src:"#", size:"test" }
   

    

export {Button, Treatments};




