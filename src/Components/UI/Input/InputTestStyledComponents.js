  import styled from 'styled-components' ;

const InputTestStyledComponents = 
styled.input`  
 /**2 way inValid**/
 /***1- way by property props.inValidP **/
  /*& { 
    border: 1px solid  $ {props=>  ( props.inValidP?'#c03d3d':'#cccccc')} ;
    background-color:  $ {props=>  ( props.inValidP?'#ffd5d5':'#ffffff')} ;
  }*/
  /***2- way by set css class inValid **/
  &.inValid { 
    border: 1px solid   #c03d3d  ;
    background-color:  #ffd5d5  ;
  }

 /* @media (min-width:734px) {
    width:auto ;
   }*/
   
`;
 
export default InputTestStyledComponents;
