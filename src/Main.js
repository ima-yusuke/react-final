import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import RegCompo from './pages/RegCompo';
import Login from './pages/Login';
import Table from './pages/Table';
import { useState } from 'react';

function Main(){
    const [msg,setMsg] = useState("");
    const [user,setUser]=useState("");
    const [like,setLike] = useState([])
    const [obj,setObj] = useState("nothing")
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home setMsg={setMsg} msg={msg} fav={setLike}/>}/>
                    <Route path='about' element={<About fa={like}/>}/> 
                    <Route path='register' element={<RegCompo/>}/>
                    <Route path='login' element={<Login setUser={setUser}/>}/>
                    <Route path='table' element={<Table obj={obj} setObj={setObj}/>}/>
                    <Route path='*' element={<Nopage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;