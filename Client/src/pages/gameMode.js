import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameMode = () => {
    const navigate = useNavigate();

    const selectMode = (mode) => {
        localStorage.setItem('gameMode', mode);
        navigate('/game');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Select Game Mode</h1>
            <button
                onClick={() => selectMode('computer')}
                style={{
                    padding: '15px 30px',
                    fontSize: '18px',
                    margin: '10px',
                    background: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Play with Computer
            </button>
            <button
                onClick={() => selectMode('two-player')}
                style={{
                    padding: '15px 30px',
                    fontSize: '18px',
                    margin: '10px',
                    background: '#FF5722',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Play with Another Player
            </button>
        </div>
    );
};

export default GameMode;