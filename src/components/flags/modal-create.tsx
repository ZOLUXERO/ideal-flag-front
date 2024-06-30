import React, { useState } from "react";
import { Modal, Form, Col, Button } from "react-bootstrap";

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

interface FormData {
    flagName: string;
    description: string;
    value: any;
    idProject: number;
    enabled: boolean;
}

interface ModalProps {
    handleDataUpdate: () => void;
    id_project: number;
}

const ModalCreate: React.FC<ModalProps> = ({ handleDataUpdate, id_project }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState<FormData>({ flagName: '', description: '', value: '', idProject: id_project, enabled: true });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleFormSubmit(formData);
    };

    const handleFormSubmit = async (data: FormData) => {
        try {
            const response = await fetch('http://localhost:3001/feature_flags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('nice', responseData);
                handleDataUpdate();
                handleClose();
            } else {
                console.error('Error: ', response.statusText);
            }

        } catch (error) {
            console.error("Error: ", error);
        }

        console.log("data: ", JSON.stringify(data));
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}
                style={btn_color}>
                Crear feature
            </Button>
            <Modal
                className='mt-5'
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgba(67, 8, 255, 0.8)' }}>Nuevo Feature</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="projectForm.nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="flagName"
                                value={formData.flagName}
                                onChange={handleChange}
                                placeholder="nombre flag"
                                autoFocus
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="projectForm.descripcion"
                        >
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="descripcion del feature"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="projectForm.descripcion"
                        >
                            <Form.Label>Valor</Form.Label>
                            <Form.Control
                                type="text"
                                name="value"
                                value={formData.value}
                                onChange={handleChange}
                                placeholder="valor del flag"
                                required
                            />
                        </Form.Group>
                        <Col className="text-center">
                            <Button type='submit'
                                style={btn_color}>
                                Crear
                            </Button>
                        </Col>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCreate;