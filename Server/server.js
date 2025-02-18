const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/game', gameRoutes);
//routes
app.get('/', (req, res) => {
    res.send('Tic Toe App api is running!');
});

//route for making moves
app.post('./api/play', (req, res)=> {

    const {board, player} = req.body;
    //logic to update the board and check for winners
    res.json({message: 'move recieved !', board,nextPlayer : player === 'x' ? O: 'x'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));