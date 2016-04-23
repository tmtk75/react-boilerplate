/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Set } from 'immutable';
import App from './components/App.js';

const urls = ['facebook', 'github', 'google']
  .map(user => `https://api.github.com/users/${user}`)
  .map(url => window.fetch(url, { method: 'GET' })
                .then(res => res.json()));

Promise.all(urls)
  .then(e => ReactDOM.render(
    <App users={new Set(e)} />,
    document.getElementById('container')));
