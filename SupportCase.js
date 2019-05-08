import React, { Component } from 'react';
import Header from './Header';
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
        // var btnColorChange = this.state.button;
        this.state = {
            date: new Date().toLocaleString(),
            bgColor: "",
            counter: 0,
            col: "white"
        }
        this.strhandleEvent = this.strhandleEvent.bind(this);
        this.btnhandleEvent = this.btnhandleEvent.bind(this);


    }

    // componentDidMount() {
    //     this.strhandleEvent();
    //   }
    strhandleEvent(evt) {
        // var x = document.getElementsByClassName("icon").classList.add("mystyle");

        // $(".fa-star").click(function () {
        //     $(this).css({ "color": "yellow" }).removeClass('fa-star').addClass('fa-star');
        // });
        //  var x = document.getElementsByClassName("icon")
        //   alert(x)
        // this.setState({
        //     bgColor: 'yellow'
        // })

        evt.target.style["color"] = "yellow";
    }
    btnhandleEvent(evt) {
        // debugger;
        // let x = evt.target.value;
        // let x  = evt.target.idbtn1;
        // //alert(x)
        var buttons = document.getElementsByTagName("button");
        console.log(buttons)
        // var buttons1 = document.getElementById("idbtn1");
        // var buttonsCount = buttons.length;
        // console.log(" kddikkkk"+ buttons1)
        //  var counter = 0;
        // var event = evt.target.value;
        // alert(this.selected)
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style["background-color"] = "white"
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
            }
        }


        // if (!(evt.target) == true) {
        // if (temp == false) {
        //     alert("hi")
        //     evt.target.style["backgroundColor"] = "white";
        // }
        // }
        //     else if (!(event == this.state.selected)) {
        //         event.target.style["backgroundColor"] = "skyblue";
        //     }
        //     // alert(this.id);
        // }

        //  console.log("hiiii" + evt.target.style)
        // 

        //  var col ="col"+
        // var event = evt.target;
        // this.setState({
        //     col: "white"
        // }, () => {
        //     console.log(event);
        //     event.style["backgroundColor"] = "skyblue";
        // })
        // alert(this.state.selected)
        // alert(evt.target.value)
        // alert(evt.target)
        // if (evt.target) {
        //     evt.target.style["backgroundColor"] = "skyblue";
        // }
        // // alert(x)
        // //  x=0;
        // if (x != "1") {
        //     evt.target.style["backgroundColor"] = "white";
        // }
        // x = 0;


        // return 'btn ' + ((evt.target.value === this.state.selected) ? 'active' : 'default');
        // alert('btn ' + ((evt.target.value === this.state.selected) ? 'active' : 'default'))
        // this.setState({
        //     col: "green"
        // })
        // evt.target.style["backgroundColor"] = "skyblue";
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
                <div className="btnStyle">
                    <div className="col-md-12">
                        <button type="button" value={1} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 1&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" value={2} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 2&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" value={3} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 3&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" value={4} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 4&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" value={5} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 5&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>

                    </div>
                    <div className="col-md-12">
                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 6&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 7&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 8&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 9&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 10&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                    </div>

                </div>

                <div className="col-md-12">
                    <Accordion allowZeroExpanded="true">
                        <AccordionItem>
                            <AccordionItemButton>
                                <div className="fas fa-angle-down rotate-icon fa-1x float" onClick={this.clickEvent}></div> <label className="float">Show more</label>
                            </AccordionItemButton>
                            <AccordionItemPanel>
                                <div className="btnStyle">
                                    <div className="col-md-12">
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 11&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 12&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 13&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 14&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 15&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 16&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 17&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 18&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 19&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                        <button type="button" onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 20&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="clsTxtArea">
                    <label>Description</label>
                    <textarea rows="5" cols="120" placeholder="Enter problem descripton here"></textarea>
                </div>
                <label>Technology</label>
                <div className="row">
                    <div className="col-md-6">
                        <button type="button" className="btn" onClick={this.btnMaster1} value={20}>Cisco Cat2k Switches 1</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 2</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 3</button>
                    </div>

                    <div className="col-md-6">
                        <button type="button" className="btn" >Cisco Cat2k Switches 1</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 2</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 3</button>
                    </div>
                    <div className="col-md-6">
                    </div>
                    {/* <div className="col-md-6">
                        <button type="button" className="btn" >Cisco Cat2k Switches 1</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 2</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 3</button>
                    </div>
                    <div className="col-md-6">                       
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="btn" >Cisco Cat2k Switches 1</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 2</button>
                        <button type="button" className="btn">Cisco Cat2k Switches 3</button>
                    </div> */}
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


