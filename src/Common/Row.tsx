import Square from "./Square";
import {Square as ISquare} from "../Types/Types"
import React from "react";

interface RowProps {
    rowIndex: number,
    cells: ISquare[],
}

const Row: React.FC<RowProps> = ({rowIndex, cells}) => {
    const row = cells.map((cell, colIndex) => {
        return <Square row={rowIndex} column={colIndex} value={cell.value}/>
    })
    return <>
        {row}
    </>
}

export default Row;