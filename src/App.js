import { Children } from 'react';
import './App.css';
import CharacterTableByHouse from './component/charactersTable/charactersTable';
import MainTemplate from './component/mainTemplate/mainTemplate';
import Home from './views/home/home';
import { BrowserRouter,Route, Routes, Swicth } from 'react-router-dom';
import Characters from './views/characters/characters';
import CharacterDetail from './views/charactersDetail/charactersDetail';
import Logo from '../src/assets/image/logo.png';

function App() {
  const nav = [
    {url:"/", text: "Home", exact: true},
    {url:"/character", text: "Characters", exact: false},
  ]
  return (
<BrowserRouter>
   <MainTemplate
   footerCourseName="Applicazioni Web: Progettazione e Sviluppo"
   footerCourseLink="https://elearning.unimib.it/course/info.php?id=44672"
   >
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/character/:house" component={Characters}/>
      <Route exact path="/characterDetail" component={CharacterDetail}/>
    </Routes>

   
   </MainTemplate>
</BrowserRouter>
  );
}
// se è possibile vedere una route generica che rimanda a una pagina 404 (componete 404 e fare la route generica)
export default App;
