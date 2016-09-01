import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import App from 'app/components/app_dev.jsx';

render(<App/>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept('app/components/app_dev.jsx', function() {
        const NextApp = require('app/components/app_dev.jsx').default;
        render(<NextApp/>, document.getElementById('app'));
    });
}
