import React, { useState } from 'react';
import { useEffect } from 'react';
import raw from './data.csv';

let data_points;

function ReadInput(){
    const [csvData, setCsvData] = useState(undefined);

    useEffect( () => {
        fetch(raw)
        .then(r => r.text())
        .then(text => {
            const lines = text.split("\n");
            for (let line_num = 1; line_num < lines.length; line_num++) {
                let temp = lines[line_num].split(",");
                   
            }
            setCsvData(text);
        })
    })

    return(
        <div>
            <div className="gcse-search"/>
            {csvData ? csvData: ''}
        </div>
    );

}

export default ReadInput;