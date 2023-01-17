import { Outlet, Link } from "react-router-dom";
function Layout(){
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: 'pink',display:'flex',width:'100%',justifyContent:'center'}}>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>

            <Outlet/>
        </>
    )
};
export default Layout;