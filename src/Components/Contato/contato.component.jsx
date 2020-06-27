import React from 'react';
import { Container, Row, Col, Form, Button, Jumbotron } from 'react-bootstrap';
import './contato.style.css';

const Contato = (props) =>{

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');
    const [telefone, setTelefone] = React.useState('');

    return(
        <Container className="contato-root" fluid>
            <Row>
                <Col md={12} lg={6}>
                    <h3>Formulário para contado</h3>
                    <Form>
                        <Row>
                            <Col md={12} lg={6}>
                                <Form.Group controlId="formNome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Informe seu nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md={12} lg={6}>
                                <Form.Group controlId="formTelefone">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="text" placeholder="Informe seu telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Informe seu email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formMensagem">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows="5" placeholder="Sua mensagem" value={mensagem} onChange={(event) => setMensagem(event.target.value)} />
                        </Form.Group>
                        <div className="contact-buttons-container">
                            <Button variant="success" type="button" onClick={async () => await props.onSubmit(nome, email, mensagem, telefone)}>Enviar</Button>
                        </div>
                    </Form>
                </Col>
                <Col md={12} lg={6}>
                    <h3 style={{marginBottom: 30}}>Mais informações para contato</h3>
                    <Jumbotron>
                        <h4><b>Telefone</b></h4>
                        <p>(61) 9 8235-2349</p>
                        <h4><b>Email</b></h4>
                        <p>lopesgabriel0199@gmail.com</p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )

}

export default Contato;