import React, { Component } from 'react'; // 1
import { Link } from 'react-router-dom';
import AddEntrantModal from '../modal/AddEntrantModal';


import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'; // 2

class AppHeader extends Component { // 3
    // При использовании модели компонента, основанной на классах, React позволяет вам иметь прямую переменную состояния, которая может быть определена сразу после объявления класса и будет хранить все свойства, важные для функционирования текущего компонента и только для него. Здесь вы создаете логическую опцию isOpen, которая будет хранить текущее состояние выпадающего меню (которое будет создано в ближайшее время).
    
    state = { 
        isOpen: false
    };

    toggle = this.toggle.bind(this); 
    
    toggle() { 
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() { // 7
        return (
            <header>
                <Navbar color="dark" dark expand="md" style={{ paddingLeft: "90px", paddingRight: "90px" }} >
                    <NavbarBrand style={{color:'green', fontWeight:'bold', fontSize:'24px'}} href="/">Абитуриент
                        {/* <img style={{color:'green'}}src="public/free-icon-owl-4733163.png" width="128" className="d-inline-block align-top" alt="" /> */}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/home">Список абитуриентов</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Добавить
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem >
                                        
                                                <AddEntrantModal isNew={true} addEntrantToState={this.addEntrantToState} />
                                           </DropdownItem>
                                    <DropdownItem tag={Link} to="/add_specialty">Специальность</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/list_entrant">400101</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/list_entrant">400501-04</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/list_entrant">400501-01</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/list_entrant">530101</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/list_entrant">530105</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/list_entrant">530106</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
    )
    }
}

export default AppHeader; 