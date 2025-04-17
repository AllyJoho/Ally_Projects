import React, { useState } from 'react';
import styles from '../CSS/Board.module.css';

function Board({ width, height, mines }) {
    const [flags, setFlags] = useState(0);
    const [board, setBoard] = useState([]);

    const addFlag = () => {
        setFlags(prev => prev + 1);
    };

    // Board creation logic here...

    return (
        <div>
            <p>Flags: {flags}</p>
            <table>
                <tbody>
                {/* Generate board cells based on width and height */}
                {board.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td key={`${i}-${j}`} onClick={addFlag}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Board;

// import React, {Component} from 'react';
// import styles from '../CSS/Board.module.css';
//
// class Board extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             board: [],
//             boardWidth: 0,
//             boardHeight: 0,
//             flags: 0,
//             mines: 0,
//         };
//         this.createBoard = this.createBoard.bind(this);
//         this.addFlag = this.addFlag.bind(this);
//         this.selectRef = React.createRef();
//     }
//     createBoard() {
//         alert("createBoard");
//     }
//     addFlag() {
//         this.setState({flags: this.state.flags + 1});
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <table>
//                     <tbody>
//                     <tr><td>Cell1</td></tr>
//                     <tr><td onClick={this.addFlag}>Cell1</td></tr>
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
//
// export default Board;




//REMEMBER BASICS
// import React, { Component } from 'react';
//
// class Board extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }));
//     }
//
//     render() {
//         const { title } = this.props;
//         const { count } = this.state;
//
//         return (
//             <div>
//                 <h1>{title}</h1>
//                 <p>Count: {count}</p>
//                 <button onClick={this.handleClick}>
//                     Increment Count
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default Board;