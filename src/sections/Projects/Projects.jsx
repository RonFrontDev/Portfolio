import './Projects.scss'

function Projects() {

  return (
    <div id="projectsSection" className="projects">
      <div className='projects__header'>
          <h2 className='projects__headline'>Portfolio</h2>
          <p className='projects__subtitle'>Each project is a unique piece of development</p>
      </div>
        <div className='projects__box '>
          <div className='projects__box reverse'>
          <img className='projects__image' src="/images/office2.jpg" alt="" />
          <div className='projects__info'>
              <h1 className='projects__title'>Website title+emoji</h1>
              <p className='projects__paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam earum laboriosam libero ducimus quam magni sunt reprehenderit, officia rerum.
              </p>
              <div className='projects__skills'>
                <p className='projects__skill'>React<img className='projects__skill-icon' src="/svg/react.svg" alt=""/></p>
                <p className='projects__skill'>Sass<img className='projects__skill-icon' src="/svg/sass.svg" alt=""/></p>
              </div>
              <div className='projects__buttons'>
                <button className='projects__button'>Live Demo<img className='projects__skill-icon' src="/svg/live.svg" alt=""/></button>
                <button className='projects__button'>GitHub<img className='projects__skill-icon' src="/svg/github.svg" alt=""/></button>
              </div>

            </div>
          </div>
        </div>
        <div className='projects__box '>
          <div className='projects__box'>
          <img className='projects__image' src="/images/office3.jpg" alt="" />
          <div className='projects__info'>
              <h1 className='projects__title'>Website title+emoji</h1>
              <p className='projects__paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam earum laboriosam libero ducimus quam magni sunt reprehenderit, officia rerum.
              </p>
              <div className='projects__skills'>
                <p className='projects__skill'>React<img className='projects__skill-icon' src="/svg/react.svg" alt=""/></p>
                <p className='projects__skill'>Sass<img className='projects__skill-icon' src="/svg/sass.svg" alt=""/></p>
              </div>
              <div className='projects__buttons'>
                <button className='projects__button'>Live Demo<img className='projects__skill-icon' src="/svg/live.svg" alt=""/></button>
                <button className='projects__button'>GitHub<img className='projects__skill-icon' src="/svg/github.svg" alt=""/></button>
              </div>
            </div>
          </div>
        </div>
        <div className='projects__box'>
          <div className='projects__box reverse'>
          <img className='projects__image' src="/images/office2.jpg" alt="" />
          <div className='projects__info'>
              <h1 className='projects__title'>Website title+emoji</h1>
              <p className='projects__paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam earum laboriosam libero ducimus quam magni sunt reprehenderit, officia rerum.
              </p>
              <div className='projects__skills'>
                <p className='projects__skill'>React<img className='projects__skill-icon' src="/svg/react.svg" alt=""/></p>
                <p className='projects__skill'>Sass<img className='projects__skill-icon' src="/svg/sass.svg" alt=""/></p>
              </div>
              <div className='projects__buttons'>
                <button className='projects__button'>Live Demo<img className='projects__skill-icon' src="/svg/live.svg" alt=""/></button>
                <button className='projects__button'>GitHub<img className='projects__skill-icon' src="/svg/github.svg" alt=""/></button>
              </div>

            </div>
          </div>
        </div>
        <div className='projects__box'>
          <div className='projects__box'>
          <img className='projects__image' src="/images/office1.jpg" alt="" />
          <div className='projects__info'>
              <h1 className='projects__title'>Website title+emoji</h1>
              <p className='projects__paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam earum laboriosam libero ducimus quam magni sunt reprehenderit, officia rerum.
              </p>
              <div className='projects__skills'>
                <p className='projects__skill'>React<img className='projects__skill-icon' src="/svg/react.svg" alt=""/></p>
                <p className='projects__skill'>Sass<img className='projects__skill-icon' src="/svg/sass.svg" alt=""/></p>
              </div>
              <div className='projects__buttons'>
                <button className='projects__button'>Live Demo<img className='projects__skill-icon' src="/svg/live.svg" alt=""/></button>
                <button className='projects__button'>GitHub<img className='projects__skill-icon' src="/svg/github.svg" alt=""/></button>
              </div>

            </div>
          </div>
        </div> 
    </div>
  )
}

export default Projects

