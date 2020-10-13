/**@jsx jsx */
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import './App.css';

import { Container } from 'react-bootstrap'
import { css, jsx } from '@emotion/core'

import Header from './components/Header'
import Center from './components/Center'


function Home() {
    return (
        <React.Fragment>
            <Container fluid="100%" style={{ backgroundColor: "#F9F8EB" }}>
                <Header />
                <Center />
            </Container>
        </React.Fragment>
    )
}

function Main() {
    return (
        <React.Fragment>
            <Router>
                <Switch>

                    <Route exact path='/' component={Home} />

                    <Redirect to="/" />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default Main;
