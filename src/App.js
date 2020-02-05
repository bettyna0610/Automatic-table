import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Table from './table.js';
import {offers} from './data';
import Table from './table.js';


class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     table:offers
   }
   //alert( this.state.table );
   //alert( "TA = " + this.state.table );
   //alert( "TA2 = " + Object.keys( this.state.table ).length );
   //this.tableAdd();
   window.setTimeout( this.tableAdd.bind( this ), 5000 );
 } 

 tableAdd = () => {
  //alert( "TA = " + this.state.table );
  //alert( "TA2 = " + Object.keys( this.state.table ).length );
  let l = Object.keys( this.state.table ).length;
  let dd2 = new Date();
  offers[ l ] = {"id":l, "date": new Date(dd2.setMinutes(dd2.getMinutes() + l*10)), "amount": Math.random()*10,
    "bid": 9.5 + Math.random()};
  this.setState( { table: offers } );
  window.setTimeout( this.tableAdd.bind( this ), 5000 );

 }

render() {
  console.log(offers)
  return (
    <div>
      <table>
        <tbody>
      <Table table={this.state.table}/>
      </tbody>
      </table>
      
    </div>
  )
}

}
export default App;
