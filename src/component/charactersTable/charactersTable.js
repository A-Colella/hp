import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharactersDataService, { fetchData, getCharacterByHouse } from "../../utility/utility";
import style from "../charactersTable/charactersTable.module.css"

function CharacterTableByHouse () {
    // house da props   
    let {house} = useParams();
    
   

    //characters for hook
    const [characters, setCharacters] = useState([]); 

    //sta prendendo i dati 
    useEffect(() => {
        let isMounted = true;
        const service = new CharactersDataService()
        service
        .getCharacterByHouse({house})
        .then((data) => {
            setCharacters(data[0])
            console.log(data[0])
            }
        ); 
       
        return () => {
            isMounted = false;
        }
},[{house}]); 



    // mapping dei dati =righe della tabella
    const tableContent = characters.map(
        (characters) => (
            <tr key={characters.id}>
                <td><img src={characters.image}/></td>
                <td>{characters.name}</td>
                <td>{characters.house}</td>
                <td>{characters.patronus}</td>
            </tr>
        )
    )
//return di tutta la funzione 

return (
    <table className={`table table-striped table-dark ${style.table}`}>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>House</th>
                <th>patronus</th>
            </tr>
        </thead>
        <tbody>
           {tableContent}
        </tbody>
    </table>


)
}

export default CharacterTableByHouse;
