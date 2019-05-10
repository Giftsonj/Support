import React, { Component } from 'react';

class SubTech1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    render() {
        return (
            <div>
                <button type="button" className="btn" >Cisco Cat2k Switches 1</button>
                <button type="button" className="btn">Cisco Cat2k Switches 1</button>
                <button type="button" className="btn">Cisco Cat2k Switches 1</button>
            </div>

        );
    }
}
export default SubTech1;