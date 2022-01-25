import { overlayContent } from "./data";
export default function Overlay({
  overlay,
  setOverlay,
  title,
  image,
  releaseDate,
  developer,
  numOfPlayers,
}) {
  return (
    <div
      className="gameOverlay"
      style={{ display: overlay ? "block" : "none" }}
      onClick={() => setOverlay(false)}
    >
      <div className="gamePopUp">
        <div className="gamePopUpImage">
          <img className="gamePopUpImageSource" {...image} />
        </div>
        <div className="gamePopUpContent">
          <div className="gamePopUpTitle">
            <h1 className="gamePopUpName">{title}</h1>
            <p className="gamePopUpType"></p>
          </div>

          {releaseDate ? (
            <div className="gamePopUpInformation">
              <div className="gameInformationAttribute">
                <p className="gameInformationAttributeKey">
                  NES Release Date:{" "}
                </p>
                <p className="gameInformationAttributeValue">{releaseDate}</p>
              </div>
            </div>
          ) : null}

          {developer ? (
            <div className="gamePopUpInformation">
              <div className="gameInformationAttribute">
                <p className="gameInformationAttributeKey">Developer: </p>
                <p className="gameInformationAttributeValue">{developer}</p>
              </div>
            </div>
          ) : null}

          {numOfPlayers ? (
            <div className="gamePopUpInformation">
              <div className="gameInformationAttribute">
                <p className="gameInformationAttributeKey">
                  Number of Players:{" "}
                </p>
                <p className="gameInformationAttributeValue">{numOfPlayers}</p>
              </div>
            </div>
          ) : null}

          <div className="playGame">
            <a className="playGameButton">{overlayContent.buttonText}</a>
          </div>
        </div>
        <div className="cancelOverlay" onClick={() => setOverlay(false)}>
          <img className="cancelOverlayImage" {...overlayContent.closeIcon} />
        </div>
      </div>
    </div>
  );
}
