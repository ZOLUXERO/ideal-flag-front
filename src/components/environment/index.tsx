import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Dropdown, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ModalCreate from "./modal-create";
import ModalDelete from "./modal-delete";

const Environment = () => {
    const [environment, setEnv] = useState<any[]>([]);
    const location = useLocation();

    const idProject = location.state.idProject;

    const fetchEnvironments = async () => {
        fetch("http://localhost:3001/environments/project/" + idProject)
            .then(response => response.json())
            .then(json => setEnv(json))
            .catch(error => console.error(error));

            console.log(environment);
    }

    useEffect(() => {
        fetchEnvironments();
    }, []);

    const handleDataUpdate = () => {
        fetchEnvironments();
    }

    return (
        <Container>
            <Row>
                <Col md={11} className="pj-card-fil rounded m-auto mt-5 mb-5">
                    <Row className="mt-3 px-2">
                        <Col className="ms-2">
                            <span className="pj-title">
                                Ambientes
                            </span>
                        </Col>
                        <Col className="text-end">
                            <ModalCreate handleDataUpdate={handleDataUpdate} propIdProject={idProject}></ModalCreate>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={11} className="pj-content m-auto mt-3 mb-3">
                            {
                                (environment && environment.length > 0) ? (
                                    <Stack className="mt-2 mb-2">
                                        {environment.map((dataItem) => (
                                            <div className="p-3 stack-p-w border mt-2 mb-2">
                                                <Row className="align-items-center">
                                                    <Col xs={9} className="align-items-center">
                                                        <Link to={"/flags"} state={{ idProject: idProject, idEnvironment: dataItem.idEnvironment }} style={{ textDecoration: 'none' }}>
                                                            <span className="pname-black">{dataItem.name}</span>
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <ModalDelete content="ahlhlhl" handleDataUpdate={handleDataUpdate} id_environment={dataItem.idEnvironment} ></ModalDelete>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </Stack>
                                )
                                    :
                                    (
                                        <Row className="text-center m-5">
                                            <span className="span-white">
                                                No hay ambientes creados {idProject}
                                            </span>
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

export default Environment;