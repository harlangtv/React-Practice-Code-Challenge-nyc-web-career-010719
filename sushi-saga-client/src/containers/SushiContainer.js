import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {
  console.log(props)
  const mapSushis = () =>
    props.sushis.map(sushi => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          decrementCustomerAccount={props.decrementCustomerAccount}
          money={props.money}
          incrementPlatesCount={props.incrementPlatesCount}
          changeColor={props.changeColor}
          />
      )
    })

  return (
    <Fragment>
      <div className="belt">
          // {mapSushis()[props.plates[0]]} {mapSushis()[props.plates[1]]}{" "}}
          // {mapSushis()[props.plates[2]]} {mapSushis()[props.plates[3]]}
        <MoreButton incrementPlatesCount={props.incrementPlatesCount}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
