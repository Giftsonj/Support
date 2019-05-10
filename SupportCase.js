import React, { Component } from 'react';
import Header from './Header';
import SubTech1 from './SubTech1';
import SubTech2 from './SubTech2';
import SubTech3 from './SubTech3';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel, AccordionItemButton, AccordionSection
} from 'react-accessible-accordion';
//import './App.css'
class SupportCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString(),
            bgColor: "",
            counter: 0,
            col: "white",
            textAreaContent:"",
            display1:false,
            display2:false,
            display3:false
            // btnTargetContent:""
        }
        this.strhandleEvent = this.strhandleEvent.bind(this);
        this.btnhandleEvent = this.btnhandleEvent.bind(this);
        this.SubTechClick = this.SubTechClick.bind(this);
    }

    strhandleEvent(evt) {

        if (evt.target.style["color"] != "yellow") {
            evt.target.style["color"] = "yellow";
            this.setState({
                counter: this.state.counter + 1
            });
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });
            evt.target.style["color"] = "black";
            
        }
    }
    btnhandleEvent(evt) {
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style["background-color"] = "white"
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
                this.setState({
                    textAreaContent: document.getElementById(evt.target.id).textContent
                })
            }
        }
    }
    SubTechClick(evt) {
        var buttons = document.getElementsByTagName("button");
        // alert(buttons)
        for (var i = 0; i < buttons.length; i++) {
            // console.log(buttons[i])
            // alert(evt.target.value)
            buttons[i].style["background-color"] = "white"
            // alert(buttons[i] == evt.target)
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
                if(evt.target.value == "1"){
                    const show1 = true;
                    this.setState({display1:show1})
                    this.setState({display2:!show1})
                    this.setState({display3:!show1})
                }  
                if(evt.target.value == "2"){
                    const show2 = true;
                    this.setState({display1:!show2})
                    this.setState({display2: show2})
                    this.setState({display3:!show2})
                }   
                if(evt.target.value == "3"){
                    const show3 = true;
                    this.setState({display1:!show3})
                    this.setState({display2:!show3})
                    this.setState({display3:show3})
                }   
            }
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <Header />
                    </div>
                    <div className="col-md-2">
                        <h3>Welcome :{this.props.match.params.username}</h3>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <p align="right">Favourite({this.state.counter}) </p>
                    </div>
                <div className="btnStyle">
                    <div className="col-md-12">
                        <button type="button" id={1} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 1&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                        <button type="button" id={2} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 2&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                        <button type="button" id={3} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 3&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                        <button type="button" id={4} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 4&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={5} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 5&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                    </div>
                    <div className="col-md-12">
                        <button type="button" id={6} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 6&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={7} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 7&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={8} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 8&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={9} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 9&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={10} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 10&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                    </div>
                </div>
                <div className="col-md-12">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemButton>
                                <div className="fas fa-angle-down rotate-Avail quick and effortless banking services near you.

icon fa-1x float" onClick={this.clickEvent}></div> <label className="float">Show more</label>
                            </AccordionItemButton>
                            <AccordionItemPanel>
                                <div className="btnStyle">
                                    <div className="col-md-12">
                                        <button type="button" id={11} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 11&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={12} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 12&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={13} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 13&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={14} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 14&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={15} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 15&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="button" id={16} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 16&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={17} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 17&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={18} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 18&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={19} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 19&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" id={20} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 20&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="clsTxtArea">
                    <label>Description</label>
                    <textarea rows="5" cols="120" value={this.state.textAreaContent} placeholder="Enter problem descripton here"></textarea>
                </div>
                <br/>
                <label>Technology</label>
                <div className="divTech">
               <div className="btnStyle">
                    <div className="col-md-6">
                        <button type="button" className="btn" value ={1} onClick={(e) => this.SubTechClick(e)}>Cisco Cat2k Switches 1</button>
                        <button type="button" className="btn" value ={2} onClick={(e) => this.SubTechClick(e)}>Cisco Cat2k Switches 2</button>
                        <button type="button" className="btn" value ={3} onClick={(e) => this.SubTechClick(e)}>Cisco Cat2k Switches 3</button>
                    </div>

                    <div className="sub tech 1col-md-6">
                    {this.state.display1 ? <SubTech1></SubTech1>:null}
                    {this.state.display2 ? <SubTech2></SubTech2>:null}
                    {this.state.display3 ? <SubTech3></SubTech3>:null}
                    </div>
                </div>
                </div>
                <br/>
                <div>
                    <label>Severity   </label><br/>
                    <button type="button" className="btn btn-default btn-circle"></button>
                    </div>
            </div>
        );
    }
}
export default SupportCase;



























// render : function() {
//     return (

//         // you can have the button's handleClick function
//         //change its status to clicked from unclicked in the state
//         //so then here you can do this:

// 	var yourBtn = this.state.buttonStatus;

// 	// so default is this style:
// 	var btnStyle = {
// 		backgroundColor: 'gray'
// 	}

// 	// but if it is clicked you will the style this way:
// 	if (yourBtn == 'clicked') {
// 		btnStyle = {
// 			backgroundColor: 'red'
// 		}
// 	}

//   <div>
//     <button 
//       onClick={this.handleClick} 
//       style={btnStyle}>Button</button>
//   </div>
// )}


