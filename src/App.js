import { Children } from 'react';
import './App.css';
import CharacterTableByHouse from './component/charactersTable/charactersTable';


function App() {
  return (
  
    <CharacterTableByHouse house="gryffindor" ></CharacterTableByHouse>
  );
}

export default App;
