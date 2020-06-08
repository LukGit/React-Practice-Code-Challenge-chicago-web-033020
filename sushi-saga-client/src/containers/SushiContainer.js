import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
            
          props.sushis.map(sushi => {
            return <Sushi sushi={sushi} eatSushi={props.eatSushi} key={sushi.id}/>})
        
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton nextSushiSet={props.nextSushiSet}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer