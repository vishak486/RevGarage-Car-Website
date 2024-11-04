import React from 'react'
import { Carousel, Row, Col, Card, Button } from 'react-bootstrap';
import Nissan from '../images/nissan1.jpg'
import Ford from '../images/ford1.jpg'
import Bmw from '../images/bmw1.jpg'
import Abarath from '../images/abarath1.jpg'
import Audi from '../images/audi1.jpg'
import Mercedes from '../images/mercedes1.jpg'
import volkswagen from '../images/volkswagen.jpg'
import ferrarri from '../images/ferrarr1.jpg'
import lamborghini from '../images/lamborghini1.jpg'


const ImageSlider = () => {
    const cardData = [
        {
            img: Nissan,
            title: "Nissan"
        },
        {
            img: Ford,
            title: "Ford"
        },
        {
            img: Bmw,
            title: "BMW"
        },
        {
            img: Abarath,
            title: "Abarath"
        },
        {
            img: Audi,
            title: "Audi"
        },
        {
            img: Mercedes,
            title: "Mercedes"
        },
        {
            img: volkswagen,
            title: "Volkswagen"
        },
        {
            img: ferrarri,
            title: "Ferrari"
        },
        {
            img: lamborghini,
            title: "Lamborghini"
        },
        
    ];

    const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
    };

    const cardChunks = chunkArray(cardData, 3); // Group cards in chunks of 3
    return (
        <>
            <div className='mt-5'>
                <div className='text-center my-5'>
                    <h1>Our Brands</h1>
                </div>
                <Carousel>
                    {cardChunks.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <Row className="justify-content-center">
                                {chunk.map((card, i) => (
                                    <Col key={i} md={4} className="mb-4">
                                        <Card className="text-center shadow" style={{ width: '18rem', margin: '0 auto' }}>
                                            <Card.Img className="card-img-top" variant="top" src={card.img} />
                                            <Card.Body>
                                                <Card.Title>{card.title}</Card.Title>
                                                <Card.Text>
                                                    {card.text}
                                                </Card.Text>
                                                <Button variant="danger">INQUIRE NOW</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default ImageSlider