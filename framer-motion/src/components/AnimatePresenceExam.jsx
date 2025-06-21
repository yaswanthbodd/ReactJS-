import { Stack } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { useState } from 'react'

const StackMotion = motion(Stack)

const AnimatePresenceExam = () => {
    const [showTitle, setShowTitle] = useState(true);

    setTimeout(() => {
            setShowTitle(false)
    }, 2000);
  return (
    <div>
        
        Hello
        <AnimatePresence>
            {showTitle && (
                <StackMotion exit={{ x: -1000, transitionDuration : 0.1}}>
                    Hello This is Yaswanth
                </StackMotion>
            )}
        </AnimatePresence>
    </div>
  )
}

export default AnimatePresenceExam