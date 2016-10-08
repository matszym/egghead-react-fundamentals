import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      });
    } 
    catch(err) {
      this.setState({
        err: err.message
      })
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={ e => this.update(e) }
            defaultValue={this.state.input}>
            
          </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }
}

export default App;