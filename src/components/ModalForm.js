import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalForm({ show, handleClose, getValue }) {

    let [name, setName] = useState('Name');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleForm = (event) => {
        event.preventDefault();
        getValue(name);
        handleClose();
    }

    return (
        <div className='text-center'>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter your Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name" name='name' onChange={handleName} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                            <Button variant="secondary" className='ms-2' onClick={handleClose}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default ModalForm;
