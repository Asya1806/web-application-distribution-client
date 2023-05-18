import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import AddEntrantModal from '../modal/AddEntrantModal';
import { BASE_URL } from '../../api';
import Center from '../Center';

class Home extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.getItens();
    }
    getItens = () => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(res => this.setState({ items: res }))
            .catch(err => console.log(err));
    }
    addEntrantToState = entrant => {
        this.setState(previous => ({
            items: [...previous.items, entrant]
        }));
    }
    updateState = (id) => {
        this.getItens();
    }
    deleteItemFromState = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
    }
    render() {
        return <Container style={{ paddingTop: "30px" }}>
            <Row>
                <Col>
                    <h3 style={{textAlign: 'center', marginBottom: '30px'}}>Список абитуриентов</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        items={this.state.items}
                        updateState={this.updateState}
                        deleteItemFromState={this.deleteItemFromState} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddEntrantModal isNew={true} addEntrantToState={this.addEntrantToState} />
                </Col>
            </Row>
        </Container>;
    }
}
export default Home;