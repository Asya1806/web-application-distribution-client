import React, { useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import TableContainer from "@mui/material/TableContainer";
// import AddEntrantModal from "../../modal/AddEntrantModal";
import { getSortedEntrantsBySpecPaid_2 } from "../../../../redux/api/entrant";
import { useDispatch } from "react-redux";
import {
  BenefitInfo,
  CommissionDecisionInfo,
  TypeOfContestInfo,
} from "../../../../function/func";
import AppHeader from "../../../layout/AppHeader";

function SpecByPaid2(props) {
  const dispatch = useDispatch();

  const [entrantsBySpec_2, SetEntrantsBySpec_2] = useState([]);

  React.useEffect(() => {
    const fetchEntrants = async () => {
      return await dispatch(getSortedEntrantsBySpecPaid_2());
    };
    fetchEntrants().then((data) => SetEntrantsBySpec_2(data.payload));
  }, [dispatch]);
  console.log(entrantsBySpec_2);

  return (
    <>
      <AppHeader />
      <Container style={{ paddingTop: "30px" }}>
        <Row>
          <Col>
            <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
              Список абитуриентов специальности 400501-04 (платное)
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <TableContainer sx={{ maxHeight: "100%" }}>
              <Table
                stickyHeader
                aria-label="sticky table"
                striped
                sx={{ width: "100%", overflow: "hidden" }}
              >
                <thead className="table-dark">
                  <tr style={{ textAlign: "center", verticalAlign: "middle" }}>
                    <th>№</th>
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
                <tbody style={{ textAlign: "center" }}>
                  {!entrantsBySpec_2 || entrantsBySpec_2.length <= 0 ? (
                    <tr>
                      <td
                        colSpan="12"
                        align="left"
                        style={{ paddingLeft: "550px" }}
                      >
                        <b>Абитуриентов пока нет</b>
                      </td>
                    </tr>
                  ) : (
                    entrantsBySpec_2.map((item) => (
                      <tr key={item.entrant_Id}>
                        <th scope="row">{item.entrant_Id}</th>
                        <td>{item.lastName}</td>
                        <td>{item.firstName}</td>
                        <td>{item.middleName}</td>
                        <td>{item.testMath}</td>
                        <td>{item.testPhys}</td>
                        <td>{item.testLang}</td>
                        <td>{item.middleMark}</td>
                        <td>{item.sumOfPoints}</td>
                        <td>
                          <TypeOfContestInfo id={item.typeOfСontest_Id} />
                        </td>
                        <td>
                          <BenefitInfo id={item.benefits_Id} />
                        </td>
                        <td>
                          <CommissionDecisionInfo
                            id={item.commissionDecision_Id}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SpecByPaid2;
