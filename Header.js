import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    render() {
        return (
            <div>
                <h3>Support Case Manager</h3>

            </div>

        );
    }
}
export default Header;