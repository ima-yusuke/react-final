import { Outlet, Link , useNavigate} from "react-router-dom";
import jsonSrv from "../Services/jsonSrv";

function Layout({ setWord, item, setItem }) {
    const nvigate = useNavigate();
    const keyword = (e) => {
        e.preventDefault();

        const chara = e.target.value.toLowerCase();
        // console.log(chara);

        jsonSrv.get('getJob.php')
        .then(res=>{
            setItem(res.data);
            // console.log(res.data)
            // console.log(typeof(res.data))
            const searchName = item.filter(name => name.title.toLowerCase().includes(chara))
            // console.log(searchName)
            nvigate('/search');
            setWord(searchName);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About US</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/table">Table</Link>
                    </li>
                </ul>
                <form >
                    <input type="text" placeholder="Search title" name="keyword" onChange={(e)=> keyword(e)} />
                    {/* <button>
                        <Link to="/search" type="button">Search</Link>
                    </button> */}
                </form>
               </nav>
            <Outlet />
        </>
    )
};
export default Layout;