import React from 'react'

import './Card.scss'

export default function SkillCard({children}) {
  return (
    <div className='card'>
       {children}
    </div>
  )
}
