// import ReactDOM from 'react-dom/client';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Layout from './pages/Layout';
// import Nopage from './pages/Nopage';
// import RegCompo from './pages/RegCompo';
// import Login from './pages/Login';
// import Table from './pages/Table';
// import { useState } from 'react';
// import SearchCompo from './pages/SearchCompo';

// function Main(){
//     const [msg,setMsg] = useState("");
//     const [user,setUser]=useState("");
//     const [like,setLike] = useState([])
//     const [obj,setObj] = useState("nothing")
//     const [word,setWord] = useState([]);
//     const [item,setItem] = useState([]);

//     return(
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout word={word} setWord={setWord} item={item} setItem={setItem}/>}>
//                     <Route index element={<Home setMsg={setMsg} msg={msg} fav={setLike}/>}/>
//                     <Route path='about' element={<About fa={like}/>}/> 
//                     <Route path='register' element={<RegCompo/>}/>
//                     <Route path='login' element={<Login setUser={setUser}/>}/>
//                     <Route path='table' element={<Table obj={obj} setObj={setObj}/>}/>
//                     <Route path='search' element={<SearchCompo word={word} setWord={setWord} item={item} />}/>
//                     <Route path='*' element={<Nopage/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// };
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SearchCompo from './pages/SearchCompo';

function Main() {
    const [msg, setMsg] = useState("");
    const [user, setUser] = useState("");
    const [like, setLike] = useState([])
    const [obj, setObj] = useState("nothing")
    const [word, setWord] = useState([]);
    const [item, setItem] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout word={word} setWord={setWord} item={item} setItem={setItem} />}>
                    <Route index element={<Home setMsg={setMsg} msg={msg} />} />
                    <Route path='about' element={<About />} /> {/* if path == /about then displaying componenet should be <About/> */}
                    <Route path='register' element={<RegCompo />} />
                    <Route path='login' element={<Login setUser={setUser} />} />
                    <Route path='*' element={<Nopage />} />
                    <Route path='test' element={<Test />} />
                    <Route path='admin' element={<JobAdmin />}></Route>
                    <Route path='user' element={<Userlist />}></Route>
                    <Route path='jobdel' element={<JobAdminDel />} />
                    <Route path='userdel' element={<UserDelList />} />
                    <Route path='search' element={<SearchCompo word={word} setWord={setWord} item={item} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default Main;