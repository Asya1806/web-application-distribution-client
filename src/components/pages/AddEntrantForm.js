import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { BASE_URL } from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Center from '../Center';
//import { ColumnInListOfEntrant } from 'D:\\4 курс\\Дипломный проект\\Жданова_диплом\\distribut-client\\src\\function\\func.js';

class AddEntrantForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
            id: 0,
            LastName: '',
            FirstName: '',
            MiddleName: '',
            gender: '',
            application_for_paid: '',
            test_math: '',
            test_phys: '',
            test_lang: '',
            middle_mark: '',
            SumOfPoints: '',
            MarkMath: '',
            MarkPhys: '',
            type_of_contest: '',
            specialty_1: '',
            specialty_2: '',
            specialty_3: '',
            specialty_4: '',
            specialty_5: '',
            specialty_6: '',
            Benefits: '',
            lang_in_univer: '',
            _100_ideas_for_belarus: '',
            volunteer: '',
            BRYU: '',
            medal_DSO: '',
            additional_training: '',
            locality: '',
            passport_series: '',
            passport_number: '',
            phone: '',
            commission_decision: ''
        
        }
    }

    componentDidMount() {
        if (this.props.entrant) {
            const { id,
                LastName,
                FirstName,
                MiddleName,
                gender,
                application_for_paid,
                test_math,
                test_phys,
                test_lang,
                middle_mark,
                SumOfPoints,
                MarkMath,
                MarkPhys,
                type_of_contest,
                specialty_1,
                specialty_2,
                specialty_3,
                specialty_4,
                specialty_5,
                specialty_6,
                Benefits,
                lang_in_univer,
                _100_ideas_for_belarus,
                volunteer,
                BRYU,
                medal_DSO,
                additional_training,
                locality,
                passport_series,
                passport_number,
                phone,
                commission_decision } = this.props.entrant
            this.setState({
                id, 
                LastName,
                FirstName,
                MiddleName,
                gender,
                application_for_paid,
                test_math,
                test_phys,
                test_lang,
                middle_mark,
                SumOfPoints,
                MarkMath,
                MarkPhys,
                type_of_contest,
                specialty_1,
                specialty_2,
                specialty_3,
                specialty_4,
                specialty_5,
                specialty_6,
                Benefits,
                lang_in_univer,
                _100_ideas_for_belarus,
                volunteer,
                BRYU,
                medal_DSO,
                additional_training,
                locality,
                passport_series,
                passport_number,
                phone,
                commission_decision });
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch(`${BASE_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                LastName: this.state.LastName,
                FirstName: this.state.FirstName,
                MiddleName: this.state.MiddleName,
                gender: this.state.gender,
                application_for_paid: this.state.gender,
                test_math: this.state.test_math,
                test_phys: this.state.test_phys,
                test_lang: this.state.test_lang,
                middle_mark: this.state.middle_mark,
                SumOfPoints: this.state.SumOfPoints,
                MarkMath: this.state.MarkMath,
                MarkPhys: this.state.MarkPhys,
                type_of_contest: this.state.type_of_contest,
                specialty_1: this.state.specialty_1,
                specialty_2: this.state.specialty_2,
                specialty_3: this.state.specialty_3,
                specialty_4: this.state.specialty_4,
                specialty_5: this.state.specialty_5,
                specialty_6: this.state.specialty_6,
                Benefits: this.state.Benefits,
                lang_in_univer: this.state.lang_in_univer,
                _100_ideas_for_belarus: this.state._100_ideas_for_belarus,
                volunteer: this.state.volunteer,
                BRYU: this.state.BRYU,
                medal_DSO: this.state.medal_DSO,
                additional_training: this.state.additional_training,
                locality: this.state.locality,
                passport_series: this.state.passport_series,
                passport_number: this.state.passport_number,
                phone: this.state.phone,
                commission_decision: this.state.commission_decision
            })
        })
            .then(res => res.json())
            .then(entrant => {
                this.props.addEntrantToState(entrant);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        fetch(`${BASE_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                LastName: this.state.LastName,
                FirstName: this.state.FirstName,
                MiddleName: this.state.MiddleName,
                gender: this.state.gender,
                application_for_paid: this.state.gender,
                test_math: this.state.test_math,
                test_phys: this.state.test_phys,
                test_lang: this.state.test_lang,
                middle_mark: this.state.middle_mark,
                SumOfPoints: this.state.SumOfPoints,
                MarkMath: this.state.MarkMath,
                MarkPhys: this.state.MarkPhys,
                type_of_contest: this.state.type_of_contest,
                specialty_1: this.state.specialty_1,
                specialty_2: this.state.specialty_2,
                specialty_3: this.state.specialty_3,
                specialty_4: this.state.specialty_4,
                specialty_5: this.state.specialty_5,
                specialty_6: this.state.specialty_6,
                Benefits: this.state.Benefits,
                lang_in_univer: this.state.lang_in_univer,
                _100_ideas_for_belarus: this.state._100_ideas_for_belarus,
                volunteer: this.state.volunteer,
                BRYU: this.state.BRYU,
                medal_DSO: this.state.medal_DSO,
                additional_training: this.state.additional_training,
                locality: this.state.locality,
                passport_series: this.state.passport_series,
                passport_number: this.state.passport_number,
                phone: this.state.phone,
                commission_decision: this.state.commission_decision
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateEntrantIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }
    
    findSumOfPoints = () => {
        let arr = document.getElementsByName('test');
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (parseInt(arr[i].value))
                sum += parseInt(arr[i].value);
        }
        document.getElementById('SumOfPoints').value = sum;
    } 
    
    render() {
        return (           
            <Form onSubmit={this.props.entrant ? this.submitEdit : this.submitNew}>
            {/* {ColumnInListOfEntrant('Пол', 'gender')}
            <script src="../function/func.js">ColumnInListOfEntrant('Пол', 'gender');</script> */}
            <FormGroup sx={{width: 300 }}>
                <Label for="LastName">Фамилия:</Label>
                <Input type="text" name="LastName" onChange={this.onChange} value={this.state.LastName === '' ? '' : this.state.LastName} />
            </FormGroup>
                <FormGroup>
                <Label for="FirstName">Имя:</Label>
                <Input type="text" name="FirstName" onChange={this.onChange} value={this.state.FirstName === '' ? '' : this.state.FirstName} />
            </FormGroup>
            <FormGroup class="col">
                <Label for="MiddleName">Отчество(если имеется):</Label>
                <Input type="text" name="MiddleName" onChange={this.onChange} value={this.state.MiddleName === '' ? '' : this.state.MiddleName} />
            </FormGroup>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" class="high--dark">Пол:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="male"
                >
                    <FormControlLabel value="male" control={<Radio />} label="Мужчина" />
                    <FormControlLabel value="female" control={<Radio />} label="Женщина" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" class="high--dark">Заявление на платное/бюджет:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="budget"
                    >
                    <FormControlLabel value="budget" control={<Radio />} label="Бюджет" />
                    <FormControlLabel value="paid" control={<Radio />} label="Платное" />
                </RadioGroup>
            </FormControl>
            <FormGroup>
                    <Label for="test_math">Тест математика:</Label>
                    <Input onInput={this.findSumOfPoints} type="number" name="test" 
                        min='0'
                        max='100'
                    />
            </FormGroup>
            <FormGroup>
                    <Label for="test_phys">Тест физика:</Label>
                    <Input onInput={this.findSumOfPoints} type="number" name="test" 
                    // value={this.value1}
                        
                        min='0'
                        max='100'
                    />
            </FormGroup>
            <FormGroup>
                    <Label for="test_lang">Тест язык:</Label>
                    <Input onInput={this.findSumOfPoints}
                        type="number" 
                        name="test" 
                        min='0'
                        max='100'
                    />
            </FormGroup>
            <FormGroup>
                    <Label for="middle_mark" >Средний балл:</Label>
                    <Input onInput={this.findSumOfPoints}
                    type="number" 
                    name="test" 
                    
                        min='0'
                        max='100'
                    />
            </FormGroup>
            ////////////////////////////////////////////////////////////////////////////////////
            <FormGroup>
                    <Label for="SumOfPoints">Сумма баллов:</Label>
                    <Input type="number" name="SumOfPoints" id="SumOfPoints" min='0' 
                        max='400' />
            </FormGroup>
            ////////////////////////////////////////////////////////////////////////////////////
            <FormGroup>
                    <Label for="MarkMath">Оценка по математике в аттестате:</Label>
                    <Input type="number"
                        name="MarkMath"
                        onChange={this.onChange}
                        value={this.state.MarkMath === null ? '' : this.state.MarkMath}
                        min='0'
                        max='10'
                    />
            </FormGroup>
            <FormGroup>
                    <Label for="MarkPhys">Оценка по физике в аттестате:</Label>
                    <Input type="number" 
                        name="MarkPhys" 
                        onChange={this.onChange} 
                        value={this.state.MarkPhys === null ? '' : this.state.MarkPhys} 
                        min='0'
                        max='10'
                    />
            </FormGroup>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" class="high--dark">Вид конкурса:</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="by_competition">
                        <FormControlLabel value="target_direction" control={<Radio />} label="Целевое направление" />
                        <FormControlLabel value="by_competition" control={<Radio />} label="По конкурсу" />
                        <FormControlLabel value="without_entrance_tests" control={<Radio />} label="Без вступительных испытаний" />
                        <FormControlLabel value="out_of_competition" control={<Radio />} label="Вне конкурса" />
                </RadioGroup>
            </FormControl>
            <FormGroup>
                    <Label for="specialty_1">Специальность 1-я:</Label>
                    <Input type="text" name="specialty_1" onChange={this.onChange} value={this.state.specialty_1 === null ? '' : this.state.specialty_1} />
            </FormGroup>
            <FormGroup>
                    <Label for="specialty_2">Специальность 2-я:</Label>
                    <Input type="text" name="specialty_2" onChange={this.onChange} value={this.state.specialty_2 === null ? '' : this.state.specialty_2} />
            </FormGroup>
            <FormGroup>
                    <Label for="specialty_3">Специальность 3-я:</Label>
                    <Input type="text" name="specialty_3" onChange={this.onChange} value={this.state.specialty_3 === null ? '' : this.state.specialty_3} />
            </FormGroup>
            <FormGroup>
                    <Label for="specialty_4">Специальность 4-я:</Label>
                    <Input type="text" name="specialty_4" onChange={this.onChange} value={this.state.specialty_4 === null ? '' : this.state.specialty_4} />
            </FormGroup>
            <FormGroup>
                    <Label for="specialty_5">Специальность 5-я:</Label>
                    <Input type="text" name="specialty_5" onChange={this.onChange} value={this.state.specialty_5 === null ? '' : this.state.specialty_5} />
            </FormGroup>
            <FormGroup>
                    <Label for="specialty_6">Специальность 6-я:</Label>
                    <Input type="text" name="specialty_6" onChange={this.onChange} value={this.state.specialty_6 === null ? '' : this.state.specialty_6} />
            </FormGroup>
            <FormGroup>
                    <Label for="Benefits">Льготы:</Label>
                    <Input type="text" name="Benefits" onChange={this.onChange} value={this.state.Benefits === null ? '' : this.state.Benefits} />
            </FormGroup>
            <FormGroup>
                    <Label for="lang_in_univer">Язык в университете:</Label>
                    <Input type="text" name="lang_in_univer" onChange={this.onChange} value={this.state.lang_in_univer === null ? '' : this.state.lang_in_univer} />
            </FormGroup>
            <FormGroup>
                    <Label for="_100_ideas_for_belarus">100 идей для Беларуси:</Label>
                    <Input type="text" name="_100_ideas_for_belarus" onChange={this.onChange} value={this.state._100_ideas_for_belarus === null ? '' : this.state._100_ideas_for_belarus} />
            </FormGroup>
            <FormGroup>
                    <Label for="_100_ideas_fvolunteeror_belarus">Волонтер:</Label>
                    <Input type="text" name="volunteer" onChange={this.onChange} value={this.state.volunteer === null ? '' : this.state.volunteer} />
            </FormGroup>
            <FormGroup>
                    <Label for="BRYU">БРСМ:</Label>
                    <Input type="text" name="BRYU" onChange={this.onChange} value={this.state.BRYU === null ? '' : this.state.BRYU} />
            </FormGroup>
            <FormGroup>
                    <Label for="medal_DSO">Медаль ДСО:</Label>
                    <Input type="text" name="medal_DSO" onChange={this.onChange} value={this.state.medal_DSO === null ? '' : this.state.medal_DSO} />
            </FormGroup>
            <FormGroup>
                    <Label for="additional_training">Доп. подг.:</Label>
                    <Input type="text" name="additional_training" onChange={this.onChange} value={this.state.additional_training === null ? '' : this.state.additional_training} />
            </FormGroup>
            <FormGroup>
                    <Label for="locality">Нас. пункт:</Label>
                    <Input type="text" name="locality" onChange={this.onChange} value={this.state.locality === null ? '' : this.state.locality} />
            </FormGroup>
            <FormGroup>
                    <Label for="passport_series">Паспорт серия:</Label>
                    <Input type="text" name="passport_series" onChange={this.onChange} value={this.state.passport_series === null ? '' : this.state.passport_series} />
            </FormGroup>
            <FormGroup>
                    <Label for="passport_number">Паспорт номер:</Label>
                    <Input type="text" name="passport_number" onChange={this.onChange} value={this.state.passport_number === null ? '' : this.state.passport_number} />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Телефон:</Label>
                <Input type="text" name="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone}
                    placeholder="+375 (99) 999-99-99" />
            </FormGroup>
            {/* <FormGroup>
                    <Label for="commission_decision">Решение комиссии:</Label>
                    <Input type="text" name="commission_decision" onChange={this.onChange} value={this.state.commission_decision === null ? '' : this.state.commission_decision} />
            </FormGroup> */}
                
   
            {/* {function findSumOfPoints(){
                    var arr = document.getElementsByName('test');
                var sum=0;
                for(var i=0;i<arr.length;i++){
                    if(parseInt(arr[i].value))
                        sum += parseInt(arr[i].value);
                }
                document.getElementById('SumOfPoints').value = sum;
            }   }         */}
            <Button style={{marginLeft: '29%'}}color='success'>Добавить абитуриента</Button>    
            
        </Form>);
    }
}
export default AddEntrantForm;