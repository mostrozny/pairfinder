import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Grid, Row, Col} from 'react-bootstrap';
import peoples from './people.js';
import SearchPairs from "./SearchPairs";


class App extends Component {

    drawPeople = () => {
        const ppl = peoples.map(person => {
            return <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.age}</td>
                <td>{person.team}</td>
                <td>{person.glasses === true ? "yes" : "no"}</td>
                <td>{person.district}</td>
            </tr>
        });
        return ppl;
    }


    render() {
        return (
            <div className="App">
                <Grid>
                    <Row className="show-grid peopleList">
                        <Col xs={4} md={8} lg={12}>
                            <Table striped bordered condensed hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Team</th>
                                    <th>Glasses</th>
                                    <th>District</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.drawPeople()}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} md={8} lg={12}>
                        <SearchPairs />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
