import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet, grommet } from 'grommet';
import * as serviceWorker from './serviceWorker';

import Routes from './routes';

const GrommetApp = () => (
  <Grommet theme={grommet}>
    <Routes />
  </Grommet>
);

ReactDOM.render(<GrommetApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
