import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Gabriel from '../../assets/img/Gabriel.png';
import './banner.style.css';

const Banner = () => {
    return(
        <Container className="banner-root" fluid>
            <Row>
                <Col className="banner-content">
                    <div className="banner-image-container">
                        <Image src={Gabriel} className="banner-image shadow" roundedCircle />
                    </div>
                    <h1 className="banner-title">Gabriel de Oliveira Lopes</h1>
                    <h4 className="banner-subtitle">Fullstack developer</h4>
                    <div style={{marginTop: 20}}>
                        <div className="banner-social-media-container">
                            <a href="https://www.linkedin.com/in/gabriel-de-oliveira-lopes-b97093179/" target="_blank" className="social-link" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: '#0e76a8'}} />
                            </a>
                            <a href="https://github.com/LopesGabriel" target="_blank" className="social-link" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{color: 'black'}} />
                            </a>
                            <a href="https://www.instagram.com/gabriel.310/" target="_blank" title="@gabriel.310" className="social-link" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="insta-icon" style={{color: 'white'}} />
                            </a>
                            <a href="https://www.facebook.com/gabriel.oliveiralopes.98" target="_blank" className="social-link" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{color: '#4267B2'}} />
                            </a>
                        </div>
                        <p style={{margin: 0}}>Onde me encontrar</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;