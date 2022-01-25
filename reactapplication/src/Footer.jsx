export default function Footer({ footer }) {
  return (
    <div className="footer">
      <div className="footersection">
        <p>{footer.follow}</p>
        <img className="icons" src="../images/icon/fb.png" alt="fb" />
        <img className="icons" src="../images/icon/insta.png" alt="insta" />
        <img className="icons" src="../images/icon/tw.png" alt="twitter" />
      </div>
      <p>{footer.developer}</p>
    </div>
  );
}
