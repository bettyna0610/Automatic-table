import React from 'react';
import './App.css';

import { offers } from './Data/data';
import Table from './Components/table.js';


class App extends React.Component {
  // Getting data from offers object to the initial state. 

  constructor(props) {
    super(props);
    this.state = {
      table: offers
    }
  }
// After the table was loaded, the setInterval function calls tabbleAdd adding new rows in every 5 seconds. 
  componentDidMount = () => {
    setInterval(() => {
      this.tableAdd();
    }, 5000);
  }

  tableAdd = () => {
    // I created offersCopy not to mutate the original data.
    // The newRow is the new element of the object as the last element of the initial table is length-1.I used toDateString to delete timezone from the date object.
    // I reduced amount to 2 decimals, and rounded bid to have more transperent data.
    // It also updates the state.
    const newRow = Object.keys(this.state.table).length;
    const dd2 = new Date();
    const offersCopy = offers;

    offersCopy[newRow] = {
      "id": newRow, "date": new Date(dd2.setMinutes(dd2.getMinutes() + newRow * 10)).toDateString(), "amount": (Math.random() * 10).toFixed(2),
      "bid": 9.5 + Math.round(Math.random())
    };
    this.setState({ table: offersCopy });
  }

  render() {
    console.log(offers)
    return (
      //The table component gets the offers data from the state.
      <div>
        <table>
          <tbody>
            <Table table={this.state.table} />
          </tbody>
        </table>

      </div>
    )
  }

}
export default App;
