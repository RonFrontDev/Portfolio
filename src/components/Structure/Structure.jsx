import './Structure.scss'


function Structure() {
  return (
    <>
      <div className='structure'>
        <h3 className="structure__title">Structure design</h3>
        <div className='structure__container'>
          <img className='structure__icon' src="svg/bem.svg" alt="" />
          <img className='structure__icon structure__icon-big' src="svg/atomic.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Structure
