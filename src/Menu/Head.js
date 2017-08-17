import React, { Component } from 'react';


class Head extends Component {

    
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: '' + this.state.width * 0.05,
        fontFamily: 'Impact',
        height: this.state.width * 0.055,
        marginLeft: this.state.width * 0.05,
        marginRight: this.state.width * 0.05,
        marginTop: 0,
        marginBottom: 0,

        color: '#bcd8e2',
        borderRadius: '5px 5px 5px 5px',
        backgroundColor : '#00294c'
        };

        return(
            <h1 className = 'head' style = {style}>Tanks.ml</h1>
        );

    }
}

export default Head;