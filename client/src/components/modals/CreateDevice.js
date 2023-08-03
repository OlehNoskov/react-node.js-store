import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const deleteInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add new device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Input device name'}
                    />
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Input price'}
                        type='number'
                    />
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Input price'}
                        type='file'
                    />
                    <hr/>
                    <Button variant={'outline-dark'} onClick={addInfo}>Add new property</Button>
                    {
                        info.map(i =>
                            <Row key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        className={'mt-2'}
                                        placeholder={'Input title'}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        className={'mt-2'}
                                        placeholder={'Input description'}
                                    />
                                </Col>
                                <Col md={4} className={'mt-2 '}>
                                    <Button variant={'outline-danger'}
                                            onClick={() => deleteInfo(i.number)}>
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success">Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
