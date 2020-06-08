import React, { Component } from 'react'
class Wallet extends Component {
  constructor () {
    super()
    this.state = {
      money: 0
    }
  }

  onAddMoney = (e) => {
    console.log(this.state, e.target.value)
    this.setState({
      money: parseInt(e.target.value)
    })

  }

  onformSubmit = (e) => {
    e.preventDefault()
    this.props.addToWallet(this.state.money)
    this.setState({
      money: 0
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onformSubmit}>
          <input onChange={this.onAddMoney} type='text' value={this.state.money} />
          <input type='submit' value='add Money'/>
        </form>
      </div>
    )
  }
}

export default Wallet
