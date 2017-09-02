import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserInput from './components/layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserInput />, document.getElementById('root'));
registerServiceWorker();
