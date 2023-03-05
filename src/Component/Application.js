import { useState } from "react";
import axios from "axios"
import { Profile } from "./Profile";


export const Application = ({name}) => {
const [status, setStatus] = useState(undefined)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const auth = () => {
    axios.post('https://6060-nkestudents-backend1619-lehxnfc13uk.ws-eu88.gitpod.io/auth/', {
        email,
        password
    }).then((response) => setStatus(response.data))
    }
    return (
        <div>
        {!status ? (
            <div>
            Authentification

            Email: <input onChange={(e) => setEmail(e.target.value)}/>
            Password: <input onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={auth}>Auth</button>
            <div/>
                token: {localStorage.getItem('token')}

            </div>

            ): <Profile token={status.token}/> }
        </div>
    )
}