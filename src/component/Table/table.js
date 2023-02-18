import React, { useEffect, useState } from "react";
import CharactersDataService, { fetchData, getCharacterByHouse } from "../../utility/utility";

function CharacterTableByHouse (props) {
    // house da props   
    const {house} = (props);

    //characters for hook
    const [characters, setCharacters] = useState([]); 

    //sta prendendo i dati 
    useEffect(() => {
        let isMounted = true;
        const service = new CharactersDataService()
        service
        .getCharacterByHouse()
        .then((data) => {
            setCharacters(data[0])
            console.log(data[0])
            }
        );
        return () => {
            isMounted = false;
        }
}); 

    // mapping dei dati =righe della tabella
    const tableContent = characters.map(
        (characters) => (
            <tr key={characters.id}>
                <td>{characters.image}</td>
                <td>{characters.name}</td>
                <td>{characters.house}</td>
                <td>{characters.wand}</td>
                <td>{characters.hogwartsStudent}</td>
            </tr>
        )
    )
//return di tutta la funzione 

return (
    <table>
        <thead>
            <tr>
                <th></th>
                <th>name</th>
                <th>house</th>
                <th>wand</th>
                <th>hogwartsStudent</th>
            </tr>
        </thead>
        <tbody>
           {tableContent}
        </tbody>
    </table>


)
}

export default CharacterTableByHouse;
