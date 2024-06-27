import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ButtonModalProps {
  content: {
    button_text: React.ReactNode,
    modal_buton_text: string,
    modal_heading: string,
    modal_body: React.ReactNode,
  };
}

const btn_color = {
  color:'rgba(67, 8, 255, 0.7)',
  caretColor: 'rgba(67, 8, 255, 0.7)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: '4px solid rgba(67, 8, 255, 0.4)',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',
  borderRadius: 10
}

const ButtonModal: React.FC<ButtonModalProps> = ({content}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} 
        style={btn_color}>
        { content.button_text }
      </Button>

      <Modal 
        className='mt-5'
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color: 'rgba(67, 8, 255, 0.8)'}}>{ content.modal_heading }</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ content.modal_body }</Modal.Body>
        <Modal.Footer>
          <Col className='text-center'>
            <Button
              style={btn_color}>
              { content.modal_buton_text }
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonModal;