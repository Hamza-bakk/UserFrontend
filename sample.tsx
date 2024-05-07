import React, { Component } from 'react';

// Ici vous utiliser l'interface afin d'appliquer le POO dans Typescrit

export default class sample extends Component {
  render() {
    // Rendre = Ici vous appliquer la logique métier, appelle API, Graphql, function javascript ect

    const handleHBClick = () => {
      window.location.href = "/";
    };


    return (
          // Rendre = Ici vous retourner la logique métier, pour une expérience user réussite
      <>
        <div onClick={handleHBClick}>
          Here your texte and your action
        </div>
      </>
    );
  }
}
