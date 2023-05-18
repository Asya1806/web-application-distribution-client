import React, { Component } from 'react';
import TableContainer from '@mui/material/TableContainer'
import { Table, Button } from 'reactstrap';
import AddEntrantModal from '../../modal/AddEntrantModal';
import { BASE_URL } from '../../../api';

class DataTable extends Component {
    deleteItem = id => {
        let confirmDeletion = window.confirm('Do you really wish to delete it?');
        if (confirmDeletion) {
            fetch(`${BASE_URL}/${id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    this.props.deleteItemFromState(id);
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        const items = this.props.items;
        return (
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" striped sx={{ width: '100%', overflow: 'hidden' }}>
                <thead className="thead-dark">
                        <tr style={{ textAlign: "center", verticalAlign: 'middle' }}> 
                        <th>Id</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Тест мат.</th>
                        <th>Тест физ.</th>
                        <th>Тест яз.</th>
                        <th>Ср. балл</th>
                        <th>Сумма баллов</th>
                        <th>Вид конкурса</th>
                        <th>Льготы</th>
                        <th style={{ textAlign: "center" }}>Решение комиссии</th>
                    </tr>
                </thead>
                <tbody>
                    {!items || items.length <= 0 ?
                        <tr>
                            <td colSpan="30" align="left" style={{paddingLeft: '550px'}}><b>Абитуриентов пока нет</b></td>
                        </tr>
                        : items.map(item => (
                            <tr key={item.id}>
                                <th scope="row">
                                    {item.id}
                                </th>
                                <td>
                                    {item.LastName}
                                </td>
                                <td>
                                    {item.FirstName}
                                </td>
                                <td>
                                    {item.MiddleName}
                                </td>
                                <td>
                                    {item.test_math}
                                </td>
                                <td>
                                    {item.test_phys}
                                </td>
                                <td>
                                    {item.test_lang}
                                </td>
                                <td>
                                    {item.middle_mark}
                                </td>
                                <td>
                                    {item.SumOfPoints}
                                </td>
                                <td>
                                    {item.type_of_contest}
                                </td>
                                <td>
                                    {item.Benefits}
                                </td>
                                <td>
                                    {item.commission_decision}
                                </td>
                                <td align="center">
                                    <div>
                                        <AddEntrantModal
                                            isNew={false}
                                            entrant={item}
                                            updateEntrantIntoState={this.props.updateState} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </TableContainer>);
    }
}
export default DataTable;