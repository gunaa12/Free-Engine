import raw from './data.txt';
import App from './App';
import { render } from '@testing-library/react';
import {Component} from 'react';

export default class ReadInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokens: [],
        };
    }

    componentDidMount() {
        fetch(raw)
        .then(r => r.text())
        .then(text => {
            const lines = text.split("\n");
            lines.map((line, index) => {
                let newtokens = line.split(",");
                let temp = this.state.tokens;
                temp.push(newtokens);
                this.setState({ tokens: temp });
            })
        })
    }

    render() {
        if (this.state.tokens.length === 0) {
            return(
                <div></div>
            );
        } 
        else {
            return(
                <div>
                    
                    {
                        this.state.tokens.map((words) => {
                            return (
                                <div className = "appOutline">
                                    <App name = {words[0]} description = {words[1]} alternative = {words[2]}/>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
    }
}