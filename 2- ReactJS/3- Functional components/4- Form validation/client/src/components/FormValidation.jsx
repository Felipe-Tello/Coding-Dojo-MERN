import React, { useReducer } from 'react';

const initialState = {
    firstName:{
        value: "",
        error: null
    },
    lastName:{
        value: "",
        error: null
    },
    email:{
        value: "",
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    }
};

const FormValidation = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: {
                value: value,
                error: validate(name, value)
            }
        });
    }

    function validate(name, value) {
        switch(name) {
            case "firstName":
                if (value.length < 2) return "First name must have at least 2 characters";
                break;
            case "lastName":
                if (value.length < 2) return "Last name must have at least 2 characters";
                break;
            case "email":
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid";
                break;
            default:
                return null;
        }
        return null;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errors = Object.values(state).reduce((acc, current) => current.error ? [...acc, current.error] : acc, []);
        if (errors.length) {
            console.error("Form has errors:", errors);
        } else {
            console.log("Form is valid, data:", state);
        }
    }

    return (
        <div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <span>First Name:</span>
                            <input name="firstName" onChange={handleChange} value={state.firstName.value}/>
                            {state.firstName.error !== null && (<p className="error">{state.firstName.error}</p>)}
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Last Name:</span>
                            <input name="lastName" onChange={handleChange} value={state.lastName.value}/>
                            {state.lastName.error !== null && (<p className="error">{state.lastName.error}</p>)}
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Email:</span>
                            <input name="email" onChange={handleChange}/>
                            {state.email.error !== null && (<p className="error">{state.email.error}</p>)}
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FormValidation;