import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');

const render = (Component) => {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

if (root.hasChildNodes()) {
  ReactDOM.unmountComponentAtNode(root);
}

render(App);

