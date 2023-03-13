import {useState} from "react";

const MoreForms = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    const enviarDatos =(e) =>{
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordCon("");
    }

    return(
        <div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
                <form onSubmit={enviarDatos}>
                    <div>
                        <span>First Name</span>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        {firstName.length >0 && firstName.length <2 ? <p style={{color:"red"}}>El nombre debe ser mayor a 2 caracteres</p> : <></>}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        {lastName.length >0 && lastName.length <2 ? <p style={{color:"red"}}>El Apellido debe ser mayor a 2 caracteres</p> : <></>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {email.length >0 && !email.includes("@") ? <p style={{color:"red"}}>Ingrese un correo valido</p>:<></>}
                        {email.length >0 && email.length <2 ? <p style={{color:"red"}}>El Email debe ser mayor a 2 caracteres</p> : <></>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {password.length >0 && password.length <8 ? <p style={{color:"red"}}>La contraseña debe ser mayor a 8 caracteres</p> : <></>}
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" value={passwordCon} onChange={(e) => setPasswordCon(e.target.value)}/>
                        {passwordCon.length >0 && passwordCon !== password ? <p style={{color:"red"}}>Las contraseñas deben coincidir</p> :<></>}
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default MoreForms;