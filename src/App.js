import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Table from './table.js';
import {offers} from './data'

class App extends React.Component {
constructor(props) {
  super(props); 
  this.state={
    table:offers
  }
  console.log(this.state.table)
}



 
renderTable = () => {
  const table = this.state.table
  console.log(table[0].date)
  return Object.keys(table).map((obj,i) => 
    { const { id, date, amount, bid } = table[obj]
    
    return (
      <tr key={id}>
      <td>{id}</td>
       <td>{date.toString()}</td>
       <td>{amount}</td>
    <td>{bid}</td>
    </tr>
    )
  })
  
}


     
    
  render() {
   


    return (
      <div>
         
         
        <div>
                 <table>
                   <tbody>
                  {this.renderTable()}
                  </tbody>
                  </table>
                  </div>
              
      </div>)
}
}

export default App;
