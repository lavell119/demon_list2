import Demon from './Demon';
import DemonList from './DemonList';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route 
          exact path="/"
          element={<DemonList />}
        >
        </Route>
        <Route 
          exact path="/demon"
          element={<Demon />}
        >
        </Route>
      </Routes>        
   </div>
  </Router>
  )
}



