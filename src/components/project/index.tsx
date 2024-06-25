import "./styles.css"
import { Container, Row, Col, Button } from "react-bootstrap";

const Project = () => {
    return (
        <Container>
            <Row>
                <Col md={11} className="pj-card-fil rounded m-auto mt-5 img-container">
                    <Row className="mt-3 px-2">
                        <Col className="text-center">
                            <span className="pj-title">
                                Proyectos
                            </span>
                        </Col>
                        <Col className="text-end">
                            <Button style={{
                                color:'rgba(67, 8, 255, 0.7)',
                                caretColor: 'rgba(67, 8, 255, 0.7)',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                border: '4px solid rgba(67, 8, 255, 0.4)',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '20px',
                                borderRadius: 10
                            }}>Crear proyecto</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={11} className="pj-content m-auto mt-3">
                        hola
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default Project;