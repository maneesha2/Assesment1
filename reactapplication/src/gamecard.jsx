import { useState } from "react";
import Overlay from "./gamepopUp";

export default function GameItem({ item, hoverText = "Play" }) {
  const [overlay, setOverlay] = useState(false);
  return (
    <div className="gameItem">
      <img
        className="gameItemImage"
        {...item.image}
        onClick={() => setOverlay(true)}
      />
      <p className="playText">{hoverText}</p>
      <p>{item.title}</p>
      <Overlay
        overlay={overlay}
        setOverlay={setOverlay}
        title={item.title}
        image={item.image}
        category={item.category}
        releaseDate={item.releaseDate}
        developer={item.developer}
        numOfPlayers={item.numOfPlayers}
      />
    </div>
  );
}
