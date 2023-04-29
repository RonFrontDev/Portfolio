import './Profile.scss'

function Profile({isMobile}) {
  return (
    //  <img className='introduction__image' src="/images/ronny.jpg" alt="ronny profile" />
     <img className={`profile__image ${ isMobile ? 'profile--mobile' : 'profile--desktop'}`} src="/images/ronny.jpg" alt="ronny profile" />
  )
}

export default Profile
