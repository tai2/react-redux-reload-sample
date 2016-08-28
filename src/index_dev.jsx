import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistState, createDevTools } from 'redux-devtools';
import reducers from 'app/reducers';
import DevTools from 'app/containers/devtools.jsx';
import AppContainer from 'app/containers/app_container.jsx';

const enhancer = compose(
    DevTools.instrument(),
    persistState(getDebugSessionKey()));
const store = createStore(reducers, {}, enhancer);

render((
    <Provider store={store}>
        <div>
            <AppContainer/>
            <DevTools/>
        </div>
    </Provider>
), document.getElementById('app'));

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}
