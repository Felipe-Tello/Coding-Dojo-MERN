import axios from "axios";
import { useState } from "react";

const FakeAPI = () => {
    
    const [responseUser, setResponseUser] = useState(null);
    const [responseCompany, setResponseCompany] = useState(null);
    const [responseBoth, setResponseBoth] = useState(null);

    const fetchUser = () => {
        axios
            .get(`http://localhost:8000/api/users/new`)
            .then((response) => {
                setResponseUser(response.data);
            });
    }
    const fetchCompany = () => {
        axios
            .get(`http://localhost:8000/api/companies/new`)
            .then((response) => {
                setResponseCompany(response.data);
            });
    }
    const fetchUserAndCompany = () => {
        axios
            .get(`http://localhost:8000/api/user/company`)
            .then((response) => {
                setResponseBoth(response.data);
            });
    }
    
    return (
        <div> 
            <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
                <div>
                    <button onClick={fetchUser}>Fetch User</button>
                    {responseUser == null ? <></> : 
                    <>
                        <h4>ID: {responseUser._id}</h4>
                        <h4>Email: {responseUser.email}</h4>
                        <h4>First Name: {responseUser.firstName}</h4>
                        <h4>Last Name: {responseUser.lastName}</h4>
                        <h4>Phone: {responseUser.phone}</h4>
                    </>
                    }
                </div>
                <div style={{margin:"0 5% 0 5%"}}>
                    <button onClick={fetchCompany}>Fetch Company</button>
                    {responseCompany == null ? <></> : 
                    <>
                        <h4>ID: {responseCompany._id}</h4>
                        <h4>Name: {responseCompany.name}</h4>
                        <br />
                        <h5>Direccion:</h5>
                        <ul>
                            <li>Calle: {responseCompany.direccion.calle}</li>
                            <li>Codigo Postal: {responseCompany.direccion.cp}</li>
                            <li>Ciudad: {responseCompany.direccion.cuidad}</li>
                            <li>Estado: {responseCompany.direccion.estado}</li>
                            <li>Pais: {responseCompany.direccion.pais}</li>
                        </ul>
                    </>
                    }
                </div>
                <div>
                    <button onClick={fetchUserAndCompany}>Fetch User and Company</button>
                    {responseBoth == null ? <></> :
                        <>
                            <h4>ID: {responseBoth.User._id}</h4>
                            <h4>Email: {responseBoth.User.email}</h4>
                            <h4>First Name: {responseBoth.User.firstName}</h4>
                            <h4>Last Name: {responseBoth.User.lastName}</h4>
                            <h4>Phone: {responseBoth.User.phone}</h4>
                            <br />
                            <h4>ID: {responseBoth.Empresa._id}</h4>
                            <h4>Name: {responseBoth.Empresa.name}</h4>
                            <br />
                            <h5>Direccion:</h5>
                            <ul>
                                <li>Calle: {responseBoth.Empresa.direccion.calle}</li>
                                <li>Codigo Postal: {responseBoth.Empresa.direccion.cp}</li>
                                <li>Ciudad: {responseBoth.Empresa.direccion.cuidad}</li>
                                <li>Estado: {responseBoth.Empresa.direccion.estado}</li>
                                <li>Pais: {responseBoth.Empresa.direccion.pais}</li>
                            </ul>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default FakeAPI;