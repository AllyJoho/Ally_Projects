import React, { useState, useEffect } from 'react';

function BoardMenu({ setting, setSetting }) {
    return <div>Win is {setting.win ? "ON" : "OFF"}</div>;
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log(setting);
    // }, [setting]); // Run effect when count or color changes
    // const handleIncrement = () => setCount(count + 1);
    // return (
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={handleIncrement}>Increment</button>
    //         <button onClick={() => setSetting({win: !setting.win})}>Toggle Win</button>
    //     </div>
    // );
}

export default BoardMenu;

// import React, {Component} from 'react';
// import styles from '../CSS/Board_Menu.module.css';
//
// class Board_Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             difficulty: 'easy',
//             win: false,
//             board: null
//         };
//         this.createBoard = this.createBoard.bind(this);
//         this.selectRef = React.createRef();
//     }
//     tieBoard(board){
//         this.setState({board: board});
//         this.createBoard();
//
//     }
//     setBoard() {
//         const selectedValue = this.selectRef.current.value;
//         if (selectedValue === 'D1') {
//             this.setState({difficulty: 1});
//             this.board.setState({
//                 boardWidth: 0,
//                 boardHeight: 0,
//                 mines: 0,
//             })
//         }
//         else if (selectedValue === 'D2') {
//             this.setState({difficulty: 1});
//         }
//         else if (selectedValue === 'D3') {
//             this.setState({difficulty: 1});
//         }
//         else if (selectedValue === 'D4') {
//             this.setState({difficulty: 1});
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Minesweeper</h1>
//                 <div className={styles.menu}>
//                     <select id="difficultyDropdown" ref={this.selectRef}>
//                         <option value="D1">Easy</option>
//                         <option value="D2">Medium</option>
//                         <option value="D3">Hard</option>
//                         <option value="D4">Expert</option>
//                     </select>
//                     <div className={styles.initButton} onClick={this.createBoard}>
//                         Create Board
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Board_Menu;