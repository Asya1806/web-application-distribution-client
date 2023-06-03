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
import { addSpecialty } from "../../../redux/api/specialty";

const AddSpecialty = (props) => {
  const dispatch = useDispatch();

  const [isValidBudgetSeats, setIsValidBudgetSeats] = React.useState(true);
  const [isValidPaidSeats, setIsValidPaidSeats] = React.useState(true);

  const [data, setData] = React.useState({
    spec_Id: props.specialty ? props.specialty.spec_Id : 0,
    specialtyName: props.specialty ? props.specialty.specialtyName : "",
    budgetSeats: props.specialty ? props.specialty.budgetSeats : 0,
    paidSeats: props.specialty ? props.specialty.paidSeats : 0,
  });

  const onChangeSpecialtyName = (e) => {
    setData({ ...data, specialtyName: e.target.value });
  };

  const onChangeBudgetSeats = (e) => {
    setData({ ...data, budgetSeats: e.target.value });
    setIsValidBudgetSeats(
      /^([0-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.target.value)
    );
  };

  const onChangePaidSeats = (e) => {
    setData({ ...data, paidSeats: e.target.value });
    setIsValidPaidSeats(
      /^([0-9]|[1-9][0-9]|1[0-9][0-9]|200)$/.test(e.target.value)
    );
  };

  const onClickButtonAddSpec = async (e) => {
    setModalSpec(false);

    e.preventDefault();
    const body = {
      specialtyName: data.specialtyName,
      budgetSeats: data.budgetSeats,
      paidSeats: data.paidSeats,
    };
    console.log(body);
    const fetchSpecialties = async () => {
      return await dispatch(addSpecialty(body));
    };
    fetchSpecialties().then((data) => {
      props.setIsUpdateSpec(!props.isUpdateSpec);
    });
  };

  const [modalSpec, setModalSpec] = React.useState(false);
  const toggleSpec = () => setModalSpec((modalSpec) => !modalSpec);

  const isNew = props._isNew;
  let titleSpec = "Редактирование специальности ";
  let button = "";
  if (isNew) {
    titleSpec = "Добавление специальности";
    button = (
      <Button
        color="success"
        onClick={toggleSpec}
        style={{ minWidth: "200px" }}
      >
        Добавить специальность
      </Button>
    );
  } else {
    button = (
      <Button color="warning" onClick={toggleSpec}>
        Изменить
      </Button>
    );
  }

  return (
    <Fragment>
      {button}
      <Modal isOpen={modalSpec} toggle={toggleSpec}>
        <ModalHeader toggle={toggleSpec}>{titleSpec}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="specialtyName">Название специальности:</Label>
              <Input
                required
                type="text"
                name="specialtyName"
                onChange={onChangeSpecialtyName}
                value={data.specialtyName === "" ? "" : data.specialtyName}
              />
            </FormGroup>

            <FormGroup>
              <Label for="testMath">Количество мест на бюджет:</Label>
              <Input
                invalid={!isValidBudgetSeats}
                valid={isValidBudgetSeats}
                type="number"
                min={0}
                max={100}
                onChange={onChangeBudgetSeats}
                value={data.budgetSeats === 0 ? 0 : data.budgetSeats}
              />
            </FormGroup>
            <FormGroup>
              <Label for="testPhys">Количество мест на платное:</Label>
              <Input
                invalid={!isValidPaidSeats}
                valid={isValidPaidSeats}
                type="number"
                min={0}
                max={100}
                onChange={onChangePaidSeats}
                value={data.paidSeats === 0 ? 0 : data.paidSeats}
              />
            </FormGroup>

            <FormGroup style={{ textAlign: "center" }}>
              <Button color="success" onClick={onClickButtonAddSpec}>
                Подтвердить
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default AddSpecialty;
