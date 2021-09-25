import React from 'react'
import Header from './components/Header'
import MainHome from './components/MainHome'
import './App.css'
import Footer from './components/Footer'


const App = () => {
    return (
        <main className="main">
            <Header />
            <MainHome />
            <Footer />
        </main>
    )
}

export default App
