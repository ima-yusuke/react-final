import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import Register from './pages/Register';
import Employer from './pages/Employer';
import JobDetails from './pages/JobDetails';
import Login from './pages/Login';
import { useState } from 'react';

function Main(){
    const [user,setUser]=useState("");
    const [ids, setIds] = useState();
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='register' element={<Register/>}/>
                    <Route path='login' element={<Login setUser={setUser}/>}/>
                    <Route path='*' element={<Nopage/>}/>
                    <Route path='employer' element={<Employer/>} ids={ids} />
                    <Route path='user' element={<JobDetails/>} setIds={setIds} ids={ids} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;