export default function navBar({ logoImage, navItems }) {
  return (
    <div className="heading">
      <div className="navbar">
        <div className="logo">
          <a href={logoImage.url}>
            <img className="logoImage" src={logoImage.imageSrc} />
          </a>
        </div>
        <div className="navItems">
          <ul className="navBarList">
            {navItems.map((navItem, index) => {
              return (
                <li className="navItem">
                  <a href={navItem.url} className="navlink">
                    {navItem.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
