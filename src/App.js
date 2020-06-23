import React, { useEffect } from 'react';
import Header from './Components/Header/header.component';
import Banner from './Components/Banner/banner.component';
import About from './Components/About/about.component';
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
        <About />
      </div>
    );
}

export default App;
