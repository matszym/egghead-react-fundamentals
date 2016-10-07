import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      increasing: false
    };
  }
  update() {
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('app')
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    //expects bolean
    return nextProps.val % 5 === 0;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: nextProps.val > this.props.val
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
    console.log("prevState: ", prevState);
  }
  render() {
    console.log(this.state.increasing);
    return (
      <button
        onClick={ () => this.update() }>
        { this.props.val }
      </button>
    )
  }
}

App.defaultProps = {
  val: 0
};

export default App;