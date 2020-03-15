import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';

import './ButtonPlus.scss';

class ButtonPlus extends Component {
    render() {
        return (
            <div className="button-plus">
                <button className="add-btn">
                    <AddIcon className="plus-icon" />
                </button>
            </div>
        )
    }
}

export default ButtonPlus;