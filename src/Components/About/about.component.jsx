import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.style.css';

const About = (props) => {

    const { about: { title, description }} = props.dados;

    return(
        <Container className="about-root" fluid>
            <Row className="about-row">
                <Col>
                    <div className="about-col">
                        <h2 className="about-text about-title">{title}</h2>
                        <p className="about-text">
                            {description}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;