import React from 'react';
import styled from 'styled-components';
import Burger from './Burger/index';
import logo from '../../assets/img/logo-corebiz-global.svg'

const Nav = styled.nav`
  max-width: 100%;
  height: 150px;
  padding-left:  50px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  img{
   padding-top:  10px;

  }

  @media (max-width: 768px) {
      img{
          width: 180px;
          padding-left: 30px
      }


  }
`

const Header = () => {
  return (
    <Nav>
      <div className="logo">
       <img className="logo-core" src={logo} alt="logo" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Header