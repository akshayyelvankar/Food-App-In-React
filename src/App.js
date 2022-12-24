import logo from './logo.svg';
// import './App.css';
import '../src/Components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import CardsDetails from './Components/CardsDetails';
import Cards from './Components/Cards';
import{Routes,Route} from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/cart/:id' element={<CardsDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
