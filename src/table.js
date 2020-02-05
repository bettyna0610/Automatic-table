import React from 'react';
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';

const Table = (props) => {

    
    const table = props.table
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
       

export default Table;