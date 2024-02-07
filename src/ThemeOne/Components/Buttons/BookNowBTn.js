import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const BookNowBTn = ({value}) => {
  return (
    <div className='booknow--btn--wrapper'>
    <button>{value} <span><FontAwesomeIcon icon={faPaperPlane} /></span> </button>
</div>
  )
}

export default BookNowBTn