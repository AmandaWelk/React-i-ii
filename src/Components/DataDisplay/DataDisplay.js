import React, {Component} from 'react';
import Data from '../Data';
import './DataDisplay.css';

class DataDisplay extends Component {
    constructor() {
        super();

        this.state = {
            peopleData: Data
        };
    }

    render() {
        return (
            <div className="card">
              <div>
                  <h2></h2>
              </div>
            </div>
        )
    }
}

export default DataDisplay;