import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h1>Sorry!</h1>
            <p>this page doesn't even excist</p>
            <Link to="/">return to Home Page</Link>
        </div>
     );
}
 
export default NotFound;