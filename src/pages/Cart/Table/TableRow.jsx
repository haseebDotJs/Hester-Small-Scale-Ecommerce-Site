import React from "react";

const TableRow = ( data ) => {
    console.log('data in table row', data);
    return (
        <tr>
            {data.map((item) => {
                return <td key={item}>{item.title}</td>;
            })}
        </tr>
    );
};

export default TableRow;