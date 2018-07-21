import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  ${"" &&
    `
    TODO:
    1. Use "tile" dimentions to set "width" and "height" of the container
    2. Use "scale" property to scale tile (see transform scale css property)
  `}
`;

const Image = styled.img`
  ${"" &&
    `
    TODO:
    Use transform translate to move the image with left property
  `}
`;

export default class Tile extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    tile: PropTypes.object.isRequired,
    state: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired
  };

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
