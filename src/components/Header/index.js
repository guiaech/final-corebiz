import React from 'react'
import './styles.css'
import logo from '../../assets/img/logo-corebiz-global.svg'

const Header = () => {
    return (
        <section className="header">
            <div className="header-div">
                <img className="logo-core" src={logo} alt="logo" />
            </div>

            <div className="links-div">
                <a href="https://www.corebiz.ag/"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > a corebiz</a>
                <a href="https://www.corebiz.ag/"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > serviços</a>
                <a href="https://www.corebiz.ag/"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > cases</a>
                <a href="https://www.corebiz.ag/"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="header-link" > contato</a>
            </div>
        </section>
    )
}

export default Header