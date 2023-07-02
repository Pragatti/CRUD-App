
import './App.css';
import CreateForm from './Components/CreateForm';
import Navbar from './Components/Navbar';
import {
  BrowserRouter,Route,Routes

} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter> <Navbar/><Routes>
      <Route path='/form/' element={<CreateForm/>}/>
    </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
