import {useState} from "react";

const HookForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    return (
        <div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10%"}}>
                <div>
                    <form>
                        <div>
                            <label>First Name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input type="password" value={passwordCon} onChange={(e) => setPasswordCon(e.target.value)}/>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>Your Form Data</h3>
                    <br />
                    <h5>First Name: {firstName}</h5>
                    <h5>Last Name: {lastName}</h5>
                    <h5>Email: {email}</h5>
                    <h5>Password: {password}</h5>
                    <h5>Confirm Password: {passwordCon}</h5>
                </div>
            </div>
        </div>
    );
}
 
export default HookForm;