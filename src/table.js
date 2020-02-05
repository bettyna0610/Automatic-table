import React from 'react';
import {BootstrapTable, 
    TableHeaderColumn} from 'react-bootstrap-table';
/*
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
}*/

class Table extends React.Component {


    render() {

        const values = Object.values(this.props.table);

      return (
        <div>
          <BootstrapTable data={values}>
            <TableHeaderColumn isKey dataField='id'>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='date'>
              Date
            </TableHeaderColumn>
            <TableHeaderColumn dataField='amount'>
            Amount
            </TableHeaderColumn>
            <TableHeaderColumn dataField='bid'>
            Bid
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }
       

export default Table;