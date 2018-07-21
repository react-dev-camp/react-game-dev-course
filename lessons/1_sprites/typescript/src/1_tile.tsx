import * as React from "react";
import styled from "styled-components";

interface Props {
  // image link
  src: string;
  // Represents current tile index in the sprite
  state: number;
  // size of the tile
  tile: {
    width: number;
    height: number;
  };
  // scale value (e.g. 2 -> 2x scale and etc.)
  scale: number;
}

interface ContainerProps {
  width: number;
  height: number;
  scale: number;
}

const Container = styled<ContainerProps, "div">("div")`
  overflow: hidden;
  ${"" &&
    `
    TODO:
    1. Use "tile" dimentions to set "width" and "height" of the container
    2. Use "scale" property to scale tile (see transform scale css property)
  `}
`;

interface ImageProps {
  // image offset
  left: number;
}

const Image = styled<ImageProps, "img">("img")`
  ${"" &&
    `
    TODO:
    Use transform translate to move the image with left property
  `}
`;

export default class Tile extends React.Component<Props> {
  render() {
    const { src, tile, state, scale } = this.props;

    // TODO: use tile width and state properties
    // to calculate left position of the image
    const left = 0;

    return (
      <Container width={tile.width} height={tile.height} scale={scale}>
        <Image src={src} left={left} />
      </Container>
    );
  }
}
