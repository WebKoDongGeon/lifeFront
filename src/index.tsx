import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // BrowserRouter 는 URL의 변화를 감지하고 라우팅을 관리하는 역할을 수행한다.
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <BrowserRouter> 
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
