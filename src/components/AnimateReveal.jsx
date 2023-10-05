import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const AnimateReveal = ({children}) => {
    const ref =useRef(null)
    const isInView = useInView(ref,{once:true})
    const mainControl = useAnimation()

    useEffect(()=>{
    mainControl.start('visible')
    },[isInView])

  return (
    <div ref={ref} style={{position:'relative',overflow:'hidden'}}>
    <motion.div
    variants={{
        hidden:{y:-105,opacity:0},
        visible:{opacity:1,y:0}
    }}
    initial={'hidden'}
    animate={mainControl}

    transition={{
        duration:0.5,
      delay:0.025, 
    }} 
    >
       {children}
    </motion.div>
    </div>
   
  )
}

export default AnimateReveal;