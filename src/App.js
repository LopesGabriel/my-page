import React from 'react';
// import Header from './Components/Header/header.component';
import Banner from './Components/Banner/banner.component';
import About from './Components/About/about.component';
import Contato from './Components/Contato/contato.component';
import firebase from './firebase';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <Banner />
      <About />
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
