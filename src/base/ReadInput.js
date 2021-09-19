import React, { useState } from 'react';
import { useEffect } from 'react';
import raw from './data.txt';
import App from './App';

let data_points;

function ReadInput(){
    const [csvData, setCsvData] = useState(undefined);

    const [tokens, setToken] = useState()


    useEffect( () => {
        fetch(raw)
        .then(r => r.text())
        .then(text => {
            const lines = text.split("\n");
            lines.map((line, index) => {
                let tokens = line.split(",");
               setToken(tokens)
            })
        }) 
    },[])

    return(
        <div>
            <div className="gcse-search"/>
            {
                tokens.map((token) => {
                    return(
                        <App name = {tokens}/>
                    );
                })
            }
            <p>hello</p>
        </div>
    );
}

function renderApps() {
    fetch(raw).then(r => r.text())
    .then(text => {
        text.split("\n").map(({line}) => {
        console.log(typeof(line));
        console.log(line);
        const tokens = line.split(",");
            <App name = {tokens[0]}/>
        });
    })
}

export default ReadInput;