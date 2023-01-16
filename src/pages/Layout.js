import { Outlet, Link } from "react-router-dom";
function Layout({ setWord, item }) {
    const keyword = (e) => {
        e.preventDefault();
        const chara = e.target.value.toLowerCase();
        // console.log(chara);
        const searchName = item.filter(name => name.fname.toLowerCase().includes(chara))
        // console.log(searchName)
        setWord(searchName)
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
                <form onSubmit={keyword}>
                    <input type="text" placeholder="Search" name="keyword" onChange={(e)=> keyword(e)} />
                    <Link to="/search" type="button">Search</Link>
                </form>
               </nav>
            <Outlet />
        </>
    )
};
export default Layout;