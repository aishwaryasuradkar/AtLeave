//react arrow function cmponent(rfca)
import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:"absolute",
    //top:"100vh",
    width:"100%",
    backgrounfcolor:"black",
    border:"2px solid red"

  }

  return (
    <footer className="bg-dark text-light py-3 " style={footerStyle}>
      <p className="text-center"> Copyright &copy; AnshveerHolidays.com</p></footer>
     
  )
}
export default Footer;

