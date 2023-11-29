import { useEffect, useState } from 'react'
import Form from '../components/Form'
const Characters = () => {

    const [characterList, setCharacterList] = useState([]);
useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        setCharacterList(data.results);
    })
    .catch(error => {
        console.error('Error', error);
    });
},[]);

return (
    <div>
        <h2>Rick and Morty</h2>
        {characterList.map(character => (
            <div key={character.id}>
                <img src={character.image} alt={character.name} />
                <h4>{character.name}</h4>
                <h4>{character.status}</h4>
                <h4>{character.species}</h4>
                <h4>{character.gender}</h4>
                </div>
        ))}
    </div>
);
        };
   


export default Characters