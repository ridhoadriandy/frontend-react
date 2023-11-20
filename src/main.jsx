import React from 'react';
import ReactDOM from 'react-dom/client';
//import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';

//BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
