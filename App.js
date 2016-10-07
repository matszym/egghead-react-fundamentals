import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: '' };
  }
  update(e) {
    this.setState({txt: e.target.value});
  }
  render() {
    let txt = this.props.txt;

    return (
      <Widget txt={this.state.txt} update={ e => this.update(e) } />
    )
  }
}

const Widget = props => {
  return (
    <div>
      <input type="text"
        onChange={ props.update } />
      <h1>{ props.txt }</h1>
    </div>    
  )
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);