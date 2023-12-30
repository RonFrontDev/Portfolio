import "./Logo.scss";

function Logo({ isMobile }) {
  return (
    <div className={`logo ${isMobile ? "logo--mobile" : "logo--desktop"}`}>
      <img className="logo__icon" src="svg/imac.svg" alt="" />
      <div>
        <a className="logo__top" href="/">
          R.Christensen
        </a>
        <p className="logo__bottom">Web Developer </p>
      </div>
    </div>
  );
}

export default Logo;
