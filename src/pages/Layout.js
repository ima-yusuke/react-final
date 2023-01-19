import { Outlet, Link, useNavigate } from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";

function Layout({ setWord, item, setItem, role }) {
    const nvigate = useNavigate();
    const keyword = (e) => {
        e.preventDefault();

        const chara = e.target.value.toLowerCase();
        // console.log(chara);

        jsonSrv.get('getJob.php')
            .then(res => {
                setItem(res.data);
                // console.log(res.data)
                // console.log(typeof(res.data))
                const searchName = item.filter(name => name.title.toLowerCase().includes(chara))
                // console.log(searchName)
                nvigate('/search');
                setWord(searchName);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const jump =()=>{
        nvigate("/fav") 
    }
    const out =()=>{
        nvigate("/login") 
    }

    return (
        <>
            <nav id="nav"className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor:"transparent", display: 'flex', width: '100%', justifyContent: 'center' }}>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register"></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"></Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/fav"></Link>
                        </li>
                    </ul>
                </div>

                {sessionStorage.getItem("sid")!==null&&role==1 ?
                <div className="aaa">
                <button onClick={jump}>Favorite</button>
                <button onClick={out}>LOGOUT</button>
                <form>
                    <input type="text" placeholder="Search title" name="keyword" onChange={(e) => keyword(e)} />
                </form></div>:null

                }
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;