import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_INDEX_URL}/auth/register`, {
        email,
        name,
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
        <input type="text" placeholder='Type your name' value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} required/>
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

export default App
