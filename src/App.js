import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'assets/scss/style.scss';
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/properties/:id' component={DetailPage}/>
        <Route exact path='/checkout' component={Checkout}/>
      </Router>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
