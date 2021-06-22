import React from 'react'
import { Switch, Route } from "react-router-dom";
import GlobalStyles from './GlobalStyles'
import Nav from './components/Nav'
import Home from './pages/Home'
import Article from './pages/Article';
import Category from './pages/Category';

const App = () => {
    return (
        <div>
            <GlobalStyles/>
            <Nav />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/article/:id" component={Article} exact />
                <Route path="/category/:id" component={Category} exact />
            </Switch>
        </div>
    )
}

export default App
