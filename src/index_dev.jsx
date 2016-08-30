import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';

require('app/stylesheet.js');

const App = require('app/components/app_dev.jsx');
render(<App/>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('app/components/app_dev.jsx', function() {
        const NextApp = require('app/components/app_dev.jsx');
        render(<NextApp/>, document.getElementById('app'));
    });
}
