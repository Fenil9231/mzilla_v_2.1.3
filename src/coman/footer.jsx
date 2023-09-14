import React from 'react'
import { Link } from 'react-router-dom'
import '../components/compo_styles.css'; 

const Footer = () => {
  return (
    <div className="footer">
          <p>&copy; {new Date().getFullYear()} Code By Fenil Kothiya. <Link to={"https://www.linkedin.com/in/fenil-kothiya-45327a270/"}>Click For More Details !!</Link></p>
        </div>
  )
}

export default Footer
