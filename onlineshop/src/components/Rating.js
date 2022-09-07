import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
function Rating({rate,style, onClick}) {
  return (
   <>
   {
    [...Array(5)].map((_,i)=>(
      <span key={i} style={style} onClick={()=>onClick(i)}>
        {
          rate > i ? (<AiFillStar fontSize={15} />) : (<AiOutlineStar fontSize={15} />)
        }
      </span>
    ))
   }
   </>
  )
}

export default Rating