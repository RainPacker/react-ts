import React, { Component } from 'react'
interface Iprops {
  name?: string;
  children?: string;
}
interface Istate {
  count: number;
}
export default class Form extends Component<Iprops, Istate> {
  state = {
    count: 0,
    name:''
  };
  fn = () => {
    console.log(this.state);
    this.setState({
      count: this.state.count +1
    })
  }
  componentDidMount() { 
    console.log('componentDidMount');
  }
  componentDidUpdate() { 
    console.log('componentDidUpdate...');
  }
  render() {
    return (
      <><div>Form{ this.state.count}</div>
        <button onClick={this.fn}>计数</button>
      </>
    )
  }
}
