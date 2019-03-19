import React, { Component, Fragment } from 'react'

class Sushi extends Component {
  state = {
    eaten: false
  }

  eatenSushi = () => {
    if (this.props.money >= this.props.sushi.price) {
      this.setState({eaten: true})
      this.props.decrementCustomerAccount(this.props.sushi.price)
      this.props.incrementPlatesCount(1)
    }
    else{
      this.props.changeColor()
    }
  }

  render() {
    const { name, img_url, price } = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eatenSushi}>
          {this.state.eaten ? null: (<img src={img_url} width="100%" />)}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi
