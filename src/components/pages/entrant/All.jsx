import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEntrant, getSortedEntrants } from "../../../redux/api/entrant";
import TableContainer from "@mui/material/TableContainer";
import { Button, Table, Col, Container, Row } from "reactstrap";
import {
  ApplicationForPaidInfo,
  CommissionDecisionInfo,
  GenderInfo,
  LangInUniverInfo,
  LocalitiesInfo,
  PassportSeriesInfo,
  SpecialtyInfo,
  TypeOfContestInfo,
  YesOrNoInfo,
} from "../../../function/func";
import AddEntrant from "./AddEntrant";
import EditEntrant from "./EditEntrant";
import AppHeader from "../../layout/AppHeader";
import DeleteConfirmation from "../DeleteConfirmation";

const All = (props) => {
  const dispatch = useDispatch();

  const [entrants, setEntrants] = useState([]);
  //.......Update..........................................
  const [isUpdate, setIsUpdate] = React.useState(false);
  function handleRefreshClick() {
    setIsUpdate(true);
  }
  //....Delete.............................................

  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  const showDeleteModal = (id) => {
    setId(id);
    setDeleteMessage(
      `Вы уверены, что хотитите удалить абитуриента '${
        entrants.find((x) => x.entrant_Id === id).lastName
      }'?`
    );
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = async (id) => {
    dispatch(deleteEntrant(id));
    setEntrants(entrants.filter((entrant) => entrant.entrant_Id !== id));
    handleRefreshClick();
    setDisplayConfirmationModal(false);
  };

  //.............................................................

  React.useEffect(() => {
    const fetchEntrants = async () => {
      return await dispatch(getSortedEntrants());
    };
    fetchEntrants().then((data) => setEntrants(data.payload));
  }, [isUpdate]);
  console.log(entrants);

  return (
    <>
      <AppHeader />
      <Container style={{ paddingTop: "30px" }}>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
              Список абитуриентов
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <TableContainer
              sx={{
                maxHeight: "450px",
              }}
            >
              <Table aria-label="sticky table" responsive hover>
                <thead className="table-dark">
                  <tr style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <th>№</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Пол</th>
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
                    <th>Медаль ДСО</th>
                    <th>Доп. подг.</th>
                    <th>Нас. пункт</th>
                    <th>Паспорт серия</th>
                    <th>Паспорт номер</th>
                    <th>Телефон</th>
                    <th style={{ textAlign: "center" }}>Решение комиссии</th>
                    <th style={{ textAlign: "center" }}>Действия</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {!entrants || entrants.length <= 0 ? (
                    <tr>
                      <td
                        colSpan="32"
                        align="left"
                        style={{ paddingLeft: "550px" }}
                      >
                        <b>Абитуриентов пока нет</b>
                      </td>
                    </tr>
                  ) : (
                    entrants.map((item) => (
                      <tr key={item.entrant_Id}>
                        <th scope="row">{item.entrant_Id}</th>
                        <td>{item.lastName}</td>
                        <td>{item.firstName}</td>
                        <td>{item.middleName}</td>
                        <td>
                          <GenderInfo id={item.gender_Id} />
                        </td>
                        <td>
                          <ApplicationForPaidInfo
                            id={item.applicationForPaid_Id}
                          />
                        </td>
                        <td>{item.testMath}</td>
                        <td>{item.testPhys}</td>
                        <td>{item.testLang}</td>
                        <td>{item.middleMark}</td>
                        <td>{item.sumOfPoints}</td>
                        <td>{item.markMath}</td>
                        <td>{item.markPhys}</td>
                        <td>
                          <TypeOfContestInfo id={item.typeOfСontest_Id} />
                        </td>
                        <td>
                          <SpecialtyInfo id={item.specialty1_Id} />
                        </td>
                        <td>
                          <SpecialtyInfo id={item.specialty2_Id} />
                        </td>
                        <td>
                          <SpecialtyInfo id={item.specialty3_Id} />
                        </td>
                        <td>
                          <SpecialtyInfo id={item.specialty4_Id} />
                        </td>
                        <td>
                          <SpecialtyInfo id={item.specialty5_Id} />
                        </td>
                        <td>
                          <SpecialtyInfo id={item.specialty6_Id} />
                        </td>
                        <td>{item.benefits_Id}</td>
                        <td>
                          <LangInUniverInfo id={item.langInUniver_Id} />
                        </td>
                        <td>
                          <YesOrNoInfo id={item._100IdeasForBelarus_Id} />
                        </td>
                        <td>
                          <YesOrNoInfo id={item.volunteer_Id} />
                        </td>
                        <td>
                          <YesOrNoInfo id={item.bryU_Id} />
                        </td>
                        <td>
                          <YesOrNoInfo id={item.medalDSO_Id} />
                        </td>
                        <td>{item.additionalTraining}</td>
                        <td>
                          <LocalitiesInfo id={item.locality_Id} />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <PassportSeriesInfo id={item.passportSeries_Id} />
                        </td>
                        <td>{item.passportNumber}</td>
                        <td>{item.phone}</td>
                        <td>
                          <CommissionDecisionInfo
                            id={item.commissionDecision_Id}
                          />
                        </td>
                        <td>
                          <div
                            style={{
                              display: "grid",
                              marginTop: 0,
                              marginRight: "0px",
                              marginLeft: "5%",
                              width: "100px",
                            }}
                          >
                            <div tag={Link}>
                              <EditEntrant
                                _isNew={false}
                                entrant={item}
                                setIsUpdate={(x) => setIsUpdate(x)}
                                isUpdate={isUpdate}
                              />
                            </div>
                            <Button
                              style={{ marginTop: "10px" }}
                              color="danger"
                              onClick={() => showDeleteModal(item.entrant_Id)}
                            >
                              Удалить
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <AddEntrant
              _isNew={true}
              setIsUpdateSpec={(x) => setIsUpdate(x)}
              isUpdateSpec={isUpdate}
            />
          </Col>
        </Row>
        <DeleteConfirmation
          showModal={displayConfirmationModal}
          confirmModal={submitDelete}
          hideModal={hideConfirmationModal}
          id={id}
          message={deleteMessage}
        />
      </Container>
    </>
  );
};

export default All;
