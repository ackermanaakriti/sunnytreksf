import React from 'react'
import './button.scss'

const MainButton = ({value}) => {
  return (
    <div className='main--btn--wrapper'>
        <button>{value}</button>
    </div>
  )
}

export default MainButton