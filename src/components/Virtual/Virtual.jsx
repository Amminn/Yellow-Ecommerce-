import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

function Virtual() {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>VIRTUAL TRY-ON</span>
        <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="shade" />
      </div>

      <div className={css.right}>
        <div className={css.wrapper}></div>
        <ReactCompareImage leftImage={Before} rightImage={After} />
      </div>
    </div>
  )
}

export default Virtual