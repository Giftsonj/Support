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
        this.state = {
            date: new Date().toLocaleString(),
            bgColor: ""
        }
        this.handleEvent = this.handleEvent.bind(this);
        // this.btnColorChange = this.btnColorChange.bind(this);

    }
    handleEvent() {
        this.setState({
            bgColor: 'yellow'
        })
    }
    clickEvent() {
        // alert()
    }
    // btnColorChange(){
    //     this.setState({
    //         bgColor: 'blue'
    //     })
    // }
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
                        <button type="button" className="btn" >Cisco Cat2k Switches 1&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 2&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 3&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 4&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 5&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>

                    </div>
                    <div className="col-md-12">
                        <button type="button" className="btn">Cisco Cat2k Switches 6&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 7&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 8&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 9&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                        <button type="button" className="btn">Cisco Cat2k Switches 10&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
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
                                        <button type="button" className="btn">Cisco Cat2k Switches 11&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 12&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 13&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 14&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 15&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="button" className="btn">Cisco Cat2k Switches 16&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 17&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 18&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 19&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
                                        <button type="button" className="btn">Cisco Cat2k Switches 20&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.handleEvent}></i></button>
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
            </div>

        );
    }
}
export default SupportCase;