import React, { Component } from 'react';
import Header from './Header';
import FinalSubmit from './FinalSubmit';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date().toLocaleString()
            // steRandomStr: Math.floor(Math.random() * 10000000 + 1000) 
        }
        this.doSubmit = this.doSubmit.bind(this);
        // this.btnSubTech2 = this.btnSubTech2.bind(this);
        // this.doload = this.doload(this);
    }
    // btnSubTech2(evt){
    //     var buttons = document.getElementsByClassName("btnTech2");
    //     for (var i = 0; i < buttons.length; i++) {
    //          console.log(evt.target.value)
    //         buttons[i].style["background-color"] = "white"
    //         if (buttons[i] == evt.target) {
    //             evt.target.style["backgroundColor"] = "skyblue";
    //         }
    //     }
    // }
    // doload() {
    //     // alert()
    //     // let letRandom = Math.floor(Math.random() * 10000000 + 1000);
    //     // let letRandomStr = letRandom + "ABC";
    //     this.setState({
    //         steRandomStr: Math.floor(Math.random() * 10000000 + 1000)
    //     },()=>{console.log("jsssskj"+this.state.steRandomStr)})
    //     // alert(letRandomStr)
    //     console.log("jkj"+this.state.steRandomStr)
    // }

    doSubmit() {
        // alert()
        let letTicket = this.props.match.params.ticketNum;
        console.log(letTicket)
        console.log(this.props.history.push(`/FinalTicket/${letTicket}`))
        // this.props.history.push(`/Submit/${letRandomStr}`);
        this.props.history.push(`/FinalSubmit/${letTicket}`);

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <Header />

                    </div>
                </div>
                <hr></hr>
                <div className="submitCase">
                    <h3> <i class="far fa-check-circle fa-3x" style={{ backgroundColor: "white", color: "green" }}></i> <p1>Case Submitted, Your Case Reference Number is </p1><b>{this.props.match.params.ticketNum}.</b></h3>
                </div>
                <div className="add_info">
                    <label>ADDITIONAL INFORMATION (optional)</label>
                    <label>Contact Info</label>
                </div>
                <div>
                    <i className="far fa-envelope fa-1.5x" style={{ backgroundColor: "white", color: "skyblue" }}></i><span><p1>&nbsp;&nbsp;shunmuga@cisco.com</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <i className="fas fa-user fa-1.5x" style={{ backgroundColor: "white", color: "skyblue" }}></i><span><p1>&nbsp;&nbsp;Shanmuga Sundar V</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <i className="fas fa-fax fa-1x" style={{ backgroundColor: "white", color: "skyblue" }}></i><span><p1>&nbsp;&nbsp;22657809</p1></span>
                </div>
                <div>
                    <br />
                    <button type="button" style={{ backgroundColor: "skyblue", color: "white" }} className="clsSubmit" onClick={(e) => this.doSubmit(e)}> Submit Case </button>
                </div>
            </div>
        );
    }
}
export default Submit;