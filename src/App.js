
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pageSize=5;
apikey="5a5eba3fbe2f4a47961a67573a0f53fe";
// apikey = process.env.REACT_APP_NEWS_API
state={
progress:10
}

setProgress=(progress)=>{
this.setState({progress:progress})
}
  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <LoadingBar
          progress={this.state.progress}
          height={3}
          color='#f11946'
        />
       <Routes>
          <Route exect path="/" element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exect path="/business" element={<News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
          <Route exect path="/entertainment" element={<News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
          <Route exect path="/general" element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exect path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
          <Route exect path="/science" element={<News apikey={this.apikey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route exect path="/sports" element={<News apikey={this.apikey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route exect path="/technology" element={<News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
        </Routes>
      
       </Router>
      </div>
    )
  }
}

