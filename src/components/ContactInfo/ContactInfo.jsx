import './ContactInfo.scss'


function ContactInfo() {
  return (
    <>
      <div className='contactinfo'>
        <h3 className="contactinfo__headline">Get in touch</h3>
        <div className='contactinfo__container'>
          <div className='contactinfo__box'>
            <img className='contactinfo__icon' src="svg/linkedin.svg" alt="" />
            <p className='contactinfo__text'>Connect here</p>
          </div>
          <div className='contactinfo__box '>
            <img className='contactinfo__icon' src="svg/mail.svg" alt="" />
            <p className='contactinfo__text'>Send me an Email</p>
          </div>
          <div className='contactinfo__box'>
            <img className='contactinfo__icon' src="svg/location.svg" alt="" />
            <p className='contactinfo__text'>I am Currently located i Germany, Berlin</p>
          </div>
          <div className='contactinfo__box '>
            <img className='contactinfo__icon' src="svg/cv.svg" alt="" />
            <p className='contactinfo__text'>Check out my CV</p>
          </div>
        </div>   
      </div>
    </>
  )
}

export default ContactInfo
