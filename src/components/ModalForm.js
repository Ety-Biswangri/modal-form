import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Name from './Name';

function ModalForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [nameValue, setNameValue] = useState('name');

    const handleForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        setNameValue(name);
        // console.log(nameValue);
    }

    return (
        <div className='text-center'>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    Enter your name
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter your Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleForm}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name" name='name' />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleClose}>
                                Submit
                            </Button>

                            <Button variant="secondary" className='ms-2' onClick={handleClose}>
                                Close
                            </Button>
                        </Form>
                    </Modal.Body>

                    {/* <Modal.Footer>
                    { <Button variant="primary" onClick={handleClose}>
                    </Button> }
                </Modal.Footer> */}

                </Modal>

                <Name name={nameValue}></Name>
            </div>
        </div>
    );
}

export default ModalForm;
