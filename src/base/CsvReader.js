import { useState } from 'react';
import { useEffect } from 'react';
import raw from './data.csv';

export default function CsvReader(){
    const [csvData, setCsvData] = useState(undefined);
    const csvFile = './data.csv';

    useEffect( () => {
        fetch(raw)
        .then(r => r.text())
        .then(text => {
            console.log('text encoded:', text);
            setCsvData(text);
        })
    })
    
    return(
        <div>
            <div className="gcse-search"/>
            {csvData ? csvData: ''}
            <p>Hello</p>
        </div>
    );

}