
import Structure from '../../components/Structure/Structure'
import TechStack from '../../components/TechStack/TechStack'
import Profile from '../../components/profile/Profile'
import './Introduction.scss'

function Introduction() {

  return (
    <>
    <div className='space'></div>
    <div id='homeSection' className="introduction">
      <div className='introduction__profile'>
        <div>
          <div className='introduction__textbox'>
          <h1 className="introduction__headline">Front-End React Developer</h1>
          <p className="introduction__text">Hi, I am Ronny from Denmark, Copenhagen.<img className='introduction__location' src="svg/location.svg" alt="" /></p>
          <p className="introduction__text">
            Currently located in Germany, Berlin 
              where I live with my girlfriend.
          </p>
        <Profile/>
        <TechStack/>
        <Structure/>
        </div>
      </div>
          <Profile isMobile/>
      </div>
    </div>
    </>
  )
}

export default Introduction

