import React from 'react'
import './Table.css'
import * as trashIcon from '../../assets/delete.svg'

class Table extends React.Component {
    render() {
        return (
            <section className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th> S.No </th>
                            <th> Name </th>
                            <th> Created On </th>
                            <th> Remove Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listOfNames.length !== 0 ?
                            this.props.listOfNames.map((listElement, index) => 
                                <TableRow key={listElement.user + listElement.createAt + index}
                                    serialNo={index + 1}     
                                {...listElement}  
                                handleDelete={this.props.handleDelete}/>
                            ): <tr><td id="noUserTd">No User is found</td></tr>}
                    </tbody>
                </table>
            </section>
        )
    }
}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.serialNo}</td>
            <td>{props.user}</td>
            <td>{props.createdAt}</td>
            <td onClick={props.handleDelete}>
                <img src={trashIcon} alt='Delete icon' id={props.serialNo}/>
            </td>
        </tr>
    )
}

export default Table