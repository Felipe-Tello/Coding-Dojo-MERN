import {Link}  from "react-router-dom";
const Error = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h2>Favorite authors</h2>
                <Link to={`/`}>Home</Link>
                <h1>We're sorry, but we couldn't find the author you're looking for.</h1> 
                <h3>Do you want to add this author to our database?</h3>
                <Link to={`/new`}>Add an author</Link>
            </div>
        </div>
    );
}
 
export default Error;