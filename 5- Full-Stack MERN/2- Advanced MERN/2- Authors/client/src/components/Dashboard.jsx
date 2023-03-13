import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [authorsList, setAuthorsList] = useState([]);

    //Show Product List 
    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                setAuthorsList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    //Delete Product 
    const deleteAuthor = id => {
        axios.delete("http://localhost:8000/api/authors/delete/"+id)
            .then(res => {
                //Update productList
                let newAuthorsList = authorsList.filter(author => author._id !== id);
                setAuthorsList(newAuthorsList);
            })
    }

    //Sort Author List
    const sortedAuthorsList = authorsList.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <h2>Favorite authors</h2>
                <Link to={`/new`}>Add an author</Link>
                <h4>We have quotes by:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedAuthorsList.map((author, index)=> (
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;