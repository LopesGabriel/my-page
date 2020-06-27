import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.style.css';

const About = () => {
    return(
        <Container className="about-root" fluid>
            <Row className="about-row">
                <Col>
                    <div className="about-col">
                        <h2 className="about-text about-title">Sobre mim</h2>
                        <p className="about-text">
                            Formado em Análise e Desenvolvimento de Sistemas em 2020, tenho experiência de um ano trabalhando com desenvolvimento web.
                            Tive o prazer de realizar um Estágio remunerado no Banco do Brasil (Asa Norte) onde adquiri um grande conhecimento sobre a
                            linguagem Java e certa experiência usando frameworks como Bootstrap V4 e JQuery no Front-end.<br></br>
                            Depois do Estágio fui contratado pela Onsurance Inc, uma startup de seguros on-demand onde estou tendo contato com diversas
                            tecnologias e serviços como Node JS, Google Cloud, Dialogflow, Wialon, Zoho, Chatfuel e muito mais.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;