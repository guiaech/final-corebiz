import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios"


const api = axios.create({
    baseURL: 'https://9nmsal21je.execute-api.us-west-2.amazonaws.com/'
});

function MainHome() {

    const [dados, setDados] = useState([
        { id: " ", title: " ", url: " ", miniurl: " ", address: Number },
        { id: " ", title: " ", url: " ", miniurl: " ", address: Number },
        { id: " ", title: " ", url: " ", miniurl: " ", address: Number },
        { id: " ", title: " ", url: " ", miniurl: " ", address: Number },

    ]);


    const [indice, setIndice] = useState(0);
    useEffect(() => {
        async function getPhoto() {
            const response = await api.get('/items')

            setDados(response.data.Items)

            console.log(response.data.Items)
        }

        getPhoto();
    }, []);

    return (
        <main className="mainHome">
            <div className="main-dad">


                <div className="main-title">
                    <h1>{dados[indice].title}</h1>
                </div>

                <button  className="button-main">
                    <a href="https://www.corebiz.ag/"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="title-button"> Veja Mais <img className="seta" src="https://raw.githubusercontent.com/mluizarodrigues/gobeyond-desafio-final/03c7c916e7f81618bb093f49f4c22ed630f2ca50/src/assets/images/icon-arrow.svg" alt="seta" /></a>
                </button>


                <div className="miniurl-images">

                    <button className="miniurl-images-button" onClick={() => setIndice(0)}>
                        <img
                            className={indice === 0 ? "atv" : "imagem-api"}
                            src={dados[0].miniurl}
                            alt="imagem"
                        />
                    </button>

                    <button className="miniurl-images-button" onClick={() => setIndice(1)}>
                        <img
                            className={indice === 1 ? "atv" : "imagem-api"}
                            src={dados[1].miniurl}
                            alt="imagem"
                        />
                    </button>

                    <button className="miniurl-images-button" onClick={() => setIndice(2)}>
                        <img
                            className={indice === 2 ? "atv" : "imagem-api"}
                            src={dados[2].miniurl}
                            alt="imagem"
                        />
                    </button>

                    <button className="miniurl-images-button" onClick={() => setIndice(3)}>
                        <img
                            className={indice === 3 ? "atv" : "imagem-api"}
                            src={dados[3].miniurl}
                            alt="imagem"
                        />
                    </button>


                </div>


                <div className="banner">
                 
                        <img src={dados[indice].url} alt="banner" className="image-finish" />

                </div>

            </div>
        </main>
    );
}

export default MainHome