import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Spinner } from "reactstrap";


const NameForm = ({ setData }: any) => {
    const STRING_REGEX = /^[A-Za-z]+$/;
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError(false);
        setLoading(true);
        setData(null);
        if (name.match(STRING_REGEX)) {
            fetch(`https://api.agify.io/?name=${name}`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });
        }
        else {
            setError(true);
            setLoading(false);
        }
    }

    const handleChange = (e: any) => {
        setName(e.target.value);
        if (!name.match(STRING_REGEX)) {
            setError(true);
        }
        else {
            setError(false);
        }
    }

    return (
        <Container>
            <Row className="justify-content-center name-form" >
                <Form >
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Row>
                            <Col sm={8}>
                                <Input type="text" placeholder="Please Input Name" value={name} onChange={handleChange} />
                                {error && <div className="invalid-text">Invalid input</div>}
                            </Col>
                            <Col>
                                <Button color="primary" className="primary-btn" type="submit" onClick={handleSubmit} disabled={loading}>
                                    {
                                        loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                            :
                                            <div>Submit</div>
                                    }
                                </Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </Row>
        </Container>
    )
}

export default NameForm;