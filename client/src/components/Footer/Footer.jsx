import React from 'react'
import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
      <div className='wrapper'>
        <div className='left'>
         <div>CARTOFY</div>
          </div>
        <div className='right'>
        <FacebookIcon/>
        <YouTubeIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
        <TwitterIcon/>

        </div>
      </div>
    </div>
  )
}

export default Footer