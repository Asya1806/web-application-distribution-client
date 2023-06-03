import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import { Button, Table, Col, Container, Row } from "reactstrap";
import {
  deleteSpecialty,
  getAllSpecialties,
} from "../../../redux/api/specialty";
import AppHeader from "../../layout/AppHeader";
import AddSpecialty from "./AddSpecialty";
import EditSpecialty from "./EditSpecialty.jsx";
import DeleteConfirmation from "../DeleteConfirmation";

const AllSpecialties = (props) => {
  const dispatch = useDispatch();
  const [specialties, setSpecialties] = useState([]);
  //.......Update..........................................
  const [isUpdateSpec, setIsUpdateSpec] = React.useState(false);

  function handleRefreshClick() {
    setIsUpdateSpec(true);
  }
  //......Delete..........................................

  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  const showDeleteModal = (id) => {
    setId(id);
    setDeleteMessage(
      `Вы уверены, что хотитите удалить специальность '${
        specialties.find((x) => x.spec_Id === id).specialtyName
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
    dispatch(deleteSpecialty(id));
    setSpecialties(specialties.filter((specialty) => specialty.spec_Id !== id));
    handleRefreshClick();
    setDisplayConfirmationModal(false);
  };

  //....................................................

  React.useEffect(() => {
    const fetchSpecialties = async () => {
      return await dispatch(getAllSpecialties());
    };
    fetchSpecialties().then((data) => setSpecialties(data.payload));
  }, [isUpdateSpec]);
  console.log(specialties);

  return (
    <>
      <AppHeader />
      <Container
        style={{
          paddingTop: "30px",
          textAlign: "center",
        }}
      >
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
              Список специальностей
            </h3>
          </Col>
        </Row>
        <Row align="center">
          <Col>
            <TableContainer
              align="center"
              sx={{
                maxHeight: "450px",
                maxWidth: "800px",
              }}
            >
              <Table aria-label="sticky table" responsive hover>
                <thead className="table-dark ">
                  <tr style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <th>№</th>
                    <th>Название</th>
                    <th>Количество мест на бюджет</th>
                    <th>Количество мест на платное</th>
                    <th style={{ textAlign: "center" }}>Действия</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {!specialties || specialties.length <= 0 ? (
                    <tr>
                      <td colSpan="5" align="center">
                        <b>Специальностей пока нет</b>
                      </td>
                    </tr>
                  ) : (
                    specialties.map((item) => (
                      <tr key={item.spec_Id}>
                        <th scope="row">{item.spec_Id}</th>
                        <td>{item.specialtyName}</td>
                        <td>{item.budgetSeats}</td>
                        <td>{item.paidSeats}</td>

                        <td style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "grid",
                              marginTop: 0,
                              width: "100px",
                              marginRight: "0px",
                              marginLeft: "5%",
                            }}
                          >
                            <div tag={Link} style={{ align: "left" }}>
                              <EditSpecialty
                                _isNew={false}
                                specialty={item}
                                setIsUpdateSpec={(x) => setIsUpdateSpec(x)}
                                isUpdateSpec={isUpdateSpec}
                              />
                            </div>
                            <Button
                              style={{ marginTop: "10px" }}
                              color="danger"
                              onClick={() => showDeleteModal(item.spec_Id)}
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
            <AddSpecialty
              _isNew={true}
              setIsUpdateSpec={(x) => setIsUpdateSpec(x)}
              isUpdateSpec={isUpdateSpec}
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

export default AllSpecialties;
