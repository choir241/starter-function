import './App.css'
import { useState } from 'react'
import { Account, Client, ID } from "appwrite"

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(){
    try{
      const client = new Client()
        .setEndpoint("https://v16.appwrite.org/v1")
        .setProject("668840fe0017793b93a6");

      const user = new Account(client);

      await user.create(
        ID.unique(),
        email,
        password,
        name
      );

    }catch(err){
      console.error(err);
      throw new Error(`${err}`);
    }
  }

  return (
    <main>
      <h1>Test</h1>
      <form action="">
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={()=>registerUser()}>Login</button>

      </form>
    </main>
  )
}

export default App
