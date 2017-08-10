import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Menu/Head';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Head />, document.getElementById('topbar'));
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
