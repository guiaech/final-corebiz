import React from 'react'
import './styles.css'
import logoFooter from '../../assets/img/logo-corebiz-black.svg'

const Footer = () => {
    return (
        <section className="footer-section">

            <footer>



                <div className='marca'>
                    <img src={logoFooter} className="logo-core-black" alt="Logo Corebiz" />
                    <span className='logo-text'>direitos reservados. corebiz 2021</span>
                </div>






                <div className='social-links'>

                    <a className="link-rede" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5562981126525&text=Ol%C3%A1%20Tudo%20bem%3F">
                        <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-4.png" alt="whatsapp" className="icon" />
                    </a>
                    <a className="link-rede" target="_blank" rel="noreferrer" href="https://github.com/guiaech">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" className="icon" />
                    </a>
                    <a className="link-rede" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guilherme-andrade-e-chaves/">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" className="icon" />
                    </a>
                </div>






                <div className='lista-footer'>

                    <a href="https://www.corebiz.ag/" className="item-lista" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>a corebiz</a>
                    <hr />

                    <a href="https://www.corebiz.ag/" className="item-lista" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>serviços</a>
                    <hr />

                    <a href="https://www.corebiz.ag/" className="item-lista" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>cases</a>
                    <hr />

                    <a href="https://www.corebiz.ag/" className="item-lista" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>contato</a>
                    <hr />
                </div>


                <container className="container-endereco">
                    <div className="Card">
                        <h1>
                            .Brasil
                        </h1>
                        <p>
                            Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP <br />R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP
                        </p>
                    </div>
                    <div className="Card">
                        <h1>
                            .Argentina
                        </h1>
                        <p>
                            Soler 5518, 3 Piso C1425BYF<br /> Palermo Hollywood CABA
                        </p>
                    </div>
                    <div className="Card">
                        <h1>
                            .Mexico

                        </h1>
                        <p>
                            Blvd. Miguel de Cervantes Saavedra 169,<br /> Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX
                        </p>
                    </div>
                    <div className="Card">
                        <h1>
                            .Chile
                        </h1>
                        <p>
                            Roberto del Río 1137,<br /> Providencia.
                        </p>
                    </div>
                </container>





            </footer>

        </section>
    )
}

export default Footer