import React, { Component } from 'react';
import Header from './Header';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date().toLocaleString()
        }
        // this.btnSubTech2 = this.btnSubTech2.bind(this);
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
    render() {
        return (
            <div>
                <Header/>
            
            <div>

            </div>
            <div className="submitCase">
            
               <h3> <i class="far fa-check-circle fa-3x"></i> Case Submitted, Your Case Reference Number is</h3> 
            </div>
            </div>
        );
    }
}
export default Submit;