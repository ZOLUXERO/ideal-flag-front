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
    projectName: string;
    description: string;
    enabled: boolean;
}

interface ModalProps {
    handleDataUpdate: () => void;
}

const ModalCreate: React.FC<ModalProps> = ({ handleDataUpdate }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState<FormData>({ projectName: '', description: '', enabled: true });

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
            const response = await fetch('http://localhost:3001/projects', {
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
                Crear ambiente
            </Button>
            <Modal
                className='mt-5'
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgba(67, 8, 255, 0.8)' }}>Nuevo Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="projectForm.nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                placeholder="nombre proyecto"
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
                                placeholder="descripcion del proyecto"
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