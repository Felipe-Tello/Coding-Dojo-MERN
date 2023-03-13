const BigInversion = ({firstName, lastName, age, hairColor}) => {

    return (
        <div style={{width:"15vw", height:"fit-content", margin:"1% 0 1% 0", padding:"1%", border:"orange 2px solid", borderRadius:"5%"}}>
            <h3>{lastName}, {firstName}</h3>
            <h5>Age: {age}</h5>
            <h5>Hair Color: {hairColor}</h5>
        </div>
    );
}
 
export default BigInversion;