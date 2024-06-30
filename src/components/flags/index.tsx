import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Dropdown, Button, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ModalCreate from "./modal-create";
import ModalDelete from "./modal-delete";

const btn_color = {
    color: 'rgba(67, 8, 255, 0.7)',
    caretColor: 'rgba(67, 8, 255, 0.7)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '4px solid rgba(67, 8, 255, 0.4)',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    borderRadius: 10
}

const Flags = () => {
    const [data, setData] = useState<any[]>([]);
    const [environment, setEnv] = useState<any[]>([]);
    const location = useLocation();
    const [checked, setChecked] = useState(false);

    const [stateEnv, setStateEnv] = useState();

    const handleChange = (): void => {
        setChecked(!checked);
        console.log("Checkbox changed:", !checked);
    }

    const idProject = location.state !== null ? location.state.idProject : 0;
    const idEnv = location.state !== null ? location.state.idEnvironment : 0;

    const fetchData = async () => {
        console.log("request", stateEnv)
        return await fetch("http://localhost:3001/ff/env/" + idEnv)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }

    const fetchEnvironments = async () => {
        return await fetch("http://localhost:3001/environments/project/" + idProject)
            .then(response => response.json())
            .then(json => setEnv(json))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchEnvironments();
        fetchData();
    }, []);

    const handleDataUpdate = () => {
        fetchData();
    }

    return (
        <Container>
            <Row>
                <Col className="m-auto mt-5 mb-4 ms-4">
                    <span className="pj-title">
                        Features
                    </span>
                </Col>
                <Col className="m-auto mt-5 mb-5 text-end me-3">
                    {
                        (environment && environment.length > 0) ?
                            <ModalCreate handleDataUpdate={handleDataUpdate} id_project={idProject}></ModalCreate>
                        : <h1></h1>
                    }
                </Col>
            </Row>
            <Row>
                <Col md={11} className="pj-card-fil rounded m-auto mt-5 mb-5">
                    <Row className="mt-3 px-2">
                        <Col className="ms-2">
                            <span className="pj-title">
                                Flags&nbsp;
                            </span>
                            <span className="pj-subtitle">
                            </span>
                        </Col>
                        <Col className="text-end">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" style={btn_color} id="dropdown-basic">
                                    Ambientes
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        (environment && environment.length > 0) ? (
                                            environment.map((dataItem) => (
                                                <Dropdown.Item>{dataItem.name}</Dropdown.Item>
                                            ))
                                        )
                                        : <h1></h1>
                                    }
                                    <Dropdown.Item href="#/action-3">
                                        <Link to={"/environment"} state={{ idProject: idProject }}>
                                            <Button style={btn_color}>Crear ambiente</Button>
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={11} className="pj-content m-auto mt-3 mb-3">
                            {
                                (data && data.length > 0) ? (
                                    <Stack className="mt-2 mb-2">
                                        {data.map((dataItem) => (
                                            <div className="p-3 stack-p-w border mt-2 mb-2">
                                                <Row className="align-items-center">
                                                    <Col xs={8} className="align-items-center">
                                                        <Link to={""} style={{ textDecoration: 'none' }}>
                                                            <span className="pname-black">{dataItem.featureFlag.flagName}</span>
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <label className="switch" htmlFor={dataItem.featureFlag.idFeatureFlag}>
                                                            <input type="checkbox" id={dataItem.featureFlag.idFeatureFlag} onChange={handleChange} />
                                                            <div className="slider round"></div>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                        <ModalDelete handleDataUpdate={handleDataUpdate} content="ahhlhklkh" id_flag={dataItem.featureFlag.idFeatureFlag}></ModalDelete>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </Stack>
                                )
                                    :
                                    (
                                        <Row className="text-center m-5">
                                            {
                                                (environment && environment.length > 0) ?
                                                    <span className="span-white">
                                                        No hay flags creados
                                                    </span>
                                                :
                                                    <span className="span-white">No hay ambientes creados
                                                        <br/><br/>
                                                        Inicie creando un ambiente con el dropdown para crear sus flags {idProject}
                                                    </span>
                                            }
                                        </Row>
                                    )
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default Flags;