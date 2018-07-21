import React from "react";
import styled from "styled-components";
import { render } from "react-dom";

import Tile from "./1_tile";
import Sprite from "./2_sprite";
import Player from "./3_player";

import TileSolution from "./solutions/1_tile";
import SpriteSolution from "./solutions/2_sprite";
import PlayerSolution from "./solutions/3_player";

import sideAnimation from "./assets/side.png";

const tile = { width: 20, height: 24 };

const Container = styled.div`
  height: 50px;
`;

const App = () => (
  <div>
    <p>This is Charlie and at the moment Charlie looks like this:</p>
    <Container>
      <Player />
    </Container>
    <p>After finishing this lesson Charlie should look like this:</p>
    <Container>
      <PlayerSolution />
    </Container>
    <p>
      We will implement this using <b>styled components</b>,{" "}
      <b>css transformations </b>
      and <b>requestAnimationFrame</b> to animate our charachter. Let's start!
    </p>
    <p>The first step will be simple tile (one frame of the animation).</p>
    <pre>{`
1. Open 1_tile.tsx
2. Change Container styles to set width and height equals to tile dimentions
(equals to the width and height of each individual frame in the image)
3. Using "translate: scale" css property, scale the Container
and don't forget to set transform-origin to "top left" to adjust container
coordinates.
4. Using "transform: translate" css property set offset of the Image component
5. In the render method of tile component calculate "left" property of
the Image (use tile width and state)

Look for TODO in the source code

As a bonus you can change "state" property
of the component below and see changes of the state.
    `}</pre>
    <Container>
      <Tile src={sideAnimation} tile={tile} scale={1.5} state={1} />
    </Container>
    <p>The second step will be to implement sprite animation.</p>
    <pre>{`
1. Open 2_sprite.tsx
2. Implement animate method (look for TODO in the source code)

If you need help, feel free to check "solutions"
folder.
`}</pre>
    <Container>
      <Sprite
        src={sideAnimation}
        tile={tile}
        states={4}
        scale={1.5}
        framesPerStep={8}
      />
    </Container>
    <p>Now let's give this man a gun!</p>
    <pre>{`
1. Open 3_player.tsx
2. Use top and left properties of Gun component in the render method
to adjust position of the gun (look for TODO in the source code)

As the bonus, you can make different player animations using
files from assets folder.
`}</pre>
    <Container>
      <Player />
    </Container>
    {/*<Container>
      <TileSolution
        src={sideAnimation}
        tile={{ width: 20, height: 24 }}
        state={1}
        scale={1.5}
      />
    </Container>*/}
    {/*<Container>
      <SpriteSolution
        src={sideAnimation}
        tile={tile}
        states={4}
        scale={1.5}
        framesPerStep={8}
      />
    </Container>*/}
  </div>
);

render(<App />, document.getElementById("root"));
