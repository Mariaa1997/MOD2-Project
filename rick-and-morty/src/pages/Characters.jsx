import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../components/Form';
import ListDisplay from '../components/ListDisplay';


function Characters() {
  const [characters, setCharacters] = useState([]);

    const getCharacter = async (searchTerm) => {
      console.log(searchTerm)
      const baseUrl = 'https://rickandmortyapi.com/api/character'
      const url = baseUrl +'?name=' + searchTerm
      console.log(url)
      try {
        const response = await fetch(url);
        console.log(url);
        const data = await response.json();
        console.log(data);
        setCharacters(data.results);
      } catch (e) {
        console.error(e);
      }
    };
  
  
  return (
    <div className='character-style'>
        <h1 className='animation'>Rick and Morty Characters</h1>
      <Form characterssearch={getCharacter} />
      <div className='card'>
      <ListDisplay characters1={characters} />
      </div>
    </div>
  )
}


export default Characters