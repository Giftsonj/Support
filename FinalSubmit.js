import React, { Component } from 'react';
import Header from './Header';

class FinalSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date().toLocaleString()
            // steRandomStr: Math.floor(Math.random() * 10000000 + 1000) 
        }
        // this.doSubmit = this.doSubmit.bind(this);
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
                    <h3> <i class="far fa-check-circle fa-3x" style={{ backgroundColor: "white", color: "green" }}></i> <p1>Additional Info Updated For Your Case Reference Number is </p1><b>{this.props.match.params.finalTicket}.</b></h3>
                </div>
            </div>
        );
    }
}
export default FinalSubmit;