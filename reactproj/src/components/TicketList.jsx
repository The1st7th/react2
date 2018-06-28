import React from 'react';
import Ticket from './Ticket';

function TicketList(){
  var masterTicketList = [
    {
      names: 'Thato and Haley',
      location: '3A',
      issue: 'Firebase won\'t save record. Halp.'
    },
    {
      names: 'Sleater and Kinney',
      location: '4B',
      issue: 'Fox image not displaying on page, can only see duck?'
    },
    {
      names: 'Imani & Jacob',
      location: '9F',
      issue: 'Donkey picture not displaying on hover in Zoology app. :('
    }
  ];
  var obj=[];
  for(var x = 0;x < 3;x++)
  {
    var temp= <Ticket names={masterTicketList[x].names}
    location={masterTicketList[x].location}
    issue={masterTicketList[x].issue}
    key={x} />

    obj.push(temp);
  }
  return (
    <div>
    <hr/>
    {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index} />
    )}
    {/* <div>{obj}</div> */}
  </div>
  );
}


export default TicketList;