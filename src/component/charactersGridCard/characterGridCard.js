import React from "react";
import { useEffect, useState } from "react";
import CharacterCard from "../characterCard/characterCard";



function CharactersGridCard() {
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

        const characterCardsCol = characters.map((characters) => {
            <div key={characters.id} className="col">
                <CharacterCard
                name={characters.name}
                image={characters.image}
                house={characters.house}
                patronus={characters.patronus}
                />

            </div>

 }); 
 return (
    <div className={`row 
            row-cols-${col.xs}
            row-cols-sm-${col.sm}
            row-cols-md-${col.md}
            row-cols-lg-${col.lg}
            row-cols-xl-${col.xl}
    `}>
        {pokemonCardsCol}
    </div>
)

}
export default CharactersGridCard;