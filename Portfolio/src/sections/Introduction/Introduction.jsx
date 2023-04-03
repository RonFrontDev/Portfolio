
import TechStack from '../../components/TechStack/TechStack'
import './Introduction.scss'

function Introduction() {

  return (
    <>
    <div className='space'></div>
    <div id='homeSection' className="introduction">
      <div className='introduction__profile'>
        <div className='introduction__textbox'>
        <h1 className="introduction__headline">Front-End React Developer</h1>
        <p className="introduction__text">Hi, I am Ronny from Denmark, Copenhagen.<img className='introduction__location' src="svg/location.svg" alt="" /></p>
        <p className="introduction__text">Currently located in Germany, Berlin 
            where I live with my girlfriend.</p>
            <div className='introduction__links'>
              <img className="introduction__link" src="/svg/linkedin.svg" alt="" />
              <img className="introduction__link" src="/svg/github.svg" alt="" />
              <img className="introduction__link" src="/svg/what.svg" alt="" />
              <img className="introduction__link" src="/svg/mail.svg" alt="" />
            </div>
            </div>
        <img className='introduction__image' src="/images/ronny.jpg" alt="ronny profile" />
        </div>
      <TechStack/>
    </div>
    </>
  )
}

export default Introduction

