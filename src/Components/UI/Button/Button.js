 import styled from 'styled-components' ;

  const Button = 
    styled.button`
     padding:5px ;
     margin:2px;
        border: 1px solid #025426;
        border-radius: 5px;
        background-color: #01d02a;
        width:100% ;

       @media (min-width:734px) {
        width:auto ;
       }
        &:hover{
        
        background-color: #00881b;
       }

       

     
    `
  

export default Button;
