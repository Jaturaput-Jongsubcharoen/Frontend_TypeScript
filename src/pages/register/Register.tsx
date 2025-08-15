import { useState } from "react";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_INDEX_URL}/auth/register`, {
            email,
            username,
            password,
        });
        setMessage(`Registered successfully!: ${response.status}`);

        } catch (error: any) {
        setMessage(`Registered failed: ${error.message}`);
        }

    };


    return (
        <>
            <form onSubmit={onSubmit}>
            <br />
            <input type="text" placeholder='Type your E-mail.' value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} required/>
            <br />
            <input type="text" placeholder='Type your name' value={username} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} required/>
            <br />
            <input type="password" placeholder='Type your password' value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} required/>
            <br />
            <button type='submit'>Register</button>
            </form> 
            <br />
            {message ? <p>{message}</p> : null }
        </>
    )
}
export default Register