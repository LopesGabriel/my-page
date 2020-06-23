import React, { useEffect } from 'react';
import Header from './Components/Header/header.component';
import Banner from './Components/Banner/banner.component';
import About from './Components/About/about.component';
import Contato from './Components/Contato/contato.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import firebase from './firebase';
import './App.css';

function App() {

  const [initializing, setInitializing] = React.useState(true);
  const [pageData, setPageData] = React.useState();
  
  useEffect(() => {
    firebase.firestore().collection("dadosDinamicos").doc("paginaGabriel")
      .onSnapshot(doc => {
        console.log("Current data =>", doc.data());

        setPageData(doc.data());
        setInitializing(false);
      });

  }, []);

  if(initializing)
    return (
      <Container className="loading-container" style={{padding: 100}} fluid>
        <FontAwesomeIcon icon={faSpinner} spin size="7x" />
        <h2>Iniciando...</h2>
      </Container>
    )
  else
    return (
      <div className="App">
        <Header />
        <Banner dados={pageData} />
        <About dados={pageData} />
        <Contato onSubmit={contactFormSubmit} />
      </div>
    );
}

/**
 * 
 * @param {string} nome 
 * @param {string} email 
 * @param {string} mensagem 
 * @param {string} telefone 
 */
const contactFormSubmit = async (nome, email, mensagem, telefone = null) => {

  if(nome.lenght < 3) {
    alert("Nome deve ter mais de 3 caracteres.");
    return false;
  } else if(email.lenght < 10) {
    alert("Email deve conter no mínimo 5 caracteres.");
    return false;
  } else if(mensagem.lenght < 10) {
    alert("A mensagem deve conter no mínimo 10 caracteres.");
    return false;
  }

  console.log(`Nome length: ${nome.lenght}, Email lenght: ${email.lenght}, Mensagem lenght: ${mensagem.lenght}`);

  return await sendContactData({
    nome, email, mensagem, telefone
  }).then(rs => {
    console.info("Mensagem enviada com sucesso!", rs);
    alert("Mensagem enviada!");
    return rs;
  })
    .catch(err => {
      console.error(err);
      return alert("Não foi possível enviar a mensagem!");
    });
}

const sendContactData = dados => new Promise((resolve, reject) => {
  firebase.firestore().collection('contatos').add({
    nome: dados.nome,
    email: dados.email,
    mensagem: dados.mensagem,
    telefone: dados.telefone
  }).then(docRef => resolve(docRef.id))
    .catch(err => {
      console.error('Erro ao criar novo documento =>', err);
      return reject(err);
    });
});

export default App;
