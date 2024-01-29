import React from 'react';
import './Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.youtube.com/" target="__blank">
          Vinay Kovvuri
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/" target="__blank">
          <InstagramIcon/>
        </a>
        <a href="https://www.linkedin.com/in/vinaykovvuri" target="__blank">
          <LinkedInIcon/>
        </a>
        <a href="https://www.youtube.com/" target="__blank">
            <YouTubeIcon/>
        </a>
      </div>
    </div>
  )
}

export default Footer
