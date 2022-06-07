import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { CoreButtonPublicProps } from '../core.button'

export const Root = forwardRef<HTMLButtonElement, CoreButtonPublicProps>(
  (props, ref) => <motion.button {...props} ref={ref} />
)
