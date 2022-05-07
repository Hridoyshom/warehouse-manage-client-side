import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import NotFound from './NotFound';
import Items from './Items';
import Login from './Login';
import Register from './Register';
import RequireAuth from './RequireAuth';

function App() {
  console.log(process.env);
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}  >

        </Route>
        <Route path='/items' element={<RequireAuth>
          <Items></Items>
        </RequireAuth>
        } ></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}  ></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
