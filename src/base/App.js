import './index.css';
import React, {Component} from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import CheckIcon from '@mui/icons-material/Check';


// export default function 
class App extends Component {
    render() {
        return (
            <div class = "app">
                <h2>{this.props.name}</h2>
                <p className = "description">Description: {this.props.description}</p>
                <p className = "alternative">Alternative: {this.props.alternative}</p>
                <p>Alternative Link: <a href = {this.props.link}>Here!</a></p>
                <img className = "appImg" src = {this.props.image}></img>
            </div>
        );
    }
}

export default App;