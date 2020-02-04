import React from 'react'

class Table extends React.Component {

    render() {
        return <div>{this.props.id}{this.props.date}</div>
    }
}

export default Table;