import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../layouts/footer/Footer';
import Header from '../layouts/header/Header';
import Home from '../pages/Home/Home';

function AppRouter() {
    return (
        <div className="main w-screen h-screen flex flex-col">
            <Header />
            <div className="flex-1 overflow-auto">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">{/* Add your about component */}</Route>
                        <Route path="/contact">{/* Add your contact component */}</Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default AppRouter;
