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
            console.log("async")
            const lines = text.split("\n");
            lines.map((line, index) => {
                let newtokens = line.split(",");
                console.log(newtokens);
                let temp = this.state.tokens;
                temp.push(newtokens);
                this.setState({ tokens: temp });
            })
        })
        console.log("useEffect")
    }

    render() {
        console.log('render')
        console.log('tokens:' + this.state.tokens)
        if (this.state.tokens.length === 0) {
            return(
                <div></div>
            );
        } 
        else {
            return(
                <div>
                    <div className="gcse-search"/>
                    {
                        this.state.tokens.map((words) => {
                            return (
                                <App name = {words[0]} description = {words[1]} alternative = {words[2]}/>
                            );
                        })
                    }
                    <p>hello</p>
                </div>
            );
        }
    }
}