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

const Table = (props) => {


    

        const values = Object.values(props.table);

      return (
        <div className="table">
          <BootstrapTable   striped bordered hover  data={values}  >
            <TableHeaderColumn dataAlign="center" width={'50px'}isKey dataField='id'>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" width={'140px'} dataField='date'>
              Date
            </TableHeaderColumn>
            <TableHeaderColumn dataAlign="center" width={'95px'} dataField='amount'>
            Amount
            </TableHeaderColumn>
            <TableHeaderColumn width={'55px'} dataAlign="center" dataField='bid'>
            Bid
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  
       

export default Table;