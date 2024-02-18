"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const page = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e:any) => {
        e.preventDefault();

        try{
            const res = await axios.post('/api/register',{username,password });
            console.log(res.data);
        }catch(err:any){
            console.log(err.message);
        }
    }
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className=''>
            <h1 className='text-center mb-4 text-3xl font-bold'>Register</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input  value={username} onChange={(e)=>setUsername(e.target.value)} id='username' type="text" placeholder="Username" className="border-2 border-gray-300 p-2 rounded-lg w-full my-2 text-slate-800" />
                <label htmlFor="password">
                    Password
                </label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder="Password" className="border-2 border-gray-300 p-2 rounded-lg w-full my-2 text-slate-800" />
                <div className='flex items-center mt-3 justify-center'><button onClick={handleRegister} className='bg-blue-400 font-bold rounded-lg px-3 py-2' >Register</button></div>
                

            </form>
        </div>
        
    
      
    </div>
  )
}

export default page

