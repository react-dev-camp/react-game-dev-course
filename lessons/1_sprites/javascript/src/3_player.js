import React from "react";
import styled from "styled-components";

import Tile from "./1_tile";
import Sprite from "./2_sprite";
import sideAnimation from "./assets/side.png";
import gun from "./assets/gun.png";

const Container = styled.div`
  position: relative;
`;

interface GunProps {
  top: number;
  left: number;
}

const Gun = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

export default class Player extends React.Component {
  render() {
    return (
      <Container>
        {/* TODO: align gun position with the player
          adjusting top and left properties
          BONUS: use different animations from assets folder
          to animate player movements into different directions
        */}
        <Gun top={0} left={0}>
          <Tile src={gun} state={0} tile={{ width: 17, height: 17 }} />
        </Gun>
        <Sprite
          src={sideAnimation}
          states={4}
          tile={{ width: 20, height: 24 }}
          scale={1.5}
          framesPerStep={8}
        />
      </Container>
    );
  }
}
