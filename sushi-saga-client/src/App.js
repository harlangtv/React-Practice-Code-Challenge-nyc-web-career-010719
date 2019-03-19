import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    plates: [0, 1, 2, 3],
    customerAccount: 100,
    emptyPlates: [],
    color: "black"
  }


  incrementPlatesCount = () => {
    let newPlates = [...this.state.plates]
    newPlates = newPlates.map(num => num + 4)
    this.setState = {
      plates: newPlates
    }
  }

  addEmptyPlates = (plate) => {
      let newEmptyPlate = [...this.state.emptyPlates, plate]
      this.setState({ emptyPlates: newEmptyPlate })
  }

  decrementCustomerAccount = (amount) => {
    this.setState({
      customerAccount: this.state.customerAccount - amount
    })
  }

  changeColor = () => {
    this.setState({
      color: "red"
    })
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(allSushi => {
      this.setState({ sushis: allSushi })
    })
  }

  render() {
    return (
      <div className="app">

        <SushiContainer
          sushis={this.state.sushis}
          display={this.state.display}
          incrementPlatesCount={this.state.incrementPlatesCount}
          decrementCustomerAccount={this.state.decrementCustomerAccount}
          money={this.state.money}
          addEmptyPlates={this.state.addEmptyPlates}
          changeColor={this.state.changeColor} />
        <Table />
      </div>
    );
  }
}

export default App;
