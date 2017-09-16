import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import store, { history } from './store';
import WelcomeViewContainer from './containers/WelcomeViewContainer';
import AppContainer from './containers/AppContainer';
import TakeQuizContainer from './containers/TakeQuizContainer';
import EditQuizContainer from './containers/EditQuizContainer';
import './index.scss';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <section>
        <Route path="/room/:id" component={TakeQuizContainer} />
        <Route path="/dashboard" component={AppContainer} />
        <Route path="/login" component={WelcomeViewContainer} />
        <Route path="/signup" component={WelcomeViewContainer} />
        <Route path="/edit" component={EditQuizContainer} />
        <Route exact path="/" component={WelcomeViewContainer} />
      </section>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
