import Design from "../../components/Design/Design";
import Profile from "../../components/Profile/Profile";
import Structure from "../../components/Structure/Structure";
import TechStack from "../../components/TechStack/TechStack";
import "./Introduction.scss";

function Introduction() {
  return (
    <>
      <div className="space"></div>
      <div id="home" className="introduction">
        <div className="introduction__profile">
          <Profile isMobile />
          <div className="introduction__container">
            <div className="introduction__textbox">
              <h1 className="introduction__headline">Frontend Web Developer</h1>
              <p className="introduction__text">
                Hey, I'm Ronny, a Junior Frontend Developer from Denmark 🇩🇰
                Passionate about coding and creating visually appealing
                websites, I'm on a mission to make my
                <img
                  className="introduction__location"
                  src="svg/location.svg"
                  alt=""
                />
                <span className="introduction__text">
                  in the world of web development.
                </span>
              </p>
              <Profile />
              <TechStack />
            </div>
            <div className="introduction__structure">
              <Structure />
              <Design />
            </div>
          </div>
          {/* <Profile isMobile /> */}
        </div>
      </div>
    </>
  );
}

export default Introduction;
