import "./About.scss";

function About() {
  return (
    <div id="about" className="about">
      <div className="about__container">
        <div className="about__textcontainer">
          <h3 className="about__title">About me</h3>
          <p className="about__headline">
            A dedicated Frontend Developer from{" "}
            <span className="about__highlight">Copenhagen</span>
          </p>
          <p className="about__paragraph">
            As a Junior Frontend Developer, I am still learning the ropes, but I
            have a strong desire to become proficient in HTML, CSS, JavaScript,
            React, and SCSS. I am eager to enhance my skills in designing and
            maintaining responsive websites that offer an excellent user
            experience. I am committed to writing clean, optimized code and
            staying updated with the latest development tools and techniques. I
            am a team player and thrive in collaborating with cross-functional
            teams to produce outstanding web applications. If you are looking
            for someone who is passionate and dedicated to becoming a skilled
            developer, I would love the opportunity to learn and grow with your
            team.
          </p>
          <p className="about__headline-personal">Personal information</p>
          <p className="about__paragraph-personal">
            {" "}
            Making my home smart is not just a fascination but also a hobby that
            I enjoy pursuing in my leisure time. I have a keen interest in
            electronics, which fuels my passion for setting up smart homes. In
            addition to this, I have worked as a full-time coach in various
            sports, such as boxing and CrossFit. Along with my proficiency in
            web development, I also love shooting and editing videos. Combining
            all these interests with my love for traveling makes for an exciting
            life.
          </p>
        </div>
        <div className="about__imagecontainer">
          <img className="about__image" src="/images/coding.jpg" alt="" />
          <img className="about__image" src="/images/coding.jpg" alt="" />
          <img className="about__image" src="/images/coding.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
