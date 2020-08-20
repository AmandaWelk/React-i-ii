import React, {Component} from 'react';
import Data from './Data';
import DataDisplay from './DataDisplay/DataDisplay';

class StateHolder extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <DataDisplay />
            </div>
        )
    }
}

export default StateHolder;