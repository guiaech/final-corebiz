import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 5%;
  a {
    padding: 18px 10px;
    color: white;
    font-weight: bold;
    font-size: x-large;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #080808;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    left: 21px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="https://www.corebiz.ag/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > a corebiz</a>
      <a href="https://www.corebiz.ag/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > serviços</a>
      <a href="https://www.corebiz.ag/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > cases</a>
      <a href="https://www.corebiz.ag/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > contato</a>
    </Ul>
  )
}

export default RightNav