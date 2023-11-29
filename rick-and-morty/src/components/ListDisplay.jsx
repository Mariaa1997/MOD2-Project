import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";

const ListDisplay = ({ characters1 }) => {
  console.log(characters1);
  const loaded = () => {
    return (
      <div>
        <h2>Rick and Morty</h2>

        <ul>
          {characters1.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt={character.name} />
              <h4>{character.name}</h4>
              <h4>{character.status}</h4>
              <h4>{character.species}</h4>
              <h4>{character.gender}</h4>
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
