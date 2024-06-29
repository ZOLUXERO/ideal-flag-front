import React, { useEffect, useState } from "react";
import "./styles.css"
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalCreate from "./modal-create";
import ModalDelete from "./modal-delete";

const Project = () => {
    const [data, setData] = useState<any[]>([]);

    const fetchData = async () => {
        fetch("http://localhost:3001/projects")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDataUpdate = () => {
        fetchData();
    }

    return (
        <Container>
            <Row>
                <Col md={11} className="pj-card-fil rounded m-auto mt-5 mb-5">
                    <Row className="mt-3 px-2">
                        <Col className="text-center">
                            <span className="pj-title">
                                Proyectos
                            </span>
                        </Col>
                        <Col className="text-end">
                            <ModalCreate handleDataUpdate={handleDataUpdate}></ModalCreate>
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
                                                    <Col xs={9} className="align-items-center">
                                                        <Link to={""} style={{ textDecoration: 'none' }}>
                                                            <span className="pname-black">{dataItem.projectName}</span>
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <ModalDelete content="alhlh" id_project={dataItem.idProject} handleDataUpdate={handleDataUpdate}></ModalDelete>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </Stack>
                                )
                                    :
                                    (
                                        <Row className="text-center m-5">
                                            <span className="span-white">No hay proyectos creados</span>
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
//<img src={trashIcon} className="logo" alt="logo" onClick={() => deleteProject(dataItem.idProject)}/>

export default Project;