import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { addEntrant } from "../../../redux/api/entrant";

function AddEntrant(props) {
  const dispatch = useDispatch();

  const [isValidLastName, setIsValidLastName] = React.useState(true);
  const [isValidFirstName, setIsValidFirstName] = React.useState(true);
  const [isValidMiddleName, setIsValidMiddleName] = React.useState(true);
  const [isValidTestMath, setIsValidTestMath] = React.useState(true);
  const [isValidTestPhys, setIsValidTestPhys] = React.useState(true);
  const [isValidTestLang, setIsValidTestLang] = React.useState(true);
  const [isValidMiddleMark, setIsValidMiddleMark] = React.useState(true);
  const [isValidSumOfPoints, setIsValidSumOfPoints] = React.useState(true);
  const [isValidMarkMath, setIsValidMarkMath] = React.useState(true);
  const [isValidMarkPhys, setIsValidMarkPhys] = React.useState(true);
  const [isValidAdditionalTraining, setIsValidAdditionalTraining] =
    React.useState(true);

  const [data, setData] = React.useState({
    entrant_Id: props.entrant ? props.entrant.entrant_Id : 0,
    lastName: props.entrant ? props.entrant.lastName : "",
    firstName: props.entrant ? props.entrant.firstName : "",
    middleName: props.entrant ? props.entrant.middleName : "",
    gender_Id: props.entrant ? props.entrant.gender_Id : 1,
    applicationForPaid_Id: props.entrant
      ? props.entrant.applicationForPaid_Id
      : 1,
    testMath: props.entrant ? props.entrant.testMath : 0,
    testPhys: props.entrant ? props.entrant.testPhys : 0,
    testLang: props.entrant ? props.entrant.testLang : 0,
    middleMark: props.entrant ? props.entrant.middleMark : 0,
    sumOfPoints: props.entrant ? props.entrant.sumOfPoints : 0,
    markMath: props.entrant ? props.entrant.markMath : 0,
    markPhys: props.entrant ? props.entrant.markPhys : 0,
    typeOfСontest_Id: props.entrant ? props.entrant.typeOfСontest_Id : 4,
    specialty1_Id: props.entrant ? props.entrant.specialty1_Id : 1,
    specialty2_Id: props.entrant ? props.entrant.specialty2_Id : 2,
    specialty3_Id: props.entrant ? props.entrant.specialty3_Id : 3,
    specialty4_Id: props.entrant ? props.entrant.specialty4_Id : 4,
    specialty5_Id: props.entrant ? props.entrant.specialty5_Id : 5,
    specialty6_Id: props.entrant ? props.entrant.specialty6_Id : 6,
    benefits_Id: props.entrant ? props.entrant.benefits_Id : 1,
    langInUniver_Id: props.entrant ? props.entrant.langInUniver_Id : 1,
    _100IdeasForBelarus_Id: props.entrant
      ? props.entrant._100IdeasForBelarus_Id
      : 1,
    volunteer_Id: props.entrant ? props.entrant.volunteer_Id : 1,
    bryU_Id: props.entrant ? props.entrant.bryU_Id : 1,
    medalDSO_Id: props.entrant ? props.entrant.medalDSO_Id : 1,
    additionalTraining: props.entrant ? props.entrant.additionalTraining : 0,
    locality_Id: props.entrant ? props.entrant.locality_Id : 1,
    passportSeries_Id: props.entrant ? props.entrant.passportSeries_Id : 11,
    passportNumber: props.entrant ? props.entrant.passportNumber : "",
    phone: props.entrant ? props.entrant.phone : "",
    commissionDecision_Id: props.entrant
      ? props.entrant.commissionDecision_Id
      : 1,
  });

  const onChangeLastName = (e) => {
    setData({ ...data, lastName: e.target.value });
    setIsValidLastName(/^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}$/.test(e.target.value));
  };
  const onChangeFirstName = (e) => {
    setData({ ...data, firstName: e.target.value });
    setIsValidFirstName(/^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}$/.test(e.target.value));
  };
  const onChangeMiddleName = (e) => {
    setData({ ...data, middleName: e.target.value });
    setIsValidMiddleName(/^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}$/.test(e.target.value));
  };
  const onChangeGender = (e) => {
    setData({ ...data, gender_Id: e.target.value });
  };
  const onChangeApplicationForPaid = (e) => {
    setData({ ...data, applicationForPaid_Id: e.target.value });
  };
  const onChangeTestMath = (e) => {
    setData({ ...data, testMath: e.target.value });
    setIsValidTestMath(/^(0|[1-9][0-9]?|100)$/.test(e.target.value));
  };
  const onChangeTestPhys = (e) => {
    setData({ ...data, testPhys: e.target.value });
    setIsValidTestPhys(/^(0|[1-9][0-9]?|100)$/.test(e.target.value));
  };
  const onChangeTestLang = (e) => {
    setData({ ...data, testLang: e.target.value });
    setIsValidTestLang(/^(0|[1-9][0-9]?|100)$/.test(e.target.value));
  };
  const onChangeMiddleMark = (e) => {
    setData({ ...data, middleMark: e.target.value });
    setIsValidMiddleMark(/^(0|[1-9][0-9]?|100)$/.test(e.target.value));
  };
  const onChangeSumOfPoints = (e) => {
    setData({ ...data, sumOfPoints: e.target.value });
    setIsValidSumOfPoints(
      /^([0-9]|[1-9][0-9]|[1-3][0-9][0-9]|400)$/.test(e.target.value)
    );
  };
  const onChangeMarkMath = (e) => {
    setData({ ...data, markMath: e.target.value });
    setIsValidMarkMath(/^([0-9]|10)$/.test(e.target.value));
  };
  const onChangeMarkPhys = (e) => {
    setData({ ...data, markPhys: e.target.value });
    setIsValidMarkPhys(/^([0-9]|10)$/.test(e.target.value));
  };
  const onChangeTypeOfContest = (e) => {
    setData({ ...data, typeOfСontest_Id: e.target.value });
  };
  const onChangeSpecialty1_Id = (e) => {
    setData({ ...data, specialty1_Id: e.target.value });
  };
  const onChangeSpecialty2_Id = (e) => {
    setData({ ...data, specialty2_Id: e.target.value });
  };
  const onChangeSpecialty3_Id = (e) => {
    setData({ ...data, specialty3_Id: e.target.value });
  };
  const onChangeSpecialty4_Id = (e) => {
    setData({ ...data, specialty4_Id: e.target.value });
  };
  const onChangeSpecialty5_Id = (e) => {
    setData({ ...data, specialty5_Id: e.target.value });
  };
  const onChangeSpecialty6_Id = (e) => {
    setData({ ...data, specialty6_Id: e.target.value });
  };
  const onChangeBenefits_Id = (e) => {
    setData({ ...data, benefits_Id: e.target.value });
  };
  const onChangeLangInUniver_Id = (e) => {
    setData({ ...data, langInUniver_Id: e.target.value });
  };
  const onChange_100IdeasForBelarus_Id = (e) => {
    setData({ ...data, _100IdeasForBelarus_Id: e.target.value });
  };
  const onChangeVolunteer_Id = (e) => {
    setData({ ...data, volunteer_Id: e.target.value });
  };
  const onChangeBRYU_Id = (e) => {
    setData({ ...data, bryU_Id: e.target.value });
  };
  const onChangeMedalDSO_Id = (e) => {
    setData({ ...data, medalDSO_Id: e.target.value });
  };
  const onChangeAdditionalTraining = (e) => {
    setData({ ...data, additionalTraining: e.target.value });
    setIsValidAdditionalTraining(/^([0-9]|1[0-9]|20)$/.test(e.target.value));
  };
  const onChangeLocality_Id = (e) => {
    setData({ ...data, locality_Id: e.target.value });
  };
  const onChangePassportSeries_Id = (e) => {
    setData({ ...data, passportSeries_Id: e.target.value });
  };
  const onChangePassportNumber = (e) => {
    setData({ ...data, passportNumber: e.target.value });
  };
  const onChangePhone = (e) => {
    setData({ ...data, phone: e.target.value });
  };
  const onChangeCommissionDecision_Id = (e) => {
    setData({ ...data, commissionDecision_Id: e.target.value });
  };

  const onClickButtonAdd = async (e) => {
    setModal(false);

    e.preventDefault();
    const body = {
      lastName: data.lastName,
      firstName: data.firstName,
      middleName: data.middleName,
      gender_Id: data.gender_Id,
      applicationForPaid_Id: data.applicationForPaid_Id,
      testMath: data.testMath,
      testPhys: data.testPhys,
      testLang: data.testLang,
      middleMark: data.middleMark,
      sumOfPoints: data.sumOfPoints,
      markMath: data.markMath,
      markPhys: data.markPhys,
      typeOfСontest_Id: data.typeOfСontest_Id,
      specialty1_Id: data.specialty1_Id,
      specialty2_Id: data.specialty2_Id,
      specialty3_Id: data.specialty3_Id,
      specialty4_Id: data.specialty4_Id,
      specialty5_Id: data.specialty5_Id,
      specialty6_Id: data.specialty6_Id,
      benefits_Id: data.benefits_Id,
      langInUniver_Id: data.langInUniver_Id,
      _100IdeasForBelarus_Id: data._100IdeasForBelarus_Id,
      volunteer_Id: data.volunteer_Id,
      bryU_Id: data.bryU_Id,
      medalDSO_Id: data.medalDSO_Id,
      additionalTraining: data.additionalTraining,
      locality_Id: data.locality_Id,
      passportSeries_Id: data.passportSeries_Id,
      passportNumber: data.passportNumber,
      phone: data.phone,
      commissionDecision_Id: data.commissionDecision_Id,
    };
    console.log(body);
    const fetchSpecialties = async () => {
      return await dispatch(addEntrant(body));
    };
    fetchSpecialties().then((data) => {
      props.setIsUpdateSpec(!props.isUpdateSpec);
    });
  };

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal((modal) => !modal);

  const isNew = props._isNew;
  let title = "Редактирование абитуриента ";
  let button = "";
  if (isNew) {
    title = "Добавление абитуриента";
    button = (
      <Button color="success" onClick={toggle} style={{ minWidth: "200px" }}>
        Добавить абитуриента
      </Button>
    );
  } else {
    button = (
      <Button color="warning" onClick={toggle}>
        Изменить
      </Button>
    );
  }

  return (
    <Fragment>
      {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="LastName">Фамилия:</Label>
              <Input
                invalid={!isValidLastName}
                valid={isValidLastName}
                required
                type="text"
                name="LastName"
                onChange={onChangeLastName}
                value={data.lastName === "" ? "" : data.lastName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="FirstName">Имя:</Label>
              <Input
                invalid={!isValidFirstName}
                valid={isValidFirstName}
                type="text"
                name="FirstName"
                onChange={onChangeFirstName}
                value={data.firstName === "" ? "" : data.firstName}
              />
            </FormGroup>
            <FormGroup class="col">
              <Label for="MiddleName">Отчество(если имеется):</Label>
              <Input
                invalid={!isValidMiddleName}
                valid={isValidMiddleName}
                type="text"
                name="MiddleName"
                onChange={onChangeMiddleName}
                value={data.middleName === "" ? "" : data.middleName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="gender_Id">Пол:</Label>
              <Input
                type="select"
                name="gender_Id"
                onChange={onChangeGender}
                value={data.gender_Id === 0 ? 1 : data.gender_Id}
              >
                <option value={1} label="Мужчина" />
                <option value={2} label="Женщина" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="gender_Id">Пол:</Label>
              <Input
                type="number"
                name="gender_Id"
                onChange={onChangeGender}
                value={data.gender_Id === 0 ? 1 : data.gender_Id}
              >
                <option value={1} label="Мужчина" />
                <option value={2} label="Женщина" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="applicationForPaid_Id">
                Заявление на платное/бюджет:
              </Label>
              <Input
                type="select"
                name="applicationForPaid_Id"
                onChange={onChangeApplicationForPaid}
                value={
                  data.applicationForPaid_Id === 0
                    ? 1
                    : data.applicationForPaid_Id
                }
              >
                <option value={1} label="Бюджет" />
                <option value={2} label="Платное" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="testMath">Тест математика:</Label>
              <Input
                invalid={!isValidTestMath}
                valid={isValidTestMath}
                type="number"
                min={0}
                max={100}
                onChange={onChangeTestMath}
                value={data.testMath === 0 ? 0 : data.testMath}
              />
            </FormGroup>
            <FormGroup>
              <Label for="testPhys">Тест физика:</Label>
              <Input
                invalid={!isValidTestPhys}
                valid={isValidTestPhys}
                type="number"
                min={0}
                max={100}
                onChange={onChangeTestPhys}
                value={data.testPhys === 0 ? 0 : data.testPhys}
              />
            </FormGroup>
            <FormGroup>
              <Label for="testLang">Тест язык:</Label>
              <Input
                invalid={!isValidTestLang}
                valid={isValidTestLang}
                type="number"
                min={0}
                max={100}
                onChange={onChangeTestLang}
                value={data.testLang === 0 ? 0 : data.testLang}
              />
            </FormGroup>
            <FormGroup>
              <Label for="middle_mark">Средний балл:</Label>
              <Input
                invalid={!isValidMiddleMark}
                valid={isValidMiddleMark}
                type="number"
                min={0}
                max={100}
                onChange={onChangeMiddleMark}
                value={data.middleMark === 0 ? 0 : data.middleMark}
              />
            </FormGroup>
            <FormGroup>
              <Label for="sumOfPoints">Сумма баллов:</Label>
              <Input
                disabled
                invalid={!isValidSumOfPoints}
                valid={isValidSumOfPoints}
                type="number"
                name="sumOfPoints"
                id="sumOfPoints"
                min="0"
                max="400"
                onChange={onChangeSumOfPoints}
                value={
                  data.sumOfPoints === 0
                    ? parseInt(data.testMath) +
                      parseInt(data.testPhys) +
                      parseInt(data.testLang) +
                      parseInt(data.middleMark)
                    : data.sumOfPoints
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="markMath">Оценка по математике в аттестате:</Label>
              <Input
                invalid={!isValidMarkMath}
                valid={isValidMarkMath}
                type="number"
                name="markMath"
                min={0}
                max={10}
                onChange={onChangeMarkMath}
                value={data.markMath === null ? "" : data.markMath}
              />
            </FormGroup>
            <FormGroup>
              <Label for="markPhys">Оценка по физике в аттестате:</Label>
              <Input
                invalid={!isValidMarkPhys}
                valid={isValidMarkPhys}
                type="number"
                name="markPhys"
                min={0}
                max={10}
                onChange={onChangeMarkPhys}
                value={data.markPhys === null ? "" : data.markPhys}
              />
            </FormGroup>
            <FormGroup>
              <Label for="typeOfСontest_Id">Вид конкурса:</Label>
              <Input
                type="select"
                name="typeOfСontest_Id"
                onChange={onChangeTypeOfContest}
                // defaultValue={1}
                value={data.typeOfСontest_Id === 0 ? 4 : data.typeOfСontest_Id}
              >
                <option value={1} label="Целевое направление" />
                <option value={2} label="Без вступительных испытаний" />
                <option value={3} label="Вне конкурса" />
                <option value={4} label="По конкурсу" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialty1_Id">Специальность 1-я:</Label>
              <Input
                type="select"
                name="specialty1_Id"
                onChange={onChangeSpecialty1_Id}
                value={data.specialty1_Id === 0 ? 1 : data.specialty1_Id}
              >
                <option value={1}>400101</option>
                <option value={2}>400501-04</option>
                <option value={3}>400501-01</option>
                <option value={4}>530106</option>
                <option value={5}>530101</option>
                <option value={6}>530105</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialty2_Id">Специальность 2-я:</Label>
              <Input
                type="select"
                name="specialty2_Id"
                onChange={onChangeSpecialty2_Id}
                value={data.specialty2_Id === 0 ? 1 : data.specialty2_Id}
              >
                <option value={1}>400101</option>
                <option value={2}>400501-04</option>
                <option value={3}>400501-01</option>
                <option value={4}>530106</option>
                <option value={5}>530101</option>
                <option value={6}>530105</option>
                <option value={7}>-</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialty3_Id">Специальность 3-я:</Label>
              <Input
                type="select"
                name="specialty3_Id"
                onChange={onChangeSpecialty3_Id}
                value={data.specialty3_Id === 0 ? 1 : data.specialty3_Id}
              >
                <option value={1}>400101</option>
                <option value={2}>400501-04</option>
                <option value={3}>400501-01</option>
                <option value={4}>530106</option>
                <option value={5}>530101</option>
                <option value={6}>530105</option>
                <option value={7}>-</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialty4_Id">Специальность 4-я:</Label>
              <Input
                type="select"
                name="specialty4_Id"
                onChange={onChangeSpecialty4_Id}
                value={data.specialty4_Id === 0 ? 1 : data.specialty4_Id}
              >
                <option value={1}>400101</option>
                <option value={2}>400501-04</option>
                <option value={3}>400501-01</option>
                <option value={4}>530106</option>
                <option value={5}>530101</option>
                <option value={6}>530105</option>
                <option value={7}>-</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialty5_Id">Специальность 5-я:</Label>
              <Input
                type="select"
                name="specialty5_Id"
                onChange={onChangeSpecialty5_Id}
                value={data.specialty5_Id === 0 ? 1 : data.specialty5_Id}
              >
                <option value={1}>400101</option>
                <option value={2}>400501-04</option>
                <option value={3}>400501-01</option>
                <option value={4}>530106</option>
                <option value={5}>530101</option>
                <option value={6}>530105</option>
                <option value={7}>-</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="specialty6_Id">Специальность 6-я:</Label>
              <Input
                type="select"
                name="specialty6_Id"
                onChange={onChangeSpecialty6_Id}
                value={data.specialty6_Id === null ? null : data.specialty6_Id}
              >
                <option value={1}>400101</option>
                <option value={2}>400501-04</option>
                <option value={3}>400501-01</option>
                <option value={4}>530106</option>
                <option value={5}>530101</option>
                <option value={6}>530105</option>
                <option value={7}>-</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="benefits_Id">Льготы:</Label>
              <Input
                type="select"
                name="benefits_Id"
                onChange={onChangeBenefits_Id}
                value={data.benefits_Id === 0 ? 1 : data.benefits_Id}
              >
                <option value={1} label="Нет" />
                <option value={2} label="п. 24" />
                <option value={3} label="п. 26.1" />
                <option value={4} label="п. 27.1" />
                <option value={5} label="п.27.1 п.27.2" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="langInUniver_Id">Язык в университете:</Label>
              <Input
                type="select"
                name="langInUniver_Id"
                onChange={onChangeLangInUniver_Id}
                value={data.langInUniver_Id === 0 ? 1 : data.langInUniver_Id}
              >
                <option value={1} label="Английский" />
                <option value={2} label="Немецкий" />
                <option value={3} label="Французский" />
                <option value={4} label="Испанский" />
                <option value={5} label="Китайский" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="_100IdeasForBelarus_Id">100 идей для Беларуси:</Label>
              <Input
                type="select"
                name="_100IdeasForBelarus_Id"
                onChange={onChange_100IdeasForBelarus_Id}
                value={
                  data._100IdeasForBelarus_Id === 0
                    ? 1
                    : data._100IdeasForBelarus_Id
                }
              >
                <option value={1} label="Нет" />
                <option value={2} label="Да" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="volunteer_Id">Волонтер:</Label>
              <Input
                type="select"
                name="volunteer_Id"
                onChange={onChangeVolunteer_Id}
                value={data.volunteer_Id === 0 ? 1 : data.volunteer_Id}
              >
                <option value={1} label="Нет" />
                <option value={2} label="Да" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="bryU_Id">БРСМ:</Label>
              <Input
                type="select"
                name="bryU_Id"
                onChange={onChangeBRYU_Id}
                value={data.bryU_Id === 0 ? 1 : data.bryU_Id}
              >
                <option value={1} label="Нет" />
                <option value={2} label="Да" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="medalDSO_Id">Медаль ДСО:</Label>
              <Input
                type="select"
                name="medalDSO_Id"
                onChange={onChangeMedalDSO_Id}
                value={data.medalDSO_Id === 0 ? 1 : data.medalDSO_Id}
              >
                <option value={1} label="Нет" />
                <option value={2} label="Да" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="additionalTraining">Доп. подг.(количество):</Label>
              <Input
                invalid={!isValidAdditionalTraining}
                valid={isValidAdditionalTraining}
                type="number"
                name="additionalTraining"
                min={0}
                max={20}
                onChange={onChangeAdditionalTraining}
                value={
                  data.additionalTraining === null
                    ? ""
                    : data.additionalTraining
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="locality_Id">Населенный пункт:</Label>
              <Input
                type="select"
                name="locality_Id"
                onChange={onChangeLocality_Id}
                value={data.locality_Id === 0 ? 1 : data.locality_Id}
              >
                <option value={1} label="Минск" />
                <option value={2} label="Иногородний" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="passportSeries_Id">Паспорт серия:</Label>
              <Input
                type="select"
                name="passportSeries_Id"
                onChange={onChangePassportSeries_Id}
                value={
                  data.passportSeries_Id === 0 ? 11 : data.passportSeries_Id
                }
              >
                <option value={1} label="АВ" />
                <option value={2} label="BM" />
                <option value={3} label="HB" />
                <option value={4} label="KH" />
                <option value={5} label="MP" />
                <option value={6} label="MC" />
                <option value={7} label="KB" />
                <option value={8} label="PP" />
                <option value={9} label="SP" />
                <option value={10} label="DP" />
                <option value={11} label="Нет" />
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="passportNumber">Паспорт номер:</Label>
              <Input
                type="text"
                name="passportNumber"
                onChange={onChangePassportNumber}
                value={data.passportNumber === null ? "" : data.passportNumber}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Телефон:</Label>
              <Input
                type="text"
                name="phone"
                onChange={onChangePhone}
                value={data.phone === null ? "" : data.phone}
                placeholder="+375 (99) 999-99-99"
              />
            </FormGroup>
            <FormGroup disabled>
              <Label for="commissionDecision_Id">Решение комиссии:</Label>
              <Input
                disabled
                type="select"
                name="commissionDecision_Id"
                onChange={onChangeCommissionDecision_Id}
                value={
                  data.commissionDecision_Id === 0
                    ? 1
                    : data.commissionDecision_Id
                }
              >
                <option value={1} label="Зачислить" />
                <option value={2} label="Не зачислить" />
              </Input>
            </FormGroup>
            <FormGroup style={{ textAlign: "center" }}>
              <Button color="success" onClick={onClickButtonAdd}>
                Подтвердить
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

export default AddEntrant;
