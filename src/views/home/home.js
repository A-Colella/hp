import React from "react";
import { NavLink } from "react-router-dom";

//import CharacterTableByHouse from './component/charactersTable/charactersTable';
//<CharacterTableByHouse house="gryffindor" ></CharacterTableByHouse>

function Home () {
    return (
        <div className="conteiner">
            <div className="row justyfy-content-center">
                <div className="col">
                <NavLink className="button" to="/character/gryffindor">Gryffindor</NavLink>
                <NavLink className="button" to="/character/slytherin">Slytherin</NavLink>
                <NavLink className="button" to="/character/hufflepuff">Hufflepuff</NavLink>
                <NavLink className="button" to="/character/ravenclaw">Ravenclaw</NavLink>

                    
                </div>
            </div>
        </div>
    )
}

export default Home; 