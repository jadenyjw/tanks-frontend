import React, { Component } from 'react';
import Scroll, {scroller} from 'react-scroll';


class Head extends Component {

    
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.scrollToInstructions = this.scrollToInstructions.bind(this);
    }

    scrollToInstructions() {
        var scrollAmount = this.state.width * 0.5;
        Scroll.animateScroll.scrollTo(scrollAmount);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    render() {

        const style = {
        height: this.state.width * 0.07,
        width: this.state.width *0.9,
        margin: '0px',

        color: '#FDE3A7',
        
        };

        const buttonStyle = {
            backgroundColor:'#3E848D',

            width: this.state.width / 8 + 'px',
            height: this.state.width *0.05 + 'px',

            textAlign: 'centre',
            fontSize: this.state.width * 0.02 + 'px',
            display: 'inline-block',

            margin: this.state.width / 100 + 'px'
        }
        
        const titleStyle = {
            position: 'absolute',
            top: this.state.width * 0.005   + 'px',
            bottom: this.state.width * 0.005   + 'px',
            left: this.state.width / 3 + 'px',
            right: this.state.width/ 3 +'px',
            fontSize:  this.state.width * 0.06   + 'px',
            width: this.state.width / 3 + 'px',
            display: 'inline-block',
            horizontalAlign: 'center'
        }

        const bgroupStyleL= {
            margin: '0px',
            position: 'absolute',
            left:'0px',
            width: this.state.width / 3 + 'px',
            display: 'inline-block',
        }

        const bgroupStyleR= {
            margin: '0px',
            position: 'absolute',
            right:'0px',
            width: this.state.width / 3 + 'px',
            display: 'inline-block',
        }


        return(
            <div style = {style}>
                <div style = {bgroupStyleL}>
                    <button style={buttonStyle} onClick={this.scrollToInstructions}>Instructions</button>
                    <button style={buttonStyle}>placeholder</button>
                </div>
                
                <div style = {titleStyle}><b>Tanks.ml</b></div>
                
                <div style = {bgroupStyleR}>
                    <button style={buttonStyle}>placeholder</button>
                    <button style={buttonStyle}>placeholder</button>
                </div >
            </div>
            
        );

    }
}

export default Head;