import Demon from './Demon';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/"
              element={<Demon />}
              >
        </Route>
      </Routes>        
   </div>
  </Router>
  )
}



