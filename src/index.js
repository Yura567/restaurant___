import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'


const App = () => {
  return (
    <div>
         <Header />

          <Main />

          <Footer />
    </div>
  );
};
const app = ReactDOMClient.createRoot(document.getElementById('app'));
app.render(<App />)