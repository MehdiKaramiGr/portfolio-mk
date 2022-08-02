import React from 'react'

import './SkillCard.scss'

export default function SkillCard({children}) {
  return (
    <div className='skill-card'>
       {children}
    </div>
  )
}
