
import './App.css';
import CreateForm from './Components/CreateForm';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,Route,Routes

} from "react-router-dom";
import Read from './Components/read';
function App() {
  return (
    <div className="App">
    <BrowserRouter> <Navbar/>
    <Routes>
      <Route  exact path='/' element={<CreateForm/>}/>
      <Route exact path='/read' element={<Read/>}/>
    </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
