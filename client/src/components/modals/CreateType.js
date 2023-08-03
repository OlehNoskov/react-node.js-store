import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add new type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'Input type name...'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger">Close</Button>
                <Button variant="outline-success">Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
