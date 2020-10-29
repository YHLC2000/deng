import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Deng from './Deng';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact path="/" component={Deng} />
      <Route path="/app" component={App} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
