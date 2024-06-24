import "./styles.css"
import { Stack, Container, Row, Col } from 'react-bootstrap';
import line from "../../assets/line.svg"
import gato from "../../assets/gato-perro.svg"


export default function Preview() {
    return (
        <Container>
            <Col md={9} className="rounded m-auto mt-5">
                <img src={gato} className="d-block mx-auto img-fluid w-50" alt="logo"/>
            </Col>
            <Col md={9} className="card-fil rounded m-auto mt-5">
                <Stack gap={3}>
                    <div className="p-2">
                        <Row>
                            <Col xs={9} className="text-start">
                                <span className="pname">Background</span>
                            </Col>
                            <Col>
                                <label className="switch" htmlFor="checkbox1">
                                    <input type="checkbox" id="checkbox1" />
                                    <div className="slider round"></div>
                                </label>
                            </Col>
                        </Row>
                    </div>
                    <img src={line} className="ahh" alt="logo"/>
                    <div className="p-2">
                        <Row>
                            <Col xs={9}>
                                <span className="pname">Animal</span>
                            </Col>
                            <Col>
                                <label className="switch" htmlFor="checkbox2">
                                    <input type="checkbox" id="checkbox2" />
                                    <div className="slider round"></div>
                                </label>
                            </Col>
                        </Row>
                    </div>
                    <img src={line} className="ahh" alt="logo"/>
                    <div className="p-2">
                        <Row>
                            <Col xs={9}>
                                <span className="pname">Buttom</span>
                            </Col>
                            <Col>
                                <label className="switch" htmlFor="checkbox3">
                                    <input type="checkbox" id="checkbox3" />
                                    <div className="slider round"></div>
                                </label>
                            </Col>
                        </Row>
                    </div>
                </Stack>
            </Col>
        </Container>
    );
}