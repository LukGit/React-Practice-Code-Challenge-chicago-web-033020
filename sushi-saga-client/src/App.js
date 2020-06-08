import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [], 
      budget: 100,
      nextSushi: 0,
      sushiEatenList: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const newSushis = sushis.map(sushi => {
        return {...sushi, eaten: false}
      })
      this.setState({
        sushis: newSushis
      })
      
    }
    )
  }

  nextSushiSet = () => {
    this.setState(prevState => ({
      nextSushi: prevState.nextSushi + 4
    }))
  }

  eatSushi = (sushiId) => {
    const ateSushi = this.state.sushis.find(aSushi => aSushi.id === sushiId)
    let newBudget = 0
    let canEate = true
    if (ateSushi.price > this.state.budget){
      newBudget = this.state.budget
      canEate = false
    } else {
      newBudget = this.state.budget - ateSushi.price
    }
  
    let myEaten = this.state.sushiEatenList
    
    let sList = this.state.sushis.map(sushi => {
      if (sushi.id === sushiId){
        if (canEate){
          myEaten = [...myEaten, ateSushi]
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      } else {
        return sushi
      }
    })
    this.setState({
      budget: newBudget,
      sushis: sList,
      sushiEatenList: myEaten
    })
  }

  nextSet = () => {return this.state.sushis.slice(this.state.nextSushi, this.state.nextSushi + 4)}

  render() {

    return (
      <div className="app">
        <SushiContainer sushis={this.nextSet()} nextSushiSet={this.nextSushiSet} eatSushi={this.eatSushi}/>
        <Table budget={this.state.budget} sushiEaten={this.state.sushiEatenList}/>
      </div>
    );
  }
}

export default App;