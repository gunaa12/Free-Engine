import './index.css';
import React, {Component} from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import CheckIcon from '@mui/icons-material/Check';


// export default function 
class App extends Component {
    render() {
        return (
            <div className = "app">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default App;