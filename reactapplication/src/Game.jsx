export default function Game({ gameText, gameCategories, games }) {
  return (
    <div className="games" id="game">
      <div className="gameText">
        <h1>{gameText}</h1>
      </div>
      <div className="categories">
        <ul className="categoriesList">
          {gameCategories.map((gameCategory, index) => {
            return <li className="categoriesItem">{gameCategory}</li>;
          })}
        </ul>
        <div className="gameItems">
          {games.map((game, index) => {
            return (
              <div className="gameItem">
                <img className="gameItemImage" {...game} />
                <p>{game.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
