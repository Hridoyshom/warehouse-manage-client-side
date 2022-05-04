import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='home' element={<Home></Home>}  >

        </Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
