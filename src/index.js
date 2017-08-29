import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Menu/Head';
import Instructions from './Menu/Instructions';
import BugReport from './Menu/BugReport';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Head />, document.getElementById('topbar'));


ReactDOM.render(<Instructions />, document.getElementById('instructions'));


ReactDOM.render(<BugReport/>, document.getElementById('bugReport'));
