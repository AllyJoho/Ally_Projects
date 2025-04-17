import React from 'react';
import Board_Menu from './components/Board_Menu';
import Board from './components/Board';

let board_element = new Board();
let menu_element = new Board_Menu();
menu_element.tieBoard(board_element);

function App() {
  return (
    <div className="App">
      {board_element.render()}
      {menu_element.render()}
    </div>
  );
}

export default App;
