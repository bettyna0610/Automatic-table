import React from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';



const Table = (props) => {

  //Getting the values of offers object as Bootstrap table only accepts array.
  const values = Object.values(props.table);

  return (
    <div className="table">
      <BootstrapTable striped bordered hover data={values}  >
        <TableHeaderColumn dataAlign="center" width={'50px'} isKey dataField='id'>
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