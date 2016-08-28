This example demostrates browser reloading with no state-loss using react-redux.<br>
Neither of react-hot-loader or livereactload is needed.

# Module stack

* [react](https://facebook.github.io/react/)
* [redux](http://redux.js.org/)
* [redux-devtools](https://github.com/gaearon/redux-devtools)
* [browserify](http://browserify.org/)
 
# How to run

```
npm install
npm run watch
```

Then access `http://localhost:3000/?debugg_session=abcde`.
***abcde*** is a session key. You can choose any string as a session key.

If you modify the source code, it fires reloading with preserving the whole state.

