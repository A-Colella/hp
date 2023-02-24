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
    const gridContent = characters.map(
        (characters) => (
           
        )
    )
//return di tutta la funzione 

return (
    <div className={`row
            row-cols-${col.xs}
            row-cols-sm-${col.sm}
            row-cols-md-${col.md}
            row-cols-lg-${col.lg}
            row-cols-xl-${col.xl}
    `}>
        {}
    </div>
)
}

export default CharacterTableByHouse;
