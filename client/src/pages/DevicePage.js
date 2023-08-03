import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {
        id: 1,
        name: "15 pro",
        price: 60000,
        rating: 0,
        img: "https://www.zdnet.com/a/img/resize/f792d73c3e241b8f40a52875616f490ea1a08e97/" +
            "2023/04/24/4e586f53-afa2-452d-baf4-cc7c78c2c5fb/samsung-galaxy-a54-5g.jpg?" +
            "auto=webp&fit=crop&height=1200&width=1200"
    }

    const description = [
        {id: 1, title: 'Memory', description: '128 gb'},
        {id: 2, title: 'Memory', description: '256 gb'},
        {id: 3, title: 'Memory', description: '128 gb'},
        {id: 4, title: 'Memory', description: '64 gb'},
        {id: 5, title: 'Memory', description: '512 gb'},
        {id: 6, title: 'Memory', description: '1024 gb'},
    ]
    return (
        <div>
            <Container className={'mt-2'}>
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={device.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className={'d-flex flex-column align-items-center'}>
                            <h2>{device.name}</h2>
                            <div className={'d-flex align-items-center justify-content-center'}
                                 style={{
                                     background: `url(${bigStar}) no repeat center center`,
                                     width: 240,
                                     height: 240,
                                     backgroundSize: 'cover',
                                     fontSize: 64
                                 }}>
                                {device.rating}
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className={'d-flex flex-column align-items-center justify-content-around'}
                            style={{
                                width: 300,
                                height: 300,
                                fontSize: 32,
                                border: '5px solid lightgray'
                            }}>
                            <h3>From {device.price} ₴</h3>
                            <Button variant={'outline-dark'}>Add in bucket</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className={'d-flex align-items-center justify-content-center mt-2'}>
                    <h1>Characteristics</h1>
                    {description.map((info, index) =>
                        <Row key={info.id}
                             style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}} >
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default DevicePage;
