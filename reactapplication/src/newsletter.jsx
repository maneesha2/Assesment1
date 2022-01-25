export default function Newsletter({ newsletter }) {
  return (
    <div className="newsletter">
      <div className="newsletterBlockInside">
        <div className="newsletterBlock">
          <h1>{newsletter.title}</h1>
          <p>{newsletter.subtitle}</p>
          <form className="newsletterForm">
            <div className="inputicons">
              <image
                className="iconinput"
                src="../images/icon/person.png"
                alt="person"
              />
              <input type="text" className="input" placeholder="Full Name" />
            </div>

            <div className="inputicons">
              <image src="../images/icon/email.png" />
              <input
                type="text"
                className="input"
                placeholder="Email"
                alt="email"
              />
            </div>

            <button className="subscribe" onclick="onButtonClick()">
              Subscribe
            </button>
          </form>
        </div>

        {/* <div className = "thankyouBlock">
            <div className = "thankyouBlockInside">
              <image  className = "img" src = "images/tickmark.png"/>
              <p>Thank you.</p>
              <p>You are now subscribed to our newsletter.</p>
            </div>
          </div> */}
      </div>
    </div>
  );
}
