import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import styles from '../CSS/Board.module.css';

function Board({ setting, setSetting }) {
    // return (
    //     <button onClick={() => setSetting({win: !setting.win})}>
    //         {setting.win ? "Lose" : "Win"}
    //     </button>
    // );
    let gridComponents = [];
    for (let row = 0; row < setting.boardHeight; row++) {
        let rowComponents = [];
        for (let col = 0; col < setting.boardWidth; col++) {
            rowComponents.push(
                <td>
                    Row {row}, Col {col}
                </td>
            );
        }
        gridComponents.push(<tr key={row}>{rowComponents}</tr>);
    }
    return (
        <div>
            <table className={styles.table}>
                <tbody>
                {gridComponents}
                </tbody>
            </table>
        </div>
    );
}

export default Board;
