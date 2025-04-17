import React, {Component} from 'react';
import styles from '../CSS/Board.module.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardCreated: false,
            board: [],
            boardWidth: 0,
            boardHeight: 0,
            flags: 0,
            mines: 0,
            difficulty: 'easy',
        };
        this.createBoard = this.createBoard.bind(this);
        this.selectRef = React.createRef();
    }
    createBoard() {
        const selectedValue = this.selectRef.current.value;
        if (selectedValue === 'D1') {
            alert("easy");
        }
        else if (selectedValue === 'D2') {
            alert("medium");
        }
        else if (selectedValue === 'D3') {
            alert("hard");
        }
        else if (selectedValue === 'D4') {
            alert("expert");
        }
    }

    render() {
        return (
            <div>
                <h1>Minesweeper</h1>
                <div className={styles.menu}>
                    <select id="difficultyDropdown" ref={this.selectRef}>
                        <option value="D1">Easy</option>
                        <option value="D2">Medium</option>
                        <option value="D3">Hard</option>
                        <option value="D4">Expert</option>
                    </select>
                    <div className={styles.initButton} onClick={this.createBoard}>
                        Create Board
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;




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