import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home/Home";
import List from "./page/Home/List";
import Add from "./page/Home/Add";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "./service/productsService";

function App() {

  return (
      <>
        <div className={'container-fluid'}>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'register'} element={<Register/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<List/>}></Route>
                    <Route path={'add'} element={<Add/>}></Route>
                </Route>
            </Routes>
        </div>
      </>
  )
}

export default App;
