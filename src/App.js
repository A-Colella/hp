
import './App.css';
import MainTemplate from './component/mainTemplate/mainTemplate';
import Home from './views/home/home';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Characters from './views/characters/characters';
import CharacterDetail from './views/charactersDetail/charactersDetail';
import Logo from '../src/assets/image/logo.png';
import CharacterTableByHouse from './component/charactersTable/charactersTable';


function App() {
  const nav = [
    {url:"/", text: "Home", exact: true},
    
  ]
  return (
<BrowserRouter>
   <MainTemplate
   footerCourseName="Applicazioni Web: Progettazione e Sviluppo"
   footerCourseLink="https://elearning.unimib.it/course/info.php?id=44672"
   navItem={nav}
   logo={Logo}
   >
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/character/:house" element={<CharacterTableByHouse/>}/>
      <Route exact path="/characterDetail" element={<CharacterDetail/>}/>
    </Routes>

   
   </MainTemplate>
</BrowserRouter>
  );
}
// se è possibile vedere una route generica che rimanda a una pagina 404 (componete 404 e fare la route generica)
export default App;
