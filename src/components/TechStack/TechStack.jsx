import "./TechStack.scss";

function TechStack() {
  return (
    <>
      <div className="techstack">
        <h3 className="techstack__title">Tech Stack</h3>
        <div className="techstack__container">
          <img className="techstack__icon" src="svg/html.svg" alt="" />
          <img className="techstack__icon" src="svg/css.svg" alt="" />
          <img className="techstack__icon" src="svg/js.svg" alt="" />
          <img className="techstack__icon" src="svg/api.svg" alt="" />
          <img className="techstack__icon" src="svg/sass.svg" alt="" />
          <img className="techstack__icon" src="svg/react.svg" alt="" />
          <img className="techstack__icon" src="svg/npm.svg" alt="" />
          <img className="techstack__icon" src="svg/github.svg" alt="" />
          <img className="techstack__icon" src="svg/wordpress.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default TechStack;
