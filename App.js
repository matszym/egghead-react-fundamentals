import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
  }
  update() {
    this.setState({
      val: this.state.val + 1
    });
  }
  componentWillMount() {
    console.log('component will mount');
  }
  componentDidMount() {
    console.log('component did mount');
  }
  render() {
    return (
      <InnerComponent
          update={ ()=> this.update() } 
          { ...this.state }
          { ...this.props } />
    )
  }
}

const Button = props => <button 
  onClick={props.update}>
  { props.txt } - { props.val }
</button>

const Label = props => <label 
  onMouseMove={props.update}>
  { props.txt } - { props.val }
</label>

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Label" />
      </div>
    );
  }
}

export default App;