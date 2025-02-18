
import React, { useState } from 'react';
import axios from './api'; // Import Axios instance
import { motion } from 'framer-motion';

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [score, setScore] = useState({ X: 0, O: 0 });

    const handleClick = (index) => {
        if (board[index]) return; // Ignore filled cells
        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);

        // Switch player turn
        const nextPlayer = player === 'X' ? 'O' : 'X';
        setPlayer(nextPlayer);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setPlayer('X');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Tic Tac Toe</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 100px)',
                    gap: '10px',
                    justifyContent: 'center',
                }}
            >
                {board.map((cell, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleClick(index)}
                        style={{
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            background: '#f0f0f0',
                            border: '2px solid #ccc',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {cell}
                    </motion.div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Turn: {player}</h3>
                <h3>Score</h3>
                <p>
                    X: {score.X} | O: {score.O}
                </p>
            </div>
            <button
                onClick={resetGame}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Restart Game
            </button>
        </div>
    );
};

export default App;

