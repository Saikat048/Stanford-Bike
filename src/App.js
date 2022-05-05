import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './components/Additem/Additem';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error'; 
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Manageitem from './components/Manageitem/Manageitem';
import Myitem from './components/Myitem/Myitem';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ShowDetail from './components/ShowDetail/ShowDetail';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/inventory/:inventoryId' element={<RequireAuth>
          <ShowDetail></ShowDetail>
        </RequireAuth>}></Route>

        <Route path='/myitem/' element={<RequireAuth>
          <Myitem></Myitem>
        </RequireAuth>}></Route>

        <Route path='/manageitem' element={<RequireAuth>
          <Manageitem></Manageitem>
        </RequireAuth>}></Route>

        <Route path='/additem' element={<RequireAuth>
          <Additem></Additem>
        </RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
