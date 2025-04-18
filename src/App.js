import React, { useState } from 'react';
import BoardMenu from './components/Board_Menu';
import Board from './components/Board';

function App() {
    const [setting, setSetting] = useState({
        win: false,
        boardWidth: 5,
        boardHeight: 5,
        mines: 0,
        flags: 0
    });
    return (
        <div>
            <BoardMenu setting={setting} setSetting={setSetting} />
            <Board setting={setting} setSetting={setSetting} />
        </div>
    );
}

export default App;