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
                <p>Description: {this.props.description}</p>
                <p>Alternative: {this.props.alternative}</p>
            </div>
        );
    }
}

export default App;