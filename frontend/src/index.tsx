import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginType, Providers } from '@microsoft/mgt-element';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';

Providers.globalProvider = new Msal2Provider({
  clientId: '83c01961-76c5-45e7-9fd0-9f4e7781522b', 
  scopes: ['user.read', 'mail.read','mail.send','mail.readwrite'],
  redirectUri: 'http://localhost:3000',
  loginType: LoginType.Redirect,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();