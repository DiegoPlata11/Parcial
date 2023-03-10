import React from 'react'


const Card = ({ country, city }) => {
    return (
      <div>
        <h2>Hola tu pais es: {country} </h2>
        <h2>tu ciudad es: {city} </h2>
      </div>
    );
  };
  
  export default Card;