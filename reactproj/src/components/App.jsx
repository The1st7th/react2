import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import download from '../assets/images/download.jpeg';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <img src={download}/>

      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App