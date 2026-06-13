import React from 'react'

const Container = ({ children ,className="", ...props }) => {
  return (
    <div {...props} className={`container mx-auto max-w-[1280px] ${className}`}>
        {children}
    </div>
  )
}

export default Container