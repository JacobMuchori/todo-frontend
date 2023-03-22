import { useState } from "react";
import Link from 'next/link';

export default function Login() {

    const [user_name, SetUsername] = useState("")
    const [email, SetEmail ] = useState("")
    const [password, SetPassword] = useState("")
    
    return (
        <div>
        <form>
            <input type="text" placeholder="Please input your username" value={user_name} onChange={e => SetUsername(e.target.value)}></input>
            <input type="text" placeholder="Please input your email" value={email} onChange={e => SetEmail(e.target.value)}></input>
            <input type="text"placeholder="Please input your password" value={password} onChange={e => SetPassword(e.target.value)}></input>
            <input type="submit"></input>
            <Link href="/registration">Register here</Link>
        </form>
        </div>
    )
}