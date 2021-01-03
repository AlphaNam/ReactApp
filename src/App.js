import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMovieComponent from './components/ListMovieComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMovieComponent from './components/CreateMovieComponent';
import ViewMovieComponent from './components/ViewMovieComponent';
import UpdateEmployeeComponent from './components/UpdateMovieComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListMovieComponent}></Route>
                          <Route path = "/movies" component = {ListMovieComponent}></Route>
                          <Route path = "/add-movie/:id" component = {CreateMovieComponent}></Route>
                          <Route path = "/view-movie/:id" component = {ViewMovieComponent}></Route>
                          <Route path = "/update-movie/:id" component = {UpdateEmployeeComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;