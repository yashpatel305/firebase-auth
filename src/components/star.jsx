import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function Star({stars}) {
    const ratingstar=Array.from({ length: 5 }, (v, i) => {
        let num=i+0.5
        return(
            
            <span>
                    {
                        stars >= i+1 ? <FaStar/> : stars>= num ?<FaStarHalfAlt/> : <CiStar/>
                    }
            </span>
        )
    })
  return(
    <h2>{ratingstar}</h2> 
  )
}

export default Star