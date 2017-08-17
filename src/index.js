import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Menu/Head';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Head />, document.getElementById('topbar'));
registerServiceWorker();

