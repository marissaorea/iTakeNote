import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/brooke.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
