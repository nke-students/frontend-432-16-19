import { useEffect, useState } from "react";
import axios from "axios";

export const Profile = ({token}) => {
    const [user, setUser] = useState(undefined)
    useEffect(() =>{
    axios.get('https://6060-nkestudents-backend1619-lehxnfc13uk.ws-eu88.gitpod.io/me/', {
    headers: {
        Authorization: `Bearer ${token}`
    }
    }).then(response => setUser(response.data))},
    [token]
    )
    localStorage.setItem('token', token);
    return (
        <div>
            <div>Token: {localStorage.getItem('token')}</div>
            <div>User: {JSON.stringify(user)}</div>
        </div>
    )
}