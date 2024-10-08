import React from 'react'

const GradientText = ({ title, gradientDirection, color, size}) => {
return (
    <span className={`animate-text-gradient 
        ${gradientDirection} ${color} ${size}
        bg-[200%_auto] bg-clip-text text-transparent`}>
        {title}
    </span>
)
}

export default GradientText