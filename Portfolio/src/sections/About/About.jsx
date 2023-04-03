import './About.scss'

function About() {

  return (
    <div id="aboutSection" className="about">
      <div className='about__container'>
        <img className='about__image' src="/images/coding.jpg" alt="" />
        <div className='box'>
          <h3 className='about__title'>About me</h3>
          <p className='about__headline'>A dedicated Front-end Developer based in Berlin, Germany</p>
          <p className='about__paragraph'>As a Junior Front-End Developer, I am still learning the ropes, but I have a strong desire to become proficient in HTML, CSS, JavaScript, React, and SCSS. I am eager to enhance my skills in designing and maintaining responsive websites that offer an excellent user experience. Although I am still learning, I am committed to writing clean, optimized code and staying updated with the latest development tools and techniques. I am a team player and thrive in collaborating with cross-functional teams to produce outstanding web applications. If you are looking for someone who is passionate and dedicated to becoming a skilled developer, I would love the opportunity to learn and grow with your team.</p>
          <p className='about__headline-personal'> Personally info</p>
          <p className='about__paragraph-personal'> I have been a full time coach in a varaety of sports like boxing crossfit , beside webdevelopment i enjoy video shooting and editing 
          i love to mix it all with traveling around the world</p>
          </div>
      </div>
    </div>
  )
}

export default About

