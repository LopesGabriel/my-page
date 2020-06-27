import React from 'react';
import Banner from './Components/Banner/banner.component';
import About from './Components/About/about.component';
import Contato from './Components/Contato/contato.component';
import './App.css';

function App() {

  return (
    <div className="App">
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

  const dados = {
    nome,
    email,
    mensagem,
    telefone
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  }

  const response = fetch(' https://us-central1-gabriel-homolog.cloudfunctions.net/gabrielContato', requestOptions);

  const data = await response.json();
  console.info("Dados retornados =>", data);
  alert(data.message);

}

export default App;
