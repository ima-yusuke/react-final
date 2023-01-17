import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import Register from './pages/Register';
import Login from './pages/Login';
import { useState } from 'react';

function Main(){
    const [msg,setMsg] = useState("");
    const [user,setUser]=useState("");
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='register' element={<Register/>}/>
                    <Route path='login' element={<Login setUser={setUser}/>}/>
                    <Route path='*' element={<Nopage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;