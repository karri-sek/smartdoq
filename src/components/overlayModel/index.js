import React from 'react'
import PropTypes from 'prop-types'

function OverlayModel({
  removeOverlay,
  socialURLs
}) {
  const {
    facebook_url,
    instagram_url,
    linkedin_url,
    whatsapp_url,
  } = socialURLs
  const wu = whatsapp_url.url

  const whatsappUrl = wu.substring(wu.indexOf('whatsapp'), wu.length)
  
  const {
    phone_number,
    phone_icon,
    website_url,
    website_icon,
    location_url,
    location_icon,
    mail_url,
    mail_icon,
    linked_in_icon,
    whatsapp_icon,
    facebook_icon,
    instagram_icon
  } = socialURLs
  const [open, setOpen] = React.useState(false)
  const [shareOpen, setShareOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  const phoneNumber = phone_number.text

  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      />
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                setOpen(false)
                setShareOpen(false)
                setContactOpen(!contactOpen)
              }}
            >
              Contact
            </a>
            {contactOpen && (
              <ul className="socialUL">
                <li>
                  <img
                    src={phone_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.location = 'tel:' + phoneNumber
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={mail_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.location = 'mailto:' + mail_icon.url
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={website_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.open(website_url.url, '_blank')
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={location_icon.url}
                    alt="wp"
                    className="contact-img"
                    onClick={() => {
                      window.open(location_url.url, '_blank')
                    }}
                  />
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              onClick={() => {
                setOpen(false)
                setContactOpen(false)
                setShareOpen(!shareOpen)
              }}
            >
              Shares
            </a>
            {shareOpen && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img src={whatsapp_icon.url} alt="wp"  onClick={() => {
                      window.location = whatsappUrl
                    }}/> 
                </li>
                <li className="grid-column">
                  <img  src={mail_icon.url} alt="email" onClick={() => {
                      window.location = mail_url.url
                    }}/> 
                </li>
              </ul>
            )}
          </li>
          <li className="social">
            <a
              onClick={() => {
                setShareOpen(false)
                setContactOpen(false)
                setOpen(!open)
              }}
            >
              Social
            </a>
            {open && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img
                    src={instagram_icon.url}
                    alt="insta"
                    onClick={() => {
                      window.location = instagram_url.url
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={linked_in_icon.url}
                    alt="linked"
                    onClick={() => {
                      window.location = linkedin_url.url
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={facebook_icon.url}
                    alt="facebook"
                    onClick={() => {
                      window.location = facebook_url.url
                    }}
                  />
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

OverlayModel.defaultProps = {
  removeOverlay: false,
  insta: '',
  linked: '',
  fb: '',
  wp: '',
  email: '',
}

OverlayModel.propTypes = {
  removeOverlay: PropTypes.func,
  insta: PropTypes.string,
  linked: PropTypes.string,
  fb: PropTypes.string,
  wp: PropTypes.string,
  email: PropTypes.string,
}
export default OverlayModel
