import React,{ useState } from 'react'
import {motion, useAnimationControls} from 'framer-motion'

const TextSpan = ({children}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const controls = useAnimationControls();
    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ]
        })
        setIsPlaying(true);
    }
    

  return (
    <motion.span animate={controls} 
    onMouseOver={()=>{
        if(!isPlaying){
            rubberBand()
        }
    }}
    onAnimationComplete={()=>setIsPlaying(false)}
    className='inline-block text-5xl md:text-7xl lg:text-8xl xl:text-9xl p-1 text-white'>
        {children}
    </motion.span>
  )
}

export default TextSpan