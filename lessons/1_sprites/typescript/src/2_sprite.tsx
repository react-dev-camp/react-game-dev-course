import * as React from "react";
import Tile from "./1_tile";

interface Props {
  src: string;
  // shows number of state in the sprite
  states: number;
  scale: number;
  // numbers of frames per each step
  framesPerStep: number;
}

interface State {
  state: number;
}

export default class Sprite extends React.Component<Props, State> {
  tick = 0;
  frame: number = 0;
  state = {
    state: 0
  };

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
  }

  animate = () => {
    // TODO: implement animate method
    // Use setState to change state of the tile
    // Use tick property to skip frames (see framesPerStep)

    this.frame = requestAnimationFrame(this.animate);
  };

  render() {
    const { src, tile, scale } = this.props;
    const { state } = this.state;

    return <Tile src={src} state={state} tile={tile} scale={scale} />;
  }
}
