import * as React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  state: number;
  tile: {
    width: number;
    height: number;
  };
  scale: number;
}

interface ContainerProps {
  width: number;
  height: number;
  scale: number;
}

const Container = styled<ContainerProps, "div">("div")`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  overflow: hidden;
  transform: scale(${({ scale }) => `${scale}, ${scale}`});
  transform-origin: top left;
`;

interface ImageProps {
  left: number;
}

const Image = styled<ImageProps, "img">("img")`
  transform: translate(-${({ left }) => left}px, 0);
`;

export default class Tile extends React.Component<Props> {
  static defaultProps = {
    scale: 1
  };

  render() {
    const { src, tile, state, scale } = this.props;

    const left = tile.width * state;

    return (
      <Container width={tile.width} height={tile.height} scale={scale}>
        <Image src={src} left={left} />
      </Container>
    );
  }
}
