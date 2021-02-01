import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import DetailsComponent from './components/DetailsComponent';
import Header from './components/Header';
import NameForm from './components/NameForm';
import SideBar from './components/Sidebar';


interface DetailsType  {
    name: string;
    age: number;
    count: number; 
}

function App() {
    const [data, setData] = useState<null | DetailsType>();
    return (
        <div className="app">
        <Header />
        <Container fluid className="app-container">
            <Row>
                <Col sm={9}>
                    <NameForm setData={setData} />
                    {data && <DetailsComponent data={data} />}
                </Col>
                <Col sm={2} >
                    {data && <SideBar/>}
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default App;
