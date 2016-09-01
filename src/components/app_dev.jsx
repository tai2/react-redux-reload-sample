import React from 'react';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistState } from 'redux-devtools';
import reducers from 'app/reducers';
import DevTools from 'app/containers/devtools.jsx';
import RootContainer from 'app/containers/root_container.jsx';

const enhancer = compose(
    DevTools.instrument(),
    persistState(getDebugSessionKey()));
const store = createStore(reducers, {}, enhancer);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

function App(props) {
    return (
        <Provider store={store}>
            <div>
                <RootContainer/>
                <DevTools/>
            </div>
        </Provider>
    );
}

export default App;
