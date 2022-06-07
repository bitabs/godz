import { forwardRef, Ref } from 'react'
import { motion } from 'framer-motion'

export const Start = forwardRef((props, ref: Ref<HTMLDivElement>) => (
  <motion.div
    {...props}
    ref={ref}
    whileHover={{ rotate: 180 }}
    whileTap={{ rotate: 90 }}
  />
))
