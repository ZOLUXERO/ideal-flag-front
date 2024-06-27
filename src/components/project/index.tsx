import { useEffect, useState } from "react";
import "./styles.css"
import { Container, Row, Col, Form, Stack, Button } from "react-bootstrap";
import trashIcon from "../../assets/trash.svg"
import { Link } from "react-router-dom";
import ButtonModal from "../buttonModal";


/**
 * TODO: falta eliminar el proyecto cuando se de click y la creacion 
 */


const Project = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/projects")
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, [])

    const deleteProject = (id: number) => {
        console.log("deletingss" + id);
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
                            <ButtonModal 
                                content={
                                    {
                                        button_text: "Crear proyecto",
                                        modal_buton_text: "Crear",
                                        modal_heading: "Nuevo proyecto",
                                        modal_body: 
                                            <Form>
                                                <Form.Group className="mb-3" controlId="projectForm.nombre">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="nombre proyecto"
                                                        autoFocus
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="projectForm.descripcion"
                                                >
                                                    <Form.Label>Descripcion</Form.Label>
                                                    <Form.Control 
                                                        type="text"
                                                        placeholder="descripcion del proyecto"
                                                    />
                                                </Form.Group>
                                            </Form>
                                        ,
                                    }
                                }>
                            </ButtonModal>
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
                                                        <Link to={""} style={{textDecoration: 'none'}}>
                                                            <span className="pname-black">{dataItem.projectName}</span>
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <ButtonModal 
                                                            content={
                                                                {
                                                                    button_text: 
                                                                        <img src={trashIcon} className="logo" alt="logo" onClick={() => deleteProject(dataItem.idProject)}/>
                                                                    ,
                                                                    modal_buton_text: "Eliminar",
                                                                    modal_heading: "",
                                                                    modal_body: 
                                                                        <span>
                                                                            aggggg {dataItem.idProject}
                                                                        </span>
                                                                    ,
                                                                }
                                                            }>
                                                        </ButtonModal>
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

export default Project;