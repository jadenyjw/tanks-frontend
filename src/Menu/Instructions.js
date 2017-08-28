import React, { Component } from 'react';
import Scroll, {scroller} from 'react-scroll';


class Instructions extends Component {

    
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
            height: this.state.width * 0.7,
            width: this.state.width *0.7,
            padding:'1vw',
            margin: '0px',
            color: '#FDE3A7',
            display: 'inline-block',
            backgroundColor:'#22313f',
            overflow: 'auto',

            border: this.state.width * 0.01 + 'px outset #FDE3A7'
            };

        return(
            <div style = {style} className = 'instruction'>
                <h1>CONTROLS</h1>
                <p>
                    <strong>Basic Controls:</strong><br/>
                    W - move forward <br/>
                    S - move backward <br/>
                    A - turn tank left <br/>
                    D - turn tank right <br/>
                    SPACE BAR - shoot! <br/><br/>

                    <strong>Interesting Inqueries:</strong><br/>
                    If pressing SPACE BAR scrolls you on this page, click the game canvas to grant it focus. The issue will be fixed.<br/>
                    This webpage is made to scale with most reasonable window sizes. If your computer's resolution is either 4:3 or 16:9, the webpage should scale correctly upon loading.
                    <br/>
                    If you encounter scaling issues, kindly attempt to refresh or clear cache to this page before using the bug report funtion to alert the developers!
                    Keep in mind kindly that we do not scale the game canvas upon window resize, even thought the rest of our webpage does. This is to keep the game's rendering reliable and hit detection accurate.
                    <br/> 
                    Upon updating our game, it is often neccessary that you clear cache and reload the page before the updated content will display correctly.
                    More importantly, we will try to keep a copy of change log at (somewhere).
                </p>
            </div>
            
        );

    }
}

export default Instructions;