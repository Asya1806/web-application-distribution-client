import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

// Гендер
export const GenderInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "М";
  } else if (props.id === 2) {
    type = "Ж";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Вид конкурса
export const TypeOfContestInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Целевое направление";
  } else if (props.id === 2) {
    type = "Без вступительных испытаний";
  } else if (props.id === 3) {
    type = "Вне конкурса";
  } else if (props.id === 4) {
    type = "По конкурсу";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Заявление
export const ApplicationForPaidInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Б";
  } else if (props.id === 2) {
    type = "Пл";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Специальность
export const SpecialtyInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "400101";
  } else if (props.id === 2) {
    type = "400501-04";
  } else if (props.id === 3) {
    type = "400501-01";
  } else if (props.id === 4) {
    type = "530106";
  } else if (props.id === 5) {
    type = "530101";
  } else if (props.id === 6) {
    type = "530105";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Серия паспорта
export const PassportSeriesInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "АВ";
  } else if (props.id === 2) {
    type = "BM";
  } else if (props.id === 3) {
    type = "HB";
  } else if (props.id === 4) {
    type = "KH";
  } else if (props.id === 5) {
    type = "MP";
  } else if (props.id === 6) {
    type = "MC";
  } else if (props.id === 7) {
    type = "KB";
  } else if (props.id === 8) {
    type = "PP";
  } else if (props.id === 9) {
    type = "SP";
  } else if (props.id === 10) {
    type = "DP";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Да|нет
export const YesOrNoInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Нет";
  } else if (props.id === 2) {
    type = "Да";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Населенный пункт
export const LocalitiesInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Минск";
  } else if (props.id === 2) {
    type = "Иногородний";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Язык в университете
export const LangInUniverInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Английский";
  } else if (props.id === 2) {
    type = "Немецкий";
  } else if (props.id === 3) {
    type = "Французский";
  } else if (props.id === 4) {
    type = "Испанский";
  } else if (props.id === 5) {
    type = "Китайский";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Льготы
export const BenefitInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Нет";
  } else if (props.id === 2) {
    type = "п. 24";
  } else if (props.id === 2) {
    type = "п. 26.1";
  } else if (props.id === 2) {
    type = "п. 27.1";
  } else if (props.id === 2) {
    type = "п. 27.1 п. 27.2";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

// Решение комиссии
export const CommissionDecisionInfo = (props) => {
  let type;
  if (props.id === 1) {
    type = "Зачислить";
  } else if (props.id === 2) {
    type = "Не зачислить";
  } else {
    type = "-";
  }
  return <div>{type}</div>;
};

export const NavItemBySpec = (props) => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {props.navName}
      </DropdownToggle>
      <DropdownMenu right dark>
        <DropdownItem tag={Link} to={props.to1}>
          {props.nameItem1}
        </DropdownItem>
        <DropdownItem tag={Link} to={props.to2}>
          {props.nameItem2}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
