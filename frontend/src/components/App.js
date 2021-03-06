import React, { Component } from 'react';
import { ToastContainer, Slide } from "react-toastify";
import { Router } from 'react-router-dom';
import history from './../history';

import MainComponent from './MainComponent';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }  

  render() {
    return (
      <Router history={history}>
        <div className="h100">
        <MainComponent/>

        <ToastContainer transition={Slide} position="top-right" rtl={false}
          autoClose={2000} hideProgressBar newestOnTop closeOnClick
          pauseOnVisibilityChange draggable={false} pauseOnHover />
        </div>
      </Router>
    );
  }
}

export default App;