import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Rojoni')
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer');
        }
        else{
            setError('');
            console.log(name, email, password);
        }

    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value);
    
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);

    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange}
                type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input onChange={handlePasswordChange}
                 type="password" name="password" />
                <br />
                <input type="submit" value="Submit" required/>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;