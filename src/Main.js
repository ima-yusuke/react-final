import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import RegCompo from './pages/RegCompo';
import Login from './pages/Login';
import Test from './pages/Test';
import { useState } from 'react';
import JobAdmin from './pages/JobAdmin';
import Userlist from './pages/Userlist';
import JobAdminDel from './pages/JobAdminDel';
import UserDelList from './pages/UserDelList';

function Main(){
    const [msg,setMsg] = useState("");
    const [user,setUser]=useState("");
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home setMsg={setMsg} msg={msg}/>}/>
                    <Route path='about' element={<About/>}/> {/* if path == /about then displaying componenet should be <About/> */}
                    <Route path='register' element={<RegCompo/>}/>
                    <Route path='login' element={<Login setUser={setUser}/>}/>
                    <Route path='*' element={<Nopage/>}/>
                    <Route path='test' element={<Test/>}/>
                    <Route path='admin' element={<JobAdmin/>}></Route>
                    <Route path='user' element={<Userlist/>}></Route>
                    <Route path='jobdel' element={<JobAdminDel/>}/>
                    <Route path='userdel' element={<UserDelList/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;