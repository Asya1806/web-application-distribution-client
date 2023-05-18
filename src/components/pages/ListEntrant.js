import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import AddEntrantModal from '../modal/AddEntrantModal';
import { BASE_URL } from '../../api';


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
        return <Table striped>
            <thead className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Заявление</th>
                    <th>Тест мат.</th>
                    <th>Тест физ.</th>
                    <th>Тест яз.</th>
                    <th>Ср. балл</th>
                    <th>Сумма баллов</th>
                    <th>Оценка по мат. </th>
                    <th>Оценка по физ.</th>
                    <th>Вид конкурса</th>
                    <th>Специальность 1-я</th>
                    <th>Специальность 2-я</th>
                    <th>Специальность 3-я</th>
                    <th>Специальность 4-я</th>
                    <th>Специальность 5-я</th>
                    <th>Специальность 6-я</th>
                    <th>Льготы</th>
                    <th>Язык в университете</th>
                    <th>100 идей для Беларуси</th>
                    <th>Волонтер</th>
                    <th>БРСМ</th>
                    <th>Доп. подг.</th>
                    <th>Нас. пункт</th>
                    <th>Паспорт серия</th>
                    <th>Паспорт номер</th>
                    <th>Телефон</th>
                    <th style={{ textAlign: "center" }}>Решение комиссии</th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0 ?
                    <tr>
                        <td colSpan="30" align="center"><b>No Entrants yet</b></td>
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
                                {item.gender}
                            </td>
                            <td>
                                {item.application_for_paid}
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
                                {item.MarkMath}
                            </td>
                            <td>
                                {item.MarkPhys}
                            </td>
                            <td>
                                {item.type_of_contest}
                            </td>
                            <td>
                                {item.specialty_1}
                            </td>
                            <td>
                                {item.specialty_2}
                            </td>
                            <td>
                                {item.specialty_3}
                            </td>
                            <td>
                                {item.specialty_4}
                            </td>
                            <td>
                                {item.specialty_5}
                            </td>
                            <td>
                                {item.specialty_6}
                            </td>
                            <td>
                                {item.lang_in_univer}
                            </td>
                            <td>
                                {item._100_ideas_for_belarus}
                            </td>
                            <td>
                                {item.volunteer}
                            </td>
                            <td>
                                {item.BRYU}
                            </td>
                            <td>
                                {item.medal_DSO}
                            </td>
                            <td>
                                {item.additional_training}
                            </td>
                            <td>
                                {item.locality}
                            </td>
                            <td>
                                {item.passport_series}
                            </td>
                            <td>
                                {item.passport_number}
                            </td>
                            <td>
                                {item.phone}
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
        </Table>;
    }
}
export default DataTable;