import React from 'react';
import ReactDom from 'react-dom';
import Main from'./app/main.js';
import { createStore , applyMiddleware} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import OneGit from './app/onegit.js';
import Gitlist from './app/gitlist.js';
import Onegit from './app/onegit.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import gitApp from './app/reducers';


let store = createStore(gitApp, applyMiddleware(thunk));




ReactDom.render(

    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Gitlist} />
                    <Route path="onegit/:user/:repo" component={Onegit} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,

    document.getElementById('app')

);


