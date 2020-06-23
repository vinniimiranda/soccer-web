import styled from 'styled-components';
import { darken } from 'polished'


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
background-color: #1f1f1f;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
width: 300px;
min-width: 300px;
margin-right: 1rem;
padding: 0;

box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.div`



  display: flex;
  flex-direction: column;
  list-style: none;
  flex: 1;
  padding: 0 1.4rem;

`;

export const NavListItem = styled.div`

  padding: 1.3rem;
  margin: 0.5rem 0;
  background-color: ${props => props.selected ? '#F50057' : '#333'};
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-out;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    width: 3rem;
    height: 2rem;
    fill: #fff;
  }

  &:hover {
    background-color: ${darken(0.045, '#F50057')};
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  }



  

`;
