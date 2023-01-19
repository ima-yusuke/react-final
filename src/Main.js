import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
// import RegCompo from './pages/RegCompo';
import Login from './pages/Login';
import Test from './pages/Test';
import { useState } from 'react';
import JobAdmin from './pages/JobAdmin';
import Userlist from './pages/Userlist';
import JobAdminDel from './pages/JobAdminDel';
import UserDelList from './pages/UserDelList';
import SearchCompo from './pages/SearchCompo';
import Employer from './pages/Employer';
import Employerpost from './pages/Employerpost';
import Employeredit from './pages/Employeredit';
import JobDetails from './pages/JobDetails';
import Register from './pages/Register';
import Display from './pages/Display';

function Main() {
    const [msg, setMsg] = useState("");
    const [user, setUser] = useState("");
    const [like, setLike] = useState([])
    const [obj, setObj] = useState("nothing")
    const [word, setWord] = useState([]);
    const [item, setItem] = useState([]);
    const [tmpId, setTmpId] = useState(0);

    // const [login, setLogin] = useState("")
    const [role, setRole] = useState(1)
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout word={word} setWord={setWord} item={item} setItem={setItem} role={role} setRole={setRole}/>}>
                    <Route index element={<Home setMsg={setMsg} msg={msg} />} />
                    <Route path='about' element={<About />} /> {/* if path == /about then displaying componenet should be <About/> */}
                    <Route path='register' element={<Register/>}/>
                    <Route path='login' element={<Login setUser={setUser} setRole={setRole}/>}/>
                    <Route path='user' element={<Display/>}/>
                    <Route path='*' element={<Nopage />} />
                    <Route path='test' element={<Test />} />
                    <Route path='admin' element={<JobAdmin />}></Route>
                    <Route path='useradmin' element={<Userlist />}></Route>
                    <Route path='jobdel' element={<JobAdminDel />} />
                    <Route path='userdel' element={<UserDelList />} />
                    <Route path='employer' element={<Employer  tmpId={tmpId} setTmpId={setTmpId}/>}></Route>
                    <Route path='employerpost' element={<Employerpost />}></Route>
                    <Route path='employeredit'   element={<Employeredit tmpId={tmpId} setTmpId={setTmpId} />}></Route>
                    <Route path='search' element={<SearchCompo word={word} setWord={setWord} item={item} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;