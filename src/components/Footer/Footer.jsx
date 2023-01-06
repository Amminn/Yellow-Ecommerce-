import React from 'react'
import Logo from '../../assets/logo.png'
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from '@heroicons/react/outline'
import css from './Footer.module.css'

function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="website logo" />
          <span>amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.details}>

            <span>Contact Us</span>

            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>352-306-4415</span>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>support@amazon.com</span>
            </span>

          </div>
        </div>

        <div className={css.block}>

          <div className={css.details}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>

        </div>

        <div className={css.block}>

          <div className={css.details}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              <span>About us</span>
            </span>

          </div>
        </div>

        <div className={css.block}>

          <div className={css.details}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer


// 1:46:46min