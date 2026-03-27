import React from 'react'
import { easeOut, motion } from 'motion/react'
import css from "./AboutItem.module.css"
export default function AboutItem({textDelay, iconDelay, text}) {
  return (
    <li>
          <div className={css.statWrapper}>
            <motion.svg  initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: iconDelay,}} width="24" height="24" className={css.aboutIcon}>
              <use href="/img/icons.svg#icon-check"></use>
            </motion.svg> 
            <motion.p initial={{ opacity: 0, }} whileInView={{ opacity: 1,}} viewport={{ once: true }} transition={{ duration: 0.5, delay: textDelay, ease: "easeOut"}}>{text}</motion.p>
          </div>
    </li>
  )
}
