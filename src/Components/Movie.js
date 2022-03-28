//a partir de https://swapi.dev/api/films/ : 
//1 ) recuperer les datas de la requete 
//2 ) stocker ces datas dans un state 
//3 ) Sur Movie.js afficher les datas d'un film "promise" sur des props 
//4 ) sur App.js afficher les datas des films (map ou foreach ?)

import React from "react";

const divStyle = {
    border: 'solid 1px',
    margin:'auto',
    width:'20%',
    "margin-bottom" :"10px",
    padding : "10px",
    "text-align" : "center",
    "border-radius" : "10px",
    "background-color": '#ff9b95'
};


function Movie() {

  // La fonction setIsLoading est utilisée pour basculer cette variable d'état. 
  // Une fois que l'API a renvoyé les données, nous utiliserons cette fonction pour basculer la valeur de isLoading
  // Elle sert à savoir si les données sont toujours en cours de chargement. 
  const [isLoading, setIsLoading] = React.useState(true); 

  //Ensuite, nous avons l'état des données. 
  // Cet état est initialisé à un tableau vide. 
  // Il sera utilisé pour stocker les données renvoyées par l'API. 
  const [data, setData] = React.useState([]);

// Le hook useEffect ci-dessus est utilisé pour faire la demande à l'API. 
// Le paramètre '[]' indique à React d'exécuter ce crochet une seule fois. 
// Le crochet s'exécute après le chargement de la page. 
// Une simple demande de récupération est effectuée et une fois la ou les promesses résolues, 
// nous utilisons la fonction setData pour mettre à jour les données de la variable d'état.
  React.useEffect(() => {
    const url = "https://swapi.dev/api/films/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);

  // Le hook useEffect suivant s'exécute chaque fois que les données de la variable d'état sont mises à jour. 
  // Il effectue une simple vérification, si les données de la variable d'état ne sont pas vides, 
  // c'est-à-dire que l'API a renvoyé les données, il définit la variable d'état isLoading sur False.
  React.useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

// La logique de rendu est assez simple, si la variable d'état 'isLoading' est True, 
//nous afficherons l'indication 'Loading…'. 
//S'il est faux, nous mappons simplement sur la variable d'état 'data' et affichons tous les éléments du tableau.
  return (
    <div>
      {isLoading ? (  //si isLoading == true 
        <h1>Loading...</h1>
      ) : ( //true
        data.map((movie,index) => (
        <>
        <div style={divStyle}>
          <h1 key={index}>
            Titre : {movie.title} 
          </h1>
          <h2>Autheur : {movie.director} </h2>
          <h2>Producer : {movie.producer}</h2>
        </div>
        </>
        ))
      )}
    </div>
  );
}

export default Movie;
