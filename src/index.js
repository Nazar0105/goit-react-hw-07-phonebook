import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = document.getElementById('root');

if (root.hasChildNodes()) {
  createRoot(root).unmount();
}

const rootInstance = createRoot(root);

rootInstance.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
