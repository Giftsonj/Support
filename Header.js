import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    render() {
        // return (
        //     <div>
        //         <div className="col-md-7"><img src={require('./cisco-logo.png')} width="100" height="100" />
        //         <h3>SUPPORT CASE MANAGER</h3>
        //         </div>

        //     </div>

        // );
        var style = { "marginLeft": "20px" }
        var style2 = { "paddingTop": "54px", "fontSize": "15px" }
        return (
            <div>
                <div style={style}>
                    <img src={require('./cisco-logo.png')} width="100" height="100" className="pull-left" />
                    <div style={style2}><b>Support Case Manager</b></div>
                </div>
            </div>
        );
    }
}
export default Header;