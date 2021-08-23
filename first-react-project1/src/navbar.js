import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Rida Blog</h1>
            <div className="links">
                <div className="normal"><a href="/">home</a>
                <Link to="/blogs">new Blog</Link>
                </div>
                <div className="when">
                <Link to="/navbar">i</Link>
                </div>
            </div>
            
        </nav>
    );
}
 
export default Navbar;