import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';
import { Route, Routes } from 'react-router-dom';
import ViewDetails from './components/ViewDetails';
function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Maincontent/>}/>
        <Route path='/view_restuarant/:id' element={<ViewDetails/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
