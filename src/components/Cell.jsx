import React, { useState, useEffect } from 'react';

class Cell {
    constructor(board, position) {
        this.board = board;
        this.position = position;
        this.show()
    }
    show(){
        return (
            <td>
                hi
            </td>
        )
    }
}

function Cell1(props) {
    const [flag, setFlag] = useState(false);
    const board = props.board;
    const position = props.position;
    const run = () => {
        alert("Clicked");
    }
    function toggleFlag(event) {
        event.preventDefault(); // Optional: Prevents the default context menu
        alert("Right Clicked");
    }

    return (
        <td onClick={run} onContextMenu={toggleFlag}>
            &nbsp;
        </td>
    );
}

export default Cell;