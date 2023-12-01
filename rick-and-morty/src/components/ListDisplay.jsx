import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";

const ListDisplay = ({ characters1 }) => {
  console.log(characters1);
  const loaded = () => {
    return (
      <div>
        <ul className="card-container">
          {characters1.map((character) => (
            <li key={character.id}>
              <div>
                <div className="cards">
              <img src={character.image} alt={character.name} className="card-img"/>
              <h3>{character.name}</h3>
              <h4>{character.status}</h4>
              <h4>{character.species}</h4>
              <h4>{character.gender}</h4>
              </div>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const loading = () => {
  
    return <h1>No Character display</h1>;
  };
  return characters1 ? loaded() : loading();
};

export default ListDisplay;
