import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Page Is not found</h1>
            <Link to="/" style={{marginTop : "15px", display: "block"}}>Go to Home Page</Link>
        </div>
    );
}
 
export default NotFound;