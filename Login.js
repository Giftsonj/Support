import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            pass: ""
        }

        this.updateUser = this.updateUser.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.updateDetails = this.updateDetails.bind(this);

    }
    updateUser(e) {
        this.setState({ user: e.target.value });
    }
    updatePass(e) {
        this.setState({ pass: e.target.value });
    }
    updateDetails(e) {
        // alert(this.state.pass)
        if (this.state.user == "cisco" && this.state.pass == "123") {
            this.props.history.push(`/Login/${this.state.user}`);
        }
        else {
            alert("Please enter a valid name");
        }
    }
    render() {
        var style ={"margin-left":"280px"}
        var style2 ={"padding-top": "54px","font-size":"18px"}
        return (
            <div>
                <div style={style}>
                <img src={require('./cisco-logo.png')} width="100" height="100"  className="pull-left"/>
                <div style={style2}><b>Support Case Manager</b></div>
                </div>
                {/* <div className="clsHeader">
                    <div className="col-md-7"><img src={require('./cisco-logo.png')} width="100" height="100" />
                    </div>
                    <div className="col-md-5">
                        <h3>Support Case Manager</h3>
                    </div>
                </div> */}
                <div className="col-md-7 clsLogin">
                    <h2>LOGIN</h2>

                    <form onSubmit={this.updateDetails}>
                        <label>Username:</label>
                        <input type="text" value={this.state.user} onChange={this.updateUser} required /><br />
                        <label>Password:</label>
                        <input type="password" value={this.state.pass} onChange={this.updatePass} required /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;
