import React from 'react'
import GlobalStyles from './GlobalStyles'
import Nav from './components/Nav'
import Home from './pages/Home'

const App = () => {
    return (
        <div>
            <GlobalStyles/>
            <Nav />
            <Home />
        </div>
    )
}

export default App
