import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './container/Layout';
import Home from './components/Home';
import Dota2 from './components/Dota2';
import CSGO from './components/CSGO';
import Rules from './components/Rules';
import FAQ from './components/FAQ';
import Warning from './components/Warning';
import Lk from './components/Lk';
import Chat from './components/Chat';


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/dota2' component={ Dota2 } />
    <Route path='/csgo' component={ CSGO } />
    <Route exact path='/rules' component={ Rules } />
    <Route exact path='/faq' component={ FAQ } />
    <Route exact path='/lk/:userId?' component={ Lk } />
</Layout>;

export const popup = Warning;

export const chat = Chat;
