import React, { useEffect, useState } from "react";
import { Modal, Col, Button } from "react-bootstrap";
import trashIcon from "../../assets/trash.svg"

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

interface BodyContent {
    content: string;
    id_project: number;
    handleDataUpdate: () => void;
}

const ModalDelete: React.FC<BodyContent> = ({ content, id_project, handleDataUpdate }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteProject = async (id: number) => {
        console.log("deletingss" + id);
        try {
            const response = await fetch("http://localhost:3001/projects/" + id, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('nice');
                handleDataUpdate();
                handleClose();
            } else {
                console.error('Error: ', response.statusText);
            }

        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <>
            <img src={trashIcon} className="logo" alt="logo" onClick={handleShow} />
            <Modal
                className='mt-5'
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'rgba(67, 8, 255, 0.8)' }}></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>
                        {content}
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <Col className='text-center'>
                        <Button onClick={() => { deleteProject(id_project) }} type='submit'
                            style={btn_color}>
                            Eliminar
                        </Button>
                    </Col>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;