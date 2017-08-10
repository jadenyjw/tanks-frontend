import React, { Component } from 'react';
import ReactKonva, {Layer, Rect, Stage, Group} from 'react-konva';
import Konva from 'konva';
import Websocket from 'react-websocket';

import GameCanvas from './Canvas/GameCanvas';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, p1x: 0, p1y:0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.addEventListener("keydown", this.handleKey, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    document.removeEventListener("keydown", this.handleKey, false);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  handleKey(event){
        console.log(event);
        if(event.key == 'w'){
          this.setState({p1y: this.state.p1y - 10})
        }
        if(event.key == 'a'){
          this.setState({p1x: this.state.p1x - 10})
        }
        if(event.key == 's'){
          this.setState({p1y: this.state.p1y + 10})
        }
        if(event.key == 'd'){
          this.setState({p1x: this.state.p1x + 10})
        }
   }

   
    handleData(data) {
      let result = JSON.parse(data);
      window.alert('' + result);
    }

  render() {
     const style = {
        alignSelf: 'center',
        textAlign: 'center',
        height: this.state.width * 0.45,
        marginLeft: this.state.width * 0.05,
        marginRight: this.state.width * 0.05,
        marginTop: 0,
        marginBottom: this.state.width * 0.05,
        borderRadius: '5px 5px 5px 5px',
        backgroundColor : 'white'
        };

    return (
      <div className="App" style = {style} tabindex="0" >
        <Websocket url='some url' 
              onMessage={this.handleData.bind(this)}/>
        <Stage width={this.state.width * 0.9} height={this.state.width * 0.45} >
          <Layer>
              <GameCanvas width={this.state.width * 0.9} height={this.state.width * 0.45} p1x={this.state.p1x} p1y={this.state.p1y}/>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
