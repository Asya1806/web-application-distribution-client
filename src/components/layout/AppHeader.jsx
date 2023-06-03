import React from "react"; // 1
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Button,
} from "reactstrap";
import AddEntrant from "../pages/entrant/AddEntrant";
import { NavItemBySpec } from "../../function/func";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";

const AppHeader = (props) => {
  // 3
  // При использовании модели компонента, основанной на классах, React позволяет вам иметь прямую переменную состояния, которая может быть определена сразу после объявления класса и будет хранить все свойства, важные для функционирования текущего компонента и только для него. Здесь вы создаете логическую опцию isOpen, которая будет хранить текущее состояние выпадающего меню (которое будет создано в ближайшее время).

  const [auth, setAuth] = React.useState(true);
  const handleChangeAuth = () => {
    setAuth((show) => !show);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  let toggle = () => setIsOpen((open) => !open);
  toggle = toggle.bind();
  //
  // state = {
  //     isOpen: false
  // };

  // toggle = this.toggle.bind(this);

  // toggle() {
  //     this.setState({
  //         isOpen: !this.state.isOpen
  //     })
  // }

  return (
    // auth && (
    <header>
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{ paddingLeft: "90px", paddingRight: "90px" }}
      >
        <NavbarBrand
          style={{ color: "green", fontWeight: "bold", fontSize: "24px" }}
          href="/all"
        >
          Абитуриент
        </NavbarBrand>
        {/* <NavbarToggler /> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <Collapse navbar> */}
          <Nav className="ml-auto" navbar>
            <NavItemBySpec
              navName="Список"
              to1="/all"
              to2="/allSpec"
              nameItem1="Абитуриенты"
              nameItem2="Специальности"
            />
            <NavItemBySpec
              navName="400101"
              to1="/spec_by_budget_1"
              to2="/spec_by_paid_1"
              nameItem1="Бюджет"
              nameItem2="Платное"
            />
            <NavItemBySpec
              navName="400501-04"
              to1="/spec_by_budget_2"
              to2="/spec_by_paid_2"
              nameItem1="Бюджет"
              nameItem2="Платное"
            />
            <NavItemBySpec
              navName="400501-01"
              to1="/spec_by_budget_3"
              to2="/spec_by_paid_3"
              nameItem1="Бюджет"
              nameItem2="Платное"
            />
            <NavItemBySpec
              navName="530106"
              to1="/spec_by_budget_4"
              to2="/spec_by_paid_4"
              nameItem1="Бюджет"
              nameItem2="Платное"
            />
            <NavItemBySpec
              navName="530101"
              to1="/spec_by_budget_5"
              to2="/spec_by_paid_5"
              nameItem1="Бюджет"
              nameItem2="Платное"
            />
            <NavItemBySpec
              navName="530105"
              to1="/spec_by_budget_6"
              to2="/spec_by_paid_6"
              nameItem1="Бюджет"
              nameItem2="Платное"
            />
          </Nav>
        </Collapse>
        <Button
          onClick={() => {
            jsCookie.remove("access-token");

            //handleChangeAuth(false);
          }}
          tag={Link}
          to="/"
          style={{
            opacity: ".9",
            width: "100px",
          }}
        >
          <BsBoxArrowRight
            //   isOpen="true"
            style={{
              color: "white",
              width: "25px",
              height: "100%",
              textAlign: "right",
            }}
          />
        </Button>
      </Navbar>
    </header>
  );
  //   );
};

export default AppHeader;
