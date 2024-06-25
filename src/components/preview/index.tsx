import "./styles.css"
import { Stack, Container, Row, Col, Button } from 'react-bootstrap';
import gato from "../../assets/gato-perro.svg"
import perro from "../../assets/perro-gato.svg"
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Preview = () => {

    const [checked, setChecked] = useState(false);
    const handleChange = (): void => {
        setChecked(!checked);
        console.log("Checkbox changed:", !checked);
    }

    return (
        <Container>
            <Col md={9} className="rounded m-auto mt-5 img-container">
                <img src={checked ? perro : gato} className="d-block mx-auto img-fluid w-50" alt="logo"/>
            </Col>
            <Col md={9} className="rounded m-auto mt-5">
                <div>
                    <span className="span-white"><b>Gestiona</b> el lanzamiento de nuevas características de forma segura y eficiente sin necesidar de hacer despliegues. Ya sea para pruebas A/B, canary releases o simplemente para activar funcionalidades.</span>
                </div>
            </Col>
            <Col md={9} className="card-fil rounded m-auto mt-5">
                <Stack gap={3}>
                    <div className="p-3 stack-p">
                        <Row>
                            <Col xs={9}>
                                <span className="pname">Cambiar Animal</span>
                            </Col>
                            <Col>
                                <label className="switch" htmlFor="checkbox2">
                                    <input type="checkbox" id="checkbox2" onChange={handleChange}/>
                                    <div className="slider round"></div>
                                </label>
                            </Col>
                        </Row>
                    </div>
                </Stack>
            </Col>
            <Col md={9} className="m-auto mt-5 text-center">
                <Link to={"/project"}>
                    <Button style={{
                        color:'rgba(67, 8, 255, 0.7)',
                        caretColor: 'rgba(67, 8, 255, 0.7)',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '4px solid rgba(67, 8, 255, 0.4)',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '30px'
                    }}>Empieza</Button>
                </Link>
            </Col>
        </Container>
    );
}

export default Preview;