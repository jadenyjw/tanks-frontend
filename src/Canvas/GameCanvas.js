import React, { Component } from 'react';
import ReactKonva, {Layer, Rect, Stage, Group} from 'react-konva';
import Konva, {Util} from 'konva';


class GameCanvas extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        color: 'green'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    }

    

    render() {
        return (
            <Rect
                x={this.props.p1x} y={this.props.p1y} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
        );
    }
}

export default GameCanvas;