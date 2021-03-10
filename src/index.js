import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./state/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import {SignInPage} from "./pages/SignInPage";
import {HomePage} from "./pages/HomePage";
import {ProfilePage} from "./pages/ProfilePage";
import {MoviePage} from "./pages/MoviePage";
import {WatchPage} from "./pages/WatchPage";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Route path="/" exact={true} component={SignInPage}/>
              <Route path="/home" component={HomePage}/>
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/watch" component={MoviePage}/>
              <Route path="/detail" component={WatchPage}/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
