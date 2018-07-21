import * as React from "react";
import Tile from "./1_tile";

interface Props {
  src: string;
  states: number;
  scale: number;
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
    const { state } = this.state;
    const { framesPerStep, states } = this.props;

    if (this.tick === framesPerStep) {
      this.tick = 0;
      this.setState({
        state: (state + 1) % states
      });
    }
    this.tick += 1;

    this.frame = requestAnimationFrame(this.animate);
  };

  render() {
    const { src, tile, scale } = this.props;
    const { state } = this.state;

    return <Tile src={src} state={state} tile={tile} scale={scale} />;
  }
}
