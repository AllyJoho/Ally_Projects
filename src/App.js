import React, { useState } from 'react';
import BoardMenu from './components/Board_Menu';
import Board from './components/Board';

function App() {
  const [settings, setSettings] = useState({
    width: 8,
    height: 8,
    mines: 10,
    flags: 0,
  });

  return (
      <div className="App">
        <BoardMenu onSettingsChange={setSettings} />
        <Board {...settings} />
      </div>
  );
}

export default App;

// import React from 'react';
// import Board_Menu from './components/Board_Menu';
// import Board from './components/Board';
//
// let board_element = new Board();
// let menu_element = new Board_Menu();
// menu_element.tieBoard(board_element);
//
// function App() {
//   return (
//     <div className="App">
//       {board_element.render()}
//       {menu_element.render()}
//     </div>
//   );
// }
//
// export default App;
