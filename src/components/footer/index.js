import React from 'react'

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <hr className="border-primary" />
      <p> {title} </p>
    </div>
  </div>
)

export default Footer
