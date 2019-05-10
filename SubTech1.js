import React, { Component } from 'react';

class SubTech1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
        this.btnSubTech1 = this.btnSubTech1.bind(this);
    }
    btnSubTech1(evt){
        var buttons = document.getElementsByClassName("btnTech1");
        for (var i = 0; i < buttons.length; i++) {
            // alert(evt.target.value)
            buttons[i].style["background-color"] = "white"
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
            }
        }
    }
    render() {
        return (
            <div>
                <button type="button" onClick={(e) => this.btnSubTech1(e)} className="btnTech1" >Cisco Cat2k Switches 1</button>
                <button type="button" onClick={(e) => this.btnSubTech1(e)} className="btnTech1">Cisco Cat2k Switches 1</button>
                <button type="button" onClick={(e) => this.btnSubTech1(e)} className="btnTech1">Cisco Cat2k Switches 1</button>
            </div>
        );
    }
}
export default SubTech1;