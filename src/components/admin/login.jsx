import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import Button from '@mui/material/Button';
import MainPage from './main';
import { UserContext } from '../../App';


export default function Login() {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123456');
    const [isError, setIsError] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http:localhost:8787/login', {
            action: 'POST',
            data: {
                name: username,
                password,
            },
        }).then((res) => {
            setIsAuth(true);
            UserContext.isAdmin = true;
        }).catch((err) => {
            console.log(err);
            setIsError(true);
        });
    };

    return (<>
        {isAuth ? <MainPage /> :
            <div>
            <form onSubmit={handleSubmit}>
                <h1>Admin Login</h1>  
                <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField 
                    id="password" 
                    label="Password" 
                    type='password'
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit' variant="contained">Login</Button>

            </form>

            {isError && <Alert severity="error">The username or password provided were incorrect!</Alert>}
            {isAuth && <Alert severity="success">You have successfully logged in!</Alert>}

        </div>}
        </>);
}
