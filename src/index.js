import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import configureStore from './redux/store/config_store';
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
