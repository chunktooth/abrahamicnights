import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Lessons from '../Lessons/Lessons';
import Readings from '../Readings/Readings';
import Videos from '../Videos/Videos';
import Notes from '../Notes/Notes';
import vids from '../data/vids';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vids: []
    }
  }

  componentDidMount() {
    this.setState({ vids })
  }

  render(props) {
    return (
      <div className='App'>
        {
          this.props.location.pathname !== '/' &&
          <header>
            <NavLink to='/' className='nav-header'>AbrahamicNights.COM</NavLink> 
          </header>
        }
        <ul>
          <li><NavLink to='/lessons' className='nav' activeClassName='selected'>Weekly Lessons</NavLink></li>
          <li><NavLink to='/readings' className='nav' activeClassName='selected'>Additional Readings</NavLink></li>
          <li><NavLink to='/videos' className='nav' activeClassName='selected'>Supplemental Video Clips</NavLink></li>
          <li><NavLink to='/notes' className='nav' activeClassName='selected'>Source Notes</NavLink></li>         
        </ul>
        <main>  
          <Route exact path='/' component={ Home }/>
          <Route path='/lessons' component={ Lessons }/>
          <Route path='/readings' component={ Readings }/>
          <Route path='/videos' render={ () => 
            <Videos vids={ this.state.vids }/> }
          />
          <Route path='/notes' component={ Notes }/>
        </main>
        {
          this.props.location.pathname === '/' &&
          <footer>AbrahamicNights.COM</footer>
        }
      </div>
    );
  }
}

export default withRouter(App);