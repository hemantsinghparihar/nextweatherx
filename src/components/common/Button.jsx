import React from 'react'

const Button = ({py,border,rounded,textColor,textSize,weight,px }) => {
  return (
    <div className={` flex justify-center items-center ${py}`}>
        
        <button className={`${border} ${rounded} border-opacity-5 ${textColor} ${textSize}   ${weight} ${py} ${px}`}>
             Show All Products
        </button>

    </div>
  )
}

export default Button
