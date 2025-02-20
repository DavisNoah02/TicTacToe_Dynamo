import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username) {
            localStorage.setItem('username', username);
            console.log(localStorage.getItem('username')); 
            navigate('/gameMode');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Welcome to Tic Tac Toe</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    marginBottom: '20px',
                    width: '200px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
            <br />
            <button
                onClick={handleLogin}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Start Game
            </button>
        </div>
    );
};

export default Login;