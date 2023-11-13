import React from 'react'
import './Post.css';
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
function Post() {
  return (
    <div className='post_container'>
        <div className='post_heading'>
        <h1>A Changing World Order</h1>
        <RecommendRoundedIcon  className="like" style={{ color: "#EFA310" }} />
        </div>
        <div className='post_body'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam reiciendis odit excepturi, libero nemo tempore eum fugit amet quisquam ratione ad recusandae dolorum illo nam.
        </div>
        <div className='footer'>
            <div className='left'>
               <span>musing</span>  by anujgosalia
            </div>
            <div className='right'>
                <p>August 2 - </p>
                <p>2 mins Read - </p>
                <p> 102 Views</p>
            </div>
        </div>


    </div>
  )
}

export default Post