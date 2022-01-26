import { useState } from "react";
import { games, hover } from "./data";
import GameItem from "./gamecard";

export default function Game({ text, collections }) {
  const [index, setIndex] = useState(0);
  const itemSelected = collections.find((collection, idx) => idx == index);
  return (
    <>
      <div className="games" id="game">
        <div className="gameText">
          <h1>{text}</h1>
        </div>
        <div className="categories">
          {collections.map((collection, CollectionIdx) => {
            return (
              <button
                className="categoriesItem"
                onClick={() => setIndex(CollectionIdx)}
                style={{
                  backgroundColor:
                    index === CollectionIdx ? "#3366cc" : "#f2f6ff",
                  color: index === CollectionIdx ? "#ffffff" : "black",
                }}
              >
                {collection.type}
              </button>
            );
          })}
        </div>
        <div className="gameItems">
          {itemSelected.items.map((item, i) => {
            if (itemSelected.items === null) {
              console.log("empty");
            } else {
              console.log("not empty");
            }
            return <GameItem item={item} hover={hover} />;
          })}
        </div>
      </div>
    </>
  );
}
