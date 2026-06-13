import React from 'react'

const Button = ({ Tagname="button",children, className = "", ...props }) => {
  return (
    <Tagname {...props} className={` text-center px-16 py-5 bg-black text-white rounded-md cursor-pointer ${className}`}>
        {children}
    </Tagname>
  )
}

export default Button