import React from 'react';
import ReactDOM from 'react-dom';
import './styling/styles.scss';
import './styling/normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
